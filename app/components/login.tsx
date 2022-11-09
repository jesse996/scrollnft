'use client'

import { showNotification } from "@mantine/notifications"
import Link from "next/link"
import { useRouter } from "next/navigation"
import request from "utils/request"

async function loginApi(username: string, password: string) {
    const res = await request('/api/SysUser/Login', { method: 'post', body: { username, password } })
    console.log('login res', res)

}


export default function Login() {
    const router = useRouter()

    return <div className="tw-w-96 tw-h-96 tw-absolute tw-inset-0 tw-m-auto tw-shadow tw-p-10 tw-border">
        {/* <div className="flex justify-center mb-5">
          <img src={'https://static.ibox.art/file/oss/test/image/nft-goods/b36619c8c9734ea9b56167e79850add5.jpg?style=st6'} alt='' className="w-20 h-20"></img>
        </div> */}
        <div className="tw-mb-5">
            <input className="tw-input" placeholder="请输入邮箱" />
        </div>
        <div className="tw-mb-5">
            <input className="tw-input" placeholder="请输入密码" />
        </div>
        <div className="tw-mb-5">
            <button className="tw-btn tw-w-full" onClick={async () => {
                await loginApi('string', 'strin')
                // console.log('login')
                // let res = await fetch('/api/login', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         username: 'admin',
                //         password: 'admin'
                //     })
                // })
                // res = await res.json()
                // console.log('res', res)
                // // 登录成功跳转
                // // router.replace('/me')
                // showNotification({
                //     title: 'Default notification',
                //     message: 'Hey there, your code is awesome! 🤥',
                // })


            }}>登录</button>
        </div>
        <div className="tw-flex tw-justify-between">
            <Link href={'/register'}>注册</Link>
            <Link href={'/forget'}>忘记密码</Link>
        </div>
    </div>
}