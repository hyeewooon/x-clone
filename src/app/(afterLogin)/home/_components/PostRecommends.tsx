"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";

function PostRecommends() {
  const {} = useQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });
  return (
    <div>
      <div></div>
    </div>
  );
}

export default PostRecommends;
