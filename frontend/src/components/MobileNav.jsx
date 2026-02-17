import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      padding: 12,
      background: "#000",
      borderTop: "1px solid #222"
    }}>
      <Link to="/dashboard">Home</Link>
      <Link to="/persons">People</Link>
      <Link to="/calendar">Calendar</Link>
    </div>
  );
}
