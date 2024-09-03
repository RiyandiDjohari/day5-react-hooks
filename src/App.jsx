import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Media from "./pages/Media";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import {ProtectedRoute} from "./components/ProtectedRoute";
import Helpers from "./pages/Helpers";

// Task:
// 1. Tambahkan Link ke masing" halaman dibawah
// 2. Buat komponen baru Login.jsx, jika belum login, maka redirect to login page
// Jika sudah login, redirect ke homepage

function App() {
  const isAuthenticated = true

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Homepage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path="/helpers"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Helpers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/media"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Media />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contacts"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Contacts />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
