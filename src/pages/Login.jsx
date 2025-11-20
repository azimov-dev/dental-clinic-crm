import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./login.css";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await login(phone, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Dental CRM Login</h2>
        {error && <div className="login-error">{error}</div>}
        <label>
          Phone
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+998..."
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
