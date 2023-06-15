"use client";

import { usePreview } from "../../lib/sanity.preview";
import BlogList from "@/components/blog/BlogList";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  // console.log(posts.length);
  return (
    <section
      id="blog"
      className="w-full xl:pt-10 xl:pb-24 pb-12 p-4 flex flex-col gap-10 xl:gap-0 align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
    >
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
        <BlogList posts={posts} />
      </div>
    </section>
  );
}
