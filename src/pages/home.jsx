import React from "react";
import "../styles/home.css";
import logo from "../assets/Imagologotipo_motion.svg";   // Logo
import ilustracion from "../assets/Telefono-01.png";

export default function Home() {
  return (
    <div className="home-container">
      {/* Header con logo */}
      <header className="home-header">
        <img src={logo} alt="Logo" className="home-logo" />
        <a href="/login" className="btn-login-home">Iniciar Sesión</a>
      </header>

      {/* Contenido principal */}
      <main className="home-main">
        <div className="home-text">
          <h1>
            <span className="big">BIENVENIDO A</span>
            <span className="highlight">MONITORING INNOVATION</span>
          </h1>
        </div>
        <div className="home-image">
          <img src={ilustracion} alt="Teléfono" />
        </div>
      </main>

      {/* Footer con botones */}
      <footer className="home-footer">
        <a href="https://monitoringinnovation.com/" className="btn-blue1">MONITORINGINNOVATION</a>
        <a href="https://gpscontrol.co/" className="btn-blue2">GPS CONTROL</a>
        <a href="https://github.com/JEISSON-VARGAS/FULL-STACK-FRONT" className="btn-pink1">Repositorio front</a>
        <a href="https://github.com/JEISSON-VARGAS/FULL-STACK-BACK" className="btn-pink2">Repositorio back</a>
      </footer>
    </div>
  );
}
