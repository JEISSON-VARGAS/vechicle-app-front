import axios from "axios";

const API_URL = "http://localhost:8080/api"; // incluye /api

export const getVehicles = async () => {
  try {
    const response = await axios.get(`${API_URL}/vehicles`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};

export const getVehicle = async (vehicleId) => {
  try {
    const response = await axios.get(`${API_URL}/vehicles/${vehicleId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    throw error;
  }
};

export const createVehicle = async (vehicleData) => {
  try {
    const response = await axios.post(`${API_URL}/vehicles`, vehicleData);
    return response.data;
  } catch (error) {
    console.error("Error creating vehicle:", error);
    throw error;
  }
};

export const updateVehicle = async (vehicleId, vehicleData) => {
  try {
    const response = await axios.put(`${API_URL}/vehicles/${vehicleId}`, vehicleData);
    return response.data;
  } catch (error) {
    console.error("Error updating vehicle:", error);
    throw error;
  }
};

export const deleteVehicle = async (vehicleId) => {
  try {
    const response = await axios.delete(`${API_URL}/vehicles/${vehicleId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    throw error;
  }
};
