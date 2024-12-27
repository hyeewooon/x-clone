"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <ul>
      <li>
        <Link href="/home">
          <div
            className={segment === "home" ? "text-gray-400" : "text-gray-100"}
          >
            home
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <div
            className={
              segment === "explore" ? "text-gray-400" : "text-gray-100"
            }
          >
            explore
          </div>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <div
            className={
              segment === "messages" ? "text-gray-400" : "text-gray-100"
            }
          >
            messages
          </div>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <div
            className={
              segment === "profile" ? "text-gray-400" : "text-gray-100"
            }
          >
            profile
          </div>
        </Link>
      </li>
    </ul>
  );
}
