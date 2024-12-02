import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage";
import SuppliersPage from "./pages/SuppliersPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/suppliers" element={<SuppliersPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
);

export default App;
