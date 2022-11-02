import Link from "next/link";

export default function Me() {
  return <div>
    <Link href={'/login'}>
      <button className="btn btn-wide  absolute inset-0 m-auto">
        登录
      </button>
    </Link>
  </div>
}