import { useState } from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (i, link) => {
    setClicked(i); 
    setTimeout(() => {
      setClicked(null); 
      window.location.href = link; 
    }, 200); 
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-4xl text-center">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center cursor-pointer"
          >
            <div
              className={`w-full lg:w-1/4 cursor-pointer transition-transform duration-300  transform ${
                clicked === index ? "animate-pop" : ""
              }`}
              onClick={() => handleClick(index, project.link)}
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-4 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <div className="mb-4">
                {project.description.map((des, i) => (
                  <p key={i} className="mb-1 text-neutral-400">
                    {des}
                  </p>
                ))}
              </div>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
