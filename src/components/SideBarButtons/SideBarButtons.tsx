"use client";
import { useEffect, useCallback, useRef, useState } from "react";
import { useStatesContext } from "@/contexts/StatesContext";
import "./SideBarButtons.scss";

const SideBarButtons = () => {
  const { stateSideBar, setStateSideBar } = useStatesContext();
  const lastChangeTimeRef = useRef<number>(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const buttons = [
    { name: "home", id: 1 },
    { name: "viviendas", id: 2 },
    { name: "deptosph", id: 3 },
    { name: "comercial", id: 4 },
    { name: "estudio", id: 5 },
    { name: "contacto", id: 6 },
  ];

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      const delta = event.deltaY;
      const currentTime = Date.now();

      // Limita los cambios a un máximo de uno por segundo
      if (currentTime - lastChangeTimeRef.current < 1000) {
        return;
      }

      lastChangeTimeRef.current = currentTime;

      // Calcula el nuevo índice basado en el scroll
      let newIndex;
      if (delta < 0) {
        newIndex = stateSideBar - 1 < 1 ? buttons.length : stateSideBar - 1;
      } else {
        newIndex = stateSideBar + 1 > buttons.length ? 1 : stateSideBar + 1;
      }
      setStateSideBar(newIndex);
    },
    [stateSideBar, setStateSideBar, buttons.length]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight);

      const handleResize = () => setScreenHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      className="sidebar-buttons-container"
      style={{
        transform: `translate(0,${screenHeight * (stateSideBar - 1)}px)`,
      }}
    >
      {buttons.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setStateSideBar(item.id);
          }}
          className={`${stateSideBar === item.id ? "selected" : ""}`}
        >
          {item.id}
        </button>
      ))}
    </div>
  );
};

export default SideBarButtons;
