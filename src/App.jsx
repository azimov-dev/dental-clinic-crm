import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Layout from "./components/layout/Layout";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import PatientsPage from "./pages/PatientsPage";
import ServicesPage from "./pages/ServicesPage";
import AppointmentsPage from "./pages/AppointmentsPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <DashboardPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <DashboardPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/patients"
            element={
              <ProtectedRoute roles={["admin", "reception"]}>
                <Layout>
                  <PatientsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/services"
            element={
              <ProtectedRoute roles={["admin"]}>
                <Layout>
                  <ServicesPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectedRoute roles={["admin", "reception", "doctor"]}>
                <Layout>
                  <AppointmentsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
