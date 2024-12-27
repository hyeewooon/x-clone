import Link from "next/link";

export default function Main() {
  const styles = {
    container: "flex flex-row w-full h-full",
    left: "flex flex-1 justify-center items-center",
    right: "flex flex-1 flex-col justify-center items-center",
    btn: "flex items-center justify-center w-[300px] h-[40px] rounded-2xl py-0 px-4 text-sm",
    signup: "bg-sky-300 text-white border-none hover:bg-sky-400",
    login: "border border-gray-50 text-sky-300 hover:bg-gray-800",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>hi</p>
      </div>
      <div className={styles.right}>
        <Link
          href="/i/flow/signup"
          className={`${styles.btn} ${styles.signup}`}
        >
          signup
        </Link>
        <Link href="login" className={`${styles.btn} ${styles.login}`}>
          signin
        </Link>
      </div>
    </div>
  );
}
