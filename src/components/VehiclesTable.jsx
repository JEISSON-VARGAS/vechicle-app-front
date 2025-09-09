// src/components/VehiclesTable.jsx
import React, { useState, useEffect } from "react";
import VehicleModals from "./VehicleModals";
import {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from "../services/vehicleService";
import "../styles/VehiclesTable.css";

// Importar tus iconos
import IconCrear from "../assets/Icon_crear.svg";
import IconEditar1 from "../assets/Icon_editar1.svg";
import IconEliminar1 from "../assets/Icon_eliminar1.svg";

export default function VehiclesTable() {
  const [vehicles, setVehicles] = useState([]);
  const [modalType, setModalType] = useState(null); // "crear", "editar", "eliminar"
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const data = await getVehicles();
    setVehicles(data);
  };

  // Funciones para abrir modales
  const openCreateModal = () => {
    setSelectedVehicle(null);
    setModalType("crear");
  };
  const openEditModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setModalType("editar");
  };
  const openDeleteModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setModalType("eliminar");
  };

  const closeModal = () => setModalType(null);

  // Funciones para manejar submit del modal
  const handleCreate = async (vehicleData) => {
    await createVehicle(vehicleData);
    fetchVehicles();
    closeModal();
  };

  const handleEdit = async (vehicleData) => {
    await updateVehicle(selectedVehicle.id, vehicleData);
    fetchVehicles();
    closeModal();
  };

  const handleDelete = async () => {
    await deleteVehicle(selectedVehicle.id);
    fetchVehicles();
    closeModal();
  };

  return (
    <div className="vehicles-table-container">
      <h2 className="table-title">Vehículos</h2>

      {/* Botón de agregar solo con icono */}
      <button className="btn-add" onClick={openCreateModal}>
        <img src={IconCrear} alt="Agregar Vehículo" className="icon-btn" />
      </button>

      <table className="vehicles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Sucursal</th>
            <th>Aspirante</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.car_brand}</td>
              <td>{v.arrival_location}</td>
              <td>{v.applicant}</td>
              <td>
                {/* Botones de acción solo con iconos */}
                <button className="btn-edit" onClick={() => openEditModal(v)}>
                  <img src={IconEditar1} alt="Editar" className="icon-btn" />
                </button>
                <button className="btn-delete" onClick={() => openDeleteModal(v)}>
                  <img src={IconEliminar1} alt="Eliminar" className="icon-btn" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalType && (
        <VehicleModals
          type={modalType}
          vehicleData={selectedVehicle}
          onClose={closeModal}
          onSubmit={
            modalType === "crear"
              ? handleCreate
              : modalType === "editar"
              ? handleEdit
              : handleDelete
          }
        />
      )}
    </div>
  );
}
