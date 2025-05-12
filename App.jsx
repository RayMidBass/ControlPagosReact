// src/App.js

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Payments from './components/Payments';
import Notifications from './components/Notifications';
import Reports from './components/Reports';
import Navbar from './components/Navbar';

// Simulación de autenticación básica (esto puede ser mejorado con un contexto real o proveedor de autenticación)
const isAuthenticated = true;

// Componente para rutas privadas
function PrivateRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          {/* Ruta pública */}
          <Route path="/" element={<Home />} />

          {/* Rutas privadas (solo accesibles si el usuario está autenticado) */}
          <Route
            path="/payments"
            element={
              <PrivateRoute>
                <Payments />
              </PrivateRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <Reports />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}
