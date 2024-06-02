import React from "react";
import Select from "react-select";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import LeaveApproval from "./LeaveApproval";

const ApprovalSetting = () => {
  const selectSelect = [
    { label: "Select Approvers", value: "option1" },
    { label: "CEO", value: "option2" },
    { label: "Direct Manager", value: "option3" },
    { label: "Development Manager", value: "option4" },
    { label: "Finance", value: "option5" },
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
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              {/* Page Header */}
              <Breadcrumbs maintitle="Approval Settings" />

              {/* /Page Header */}
              {/* Nav tabs */}
              <ul
                className="nav nav-tabs nav-tabs-bottom"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    to="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Expenses Approval
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    to="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Leave Approval
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link"
                    id="messages-tab"
                    data-bs-toggle="tab"
                    to="#messages"
                    role="tab"
                    aria-controls="messages"
                    aria-selected="false"
                  >
                    Offer Approval
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link"
                    id="settings-tab"
                    data-bs-toggle="tab"
                    to="#settings"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                  >
                    Resignation Notice
                  </Link>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h4>Expense Approval Settings</h4>
                  <div className="input-block mb-3 form-row">
                    <label className="control-label col-form-label col-md-12">
                      Default Expense Approval
                    </label>
                    <div className="col-md-12 approval-option">
                      <label className="radio-inline">
                        <input
                          id="radio-single1"
                          className="me-2 default_expense_approval"
                          defaultValue="seq-approver"
                          defaultChecked
                          name="default_expense_approval"
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
                          id="radio-multiple3"
                          className="me-2 default_expense_approval"
                          defaultValue="sim-approver"
                          name="default_expense_approval"
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
                  <div
                    className="input-block mb-3  form-row row approver seq-approver"
                    style={{ display: "block" }}
                  >
                    <label className="control-label col-form-label col-sm-3">
                      Expense Approvers
                    </label>
                    <div className="col-sm-9 ">
                      <label
                        className="ex_exp_approvers_1 control-label col-form-label mb-2 exp_appr"
                        style={{ paddingLeft: 0 }}
                      >
                        Approver 1
                      </label>
                      <div className="row ex_exp_approvers_1 input-block mb-3">
                        <div className="col-md-6">
                          <Select
                            options={selectSelect}
                            placeholder="Select Approvers"
                            styles={customStyles}
                          />
                        </div>
                      </div>
                      <label
                        className="ex_exp_approvers_2 control-label col-form-label mb-2 exp_appr"
                        style={{ paddingLeft: 0 }}
                      >
                        Approver 2
                      </label>
                      <div className="row ex_exp_approvers_2 input-block mb-3">
                        <div className="col-md-6">
                          <Select
                            options={selectSelect}
                            placeholder="Select Approvers"
                            styles={customStyles}
                          />
                        </div>
                        <div className="col-md-2">
                          <Link
                            to="#"
                            className="remove_ex_exp_approver btn rounded border text-danger"
                            data-id={2}
                          >
                            <i className="fa fa-times" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                      <label
                        className="ex_exp_approvers_3 control-label col-form-label m-b-10 exp_appr"
                        style={{ paddingLeft: 0 }}
                      >
                        Approver 3
                      </label>
                      <div className="row ex_exp_approvers_3 input-block mb-3">
                        <div className="col-md-6">
                          <Select
                            options={selectSelect}
                            placeholder="Select Approvers"
                            styles={customStyles}
                          />
                        </div>
                        <div className="col-md-2">
                          <Link
                            to="#"
                            className="remove_ex_exp_approver btn rounded border text-danger"
                            data-id={3}
                          >
                            <i className="fa fa-times" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-9 col-md-offset-3 m-t-10">
                        <Link
                          id="add_expense_approvers"
                          to="#"
                          className="add-more"
                        >
                          + Add Approver
                        </Link>
                      </div>
                    </div>
                    <div className="m-t-30">
                      <div className="col-md-12 submit-section">
                        <button
                          id="expense_approval_set_btn"
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <LeaveApproval />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default ApprovalSetting;
