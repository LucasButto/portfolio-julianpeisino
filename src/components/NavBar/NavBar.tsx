"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useStatesContext } from "@/contexts/StatesContext";

import "./NavBar.scss";

const NavBar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const { setStateSideBar } = useStatesContext();

  const handleMouseEnterProjects = () => {
    clearTimeout(timeoutId as NodeJS.Timeout); // Limpiar cualquier temporizador existente
    setIsHovering(true);
  };

  const handleMouseLeaveProjects = () => {
    const id = setTimeout(() => {
      setIsHovering(false);
    }, 300); // Esperar 300 ms antes de ocultar el menú
    setTimeoutId(id);
  };

  const handleMouseEnterSubMenu = () => {
    clearTimeout(timeoutId as NodeJS.Timeout); // Limpiar el temporizador si el mouse está en el submenú
    setIsHovering(true);
  };

  return (
    <>
      <nav>
        <div className="menu">
          <Image src="/img/logo.webp" alt="logo" width={191} height={63} />
          <ul>
            <li>
              <button onClick={() => setStateSideBar(1)}>Home</button>
            </li>
            <li
              onMouseEnter={handleMouseEnterProjects}
              onMouseLeave={handleMouseLeaveProjects}
            >
              <button onClick={() => setStateSideBar(2)}>Proyectos</button>
            </li>
            <li>
              <button onClick={() => setStateSideBar(5)}>Portfolio</button>
            </li>
            <li>
              <button onClick={() => setStateSideBar(6)}>Contacto</button>
            </li>
          </ul>
        </div>
        <ul
          className={`sub-menu ${isHovering ? "show-nav" : "hide-nav"}`}
          onMouseEnter={handleMouseEnterSubMenu}
          onMouseLeave={handleMouseLeaveProjects}
        >
          <li>
            <button onClick={() => setStateSideBar(2)}>Viviendas</button>
          </li>
          <li>
            <button onClick={() => setStateSideBar(3)}>Deptos Ph</button>
          </li>
          <li>
            <button onClick={() => setStateSideBar(4)}>Comercial</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
