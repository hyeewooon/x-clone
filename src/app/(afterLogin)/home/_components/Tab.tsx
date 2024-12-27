"use client";

import { MouseEvent, useContext } from "react";

import { TabContext } from "./TabProvider";

export default function Tab() {
  const styles = {
    container:
      "w-[298px] backdrop-blur-md z-1 bg-gray-900/50 border-b border-gray-600 fixed top-0 z-10",
    home: "px-4 py-3 font-bold text-xl",
    tab: "flex h-[50px]",
    button: "flex items-center justify-center basis-6/12 text-center relative",
    indicator:
      "h-1 w-5 min-w-5 bg-blue-400 rounded-full absolute bottom-0 transition duration-500 ease-in-out",
  };

  const { tab, setTab } = useContext(TabContext);

  function changeTab(e: MouseEvent<HTMLButtonElement>) {
    const elem = e.target as HTMLButtonElement;
    const value = elem.value as typeof tab;

    setTab(value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.home}>home</div>
      <div className={styles.tab}>
        <button
          type="button"
          value="recommend"
          className={styles.button}
          onClick={changeTab}
        >
          recommend
          <div className={tab === "recommend" ? styles.indicator : ""}></div>
        </button>
        <button
          type="button"
          value="follow"
          className={styles.button}
          onClick={changeTab}
        >
          follow
          <div className={tab === "follow" ? styles.indicator : ""}></div>
        </button>
      </div>
    </div>
  );
}
