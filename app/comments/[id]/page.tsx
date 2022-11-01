import Link from "next/link";

export default async function Comment({ params }: { params: { id: number } }) {
  const post = await getData(params.id);
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <p className="mb-5 text-2xl font-bold">{post.name}</p>
      <p>{post.body}</p>
    </div>
  );
}

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
  return res.json();
}