import Link from "next/link";
import { Suspense } from "react";

export default async function Post() {
  const posts = await getData();

  return <div>
    <Suspense fallback={<p>Loading feed...</p>}>
      <div>
        <Link href={'/'} className=' text-2xl'>Home</Link>
      </div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/photos/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </Suspense>
  </div>
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  return await res.json()
}
