import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1 className=' text-xl mb-5'>Home</h1>
      <Link href="/posts" className='link'>Posts</Link>
      <br />
      {/* <Link href="/comments" className='link'>Comments</Link>
      <br />
      <Link href={'/albums'} className='link'>Albums</Link>
      <br /> */}
      <Link href={'/photos'} className='link'>Photos</Link>
    </div>
  )
}
