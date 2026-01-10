"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  // Function to add a new notification (instead of replacing)
  const addNotification = (newInfo) => {
    setNotifications((prev) => [
      ...prev,
      {
        ...newInfo,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  return (
    <AppContext.Provider value={{ notifications, addNotification }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
