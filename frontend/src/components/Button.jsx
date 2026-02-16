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
                transition: "all .2s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(198,167,94,0.3)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            {children}
        </button>
    );
}
