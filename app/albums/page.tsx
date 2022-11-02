import Link from "next/link";
import { Suspense } from "react";

export default async function Post() {
  const posts = await getData();

  return <div>
    <div>
      <Link href={'/'} className=' text-2xl'>Home</Link>
    </div>
    {posts.map((post: any) => (
      <div key={post.id}>
        <Link href={`/albums/${post.id}`}>
          {post.title}
        </Link>
      </div>
    ))}

  </div>
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  return await res.json()
}
