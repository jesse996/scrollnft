'use client'

import { Button } from "@mantine/core";
import Link from "next/link";

export default function Me() {
  // let res = await getData()
  // console.log('res', res)

  return <div>
    {/* <Link href={'/login'}> */}
    <button className="btn btn-wide  absolute inset-0 m-auto">
      登录
    </button>

    <Button>登录123</Button>
    {/* </Link> */}
    {/* {JSON.stringify(res)} */}
  </div>
}

// async function getData() {
//   let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   return await res.json()
// }