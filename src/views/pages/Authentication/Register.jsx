/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Applogo } from "../../../Routes/ImagePath";
import { emailrgx } from "../Authentication/RegEx";

const schema = yup.object({
  email: yup
    .string()
    .matches(emailrgx, "Email is required")
    .required("Email is required")
    .trim(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required")
    .trim(),
});
const Register = (props) => {
  const [passwordEye, setPasswordEye] = useState(true); // State for password field
  const [checkUser, setCheckUser] = useState(false); // State for password field
  const [repeatPasswordEye, setRepeatPasswordEye] = useState(true); // State for repeat password field

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const details = localStorage.getItem("loginDetails");
  const loginInfo = JSON.parse(details) || []; // Initialize as an empty array if null

  const [loginState, setLoginState] = useState(loginInfo);

  const onSubmit = (data) => {
    const currentUser = loginInfo?.find((item) => item?.email === data?.email);
    if (currentUser === undefined) {
      const credencial = { email: data.email, password: data.password };
      localStorage.setItem(
        "loginDetails",
        JSON.stringify([...loginInfo, credencial])
      );
      setLoginState([...loginInfo, credencial]);
      setCheckUser(true); // Set checkUser to true for a successful login
      navigate("/");
    } else {
      setCheckUser(false); // Set checkUser to false for a failed login
      return false;
    }
  };

  return (
    <div className="account-page">
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
                <h3 className="account-title">Register</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <div>
                  <form>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Email</label>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${
                              errors?.email ? "error-input" : ""
                            }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                          />
                        )}
                      />

                      <span className="text-danger">
                        {errors?.email?.message}
                      </span>
                      <span className="text-danger">
                        {checkUser ? "This Email is Already exist" : ""}
                      </span>
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Password</label>
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div
                            className="pass-group"
                            style={{ position: "relative" }}
                          >
                            <input
                              type={passwordEye ? "password" : "text"}
                              className={`form-control  ${
                                errors?.password ? "error-input" : ""
                              }`}
                              value={value}
                              onChange={onChange}
                              autoComplete="false"
                            />
                            <span
                              style={{
                                position: "absolute",
                                right: "5%",
                                top: "30%",
                              }}
                              onClick={() => setPasswordEye(!passwordEye)}
                              className={`fa toggle-password ${
                                passwordEye ? "fa-eye-slash" : "fa-eye"
                              }`}
                            />
                          </div>
                        )}
                        defaultValue=""
                      />

                      <span className="text-danger">
                        {errors?.password?.message}
                      </span>
                    </div>
                    <div className="input-block mb-3">
                      <label className="col-form-label">Repeat Password</label>
                      <Controller
                        name="repeatepassword"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div
                            className="pass-group"
                            style={{ position: "relative" }}
                          >
                            <input
                              type={repeatPasswordEye ? "password" : "text"}
                              className={`form-control  ${
                                errors?.repeatPassword ? "error-input" : ""
                              }`}
                              value={value}
                              onChange={onChange}
                              autoComplete="false"
                            />
                            <span
                              style={{
                                position: "absolute",
                                right: "5%",
                                top: "30%",
                              }}
                              onClick={() =>
                                setRepeatPasswordEye(!repeatPasswordEye)
                              }
                              className={`fa toggle-password ${
                                repeatPasswordEye ? "fa-eye-slash" : "fa-eye"
                              }`}
                            />
                          </div>
                        )}
                        defaultValue=""
                      />

                      <span className="text-danger">
                        {errors?.repeatPassword?.message}
                      </span>
                    </div>
                    <div className="input-block text-center">
                      <Link
                        to="#"
                        className="btn btn-primary account-btn"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Register
                      </Link>
                    </div>
                  </form>

                  <div className="account-footer">
                    <p>
                      Already have an account? <Link to="/">Login</Link>
                    </p>
                  </div>
                </div>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
