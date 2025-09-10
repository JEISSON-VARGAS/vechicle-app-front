import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import VehiclesTable from "./components/VehiclesTable";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                index
                element={
                  <div className="welcome-container">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/Imagologotipo_motion.svg"}
                      alt="Logo VehículosApp"
                      className="welcome-logo"
                    />
                    <h1>Bienvenido a VehículosApp</h1>
                    <p>Gestión empresarial de vehículos y flota</p>
                  </div>
                }
              />
              <Route path="vehicles" element={<VehiclesTable />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}
