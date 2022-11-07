'use client'

import { Button } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Home() {
  return (
    <div >
      <h1>haha</h1>
      <h2>haha</h2>

      <Button>aa</Button>

      <p className='tw-text-2xl tw-font-bold tw-mb-4'>发现数字藏品</p>
      <div className='tw-grid tw-grid-cols-2 tw-md:grid-cols-3 tw-lg:grid-cols-4 tw-gap-5'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div >
  )
}

// 首页nft项
function Item() {
  return <div className='tw-shadow-lg'>
    <div className=' tw-aspect-square tw-relative'>
      <Link href={'/item'}>
        <Image src="https://static.ibox.art/file/oss/test/image/nft-goods/b36619c8c9734ea9b56167e79850add5.jpg?style=st6" alt="img" fill />
      </Link>
    </div>
    <div className='tw-p-2'>
      <p className=' tw-font-bold'>NFT Name</p>
      <div className='tw-flex tw-space-x-2 tw-items-center'>
        <Image src="https://static.ibox.art/file/oss/test/image/nft-goods/cd8218d173ed4b7c8666772a82bdd454.png" alt="author img" className='rounded-xl' width={16} height={16} />
        <p className=' tw-text-sm'>Author</p>
      </div>
      <p className='tw-text-xl tw-font-semibold'>￥100</p>
    </div>
  </div>

}
