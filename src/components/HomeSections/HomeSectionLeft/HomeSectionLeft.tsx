import Link from "next/link";
import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import "./HomeSectionLeft.scss";

const HomeSectionLeft = () => {
  return (
    <section className="home-section-container projects-deptosph">
      <div className="left-container">
        <div className="project-container">
          <p>PROYECTOS</p>
          <span>DEPTOS PH</span>
          <Link href="/deptosph">
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
