import React from "react";
import Select from "react-select";

const LeaveApproval = () => {
  const selectSelect = [
    { label: "Select", value: "option1" },
    { label: "Test Lead", value: "option2" },
    { label: "UI/UX Designer", value: "option3" },
    { label: "Sox Analyst", value: "option4" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };
  return (
    <>
      <div
        className="tab-pane"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div className="input-block mb-3 row">
          <label className="control-label col-form-label col-md-12">
            Default Leave Approval
          </label>
          <div className="col-md-12 approval-option">
            <label className="radio-inline">
              <input
                id="radio-single"
                className="me-2 default_offer_approval"
                defaultValue="seq-approver"
                name="default_leave_approval"
                type="radio"
              />
              Sequence Approval (Chain){" "}
              <sup>
                {" "}
                <span className="badge info-badge">
                  <i className="fa fa-info" aria-hidden="true" />
                </span>
              </sup>
            </label>
            <label className="radio-inline ms-2">
              <input
                id="radio-multiple1"
                className="me-2 default_offer_approval"
                defaultValue="sim-approver"
                defaultChecked
                name="default_leave_approval"
                type="radio"
              />
              Simultaneous Approval{" "}
              <sup>
                <span className="badge info-badge">
                  <i className="fa fa-info" aria-hidden="true" />
                </span>
              </sup>
            </label>
          </div>
        </div>
        <div className="input-block mb-3 form-row">
          <label className="control-label col-form-label col-sm-12">
            leave Approvers
          </label>
          <div className="col-sm-6">
            <label
              className="control-label col-form-label"
              style={{ marginBottom: 10, paddingLeft: 0 }}
            >
              Simultaneous Approval{" "}
            </label>
            <Select
              options={selectSelect}
              placeholder="Select"
              styles={customStyles}
            />
          </div>
        </div>
        <div className="m-t-30 row ">
          <div className="col-md-12 submit-section">
            <button
              id="leave_approval_set_btn"
              type="submit"
              className="btn btn-primary submit-btn"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <div
        className="tab-pane"
        id="messages"
        role="tabpanel"
        aria-labelledby="messages-tab"
      >
        <form>
          <h4>Offer Approval Settings</h4>
          <div className="input-block mb-3">
            <label className="control-label col-form-label col-md-12">
              Default Offer Approval
            </label>
            <div className="col-md-12 approval-option">
              <label className="radio-inline">
                <input
                  id="radio-single2"
                  className="me-2 default_offer_approval"
                  defaultValue="seq-approver"
                  name="default_offer_approval"
                  type="radio"
                />
                Sequence Approval (Chain){" "}
                <sup>
                  {" "}
                  <span className="badge info-badge">
                    <i className="fa fa-info" aria-hidden="true" />
                  </span>
                </sup>
              </label>
              <label className="radio-inline ms-2">
                <input
                  id="radio-multiple2"
                  className="me-2 default_offer_approval"
                  defaultValue="sim-approver"
                  defaultChecked
                  name="default_offer_approval"
                  type="radio"
                />
                Simultaneous Approval{" "}
                <sup>
                  <span className="badge info-badge">
                    <i className="fa fa-info" aria-hidden="true" />
                  </span>
                </sup>
              </label>
            </div>
          </div>
          <div className="m-t-30">
            <div className="col-md-12 submit-section">
              <button
                id="offer_approval_set_btn"
                type="submit"
                className="btn btn-primary submit-btn"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        className="tab-pane"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <form>
          <h3>Resignation Notice</h3>
          <div className="input-block mb-3 form-row">
            <label className="col-sm-12">
              Email Notification <span className="text-danger">*</span>
            </label>
            <div className="col-sm-6">
              <label className="control-label col-form-label">
                Simultaneous Approval{" "}
              </label>
              <Select
              options={selectSelect}
              placeholder="Select"
              styles={customStyles}
            />
            </div>
          </div>
          <div className="input-block mb-3 form-row">
            <label className="col-md-12">
              Notice Days <span className="text-danger">*</span>
            </label>
            <div className="col-md-6 approval-option">
              <input
                type="number"
                name="notice_days"
                className="form-control notice_days"
                defaultValue={15}
              />
            </div>
          </div>
          <div className="m-t-30">
            <div className="col-md-12 submit-section">
              <button
                id="resignation_notice_set_btn"
                type="submit"
                className="btn btn-primary submit-btn"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LeaveApproval;
