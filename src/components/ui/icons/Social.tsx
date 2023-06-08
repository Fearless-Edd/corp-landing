import Image from "next/image";

type SocialProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  url: string;
};

export default function Social({ src, alt, width, height, url }: SocialProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="stackIcon hover:-translate-y-1 hover:bg-opacity-40"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="rounded-full"
      />
    </a>
  );
}
