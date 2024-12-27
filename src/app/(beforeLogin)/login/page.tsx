"use client";

import { useRouter } from "next/navigation";
import Main from "../_components/Main";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  // url만 변경
  useEffect(() => {
    router.replace("/i/flow/login");
  }, []);

  // 그대로 해당 화면이 노출됨.
  return <Main />;
}
