import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import useSanityImage from "src/hooks/useSanityImage";

export function ProjectCard({ project }) {
  const imageUrl = useSanityImage();
  const { stacks, description, title, image, link } = project;
  const renderStack = project.stacks.map((stack) => (
    <span
      key={stack._id}
      className="bg-primary text-darkPrimary text-xs px-2 py-1 rounded-lg shadow-sm mr-2 mb-4"
    >
      {stack.stack}
    </span>
  ));

  return (
    <li className="w-full transition-all max-w-[400px] shadow-lg cursor-pointer rounded-xl hover:-translate-y-2 duration-500">
      <a href={link}>
        <div className="image group w-full h-52 rounded-tl-xl rounded-br-xl mb-2 overflow-hidden relative">
          <AiFillGithub className="absolute top-2 right-2 text-white text-3xl z-10 group-hover:scale-[300%] group-hover:top-[50%] group-hover:left-[50%] duration-300 group-hover:-translate-y-1/2 group-hover:-translate-x-1/2" />
          <Image
            src={imageUrl(project.image).url()}
            fill
            className="hover:scale-105 hover:blur-sm duration-300"
          />
        </div>
        <div className="p-4">
          {renderStack}
          <h3 className="font-bold text-xl mt-4 mb-2">{title}</h3>
          <p className="text-sm text-slate-900">{description}</p>
        </div>
      </a>
      <pre>{/* {JSON.stringify(project.stacks, null, 2)} */}</pre>
    </li>
  );
}
