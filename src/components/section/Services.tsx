import Image from "next/image";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiVuedotjs,
  SiNodedotjs,
} from "react-icons/si";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full xl:pt-20 xl:pb-24 pb-0 p-4 flex flex-col gap-10 xl:gap-0 xl:flex-row align-middle items-center border-b-[1px] border-b-black"
    >
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-10 ">
        <div className="flex flex-col gap-5 pt-24 md:pt-24 xl:pt-0">
          <h4 className="block text-md font-bold text-gray-500 dark:text-gray-50 md:text-center text-center xl:text-left">
            What we do <span className="text-red-600">&amp; </span>Our Stack
          </h4>
          <h1 className="text-4xl md:text-6xl xl:text-6xl font-bold text-gray-700 dark:text-white md:text-center text-center xl:text-left">
            Together we can build something awesome!
          </h1>
          <p className="container-xl text-sm font-normal text-gray-400 text-center md:text-center xl:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            laboriosam, incidunt cumque nam fugiat optio vero ad repellendus
            autem possimus modi quisquam pariatur vel magnam illum impedit
            similique! Quaerat, molestiae!
          </p>
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-0 justify-between">
            <div>
              <h2 className="text-base mb-4 text-gray-500 dark:text-gray-50 font-normal text-center md:text-center xl:text-left">
                Technologies we use
              </h2>
              <div className="flex gap-4 justify-center">
                <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
                  <SiJavascript className="dark:text-gray-800" />
                </div>
                <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
                  <SiTypescript className="dark:text-gray-800" />
                </div>
                <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
                  <SiNodedotjs className="dark:text-gray-800" />
                </div>
                <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
                  <SiFigma className="dark:text-gray-800" />
                </div>
                <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
                  <SiNextdotjs className="dark:text-gray-800" />
                </div>
                <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
                  <SiReact className="dark:text-gray-800" />
                </div>
                <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
                  <SiVuedotjs className="dark:text-gray-800" />
                </div>
                <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
                  <SiGit className="dark:text-gray-800" />
                </div>
                <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
                  <SiTailwindcss className="dark:text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center relative dark:hidden">
        <Image
          src="/assets/3d_character/black_hoodie_2.png"
          width={560}
          height={300}
          alt="hero"
        />
      </div>
      <div className="w-full lg:w-1/2 justify-center items-center relative hidden dark:flex">
        <Image
          src="/assets/3d_character/white_hoodie_2.png"
          width={560}
          height={300}
          alt="hero"
        />
      </div>
    </section>
  );
}
