import React from "react";
import { Applogo } from "../../../Routes/ImagePath";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div>
      <div className="account-page">
        <div className="main-wrapper">
          <div className="account-content">
            {/* Account Logo */}
            <div className="account-logo">
              <Link to="/admin-dashboard">
                <img src={Applogo} alt="Dreamguy's Technologies" />
              </Link>
            </div>
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Change Password</h3>
                <form>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Old password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">New password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="col-form-label">Confirm password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="submit-section mb-4">
                    <Link
                      to="/admin-dashboard"
                      className="btn btn-primary submit-btn"
                    >
                      Update Password
                    </Link>
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

export default ChangePassword;
