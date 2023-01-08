import ProjectIntro from "../Text/ProjectIntro";
import ProjectText from "../Text/ProjectText";

export default function Project() {
  const projectList = [
    {
      id: 1,
      name: "Redactr",
      info: "A web app that takes in texts and redacts them to words you specify",
      languageUsed: ["HTML5", "CSS3", "Javascript"],
      linkToGithub: "https://github.com/Mykell404/Circle-237-Redactr",
    },
    {
      id: 2,
      name: "Checkr",
      info: "A decentralized way to store medical infomation on the blockchain",
      languageUsed: ["NextJS", "Tailwind CSS", "Solidity", "Alchemy"],
      linkToGithub: "https://github.com/Mykell404/Checkr",
    },
    {
      id: 3,
      name: "Simple Shell",
      info: "A sh-compatible command language interpreter that execute commands read from the standard input or from a file",
      languageUsed: ["C"],
      linkToGithub: "https://github.com/Mykell404/simple_shell",
    },
    {
      id: 4,
      name: "Personal Portfolio",
      info: "This repo contains the code for my portfolio website",
      languageUsed: ["NextJS", "Tailwind CSS"],
      linkToGithub: "https://github.com/Mykell404/Mileba",
    },
  ];

  return (
    <div className="m-4 md:w-full">
      <ProjectIntro />
      <div className="mt-8 md:flex justify-between flex-wrap ">
        {projectList.map((project) => (
          <ProjectText
            key={project.id}
            name={project.name}
            info={project.info}
            languageUsed={project.languageUsed}
            link={project.linkToGithub}
          />
        ))}
      </div>
    </div>
  );
}
