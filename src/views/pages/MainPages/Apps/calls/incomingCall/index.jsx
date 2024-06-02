import React from "react";
import { Link } from "react-router-dom";
import { Avatar_11 } from "../../../../../../Routes/ImagePath";
import ChatModals from "../../chat/chatModals";

const IncomingCall = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="call-box incoming-box">
          <div className="call-wrapper">
            <div className="call-inner">
              <div className="call-user">
                <img className="call-avatar" src={Avatar_11} alt="" />
                <h4>Wilmer Deluna</h4>
                <span>Calling ...</span>
              </div>
              <div className="call-items">
                <Link
                  onClick={() => localStorage.setItem("minheight", "true")}
                  to="/call/chat"
                  className="btn call-item call-end"
                >
                  <i className="material-icons">call_end</i>
                </Link>
                <Link
                  to="/call/video-call"
                  className="btn call-item call-start"
                >
                  <i className="material-icons">call</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatModals />
    </>
  );
};

export default IncomingCall;
