import { useEffect, useState } from "react";
import { getPatients, createPatient, deletePatient } from "../api/patientsApi";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    birth_date: "",
    address: "",
  });

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await getPatients();
      // your controller likely returns { success, data }
      setPatients(data.data || data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    try {
      await createPatient(form);
      setForm({
        first_name: "",
        last_name: "",
        phone: "",
        birth_date: "",
        address: "",
      });
      load();
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this patient?")) return;
    try {
      await deletePatient(id);
      load();
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div>
      <h1>Patients</h1>

      {error && <div style={{ color: "red" }}>{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Full name</th>
              <th>Phone</th>
              <th>Birth date</th>
              <th>Address</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>
                  {p.first_name} {p.last_name}
                </td>
                <td>{p.phone}</td>
                <td>{p.birth_date}</td>
                <td>{p.address}</td>
                <td>
                  {/* you can add edit later */}
                  <button onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h2>Add new patient</h2>
      <form onSubmit={handleCreate} className="simple-form">
        <input
          placeholder="First name"
          value={form.first_name}
          onChange={(e) => setForm({ ...form, first_name: e.target.value })}
        />
        <input
          placeholder="Last name"
          value={form.last_name}
          onChange={(e) => setForm({ ...form, last_name: e.target.value })}
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          placeholder="Birth date"
          value={form.birth_date}
          onChange={(e) => setForm({ ...form, birth_date: e.target.value })}
        />
        <input
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
