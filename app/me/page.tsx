import Link from "next/link";

export default function Me() {
  return <div>
    <button className="btn btn-wide  absolute inset-0 m-auto">
      <Link href={'login'}>登录</Link>
    </button>
  </div>
}