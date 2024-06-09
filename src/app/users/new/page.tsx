'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUser = () => {
  const router = useRouter()
  return (
    <div className="space-x-8">
      <button
        className="btn btn-primary"
        onClick={() => {
          router.push("/users");
        }}
      >
        Go to Users Button
      </button>
      <Link href={"/users"} className="btn btn-secondary">
        Go to Users Link
      </Link>
    </div>
  );
}

export default NewUser