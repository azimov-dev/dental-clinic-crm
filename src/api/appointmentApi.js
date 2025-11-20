import client from "./client";

export function getAppointments() {
  return client.get("/api/appointments");
}

export function getAppointment(id) {
  return client.get(`/api/appointments/${id}`);
}

export function createAppointment(payload) {
  return client.post("/api/appointments", payload);
}

export function updateAppointmentStatus(id, status) {
  return client.put(`/api/appointments/${id}/status`, { status });
}
