import React from "react";
import BlogList from "@/components/blog/BlogList";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogLatest from "@/components/blog/BlogLatest";

export default function page() {
  return (
    <>
      <BlogHeader />
      <section
        id="blog"
        className="w-full xl:pt-10 xl:pb-24 pb-12 p-4 flex flex-col gap-10 xl:gap-0 align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
      >
        <BlogLatest />
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <BlogList />
        </div>
      </section>
    </>
  );
}
