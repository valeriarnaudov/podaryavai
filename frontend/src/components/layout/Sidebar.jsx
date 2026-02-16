import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h2 style={styles.logo}>Podaryavai</h2>

      <nav style={styles.nav}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/persons">People</Link>
        <Link to="/pricing">Plans</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 240,
    height: "100vh",
    background: "var(--bg-secondary)",
    borderRight: "1px solid var(--border)",
    padding: 24,
    position: "fixed"
  },
  logo: {
    marginBottom: 40,
    color: "var(--accent)"
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  }
};
