import Image from "next/image";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import useSanityImage from "src/hooks/useSanityImage";

export function Header({ header }) {
  const imageUrl = useSanityImage();
  console.log(JSON.stringify(imageUrl(header.image).url()));

  return (
    <header id="header" className="bg-background w-full flex justify-center items-center gap-20 flex-col min-h-screen">
      <div className="max-w-7xl w-full flex justify-center items-center">
        <div className="w-[500px] relative h-[500px]">
          <div className="absolute border-l-8 border-t-8 -left-2 -top-2 z-10 w-[250px] h-[250px] border-primary" />
          <Image src={imageUrl(header.image).url()} alt={header.name} fill />
        </div>
        <div className="w-full max-w-2xl flex flex-1 flex-col -ml-10 z-[1]">
          <span className="mb-4 text-white">
            Olá 👋🏼 meu nome é {header.name}. Sou um...
          </span>
          <h1 className="w-full max-w-md">{header.ocupation}</h1>
          <p className="text-white max-w-md mt-4 self-end">
            {header.description}
          </p>
        </div>
      </div>
      <div className="w-full justify-center flex">
        <a href="/#about">
        <BsFillArrowDownCircleFill className="text-primary text-5xl animate-bounce cursor-pointer" />
        </a>
      </div>
    </header>
  );
}
