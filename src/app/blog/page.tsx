import React from "react";
import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import BlogList from "@/components/blog/BlogList";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogLatest from "@/components/blog/BlogLatest";
import PreviewSuspense from "@/components/studio/PreviewSuspense";
import PreviewBlogList from "@/components/studio/PreviewBlogList";
import { client } from "@/lib/sanity.client";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function page() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-blue-800">
              Loading Draft Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return (
    <>
      <BlogHeader />
      <section
        id="blog"
        className="w-full xl:pt-10 xl:pb-24 pb-12 p-4 flex flex-col gap-10 xl:gap-0 align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
      >
        {/* <BlogLatest /> */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <BlogList posts={posts} />
        </div>
      </section>
    </>
  );
}
