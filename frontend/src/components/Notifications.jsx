export default function Notifications() {
  const notifications = [
    { id: 1, text: "🎁 Gift proposal ready for approval" },
    { id: 2, text: "💳 Subscription renewed successfully" },
    { id: 3, text: "📅 Birthday in 3 days" }
  ];

  return (
    <div style={{ maxWidth: 500 }}>
      <h3 style={{ marginBottom: 15 }}>Notifications</h3>
      {notifications.map(n => (
        <div key={n.id} style={{
          padding: 12,
          marginBottom: 10,
          borderRadius: 8,
          background: "#111",
          border: "1px solid #222"
        }}>
          {n.text}
        </div>
      ))}
    </div>
  );
}
