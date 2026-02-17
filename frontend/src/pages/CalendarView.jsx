import { useState } from "react";
import Calendar from "react-calendar";
import MainLayout from "../layout/MainLayout";
import "react-calendar/dist/Calendar.css";

export default function CalendarView() {
  const [date, setDate] = useState(new Date());

  return (
    <MainLayout>
      <h1 style={{ marginBottom: 20 }}>Events Calendar</h1>
      <Calendar onChange={setDate} value={date} />
    </MainLayout>
  );
}
