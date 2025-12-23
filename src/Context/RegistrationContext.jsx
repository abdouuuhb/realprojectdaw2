import { createContext, useContext, useState } from "react";


const RegistrationContext = createContext();

export function RegistrationProvider({ children }) {
  const [myRegistrations, setMyRegistrations] = useState([]);

  const addRegistration = (workshop) => {
    const newReg = {
      id: Date.now(),
      title: workshop.title,
      date: workshop.date || "15 Décembre 2025",
      time: workshop.time || "14:00 - 17:00",
      room: workshop.room || "Amphi B-201",
      status: "pending",
      payment: "pending",
    };
    setMyRegistrations((prev) => [newReg, ...prev]);
  };

  return (
    <RegistrationContext.Provider value={{ myRegistrations, addRegistration }}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  return useContext(RegistrationContext);
}