"use client";

import { useEffect } from "react";

export default function MSWComponent() {
  useEffect(() => {
    // 브라우저 환경에서만 활성화
    if (typeof window !== "undefined") {
      // 개발 환경에서만 활성화
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
}
