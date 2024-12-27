import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
  const styles = {
    container: "flex px-4 py-3 border-b border-gray-600",
    link: "flex-none w-10 h-10 mr-3 rounded-full border border-gray-300 overflow-hidden relative",
    shade:
      "inline-block w-10 h-10 rounded-2xl absolute top-0 left-0 cursor-pointer hover:bg-gray-900 opacity-15",
    content: "flex flex-col w-full overflow-hidden",
    header: "flex justify-between",
  };

  const user = {
    id: "askdfjskfjks",
    nickname: "dsifdsfsfdsfdj",
    date: "2024-12-27 10:27",
  };

  return (
    <article className={styles.container}>
      <Link href={`/${user.id}`} className={styles.link}>
        <Image src="/yRsRRjGO.jpg" alt="profile_image" width={40} height={40} />
        <div className={styles.shade}></div>
      </Link>

      <div className={styles.content}>
        <div className={styles.header}>
          <Link href={`/${user.id}`} className="flex overflow-hidden">
            <p className="mr-1 hover:underline cursor-pointer">
              {user.nickname}
            </p>
            <p className="truncate">@{user.id}</p>
          </Link>
          <p className="flex-none ml-2">{dayjs(user.date).fromNow()}</p>
        </div>

        <p>@id content</p>

        <div></div>
      </div>
    </article>
  );
}
