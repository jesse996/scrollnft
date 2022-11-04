'use client'

import { useEffect, useState } from "react"

export default function Toast({ data, timeout }: { data: string, timeout?: number }) {
  timeout = timeout || 3000
  const [show, setShow] = useState(true)
  const timer = setTimeout(() => {
    setShow(false)
  }, timeout)

  useEffect(() => {
    return clearTimeout(timer)
  }, [timer])


  return <>{show ? (<div className="toast z-50">
    <div className="alert alert-info">
      <div>
        <span>{data}</span>
      </div>
    </div>
  </div>) : null}
  </>
}