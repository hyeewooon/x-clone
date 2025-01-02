import Post from "@/app/(afterLogin)/_components/Post";

export default function PhotoModal() {
  const styles = {
    container:
      "flex flex-row w-full h-full fixed top-0 right-0 z-10 bg-gray-200/95",
  };

  return (
    <div className={styles.container}>
      <div>x</div>

      <div>
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
