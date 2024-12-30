import type { ReactNode } from "react";
import Link from "next/link";

import NavMenu from "./_components/NavMenu";
import RightSearchSection from "./_components/RightSearchSection";
import TrendSection from "./_components/TrendSection";

export default function AfterLoginLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  const styles = {
    container: "flex",
    header: "flex items-end flex-col grow w-[500px]",
    leftSection: "h-full",
    leftSectionFixed: "flex flex-col items-center h-full px-2 py-2 fixed",
    content: "flex flex-col grow items-start h-full",
    wrap: "flex justify-between h-full",
    main: "w-[300px] h-full",
    rightSection: "w-[200px] h-full ml-2",
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.leftSectionFixed}>
          <Link href="/home">~</Link>

          <section className={styles.leftSection}>
            <nav className="flex-1">
              <NavMenu />
            </nav>

            <Link
              href="/compose/tweet"
              className="block p-2 mt-4 bg-blue-400 rounded-2xl"
            >
              add post
            </Link>
          </section>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.wrap}>
          <main className={styles.main}>{children}</main>

          <section className={styles.rightSection}>
            <RightSearchSection />
            <TrendSection />
            <div>follow recommend</div>
          </section>
        </div>
      </div>

      <div>{modal}</div>
    </div>
  );
}
