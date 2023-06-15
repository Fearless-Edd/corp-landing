import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import BlogList from "@/components/blog/BlogList.tsx";
import BlogHeader from "@/components/blog/BlogHeader";
import PreviewSuspense from "@/components/studio/PreviewSuspense";
import PreviewBlogList from "@/components/studio/PreviewBlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    _id,
    _createdAt,
    author->,
    "slug": slug.current
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

  const posts = await client.fetch<Post[]>(query);
  // console.log(posts);
  return (
    <>
      <BlogHeader />
      <section
        id="blog"
        className="w-full xl:pt-10 xl:pb-24 pb-12 p-4 flex flex-col gap-10 xl:gap-0 align-middle items-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500"
      >
        {/* <BlogLatest /> */}
        <h1>{posts.length} results</h1>
        {/* <List /> */}
        <BlogList posts={posts} />
      </section>
    </>
  );
}
