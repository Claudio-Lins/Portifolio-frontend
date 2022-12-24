export function Skills({ skills }) {
  const { title, subtitle, skills_title, skills_list, experience_list } =
    skills;
  return (
    <div id="skills" className="bg-background w-full min-h-screen flex justify-center items-center py-20 -z-20">
      <section className="w-full max-w-7xl">
        <div className="skills w-full flex gap-x-20">
          <div className="habilidades w-full max-w-md">
            <div className="header w-full flex flex-col relative">
              <h2 className="text-4xl font-bold max-w-xs text-white">
                {title}
              </h2>
              <p className="text-white mt-4 text-sm max-w-sm mb-8 tracking-wide">
                {subtitle}
              </p>
              <div className="absolute w-[10%] h-[15%] bg-primary -top-2 -left-2 opacity-50 -z-10" />
            </div>
            <h3 className="text-white text-3xl font-normal">{skills_title}</h3>
            <ul className="flex flex-col gap-y-3 mt-4">
              {skills_list.map((skill) => (
                <li
                  key={skill._key}
                  className="p-6 text-right bg-primary text-darkPrimary"
                >
                  {skill.skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="experineces flex-1 text-white">
            <h2 className="text-white text-3xl font-normal">Experiências</h2>
            <hr className="mt-4 pb-4" />
            <ul>
              {experience_list.map((experience) => (
                <>
                <li className="flex gap-x-10 py-4" key={experience._key}>
                <div className="">{experience.period}</div>
                <div className="">
                  <h4 className="text-xl font-semibold">{experience.role}</h4>
                  <p className="text-white mt-2 text-sm">{experience.company}</p>
                </div>
              </li>
              <hr className="mt-4 pb-4" />
              </>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
