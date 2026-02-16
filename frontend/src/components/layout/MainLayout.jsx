import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: 240, padding: 40, width: "100%" }}>
        {children}
      </main>
    </div>
  );
}
