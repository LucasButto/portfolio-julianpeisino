import Link from "next/link";
import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import "./HomeSectionLeft.scss";

const HomeSectionLeft = ({
  projectId,
  projectTitle,
}: {
  projectId: string;
  projectTitle: string;
}) => {
  return (
    <section
      className={`home-section-container projects-${projectId}`}
      id={projectId}
    >
      <div className="left-container">
        <div className="project-container">
          <p>{projectTitle}</p>
          <span>DEPTOS PH</span>
          <Link href={`/proyectos-${projectId}`}>
            Ver Proyectos
            <ArrowForwardRoundedIcon />
          </Link>
        </div>
      </div>
      <div className="right-container"></div>
    </section>
  );
};

export default HomeSectionLeft;
