"use client";

import { useRouter } from "next/navigation";

export default function TweetModal() {
  const styles = {
    overlay:
      "flex justify-center items-center w-screen h-full absolute top-0 left-0 right-0 bottom-0 z-10 bg-gray-900/50",
    container: "w-[500px] h-[500px] p-4 bg-gray-800 rounded-2xl",
    cancelButton: "cursor-pointer",
  };

  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <button className={styles.cancelButton} onClick={goBack}>
          x
        </button>
      </div>
    </div>
  );
}
