import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full pt-20 pb-24 p-4 flex flex-col gap-10 xl:gap-0 lg:flex-row align-middle items-center border-b-[1px] border-b-black"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h4 className="block text-md font-bold text-gray-500 dark:text-gray-50 md:text-center text-center lg:text-left">
            Welcome to my space, where
          </h4>
          <h1 className="lg:text-8xl md:text-6xl text-5xl font-bold text-gray-700 dark:text-white md:text-center text-center lg:text-left">
            I&#39;m a <span className="uppercase text-red-600">legend</span>
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center relative dark:hidden">
        <Image
          src="/assets/3d_character/black_hoodie.png"
          width={560}
          height={300}
          alt="hero"
        />
      </div>
      <div className="w-full lg:w-1/2 justify-center items-center relative hidden dark:flex">
        <Image
          src="/assets/3d_character/white_hoodie.png"
          width={560}
          height={300}
          alt="hero"
        />
      </div>
    </section>
  );
}
