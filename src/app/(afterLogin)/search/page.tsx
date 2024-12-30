import SearchForm from "../_components/SearchForm";

type SearchParams = Promise<{
  q: string;
}>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { q } = await searchParams;

  return (
    <main className="w-full">
      <SearchForm q={q} />
    </main>
  );
}
