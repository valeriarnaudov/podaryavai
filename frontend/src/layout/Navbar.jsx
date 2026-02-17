export default function Navbar({ onMenu }) {
  return (
    <header
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <button
        onClick={onMenu}
        style={{
          fontSize: 22,
          background: "none",
          border: "none",
          cursor: "pointer"
        }}
      >
        ☰
      </button>

      <span style={{ marginLeft: 16, fontWeight: 600 }}>
        Podaryavai
      </span>
    </header>
  );
}
