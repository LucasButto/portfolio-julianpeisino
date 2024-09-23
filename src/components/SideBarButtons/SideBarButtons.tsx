"use client";
import { useContext, useEffect } from "react";
import StatesContext from "@/contexts/StatesContext";
import "./SideBarButtons.scss";

const SideBarButtons = () => {
  const context = useContext(StatesContext);

  if (!context) {
    throw new Error("SideBarButtons must be used within a StatesProvider");
  }

  const { stateSideBar, setStateSideBar } = context;

  const buttons = [
    { name: "home", id: 1 },
    { name: "viviendas", id: 2 },
    { name: "deptosph", id: 3 },
    { name: "comercial", id: 4 },
    { name: "estudio", id: 5 },
    { name: "contacto", id: 6 },
  ];

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    const delta = event.deltaY;

    // Calcula el nuevo índice basado en el scroll
    let newIndex;
    if (delta < 0) {
      // Si se desplaza hacia arriba
      newIndex = stateSideBar - 1 < 1 ? buttons.length : stateSideBar - 1;
    } else {
      // Si se desplaza hacia abajo
      newIndex = stateSideBar + 1 > buttons.length ? 1 : stateSideBar + 1;
    }

    // si el indice es el primero o el último, scroll al final o al principio
    if (newIndex === 1) {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else if (newIndex === buttons.length) {
      document
        .getElementById("contacto")
        ?.scrollIntoView({ behavior: "smooth" });
    }

    setStateSideBar(newIndex);
  };

  // Agrega el listener de scroll cuando el componente se monta
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [stateSideBar]);

  // Función para manejar el scroll smooth sin que scroll-snap interfiera
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const mainElement = document.querySelector("main");
    const targetElement = document.getElementById(targetId);
    if (mainElement && targetElement) {
      // Deshabilita scroll-snap temporalmente
      mainElement.style.scrollSnapType = "none";

      // Scroll suave al destino
      targetElement.scrollIntoView({ behavior: "smooth" });

      // Vuelve a habilitar scroll-snap después de un breve tiempo
      setTimeout(() => {
        mainElement.style.scrollSnapType = "y mandatory";
      }, 1500); // Ajusta el tiempo si es necesario
    }
  };

  return (
    <div className="sidebar-buttons-container">
      {buttons.map((item) => (
        <a
          key={item.id}
          onClick={(e) => {
            setStateSideBar(item.id);
            handleSmoothScroll(e, item.name);
          }}
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
