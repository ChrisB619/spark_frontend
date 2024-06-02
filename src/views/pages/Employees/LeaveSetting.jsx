/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import LeaveSettingCustomPolicy from "./LeaveSettingCustomPolicy";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import LeaveSettingAddModelPopup from "../../../components/modelpopup/LeaveSettingAddModelPopup";
import Breadcrumbs from "../../../components/Breadcrumbs";

const LeaveSettings = () => {
  const [show, setShow] = useState(false);
  const [carryFrwd, setCarryfrwd] = useState(false);
  const [carryEarned, setCarryearned] = useState(false);
  const [sickDay, setSickday] = useState(false);
  const [hosp, setHosp] = useState(false);
  const [maternty, setMaternty] = useState(false);
  const [paternty, setPaternty] = useState(false);
  const [lopDays, setLopdays] = useState(false);
  const [lopCarryfrwd, setLopcarryfrwd] = useState(false);
  const [lopEarn, setLopearn] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const carryFrwdshow = () => {
    setCarryfrwd(true);
  };

  const carryFrwdclose = () => {
    setCarryfrwd(false);
  };
  const carryEarnedshow = () => {
    setCarryearned(true);
  };
  const carryEarnedclose = () => {
    setCarryearned(false);
  };

  const sickDayshow = () => {
    setSickday(true);
  };
  const sickDayclose = () => {
    setSickday(false);
  };
  const hospShow = () => {
    setHosp(true);
  };

  const hospClose = () => {
    setHosp(false);
  };
  const materntyShow = () => {
    setMaternty(true);
  };

  const materntyClose = () => {
    setMaternty(false);
  };
  const paterntyShow = () => {
    setPaternty(true);
  };

  const paterntyClose = () => {
    setPaternty(false);
  };
  const lopDayshow = () => {
    setLopdays(true);
  };

  const lopDayclose = () => {
    setLopdays(false);
  };
  const lopCarryshow = () => {
    setLopcarryfrwd(true);
  };
  const lopCarryclose = () => {
    setLopcarryfrwd(false);
  };
  const lopEarnshow = () => {
    setLopearn(true);
  };

  const lopEarnclose = () => {
    setLopearn(false);
  };

  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Leave Settings"
            title="Dashboard"
            subtitle="Leave Settings"
            modal="#add_custom_policy"
            name="Add New"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              {/* Annual Leave */}
              <div className="card leave-box " id="leave_annual">
                <div className="card-body">
                  <div className="h3 card-title with-switch">
                    Annual
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_custom01"
                        defaultChecked
                      />
                      <label
                        className="onoffswitch-label"
                        htmlFor="switch_custom01"
                      >
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="leave-item">
                    {/* Annual Days Leave */}
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <div className="input-block">
                            <label>Days</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled={!show ? true : false}
                            />
                          </div>
                        </div>
                      </div>
                      {show ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={handleClose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button
                            className="leave-edit-btn"
                            onClick={handleShow}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                    {/* /Annual Days Leave */}
                    {/* Carry Forward */}
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <label className="d-block">Carry forward</label>
                          <div className="leave-inline-form">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="carryForward"
                                id="carry_no_01"
                                defaultValue="option1"
                                disabled={!carryFrwd}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="carry_no_01"
                              >
                                No
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="carryForward"
                                id="carry_yes_01"
                                defaultValue="option2"
                                disabled={!carryFrwd}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="carry_yes_01"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="input-group">
                              <span className="input-group-text">Max</span>
                              <input
                                type="text"
                                className="form-control"
                                disabled={!carryFrwd}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {carryFrwd ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={carryFrwdclose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button
                            className="leave-edit-btn"
                            onClick={carryFrwdshow}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                    {/* /Carry Forward */}
                    {/* Earned Leave */}
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <label className="d-block">Earned leave</label>
                          <div className="leave-inline-form">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                defaultValue="option1"
                                disabled={!carryEarned}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                No
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                defaultValue="option2"
                                disabled={!carryEarned}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                Yes
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {carryEarned ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={carryEarnedclose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button
                            className="leave-edit-btn"
                            onClick={carryEarnedshow}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                    {/* /Earned Leave */}
                  </div>
                  <LeaveSettingCustomPolicy />
                </div>
              </div>

              {/* /Annual Leave */}
              {/* Sick Leave */}
              <div className="card leave-box" id="leave_sick">
                <div className="card-body">
                  <div className="h3 card-title with-switch">
                    Sick
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_sick"
                        defaultChecked
                      />
                      <label
                        className="onoffswitch-label"
                        htmlFor="switch_sick"
                      >
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="leave-item">
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <div className="input-block">
                            <label>Days</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled={!sickDay}
                            />
                          </div>
                        </div>
                      </div>

                      {sickDay ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={sickDayclose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button
                            className="leave-edit-btn"
                            onClick={sickDayshow}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <LeaveSettingCustomPolicy />
              </div>
              {/* /Sick Leave */}
              {/* Hospitalisation Leave */}
              <div className="card leave-box" id="leave_hospitalisation">
                <div className="card-body">
                  <div className="h3 card-title with-switch">
                    Hospitalisation
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_hospitalisation"
                      />
                      <label
                        className="onoffswitch-label"
                        htmlFor="switch_hospitalisation"
                      >
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="leave-item">
                    {/* Annual Days Leave */}
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <div className="input-block">
                            <label>Days</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled={!hosp}
                            />
                          </div>
                        </div>
                      </div>
                      {hosp ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={hospClose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button className="leave-edit-btn" onClick={hospShow}>
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                    {/* /Annual Days Leave */}
                  </div>
                </div>
              </div>
              {/* /Hospitalisation Leave */}
              {/* Maternity Leave */}
              <div className="card leave-box" id="leave_maternity">
                <div className="card-body">
                  <div className="h3 card-title with-switch">
                    Maternity{" "}
                    <span className="subtitle">Assigned to female only</span>
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_maternity"
                        defaultChecked
                      />
                      <label
                        className="onoffswitch-label"
                        htmlFor="switch_maternity"
                      >
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="leave-item">
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <div className="input-block">
                            <label>Days</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled={!maternty}
                            />
                          </div>
                        </div>
                      </div>
                      {maternty ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={materntyClose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button
                            className="leave-edit-btn"
                            onClick={materntyShow}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* /Maternity Leave */}
              {/* Paternity Leave */}
              <div className="card leave-box" id="leave_paternity">
                <div className="card-body">
                  <div className="h3 card-title with-switch">
                    Paternity{" "}
                    <span className="subtitle">Assigned to male only</span>
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_paternity"
                        disabled={!paternty}
                      />
                      <label
                        className="onoffswitch-label"
                        htmlFor="switch_paternity"
                      >
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="leave-item">
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <div className="input-block">
                            <label>Days</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled={!paternty}
                            />
                          </div>
                        </div>
                      </div>
                      {paternty ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={paterntyClose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button
                            className="leave-edit-btn"
                            onClick={paterntyShow}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* /Paternity Leave */}
              {/* Custom Create Leave */}
              <div className="card leave-box mb-0" id="leave_custom01">
                <div className="card-body">
                  <div className="h3 card-title with-switch">
                    LOP
                    <div className="onoffswitch">
                      <input
                        type="checkbox"
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="switch_custom01"
                        defaultChecked
                      />
                      <label
                        className="onoffswitch-label"
                        htmlFor="switch_custom01"
                      >
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                    <button
                      className="btn btn-danger leave-delete-btn"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="leave-item">
                    {/* Annual Days Leave */}
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <div className="input-block">
                            <label>Days</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled={!lopDays}
                            />
                          </div>
                        </div>
                      </div>
                      {lopDays ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={lopDayclose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button
                            className="leave-edit-btn"
                            onClick={lopDayshow}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                    {/* /Annual Days Leave */}
                    {/* Carry Forward */}
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <label className="d-block">Carry forward</label>
                          <div className="leave-inline-form">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="carryForward"
                                id="carry_no_01"
                                defaultValue="option1"
                                disabled={!lopCarryfrwd}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="carry_no_01"
                              >
                                No
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="carryForward"
                                id="carry_yes_01"
                                defaultValue="option2"
                                disabled={!lopCarryfrwd}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="carry_yes_01"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="input-group">
                              <span className="input-group-text">Max</span>
                              <input
                                type="text"
                                className="form-control"
                                disabled={!lopCarryfrwd}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {lopCarryfrwd ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={lopCarryclose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button
                            className="leave-edit-btn"
                            onClick={lopCarryshow}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                    {/* /Carry Forward */}
                    {/* Earned Leave */}
                    <div className="leave-row">
                      <div className="leave-left">
                        <div className="input-box">
                          <label className="d-block">Earned leave</label>
                          <div className="leave-inline-form">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                defaultValue="option1"
                                disabled={!lopEarn}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                No
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                defaultValue="option2"
                                disabled={!lopEarn}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                Yes
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {lopEarn ? (
                        <div className="leave-right">
                          <button
                            className="btn btn-white leave-cancel-btn"
                            onClick={lopEarnclose}
                          >
                            {" "}
                            Cancel
                          </button>
                          <button className="btn btn-primary leave-save-btn">
                            {" "}
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="leave-right">
                          <button
                            className="leave-edit-btn"
                            onClick={lopEarnshow}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                    {/* /Earned Leave */}
                  </div>
                  <LeaveSettingCustomPolicy />
                </div>
              </div>
            </div>
            {/* /Custom Create Leave */}
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <LeaveSettingAddModelPopup />
      <DeleteModal Name="Custom Policy" />
    </>
  );
};

export default LeaveSettings;
