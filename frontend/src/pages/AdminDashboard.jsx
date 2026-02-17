import MainLayout from "../layout/MainLayout";
import Card from "../components/Card";

export default function AdminDashboard() {
  return (
    <MainLayout>
      <h1 style={{ marginBottom: 30 }}>Admin Panel</h1>

      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        <Card>
          <h3>Total Users</h3>
          <p style={{ fontSize: 28, marginTop: 10 }}>124</p>
        </Card>

        <Card>
          <h3>Active Subscriptions</h3>
          <p style={{ fontSize: 28, marginTop: 10 }}>87</p>
        </Card>

        <Card>
          <h3>Ultra Clients</h3>
          <p style={{ fontSize: 28, marginTop: 10, color: "var(--accent)" }}>12</p>
        </Card>
      </div>
    </MainLayout>
  );
}
