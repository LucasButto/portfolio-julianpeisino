import Link from "next/link";
import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import "./HomeSectionRight.scss";

const HomeSectionRight = ({
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
      <div className="left-container"></div>
      <div className="right-container">
        <div className="project-container">
          <p>PROYECTOS</p>
          <span>{projectTitle}</span>
          <Link href={`/proyectos-${projectId}`}>
            Ver Proyectos
            <ArrowForwardRoundedIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionRight;
