"use client";

import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";

export default function RightSearchZone() {
  const pathname = usePathname();

  if (pathname === "/search") return null;

  return (
    <section>
      <SearchForm />
    </section>
  );
}
