export default function Card({ children }) {
    return (
        <div
            style={{
                background: "var(--bg-secondary)",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                backdropFilter: "blur(12px)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
            }}
        >
            {children}
        </div>
    );
}
