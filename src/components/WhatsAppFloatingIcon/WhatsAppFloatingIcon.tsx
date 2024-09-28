import React from "react";
import Link from "next/link";
import "./WhatsAppFloatingIcon.scss";
//import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";

const WhatsAppFloatingIcon = () => {
  return (
    <div className="icon-container">
      <Link
        href="https://wa.me/5493462365854"
        className="icon"
        target="_blank"
        passHref
      >
        <Image src="/img/Wpp.webp" alt="WhatsApp" width={40} height={40} />
      </Link>
    </div>
  );
};

export default WhatsAppFloatingIcon;
