import React from "react";
import HomeSectionMain from "@/components/HomeSections/HomeSectionMain/HomeSectionMain";
import SideBarButtons from "@/components/SideBarButtons/SideBarButtons";
import HomeSectionRight from "@/components/HomeSections/HomeSectionRight/HomeSectionRight";
import HomeSectionLeft from "@/components/HomeSections/HomeSectionLeft/HomeSectionLeft";
import StudyInfo from "@/components/StudyInfo/StudyInfo";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <SideBarButtons />
      <HomeSectionMain />
      <HomeSectionRight projectId="viviendas" projectTitle="VIVIENDAS" />
      <HomeSectionLeft projectId="deptosph" projectTitle="DEPTOS PH" />
      <HomeSectionRight projectId="comercial" projectTitle="COMERCIAL" />
      <StudyInfo />
      <Contact />
    </main>
  );
}
