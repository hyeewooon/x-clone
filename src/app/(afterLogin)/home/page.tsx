import Post from "../_components/Post";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabProvider from "./_components/TabProvider";

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`);

  console.log("user", await data.json());

  return (
    <main className="border border-gray-600">
      <TabProvider>
        <Tab />
        <PostForm />
        <div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </TabProvider>
    </main>
  );
}
