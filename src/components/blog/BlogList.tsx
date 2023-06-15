import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  // console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        <div key={post._id}>
          <div className="relative">
            <Image
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />

            <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
              <Image
                className="rounded-full"
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                width={10}
                height={10}
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  {post.author.name}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Creative Director
                </p>
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            {post.title}
          </h1>

          <hr className="w-32 my-6 text-blue-500" />

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            fugit dolorum amet dolores praesentium, alias nam? Tempore
          </p>

          <a
            href="#"
            className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
          >
            Read more
          </a>
        </div>;
      })}
    </div>
  );
}
