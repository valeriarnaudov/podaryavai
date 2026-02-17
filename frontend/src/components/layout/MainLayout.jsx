/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import MobileNav from "../components/MobileNav";

export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={{
        width: 220,
        background: "#0b0b0b",
        borderRight: "1px solid #1e1e1e",
        padding: 24,
        display: window.innerWidth > 768 ? "block" : "none"
      }}>
        <h2 style={{ marginBottom: 30 }}>Gifting</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/persons">People</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/ultra">Ultra</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: 40 }}>
        {children}
      </main>

      <MobileNav />
    </div>
  );
}
