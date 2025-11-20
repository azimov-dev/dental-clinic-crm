// src/api/authApi.js
import client from "./client";

export async function login({ phone, password }) {
  // returns { token, user: { id, phone, role, full_name, ... } }
  const res = await client.post(
    "/api/auth/login",
    { phone, password },
    { auth: false },
  );
  return res;
}

export async function getMe() {
  const res = await client.get("/api/auth/getme");
  return res.data; // because controller wraps in { success, data }
}
