'use client'

import { showNotification } from "@mantine/notifications"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Toast from "./toast"

export default function Login() {
    const router = useRouter()

    return <div className="w-96 h-96 absolute inset-0 m-auto shadow p-10 border">
        {/* <div className="flex justify-center mb-5">
          <img src={'https://static.ibox.art/file/oss/test/image/nft-goods/b36619c8c9734ea9b56167e79850add5.jpg?style=st6'} alt='' className="w-20 h-20"></img>
        </div> */}
        <div className="mb-5">
            <input className="input" placeholder="请输入邮箱" />
        </div>
        <div className="mb-5">
            <input className="input" placeholder="请输入密码" />
        </div>
        <div className="mb-5">
            <button className="btn w-full" onClick={async () => {
                // console.log('login')
                let res = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: 'admin',
                        password: 'admin'
                    })
                })
                res = await res.json()
                console.log('res', res)
                // 登录成功跳转
                // router.replace('/me')
                showNotification({
                    title: 'Default notification',
                    message: 'Hey there, your code is awesome! 🤥',
                })


            }}>登录</button>
        </div>
        <div className="flex justify-between">
            <Link href={'/register'}>注册</Link>
            <Link href={'/forget'}>忘记密码</Link>
        </div>
        <Toast data={"test toast"} timeout={3000}></Toast>
    </div>
}