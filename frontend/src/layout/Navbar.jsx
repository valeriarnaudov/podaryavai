import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar({ onMenu }) {
    const { mode, setMode } = useContext(ThemeContext);

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 32px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            <strong>Podaryavai</strong>

            <nav style={{ display: "flex", gap: 20 }}>
                <a href="/pricing">Планове</a>
                <a href="/login">Вход</a>
                <a href="/register">Регистрация</a>

                <button
                    onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                >
                    {mode === "dark" ? "🌞" : "🌙"}
                </button>
                <button onClick={onMenu}>☰</button>
            </nav>
        </header>
    );
}
