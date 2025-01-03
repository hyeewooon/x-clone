"use client";

import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <button
      className="flex items-center justify-center w-5 h-5 absolute top-4 left-4 cursor-pointer z-20"
      onClick={goBack}
    >
      x
    </button>
  );
}
