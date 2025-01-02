import Image from "next/image";

import type { PostImage } from "@/model/Post";
import Link from "next/link";

interface Props {
  postId: number;
  userId: string;
  images: PostImage[];
}

export default function PostImage({ postId, userId, images }: Props) {
  const styles = {
    imageLink: "block w-[200px] h-[200px]",
    image: "w-[200px] h-[200px] object-cover",
  };

  return (
    <div>
      {images && images.length > 0 && (
        <Link
          href={`/${userId}/status/${postId}/photo/${images[0].imageId}`}
          className={styles.imageLink}
        >
          <Image
            className={styles.image}
            src={images[0].link}
            alt="post image"
            width={200}
            height={200}
          />
        </Link>
      )}
    </div>
  );
}
