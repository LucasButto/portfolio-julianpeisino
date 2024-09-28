import React from "react";
import Link from "next/link";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import "./ProjectsHeader.scss";

const ProjectsHeader = () => {
  return (
    <header className="projects-section-container-header page-viviendas">
      <div className="left-container">
        <div className="project-container">
          <p>PROYECTOS</p>
          <span>VIVIENDAS</span>
          <Link href={`/`}>
            <ArrowBackRoundedIcon />
            Volver
          </Link>
        </div>
      </div>
      <div className="right-container"></div>
    </header>
  );
};

export default ProjectsHeader;
