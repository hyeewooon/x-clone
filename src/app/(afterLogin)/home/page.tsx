import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Post from "../_components/Post";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabProvider from "./_components/TabProvider";

export const dynamic = "force-dynamic";

function getPostsRecommends() {}

export default async function Home() {
  // hydrate: 서버 컴포넌트에서 패치한 데이터를 클라이언트의 react-query 캐시에 주입
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostsRecommends,
  });

  const dehydrated = dehydrate(queryClient);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`);

    const data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="border border-gray-600">
      <HydrationBoundary>
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
      </HydrationBoundary>
    </div>
  );
}
