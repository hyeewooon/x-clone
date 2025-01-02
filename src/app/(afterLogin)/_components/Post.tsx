import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { faker } from "@faker-js/faker";

import type { Post } from "@/model/Post";
import PostImage from "./PostImage";

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

  const post: Post = {
    postId: 12344,
    content: "안녕하세요",
    user: {
      id: "ksdfjk23",
      nickname: "유저333",
      image: faker.image.avatar(),
    },
    createdAt: new Date(),
    images: [
      {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 2,
        link: faker.image.urlLoremFlickr(),
      },
    ],
  };

  return (
    <article className={styles.container}>
      <Link href={`/${post.user.id}`} className={styles.link}>
        <Image
          src={post.user.image ?? ""}
          alt="profile_image"
          width={40}
          height={40}
        />
        <div className={styles.shade}></div>
      </Link>

      <div className={styles.content}>
        <div className={styles.header}>
          <Link href={`/${post.user.id}`} className="flex overflow-hidden">
            <p className="mr-1 hover:underline cursor-pointer">
              {post.user.nickname}
            </p>
            <p className="truncate">@{post.user.id}</p>
          </Link>
          <p className="flex-none ml-2">{dayjs(post.createdAt).fromNow()}</p>
        </div>

        <p>{post.content}</p>

        <PostImage
          postId={post.postId}
          userId={post.user.id}
          images={post.images}
        />
      </div>
    </article>
  );
}
