import React from "react";
import Stack from "@/components/ui/icons/Stack";

export default function BlogHeader() {
  return (
    <section
      id="blog"
      className="w-full xl:pt-20 p-4 flex items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
    >
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className=" text-3xl font-black text-gray-800 dark:text-white md:text-5xl xl:text-6xl">
            Let&#39;s explore the power of the web
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Learn the best practices about modern web development with
            JavaScript and TypeScript with React, Next JS and Vue Frameworks
          </p>
          <Stack />
          <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
            Explore Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
}
