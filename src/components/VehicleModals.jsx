// src/components/VehicleModals.jsx
import React, { useState, useEffect } from "react";
import IconPersona from "../assets/Icon_persona.svg";
import IconPuntoUbicacion from "../assets/Icon_puntoubicacion.svg";
import IconVehiculo from "../assets/Icon_vehiculo.svg";
import IconConfirmar from "../assets/Icon_confirmar.svg";
import IconCancelar from "../assets/Icon_cancelar.svg";
import "../styles/VehicleModals.css";

export default function VehicleModals({
  type,          // "crear", "editar" o "eliminar"
  vehicleData,   // datos del vehículo si aplica
  onClose,       // función para cerrar modal
  onSubmit       // función para enviar datos
}) {
  const [formData, setFormData] = useState({
    car_brand: "",
    arrival_location: "",
    applicant: "",
  });

  useEffect(() => {
    if (vehicleData && type === "editar") {
      setFormData({
        car_brand: vehicleData.car_brand,
        arrival_location: vehicleData.arrival_location,
        applicant: vehicleData.applicant,
      });
    }
  }, [vehicleData, type]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {type === "crear" && <h3>Nuevo Vehículo</h3>}
        {type === "editar" && <h3>Editar Vehículo</h3>}
        {type === "eliminar" && <h3>Eliminar Vehículo</h3>}

        {type === "eliminar" ? (
          <>
            <p>¿Seguro que quieres eliminar este vehículo?</p>
            <div className="modal-buttons">
              <button
                className="btn-save"
                onClick={() => onSubmit(vehicleData)}
              >
                <img src={IconConfirmar} alt="Confirmar" style={{ marginRight: 5 }} />
                Sí, eliminar
              </button>
              <button className="btn-cancel" onClick={onClose}>
                <img src={IconCancelar} alt="Cancelar" style={{ marginRight: 5 }} />
                Cancelar
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Marca:
              <div className="input-icon">
                <img src={IconVehiculo} alt="Vehiculo" />
                <input
                  type="text"
                  name="car_brand"
                  value={formData.car_brand}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
            <label>
              Sucursal:
              <div className="input-icon">
                <img src={IconPuntoUbicacion} alt="Ubicación" />
                <input
                  type="text"
                  name="arrival_location"
                  value={formData.arrival_location}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
            <label>
              Aspirante:
              <div className="input-icon">
                <img src={IconPersona} alt="Persona" />
                <input
                  type="text"
                  name="applicant"
                  value={formData.applicant}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
            <div className="modal-buttons">
              <button type="submit" className="btn-save">
                <img src={IconConfirmar} alt="Confirmar" style={{ marginRight: 5 }} />
              </button>
              <button type="button" className="btn-cancel" onClick={onClose}>
                <img src={IconCancelar} alt="Cancelar" style={{ marginRight: 5 }} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
