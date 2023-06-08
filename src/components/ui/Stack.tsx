import Image from "next/image";

type StackProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export default function Stack({ src, alt, width, height }: StackProps) {
  return (
    <div className="stackIcon hover:-translate-y-1 hover:bg-opacity-40">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
