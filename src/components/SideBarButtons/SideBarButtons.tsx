"use client";
import { useContext } from "react";
import StatesContext from "@/contexts/StatesContext";

import "./SideBarButtons.scss";

const SideBarButtons = () => {
  const context = useContext(StatesContext);

  if (!context) {
    throw new Error("SideBarButtons must be used within a StatesProvider");
  }

  const { stateSideBar, setStateSideBar } = context;

  const buttons = [
    {
      name: "Home",
      id: 1,
    },
    {
      name: "Viviendas",
      id: 2,
    },
    {
      name: "DeptosPh",
      id: 3,
    },
    {
      name: "Comercial",
      id: 4,
    },
    {
      name: "Estudio",
      id: 5,
    },
    {
      name: "Contacto",
      id: 6,
    },
  ];

  return (
    <div className="sidebar-buttons-container">
      {buttons.map((item) => (
        <a
          key={item.id}
          onClick={() => setStateSideBar(item.id)}
          className={`${stateSideBar === item.id ? "selected" : ""}`}
          href={`#${item.name}`}
        >
          {item.id}
        </a>
      ))}
    </div>
  );
};

export default SideBarButtons;
