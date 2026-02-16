import Card from "../components/Card";
import MainLayout from "../layout/MainLayout";

export default function Dashboard() {
    return (
        <div style={{ padding: 40 }}>
            <MainLayout>
                <h1 style={{ marginBottom: 30 }}>Dashboard</h1>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "24px",
                    }}
                >
                    <Card>
                        <h3>Total Persons</h3>
                        <p style={{ fontSize: 28, marginTop: 10 }}>24</p>
                    </Card>

                    <Card>
                        <h3>Upcoming Events</h3>
                        <p style={{ fontSize: 28, marginTop: 10 }}>5</p>
                    </Card>

                    <Card>
                        <h3>Plan</h3>
                        <p style={{ fontSize: 28, marginTop: 10 }}>PRO</p>
                    </Card>
                </div>
            </MainLayout>
        </div>
    );
}
