import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className=''>
      <p className='text-2xl font-bold mb-4'>发现数字藏品</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
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
  return <div className='shadow-lg'>
    <div className=' aspect-square relative'>
      <Link href={'/item'}>
        <Image src="https://static.ibox.art/file/oss/test/image/nft-goods/b36619c8c9734ea9b56167e79850add5.jpg?style=st6" alt="img" fill />
      </Link>
    </div>
    <div className='p-2'>
      <p className=' font-bold'>NFT Name</p>
      <div className='flex space-x-2 items-center'>
        <Image src="https://static.ibox.art/file/oss/test/image/nft-goods/cd8218d173ed4b7c8666772a82bdd454.png" alt="author img" className='rounded-xl' width={16} height={16} />
        <p className=' text-sm'>Author</p>
      </div>
      <p className='text-xl font-semibold'>￥100</p>
    </div>
  </div>

}
