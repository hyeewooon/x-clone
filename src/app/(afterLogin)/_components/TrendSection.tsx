"use client";

import { usePathname } from "next/navigation";

import Trend from "./Trend";

export default function TrendSection() {
  const styles = {
    container: "mt-3 bg-gray-900 rounded-2xl",
    title: "mb-3 px-4 text-xl font-bold",
  };

  const pathname = usePathname();

  if (pathname === "/explore") return null;

  return (
    <div className={styles.container}>
      <div className="py-3">
        <h3 className={styles.title}>Trends</h3>

        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
