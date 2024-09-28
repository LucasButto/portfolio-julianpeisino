import React from "react";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid/ProjectsGrid";

import "./ProjectsSections.scss";
import Footer from "../Footer/Footer";

const ProjectsSections = () => {
  return (
    <>
      <section className="projects-section-container">
        <ProjectsHeader />
        <ProjectsGrid />
      </section>
      <Footer />
    </>
  );
};

export default ProjectsSections;
