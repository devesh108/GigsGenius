"use client";
import { useAppContext } from "../context/AppContext";
import React, { useEffect, useState, useRef } from "react";
import { Bell, Clock } from "lucide-react";

export default function NotificationItem() {
  const { info } = useAppContext();
  const [notifications, setNotifications] = useState([]);
  const initialized = useRef(false);

  // Add new info when it changes — without losing old ones
  useEffect(() => {
    // Skip the very first render if no info yet
    if (!initialized.current) {
      initialized.current = true;
      return;
    }

    if (info && info.name && info.description) {
      setNotifications((prev) => {
        // Prevent duplicate notifications
        const exists = prev.some(
          (item) =>
            item.name === info.name && item.description === info.description
        );
        if (exists) return prev;

        return [
          ...prev,
          {
            ...info,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ];
      });
    }
  }, [info]);

  return (
    <>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(90deg, #1e3c72, #2a5298, #764ba2)",
          color: "white",
          padding: "20px 20px",
          marginTop: "-3rem",
          borderRadius: "0",
          marginLeft: "-20px",
          marginRight: "-20px",
        }}
      >
        <div className="container ms-2 d-flex align-items-center gap-3">
          <i
            className="bi bi-bell-fill text-warning"
            style={{ fontSize: "2rem", color: "#FFD700" }}
          ></i>
          <h2>Notifications</h2>
        </div>
      </div>

      {/* Notification List */}
      <div className="container my-3" style={{ width: "100%" }}>
        {notifications.length === 0 ? (
          <p className="text-muted">No notifications yet.</p>
        ) : (
          notifications.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between border rounded-4 p-3 shadow-sm bg-white mb-3"
              style={{
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f2f6ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <div className="d-flex align-items-center">
                {/* Icon */}
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#e8f0fe",
                  }}
                >
                  <Bell color="#0056D2" size={22} />
                </div>

                {/* Text */}
                <div>
                  <strong className="d-block text-dark">{item.name}</strong>
                  <small className="text-muted">
                    {item.name} submitted a proposal for your project{" "}
                    <span className="fw-semibold text-primary">
                      {item.description}
                    </span>
                  </small>
                </div>
              </div>

              {/* Timestamp */}
              <div className="text-end">
                <small className="text-muted d-flex align-items-center">
                  <Clock size={14} className="me-1" /> {item.time}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
