import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />

      <div style={{ marginLeft: window.innerWidth > 768 ? 260 : 0 }}>
        <Navbar onMenu={() => setOpen(!open)} />
        <main style={{ padding: 24 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
