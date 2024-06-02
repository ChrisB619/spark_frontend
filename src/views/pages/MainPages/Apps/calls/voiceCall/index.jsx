import React, { useEffect, useState } from "react";
import VoiceContent from "./voiceContent";
import VoiceModals from "./voiceModals";
import ChatModals from "../../chat/chatModals";

const VoiceCall = () => {
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
        <VoiceContent />
        <VoiceModals />
        <ChatModals />
      </div>
    </>
  );
};

export default VoiceCall;
