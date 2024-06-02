import React from "react";
import { Link } from "react-router-dom";
import { Avatar_02 } from "../../../../../../Routes/ImagePath";
import ChatModals from "../../chat/chatModals";

const Outgoing = () => {
  return (
    <>
      {" "}
      <div className="page-wrapper">
        <div className="call-box outgoing-box">
          <div className="call-wrapper">
            <div className="call-inner">
              <div className="call-user">
                <img alt="" src={Avatar_02} className="call-avatar" />
                <h4>John Doe</h4>
                <span>Connecting...</span>
              </div>
              <div className="call-items">
                <Link to="#" className="btn call-item">
                  <i className="material-icons">mic</i>
                </Link>
                <Link to="#" className="btn call-item">
                  <i className="material-icons">videocam</i>
                </Link>
                <Link
                  onClick={() => localStorage.setItem("minheight", "true")}
                  to="/call/chat"
                  className="btn call-item call-end"
                >
                  <i className="material-icons vcend">call_end</i>
                </Link>
                <Link to="#" className="btn call-item">
                  <i className="material-icons">person_add</i>
                </Link>
                <Link to="#" className="btn call-item">
                  <i className="material-icons">volume_up</i>
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

export default Outgoing;
