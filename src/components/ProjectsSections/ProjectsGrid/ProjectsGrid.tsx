import React from "react";
import Image from "next/image";

import "./ProjectsGrid.scss";

const ProjectsGrid = () => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="image-grid">
      {projects.map((project) => (
        <div key={project} className={`div${project}`}>
          <Image
            src="/img/background/projects-viviendass.webp"
            alt="project-1"
            fill
            sizes="(max-width: 1000px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
