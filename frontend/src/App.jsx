import { Routes, Route } from "react-router-dom";

// Public
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";

// Layout
import AppLayout from "./layout/AppLayout";

// Protected pages
import Dashboard from "./pages/Dashboard";
import CalendarView from "./pages/CalendarView";
import Ultra from "./pages/Ultra";

export default function App() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pricing" element={<Pricing />} />

      {/* PROTECTED */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/ultra" element={<Ultra />} />
      </Route>
    </Routes>
  );
}
