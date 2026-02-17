import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import Ultra from "./pages/Ultra";
import AdminDashboard from "./pages/AdminDashboard";
import CalendarView from "./pages/CalendarView";



export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ultra" element={<Ultra />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/calendar" element={<CalendarView />} />
      </Routes>
    </AuthProvider>
  );
}
