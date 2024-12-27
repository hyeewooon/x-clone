"use client";

import Image from "next/image";

export default function PostForm() {
  const styles = {
    form: "flex mt-[104px] p-4 justify-between border-b border-gray-600",
    profile:
      "flex-none w-10 h-10 rounded-full overflow-hidden border border-gray-300",
    button:
      "w-[90px] h-[36px] mt-3 text-white bg-blue-400 rounded-2xl text-sm font-bold hover:bg-blue-300 disabled:opacity-50",
  };

  const user = {
    id: "sdjfksjfksjfksdjfks",
    image: "/yRsRRjGO.jpg",
  };

  return (
    <form className={styles.form}>
      <div className={styles.profile}>
        <Image src={user.image} alt="profile_image" width={40} height={40} />
      </div>
      <div className="flex flex-col items-end">
        <textarea placeholder="무슨 일이 일어나고 있나요?" />
        <button className={styles.button} type="submit">
          submit
        </button>
      </div>
    </form>
  );
}
