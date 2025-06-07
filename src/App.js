import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ClientsPage from "./pages/ClientsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
      </Routes>
    </Router>
  );
}

export default App; 