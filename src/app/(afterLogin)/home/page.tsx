import Post from "../_components/Post";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabProvider from "./_components/TabProvider";

export default function Home() {
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
