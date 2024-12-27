import Link from "next/link";

export default function Trend() {
  const styles = {
    container: "block h-[82px] py-3 px-4 hover:bg-gray-800",
    title: "mt-[2px] mb-1 text-sm font-bold",
    subTitle: "text-gray-500 text-xs font-light",
  };

  const data = {
    title: "내용",
    count: 100000,
  };

  return (
    <Link className={styles.container} href="/search?q=트렌드">
      <div className={styles.subTitle}>실시간트렌드</div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.subTitle}>{data.count} posts</div>
    </Link>
  );
}
