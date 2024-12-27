"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  function goHome() {
    router.back();
  }

  return (
    <div className="flex items-center justify-center w-full h-full absolute top-0 left-0">
      <div className="w-[300px] h-[300px] bg-white rounded-md text-black relative">
        <button className="absolute right-3 top-0" onClick={goHome}>
          x
        </button>

        <div>
          <Link href="/home">login</Link>
        </div>
      </div>
    </div>
  );
}
