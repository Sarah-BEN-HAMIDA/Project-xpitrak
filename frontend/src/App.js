import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./frontend/src/pages/LoginPage";
import DashboardPage from "./frontend/src/pages/DashboardPage";
import CreateAccountPage from "./frontend/src/pages/CreateAccountPage";
import EmployeesPage from "./frontend/src/pages/EmployeesPage";
import RapportPage from "./frontend/src/pages/RapportPage";
import SalesManagementPage from "./frontend/src/pages/SalesManagementPage";
import SettingsPage from "./frontend/src/pages/SettingsPage";
import NotFoundPage from "./frontend/src/pages/NotFoundPage";
import AdminServicesPage from "./frontend/src/pages/AdminServicesPage";
import ManagerAlertPage from "./frontend/src/pages/ManagerAlertPage";
import ManagerStockPage from "./frontend/src/pages/ManagerStockPage";
import ManagerOverviewPage from "./frontend/src/pages/ManagerOverviewPage";
import ManagerSpacePage from "./frontend/src/pages/ManagerSpacePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/rapport" element={<RapportPage />} />
        <Route path="/sales" element={<SalesManagementPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/admin" element={<AdminServicesPage />} />
        <Route path="/manager-alerts" element={<ManagerAlertPage />} />
        <Route path="/manager-stock" element={<ManagerStockPage />} />
        <Route path="/manager-overview" element={<ManagerOverviewPage />} />
        <Route path="/manager-space" element={<ManagerSpacePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
