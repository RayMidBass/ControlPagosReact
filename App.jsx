// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Payments from './components/Payments';
import Notifications from './components/Notifications';
import Reports from './components/Reports';
import Navbar from './components/Navbar';

// Simulación de autenticación básica (puedes conectar esto con tu lógica real)
const isAuthenticated = true;

function PrivateRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
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
