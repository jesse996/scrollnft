import { showNotification } from '@mantine/notifications'
import { IconX } from '@tabler/icons'
import Qs from 'qs'

//对Fetch的封装：让其支持params/请求主体的格式化/请求地址的公共前缀

/* const env = process.env.NODE_ENV || 'development',
    baseURL = '';
switch (env) {
    case 'development':
        baseURL = 'http://127.0.0.1:9999';
        break;
    case 'test':
        baseURL = 'http://168.1.123.1:9999';
        break;
    case 'production':
        baseURL = 'http://api.zhufengpeixun.cn';
        break;
} */

type ConfigType = {
  method?: string
  params?: string | null
  body?: any
  headers?: any
  credentials?: boolean | string
  responseType?: string
  cache?: string
}

// 公用前缀 & 默认配置
let baseURL = 'https://localhost:7144',
  inital: ConfigType = {
    method: 'GET',
    params: null,
    body: null,
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json',
    },
    credentials: true,
    responseType: 'JSON',
    cache: 'no-cache',
  }

// 校验是否为纯粹的对象
const isPlainObject = function isPlainObject(obj: any) {
  var proto, Ctor
  if (!obj || typeof obj !== 'object') return false
  proto = Object.getPrototypeOf(obj)
  if (!proto) return true
  Ctor = proto.hasOwnProperty('constructor') && proto.constructor
  return typeof Ctor === 'function' && Ctor === Object //构造函数是Object
}

// 发送数据请求
const request = function request(url: string, config?: typeof inital) {
  // 合并配置项{不要去更改inital中的内容}
  if (config == null || typeof config !== 'object') config = inital //确保config肯定是对象
  if (config.headers && isPlainObject(config.headers)) {
    // 单独的给HEADERS先进行深度合并
    config.headers = Object.assign({}, inital.headers, config.headers)
  }
  let { method, params, body, headers, credentials, responseType, cache } =
    Object.assign({}, inital, config) //合并config

  // 处理URL{格式校验 & 公共前缀 & 拼接params中的信息到URL的末尾}
  if (typeof url !== 'string') throw new TypeError(` ${url} is not an string! `)
  if (!/^http(s?):/i.test(url)) url = baseURL + url //判断是不是以http或者https开头,如果不是,就用baseurl拼起来

  if (params != null) {
    //不是null和undefined,存在params
    if (isPlainObject(params)) {
      params = Qs.stringify(params)
    }
    url += ` ${url.includes('?') ? '&' : '?'}${params} ` //拼接
  }

  // 处理请求主体的数据格式{根据headers中的Content-Type处理成为指定的格式}
  if (body != null) {
    if (isPlainObject(body)) {
      let contentType = headers['Content-Type'] || 'application/json' //默认application/json
      if (contentType.includes('urlencoded')) body = Qs.stringify(body)
      if (contentType.includes('json')) body = JSON.stringify(body)
    }
  }

  // 处理credentials{如果传递的是true,我们让其为include,否则是same-origin}
  //include,允许跨域请求当中携带资源凭证,same-origin,允许同源性请求当中携带资源凭证
  credentials = credentials ? 'include' : 'same-origin'

  // 基于fetch请求数据
  method = method!.toUpperCase()
  responseType = responseType?.toUpperCase() || 'JSON'

  //只在浏览器可以： 类似于AXIOS中的请求拦截器，例如：我们每一次发请求都需要携带TOKEN信息
  // let token = localStorage.getItem('token')
  // if (token) headers['Authorization'] = token

  config = {
    method,
    credentials,
    cache,
    headers,
  }
  if (/^(POST|PUT|PATCH)$/i.test(method)) config!.body = body

  return fetch(url, config as RequestInit)
    .then(async (response) => {
      // 走到这边不一定是成功的：
      // Fetch的特点的是，只要服务器有返回结果，不论状态码是多少，它都认为是成功
      let { status, statusText } = response

      if (status >= 200 && status < 400) {
        // 真正成功获取数据
        let result
        switch (responseType) {
          case 'TEXT':
            result = response.text()
            break
          case 'JSON':
            result = response.json()
            break
          case 'BLOB':
            result = response.blob()
            break
          case 'ARRAYBUFFER':
            result = response.arrayBuffer()
            break
        }
        return result
      }
      // 应该是失败的处理
      return Promise.reject({
        code: 'STATUS ERROR',
        status,
        statusText,
        error: await response.json(),
      })
    })
    .catch((reason) => {
      console.log('请求失败', reason)

      // @1:状态码失败
      if (reason && reason.code === 'STATUS ERROR') {
        switch (reason.status) {
          case 401:
            break
          // ...
          default:
            break
        }
        // showNotification({
        //   title: '错误',
        //   message: reason?.status + ' 🤥',
        // })
      }

      // @2:断网
      if (navigator && !navigator.onLine) {
        // ...
      }

      // @3:处理返回数据格式失败
      // ...

      // showNotification({
      //   title: '错误',
      //   color: 'red',
      //   message: reason?.error.error + ' 🤥',
      //   icon: < IconX size={18} />,

      // })

      return Promise.reject(reason)
    })
}
export default request
