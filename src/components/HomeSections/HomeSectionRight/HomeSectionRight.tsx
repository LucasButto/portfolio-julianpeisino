import Link from "next/link";
import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import "./HomeSectionRight.scss";

const HomeSectionRight = () => {
  return (
    <section className="home-section-container projects-viviendas">
      <div className="left-container"></div>
      <div className="right-container">
        <div className="project-container">
          <p>PROYECTOS</p>
          <span>VIVIENDAS</span>
          <Link href="/viviendas">
            Ver Proyectos
            <ArrowForwardRoundedIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionRight;
