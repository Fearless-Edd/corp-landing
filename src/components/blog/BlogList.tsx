import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ClientSideRoute from "../ClientSideRoute";
import Link from "next/link";

interface Props {
  posts: Post[];
}

export default function BlogList({ posts }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug}`}>
            <div className="group cursor-pointer">
              <div className="relative w-full h-64 lg:h-80 group-hover:scale-105 transition-all drop-shadow-xl">
                <Image
                  className="object-cover object-center rounded-lg"
                  src={urlForImage(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />

                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                  <Image
                    className="rounded-full"
                    src={urlForImage(post.author.image).url()}
                    alt={post.author.name}
                    width={50}
                    height={20}
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      {post.author.name}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post._createdAt).toLocaleDateString("en-UK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                {post.title}
              </h1>

              <hr className="w-32 my-6 text-blue-500" />

              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                {post.description}
              </p>
              <div className="flex flex-col gap-4">
                <div className="align-middle mt-4 text-blue-500 hover:text-blue-400 gap-2">
                  <div className="flex gap-1">
                    <BsBoxArrowUpRight className="text-sm" />
                    <span>Read post</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => {
                    return (
                      <div
                        key={post._id}
                        className="text-xs inline-flex items-center font-normal leading-sm lowercase py-1  text-gray-500 dark:text-gray-400"
                      >
                        #{category.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </>
  );
}
