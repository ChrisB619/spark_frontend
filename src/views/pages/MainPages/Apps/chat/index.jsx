/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from "react";
import ChatView from "./chatView";
import ChatRightsidebar from "./chatRightsidebar";
import ChatModals from "./chatModals";

const Chat = () => {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  useEffect(() => {
    let firstload = localStorage.getItem("minheight");
    if (firstload === "false") {
      setTimeout(function () {
        window.location.reload(1);
        localStorage.removeItem("minheight");
      }, 1000);
    }
  });

  return (
    <>
      <div
        className="page-wrapper"
        style={{ minHeight: windowDimension.winHeight }}
      >
        {/* Chat Main Row */}
        <div className="chat-main-row">
          {/* Chat Main Wrapper */}
          <div className="chat-main-wrapper">
            <ChatView />
            <ChatRightsidebar />
            <ChatModals />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
