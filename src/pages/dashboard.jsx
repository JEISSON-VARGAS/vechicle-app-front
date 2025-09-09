import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";
import Logo from "../assets/Imagologotipo_motion.svg";
import VehiclesTable from "../components/VehiclesTable";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-main">
        <Routes>
          {/* Vista por defecto: bienvenida */}
          <Route
            index
            element={
              <div className="welcome-container">
                <img src={Logo} alt="Logo VehículosApp" className="welcome-logo" />
                <h1>Bienvenido a VehículosApp</h1>
                <p>Gestión empresarial de vehículos y flota</p>
              </div>
            }
          />
          {/* Vista de la tabla de vehículos */}
          <Route path="vehicles" element={<VehiclesTable />} />
        </Routes>
      </main>
    </div>
  );
}
