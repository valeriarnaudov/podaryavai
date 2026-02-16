/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import api from "../api/axios";
import AnimatedCard from "../components/AnimatedCard";

export default function Persons() {
    const [persons, setPersons] = useState([]);
    const [name, setName] = useState("");
    const [eventDate, setEventDate] = useState("");

    const fetchPersons = async () => {
        const res = await api.get("/persons");
        setPersons(res.data);
    };

    useEffect(() => {
        fetchPersons();
    }, []);

    async function handleCreate() {
        await api.post("/persons", { name, eventDate });
        setName("");
        setEventDate("");
        fetchPersons();
    }

    const handleDelete = async (id) => {
        await api.delete(`/persons/${id}`);
        fetchPersons();
    };

    return (
        <MainLayout>
            <h1 style={{ marginBottom: 30 }}>People & Events</h1>

            <AnimatedCard>
                <Card>
                    <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                        <input
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={inputStyle}
                        />
                        <input
                            type="date"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            style={inputStyle}
                        />
                        <Button onClick={handleCreate}>Add</Button>
                    </div>

                    <div style={{ display: "grid", gap: 12 }}>
                        {persons.map((p) => (
                            <div key={p.id} style={personCard}>
                                <div>
                                    <strong>{p.name}</strong>
                                    <div
                                        style={{
                                            color: "var(--text-secondary)",
                                        }}
                                    >
                                        {new Date(
                                            p.eventDate,
                                        ).toLocaleDateString()}
                                    </div>
                                </div>

                                <Button onClick={() => handleDelete(p.id)}>
                                    Delete
                                </Button>
                            </div>
                        ))}
                    </div>
                </Card>
            </AnimatedCard>
        </MainLayout>
    );
}

const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    background: "#0F1115",
    color: "#fff",
};

const personCard = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    background: "var(--bg-secondary)",
};
