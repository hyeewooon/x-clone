import Image from "next/image";

import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function Room() {
  const info = {
    roomId: 123,
    id: "hero",
    nickname: "영웅",
    messages: [
      { content: "안녕하세요.", createdAt: new Date() },
      { content: "안녕히가세요.", createdAt: new Date() },
    ],
  };

  return (
    <div className="flex p-3 border-b border-gray-500 hover:bg-gray-800 cursor-pointer">
      <div className="flex-none w-[30px] h-[30px] mr-4 rounded-full overflow-hidden">
        <Image
          src={faker.image.avatar()}
          alt="profile image"
          width={30}
          height={30}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex gap-x-1">
          <p>{info.nickname}</p>
          <p>@{info.id}</p>
          <p>{dayjs(info.messages.at(-1)?.createdAt).fromNow()}</p>
        </div>

        <div>{info.messages.at(-1)?.content}</div>
      </div>
    </div>
  );
}
