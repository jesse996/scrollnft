import Link from "next/link";
import { Suspense } from "react";

export default async function Post() {
  const posts = await getData();
  // console.log(posts)

  return <div>
    <Suspense fallback={<p>Loading feed...</p>}>
      <div>
        <Link href={'/'} className=' text-2xl'>Home</Link>
      </div>
      {/* {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))} */}
      {JSON.stringify(posts)}
    </Suspense>
  </div>
}

async function getData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await fetch('https://api.publicapis.org/entries')
  return res.json()
}
