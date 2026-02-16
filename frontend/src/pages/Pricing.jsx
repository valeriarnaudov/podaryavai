import MainLayout from "../layout/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import api from "../api/axios";

export default function Pricing() {

  const handleCheckout = async (plan) => {
    const res = await api.post("/payments/create-checkout-session", {
      plan
    });

    window.location.href = res.data.url;
  };

  return (
    <MainLayout>
      <h1 style={{ marginBottom: 30 }}>Choose Your Plan</h1>

      <div style={gridStyle}>
        <Card>
          <h2>Basic</h2>
          <p style={priceStyle}>€9 / month</p>
          <Button onClick={() => handleCheckout("basic")}>
            Get Basic
          </Button>
        </Card>

        <Card>
          <h2 style={{ color: "var(--accent)" }}>Pro</h2>
          <p style={priceStyle}>€19 / month</p>
          <Button onClick={() => handleCheckout("pro")}>
            Get Pro
          </Button>
        </Card>

        <Card>
          <h2>Ultra</h2>
          <p style={priceStyle}>€39 / month</p>
          <Button onClick={() => handleCheckout("ultra")}>
            Go Ultra
          </Button>
        </Card>
      </div>
    </MainLayout>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px"
};

const priceStyle = {
  fontSize: 24,
  margin: "20px 0"
};
