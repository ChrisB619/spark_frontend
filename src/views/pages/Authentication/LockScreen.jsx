import React from "react";
import { Applogo, Avatar_02 } from "../../../Routes/ImagePath";
import { Link } from "react-router-dom";

const LockScreen = () => {
  return (
    <div>
      <div className="account-page">
        {/* Main Wrapper */}
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container">
              {/* Account Logo */}
              <div className="account-logo">
                <Link to="admin-dashboard">
                  <img src={Applogo} alt="Dreamguy's Technologies" />
                </Link>
              </div>
              {/* /Account Logo */}
              <div className="account-box">
                <div className="account-wrapper">
                  {/* Lock User Img */}
                  <div className="lock-user">
                    <img src={Avatar_02} alt="img" className="rounded-circle" />
                    <h4>John Doe</h4>
                  </div>
                  {/* /Lock User Img */}
                  {/* Account Form */}
                  <form action="admin-dashboard">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Password</label>
                      <input className="form-control" type="password" />
                    </div>
                    <div className="input-block mb-3 text-center">
                      <button
                        className="btn btn-primary account-btn"
                        type="submit"
                      >
                        Enter
                      </button>
                    </div>
                    <div className="account-footer">
                      <p>
                        Sign in as a different user? <Link to="/">Login</Link>
                      </p>
                    </div>
                  </form>
                  {/* /Account Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
