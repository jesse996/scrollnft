import Link from "next/link";

export default async function Post({ params }: {
  params: { id: number }
}) {
  const post = await getData(params.id);
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <p className="mb-5 text-2xl font-bold">{post.title}</p>
    </div>
  );
}

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  return res.json();
}