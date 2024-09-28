import Link from "next/link";
import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import "./HomeSectionLeft.scss";

const HomeSectionLeft = ({
  projectId,
  projectTitle,
  study,
}: {
  projectId: string;
  projectTitle: string;
  study?: boolean;
}) => {
  return (
    <section
      className={`home-section-container ${
        study ? "info-background" : `projects-${projectId}`
      }`}
      id={projectId}
    >
      <div className="left-container">
        <div className="project-container">
          <p>{study ? "ESTUDIO" : "PROYECTOS"}</p>
          <span>{projectTitle}</span>
          {!study ? (
            <Link href={`/proyectos-${projectId}`}>
              Ver Proyectos
              <ArrowForwardRoundedIcon />
            </Link>
          ) : (
            <>
              <Link href={`/estudio`}>
                Sobre Mi Estudio
                <ArrowForwardRoundedIcon />
              </Link>
              <Link href={`/clientes`}>
                Ver Clientes
                <ArrowForwardRoundedIcon />
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="right-container"></div>
    </section>
  );
};

export default HomeSectionLeft;
