import MainLayout from "../../layout/MainLayout";
import Card from "../components/Card";
import AnimatedCard from "../components/AnimatedCard";

export default function Ultra() {
    return (
        <MainLayout>
            <h1 style={{ marginBottom: 30 }}>Your Personal Concierge</h1>

            <div style={{ display: "grid", gap: 24, maxWidth: 700 }}>
                <AnimatedCard>
                    <Card>
                        <h3>Status</h3>
                        <p style={{ color: "var(--accent)", marginTop: 10 }}>
                            🎁 Preparing gift proposal
                        </p>
                    </Card>
                </AnimatedCard>

                <AnimatedCard>
                    <Card>
                        <h3>Next steps</h3>
                        <ul style={{ marginTop: 10, lineHeight: 1.8 }}>
                            <li>✔ We reviewed preferences</li>
                            <li>⏳ Concierge call scheduled</li>
                            <li>⏳ Awaiting approval</li>
                        </ul>
                    </Card>
                </AnimatedCard>

                <AnimatedCard>
                    <Card>
                        <h3>Your concierge</h3>
                        <p style={{ marginTop: 10 }}>
                            Sofia — Personal Gifting Assistant
                        </p>
                    </Card>
                </AnimatedCard>
            </div>
        </MainLayout>
    );
}
