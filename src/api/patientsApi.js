// src/api/patientsApi.js
import client from "./client";

export function getPatients() {
  return client.get("/api/patients");
}

export function getPatient(id) {
  return client.get(`/api/patients/${id}`);
}

export function createPatient(payload) {
  return client.post("/api/patients", payload);
}

export function updatePatient(id, payload) {
  return client.put(`/api/patients/${id}`, payload);
}

export function deletePatient(id) {
  return client.del(`/api/patients/${id}`);
}
