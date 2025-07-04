import type { ReactNode } from "react";
import Link from "next/link";

import NavMenu from "./_components/NavMenu";
import RightSearchSection from "./_components/RightSearchSection";
import TrendSection from "./_components/TrendSection";
import RQProvider from "./_components/RQProvider";

export default function AfterLoginLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  const styles = {
    container: "w-full flex px-[100px]",
    header: "flex-none flex flex-col px-6",
    leftSection: "flex flex-col items-start",
    content: "flex flex-col w-full h-screen",
    wrap: "flex",
    main: "w-full min-w-[500px] relative",
    rightSection: "flex-none w-[200px] px-3",
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <Link href="/home">~</Link>

          <section className={styles.leftSection}>
            <nav className="">
              <NavMenu />
            </nav>

            <Link
              href="/compose/tweet"
              className="w-full block p-2 mt-4 bg-blue-400 rounded-2xl"
            >
              add post
            </Link>
          </section>
        </div>
      </header>

      <RQProvider>
        <div className={styles.content}>
          <div className={styles.wrap}>
            <main className={styles.main}>{children}</main>

            <section className={styles.rightSection}>
              <div className="sticky top-3">
                <RightSearchSection />
                <TrendSection />
                <div>follow recommend</div>
              </div>
            </section>
          </div>
        </div>

        {modal}
      </RQProvider>
    </div>
  );
}
