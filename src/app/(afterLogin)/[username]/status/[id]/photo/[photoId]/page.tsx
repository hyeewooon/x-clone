import Home from "@/app/(afterLogin)/home/page";

type Params = Promise<{
  username: string;
  id: string;
  photoId: string;
}>;

export default async function Page({ params }: { params: Params }) {
  const { id, photoId, username } = await params;

  console.log(id, photoId, username);

  return <Home />;
}
