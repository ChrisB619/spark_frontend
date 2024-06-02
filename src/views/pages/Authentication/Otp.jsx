import React from "react";
import { Link } from "react-router-dom";
import { Applogo } from "../../../Routes/ImagePath";

const Otp = () => {
  return (
    <>
      <div className="account-page">
        {/* Main Wrapper */}
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container">
              {/* Account Logo */}
              <div className="account-logo">
                <Link to="/admin-dashboard">
                  <img src={Applogo} alt="Dreamguy's Technologies" />
                </Link>
              </div>
              {/* /Account Logo */}
              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title">OTP</h3>
                  <p className="account-subtitle">Verification your account</p>
                  {/* Account Form */}
                  <form action="admin-dashboard">
                    <div className="otp-wrap">
                      <input
                        type="text"
                        placeholder={0}
                        maxLength={1}
                        className="otp-input"
                      />
                      <input
                        type="text"
                        placeholder={0}
                        maxLength={1}
                        className="otp-input"
                      />
                      <input
                        type="text"
                        placeholder={0}
                        maxLength={1}
                        className="otp-input"
                      />
                      <input
                        type="text"
                        placeholder={0}
                        maxLength={1}
                        className="otp-input"
                      />
                    </div>
                    <div className="input-block mb-4 text-center">
                      <Link
                        to="/admin-dashboard"
                        className="btn btn-primary account-btn"
                        type="submit"
                      >
                        Enter
                      </Link>
                    </div>
                    <div className="account-footer">
                      <p>
                        Not yet received? <Link to="#">Resend OTP</Link>
                      </p>
                    </div>
                  </form>
                  {/* /Account Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Main Wrapper */}
      </div>
    </>
  );
};

export default Otp;
