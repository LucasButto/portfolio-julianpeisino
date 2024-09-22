"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./NavBar.scss";

const NavBar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

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
              <a href="#home">Home</a>
            </li>
            <li
              onMouseEnter={handleMouseEnterProjects}
              onMouseLeave={handleMouseLeaveProjects}
            >
              <a href="#projectos">Proyectos</a>
            </li>
            <li>
              <a href="#info">Portfolio</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <ul
          className={`sub-menu ${isHovering ? "show-nav" : "hide-nav"}`}
          onMouseEnter={handleMouseEnterSubMenu}
          onMouseLeave={handleMouseLeaveProjects}
        >
          <li>
            <a href="#proyecto1">Viviendas</a>
          </li>
          <li>
            <a href="#proyecto2">Deptos Ph</a>
          </li>
          <li>
            <a href="#proyecto3">Comercial</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
