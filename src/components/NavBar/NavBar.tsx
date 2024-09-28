"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { useStatesContext } from "@/contexts/StatesContext";

import "./NavBar.scss";

const NavBar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const { setStateSideBar } = useStatesContext();
  const router = useRouter();
  const pathname = usePathname();

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

  const navigationHandler = (index: number) => {
    if (pathname !== "/") router.push("/");
    setStateSideBar(index);
  };

  return (
    <>
      <nav>
        <div className="menu">
          <Image src="/img/logo.webp" alt="logo" width={191} height={63} />
          <ul>
            <li>
              <button onClick={() => navigationHandler(1)}>Home</button>
            </li>
            <li
              onMouseEnter={handleMouseEnterProjects}
              onMouseLeave={handleMouseLeaveProjects}
            >
              <button onClick={() => navigationHandler(2)}>Proyectos</button>
            </li>
            <li>
              <button onClick={() => navigationHandler(5)}>Portfolio</button>
            </li>
            <li>
              <button onClick={() => navigationHandler(6)}>Contacto</button>
            </li>
          </ul>
        </div>
        <ul
          className={`sub-menu ${isHovering ? "show-nav" : "hide-nav"}`}
          onMouseEnter={handleMouseEnterSubMenu}
          onMouseLeave={handleMouseLeaveProjects}
        >
          <li>
            <button onClick={() => navigationHandler(2)}>Viviendas</button>
          </li>
          <li>
            <button onClick={() => navigationHandler(3)}>Deptos Ph</button>
          </li>
          <li>
            <button onClick={() => navigationHandler(4)}>Comercial</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
