import Button from "../components/Button";
import Card from "../components/Card";

export default function Login() {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Card>
        <h2 style={{ marginBottom: 20 }}>Welcome Back</h2>
        <input placeholder="Email" style={inputStyle} />
        <input placeholder="Password" type="password" style={inputStyle} />
        <Button>Login</Button>
      </Card>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "16px",
  borderRadius: "8px",
  border: "1px solid var(--border)",
  background: "#0F1115",
  color: "#fff"
};
