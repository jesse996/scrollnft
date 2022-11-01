import Link from "next/link";
import Image from "next/image";

export default async function PostPage({ params, searchParams }: { params: any, searchParams: any }) {
  const post = await getData(params.id);
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <p className="mb-5 text-2xl font-bold">{post.title}</p>
      <img src={post.url} alt='photo' width={200} height={200} />
    </div>
  );
}

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  return res.json();
}