// 'use client'

import Link from "next/link";

export default function Me() {

  return <div>
    <Link href={'/login'}>
      <button className="tw-btn tw-btn-wide  tw-absolute tw-inset-0 tw-m-auto">
        登录
      </button>
    </Link>
  </div>
}

