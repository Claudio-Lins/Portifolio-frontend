import React from "react";
import { ProjectCard } from "./ProjectCard";

export function Projects({projects}) {
  const { title, projects: portifolio, button, buttonLink } = projects
  console.log(JSON.stringify(projects.stack, null, 2));
  return (
    <section id="projects" className="max-w-7xl w-full gap-8 flex flex-col py-20 px-6 min-h-screen">
      <h2 className="relative self-start mb-3">{title}</h2>
      <ul className="flex flex-wrap justify-center gap-4 md:gap-10 w-full">
        {portifolio.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
        />
        ))}

        
      </ul>
    </section>
  );
}
