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
        <Link href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </div>
    ))}
  </div>
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await res.json()
}
