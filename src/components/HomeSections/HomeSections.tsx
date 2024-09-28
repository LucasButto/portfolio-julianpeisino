"use client";
import React, { useState, useEffect } from "react";

import SideBarButtons from "@/components/SideBarButtons/SideBarButtons";
import HomeSectionMain from "@/components/HomeSections/HomeSectionMain/HomeSectionMain";
import HomeSectionRight from "@/components/HomeSections/HomeSectionRight/HomeSectionRight";
import HomeSectionLeft from "@/components/HomeSections/HomeSectionLeft/HomeSectionLeft";
import HomeSectionContact from "@/components/HomeSections/HomeSectionContact/HomeSectionContact";

import { useStatesContext } from "@/contexts/StatesContext";

import "./HomeSections.scss";

const HomeSections = () => {
  const { stateSideBar, setStateSideBar } = useStatesContext();
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    if (typeof window !== "undefined") {
      // Define el valor inicial
      setScreenHeight(window.innerHeight);

      // Escuchar cambios en el tamaño de la ventana
      const handleResize = () => setScreenHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);

      // Limpia el event listener cuando el componente se desmonta
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: screenHeight * (stateSideBar - 1),
    });
  }, [stateSideBar, setStateSideBar, screenHeight]);

  return (
    <main>
      <SideBarButtons />
      <HomeSectionMain />
      <HomeSectionRight projectId="viviendas" projectTitle="VIVIENDAS" />
      <HomeSectionLeft projectId="deptosph" projectTitle="DEPTOS PH" />
      <HomeSectionRight projectId="comercial" projectTitle="COMERCIAL" />
      <HomeSectionLeft
        study={true}
        projectId="estudio"
        projectTitle="JULIAN PEISINO"
      />
      <HomeSectionContact />
    </main>
  );
};

export default HomeSections;
