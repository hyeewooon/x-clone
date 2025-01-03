import Image from "next/image";
import { faker } from "@faker-js/faker";

import Post from "@/app/(afterLogin)/_components/Post";
import CloseButton from "./_components/CloseButton";

export default function PhotoModal() {
  const styles = {
    container:
      "flex flex-row w-full h-full absolute top-0 right-0 z-10 bg-gray-900/95",
    imageWrap: "w-full relative",
    postWrap: "flex-none w-[300px] overflow-y-auto",
  };

  const photo = {
    imageId: 1,
    link: faker.image.urlPicsumPhotos(),
    Post: {
      content: faker.lorem.text(),
    },
  };

  return (
    <div className={styles.container}>
      <CloseButton />

      <div className={styles.imageWrap}>
        <Image className="object-contain" src={photo.link} alt="image" fill />
      </div>

      <div className={styles.postWrap}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
