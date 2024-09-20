import React from "react";
import Image from "next/image";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <Image src="/img/logo.webp" alt="logo" width={191} height={63} />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projectos">Proyectos</a>
        </li>
        <li>
          <a href="#info">Portfolio</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
