import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Imagologotipo_motion.svg";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirige al home o login
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={Logo} alt="Logo VehículosApp" />
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard/vehicles"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>Tabla Vehículos</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
