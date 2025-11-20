import client from "./client";

export function getServices() {
  return client.get("/api/services");
}

export function createService(payload) {
  return client.post("/api/services", payload);
}

export function updateService(id, payload) {
  return client.put(`/api/services/${id}`, payload);
}

export function deleteService(id) {
  return client.del(`/api/services/${id}`);
}
