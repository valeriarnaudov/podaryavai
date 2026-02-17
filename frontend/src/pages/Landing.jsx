import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
    return (
        <section
            style={{ padding: "80px 20px", maxWidth: 1100, margin: "0 auto" }}
        >
            <h1 style={{ fontSize: 48, marginBottom: 20 }}>
                Никога повече не забравяй важен подарък
            </h1>

            <p style={{ fontSize: 20, opacity: 0.8, marginBottom: 40 }}>
                Podaryavai ти помага да помниш важните хора, да планираш
                подаръци навреме и да изненадваш без стрес.
            </p>

            <div style={{ display: "flex", gap: 16 }}>
                <Link to="/register">
                    <Button>Започни безплатно</Button>
                </Link>
                <Link to="/pricing">
                    <Button variant="secondary">Виж плановете</Button>
                </Link>
            </div>

            <div
                style={{
                    marginTop: 80,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: 30,
                }}
            >
                <Feature
                    title="Помни всички"
                    text="Рождени дни, годишнини и специални поводи."
                />

                <Feature
                    title="Умни напомняния"
                    text="10, 7 и 3 дни предварително — винаги навреме."
                />

                <Feature
                    title="Личен консерж (Ultra)"
                    text="Помагаме ти да избереш и подготвиш подаръка."
                />
            </div>
        </section>
    );
}

function Feature({ title, text }) {
    return (
        <div
            style={{
                padding: 24,
                borderRadius: 12,
                background: "rgba(255,255,255,0.05)",
            }}
        >
            <h3>{title}</h3>
            <p style={{ opacity: 0.8 }}>{text}</p>
        </div>
    );
}
