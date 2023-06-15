import Image from "next/image";

interface Props {
  posts: Post[];
}

export default function BlogLatest({ posts }: Props) {
  return (
    <div className="">
      <h1 className="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Latest Blog Post
      </h1>

      <div className="mt-8 lg:-mx-6 lg:flex lg:items-center relative w-full lg:w-1/2 rounded-xl h-72 lg:h-96">
        <Image
          className="object-cover object-center rounded-lg"
          src={urlForImage(posts[0].mainImage).url()}
          alt={posts[0].title}
          fill
        />

        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p className="text-sm text-blue-500 uppercase">category</p>

          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            {posts[0].title}
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            {posts[0].description}
          </p>

          <a
            href="#"
            className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
          >
            Read more
          </a>

          <div className="flex items-center mt-6">
            <Image
              className="rounded-full"
              src={urlForImage(posts[0].author.image).url()}
              alt={posts[0].title}
              width={50}
              height={20}
            />

            <div className="mx-4">
              <h1 className="text-sm text-gray-700 dark:text-gray-200">
                Amelia. Anderson
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Lead Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
