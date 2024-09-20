import React from "react";
import HomeSectionMain from "@/components/HomeSections/HomeSectionMain/HomeSectionMain";
import SideBarButtons from "@/components/SideBarButtons/SideBarButtons";
import HomeSectionRight from "@/components/HomeSections/HomeSectionRight/HomeSectionRight";

export default function Home() {
  return (
    <main>
      <SideBarButtons />
      <HomeSectionMain />
      <HomeSectionRight />
    </main>
  );
}
