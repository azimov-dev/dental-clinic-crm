import { NavLink } from "react-router-dom";
import "./layout.css"; // or reuse index.css

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Dental CRM</h2>
      <nav className="sidebar__nav">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/patients">Patients</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/services">Services</NavLink>
      </nav>
    </aside>
  );
}
