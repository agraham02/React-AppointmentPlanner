import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    const date = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    return date;
  };

  getTodayString();

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type='date' value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString()}/>
      <input type='time' value={time} onChange={(e) => setTime(e.target.value)}/>
      <ContactPicker contacts={contacts} />
      <input type='submit'/>
    </form>
  );
};
