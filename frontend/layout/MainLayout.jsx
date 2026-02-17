import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <header style={{ padding: "20px", background: "#111", color: "#fff" }}>
        <h2>Podaryavai</h2>
      </header>

      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
