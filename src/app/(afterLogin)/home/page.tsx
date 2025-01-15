import Post from "../_components/Post";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabProvider from "./_components/TabProvider";

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`);

    const data = await res.json();
  } catch (error) {
    console.log(error);
  }

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
