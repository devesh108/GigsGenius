"use client";
import React, { useEffect, useState } from "react";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";

export default function InboxPage() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const appID = "1673753b8abbedcc6";
    const region = "in";
    const authKey = "c67f7fbdc22c050a9b095aa3a24b8128d0d5c45c";
    const UID = "cometchat-uid-1"; // Must match a user created in CometChat dashboard

    // ✅ Initialize UIKit (not the raw CometChat SDK)
    CometChatUIKit.init({ appId: appID, region: region })
      .then(() => {
        console.log("✅ CometChat UIKit initialized successfully");

        // Check existing session
        CometChatUIKit.getLoggedinUser().then((user) => {
          if (user) {
            console.log("🔹 Already logged in as:", user.getUid());
            setIsReady(true);
          } else {
            // Login new user
            CometChatUIKit.login(UID, authKey)
              .then((user) => {
                console.log("✅ User logged in:", user);
                setIsReady(true);
              })
              .catch((error) => {
                console.error("❌ Login failed:", error);
              });
          }
        });
      })
      .catch((error) => {
        console.error("❌ UIKit initialization failed:", error);
      });
  }, []);

  if (!isReady) return <div>Loading chat...</div>;

  return (
    <div style={{ height: "100vh" }}>
      <CometChatUIKit.CometChatConversationsWithMessages />
    </div>
  );
}
