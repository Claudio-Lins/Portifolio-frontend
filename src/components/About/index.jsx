import Image from "next/image";
import React from "react";
import useSanityImage from "src/hooks/useSanityImage";

export function About({ about }) {
  const imageUrl = useSanityImage();
  const { text, title, url, button } = about;
  const renderParagraph = text.map((text) => (
    <p className="font-light text-sm leading-relaxed" key={text._key}>
      {text.paragraph}
    </p>
  ));

  return (
    <section id="about" className="max-w-7xl w-full gap-8 flex justify-center items-center py-20 min-h-screen">
      <div className="w-[500px] h-[500px] bg-darkPrimary relative flex overflow-hidden rounded-xl shadow-md">
        <Image src={imageUrl(about.image).url()} alt={about.name} fill />
      </div>
      <div className="flex flex-col justify-center items-start gap-6 w-1/2">
        <h2 className="text-4xl font-bold">{title}</h2>
        {renderParagraph}
        <a href={url} target="_blank" rel="noopener noreferrer">{button}</a>
      </div>
    </section>
  );
}
