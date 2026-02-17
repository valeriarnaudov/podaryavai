import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: isOpen ? 0 : "-260px",
        width: 260,
        height: "100vh",
        background: "var(--card)",
        borderRight: "1px solid rgba(255,255,255,0.1)",
        padding: 24,
        transition: "left 0.25s ease",
        zIndex: 1000
      }}
    >
      <strong style={{ fontSize: 20 }}>Podaryavai</strong>

      <nav style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
        <NavLink to="/dashboard" onClick={onClose}>Табло</NavLink>
        <NavLink to="/calendar" onClick={onClose}>Календар</NavLink>
        <NavLink to="/ultra" onClick={onClose}>Ultra</NavLink>
      </nav>
    </aside>
  );
}
