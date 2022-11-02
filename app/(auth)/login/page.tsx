'use client'
import Link from "next/link";


export default function Login() {
  return <div className="">
    {/* <div className=""> */}
    <div className="w-80 h-96 absolute inset-0 m-auto">
      {/* <div className="flex justify-center mb-5">
          <img src={'https://static.ibox.art/file/oss/test/image/nft-goods/b36619c8c9734ea9b56167e79850add5.jpg?style=st6'} alt='' className="w-20 h-20"></img>
        </div> */}
      <div className="mb-5">
        <input className="input" placeholder="请输入手机号" />
      </div>
      <div className="mb-5">
        <input className="input" placeholder="请输入密码" />
      </div>
      <div className="mb-5">
        <button className="btn w-full" onClick={() => {
          console.log('login')

        }}>登录</button>
      </div>
      <div className="flex justify-between">
        <Link href={'/register'}>注册</Link>
        {/* <Link href={'/auth/forget'}>忘记密码</Link> */}
      </div>
      {/* </div> */}
    </div>
  </div>
}
