export default function Pricing() {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px" }}>
      <h1>Избери план</h1>
      <p style={{ opacity: 0.8, marginBottom: 40 }}>
        Започни безплатно и надграждай, когато имаш нужда.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        <Plan
          title="Безплатен"
          price="0 лв"
          features={[
            "До 2 човека",
            "Напомняния",
            "Основни функции"
          ]}
        />

        <Plan
          title="Pro"
          price="9.99 лв / месец"
          highlight
          features={[
            "До 15 човека",
            "Разширени напомняния",
            "История"
          ]}
        />

        <Plan
          title="Ultra"
          price="29.99 лв / месец"
          features={[
            "Неограничено",
            "Личен консерж",
            "Помощ с подаръци"
          ]}
        />
      </div>
    </section>
  );
}

function Plan({ title, price, features, highlight }) {
  return (
    <div style={{
      padding: 24,
      borderRadius: 16,
      border: highlight ? "2px solid var(--accent)" : "1px solid rgba(255,255,255,0.1)"
    }}>
      <h3>{title}</h3>
      <strong>{price}</strong>
      <ul>
        {features.map(f => <li key={f}>{f}</li>)}
      </ul>
      <button>Избери</button>
    </div>
  );
}
