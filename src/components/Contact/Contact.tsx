import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="home-section-container-contact contact-background"
      id="contacto"
    >
      <div className="left-container">
        <div className="contact-container">
          <p>INFORMACIÓN</p>
          <span>CONTACTO</span>
        </div>
      </div>
      <div className="right-container">
        <div className="contact-container">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Email" />
          <input type="number" placeholder="Teléfono" />
          <textarea placeholder="Mensaje"></textarea>
          <button>Enviar Mensaje</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
