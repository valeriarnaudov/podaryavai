export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "12px 24px",
        borderRadius: "10px",
        background: "var(--accent)",
        color: "#000",
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "all .2s ease"
      }}
    >
      {children}
    </button>
  );
}
