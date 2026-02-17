import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Свързване с backend
    console.log("Регистрация:", form);

    alert("Регистрацията ще бъде свързана с бекенда.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-card shadow-xl rounded-2xl p-8 border border-border">
        <h1 className="text-2xl font-bold text-center mb-6">
          Създай акаунт
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Име</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border bg-input outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Имейл</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border bg-input outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Парола</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border bg-input outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
          >
            Регистрирай се
          </button>
        </form>

        <p className="text-sm text-center mt-6 opacity-70">
          Вече имаш акаунт?{" "}
          <a href="/login" className="text-primary font-medium">
            Влез
          </a>
        </p>
      </div>
    </div>
  );
}
