import React from "react";
import { Link } from "react-router-dom";
import { Applogo } from "../../../Routes/ImagePath";

const ForgotPassword = () => {
  return (
    <div className="account-page">
      <div className="main-wrapper">
        
        <div className="account-content">
          <div className="container">
            <div className="account-logo">
              <Link to="/app/main/dashboard">
                <img src={Applogo} alt="Dreamguy's Technologies" />
              </Link>
            </div>
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Forgot Password?</h3>
                <p className="account-subtitle">
                  Enter your email to get a password reset link
                </p>
                <form>
                  <div className="input-block">
                    <label>Email Address</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block text-center">
                    <button
                      className="btn btn-primary account-btn"
                      type="submit">
                      Reset Password
                    </button>
                  </div>
                  <div className="account-footer">
                    <p>
                      Remember your password? <Link to="/">Login</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
