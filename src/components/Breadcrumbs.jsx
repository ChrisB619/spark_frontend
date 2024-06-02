import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = (props) => {
  const location = useLocation();
  let addButton = null;
  if (
    location.pathname === "/form-basic-inputs" ||
    location.pathname === "/form-input-groups" ||
    location.pathname === "/form-horizontal" ||
    location.pathname === "/form-vertical" ||
    location.pathname === "/form-mask" ||
    location.pathname === "/form-validation" ||
    location.pathname === "/tables-basic" ||
    location.pathname === "/data-tables" ||
    location.pathname === "/performance" ||
    location.pathname === "/payments" ||
    location.pathname === "/ui/components" ||
    location.pathname === "/adminattendance" ||
    location.pathname === "/attendance-employee" ||
    location.pathname === "/task-board" ||
    location.pathname === "/leads" ||
    location.pathname === "/create-estimate" ||
    location.pathname === "/edit-estimate" ||
    location.pathname === "/create-invoice" ||
    location.pathname === "/edit-invoice" ||
    location.pathname === "/payments" ||
    location.pathname === "/payroll-items" ||
    location.pathname === "/activities" ||
    location.pathname === "/expense-reports" ||
    location.pathname === "/invoice-reports" ||
    location.pathname === "/payments-reports" ||
    location.pathname === "/task-reports" ||
    location.pathname === "/user-reports" ||
    location.pathname === "/payslip-reports" ||
    location.pathname === "/attendance-reports" ||
    location.pathname === "/user-dashboard" ||
    location.pathname === "/user-all-jobs" ||
    location.pathname === "/saved-jobs" ||
    location.pathname === "/interviewing" ||
    location.pathname === "/offered-jobs" ||
    location.pathname === "/visited-jobs" ||
    location.pathname === "/knowledgebase" ||
    location.pathname === "/questions" ||
    location.pathname === "/jobs-dashboard" ||
    location.pathname === "/manage-resumes" ||
    location.pathname === "/shortlist-candidates" ||
    location.pathname === "/offer_approvals" ||
    location.pathname === "/schedule-timing" ||
    location.pathname === "/apptitude-result" ||
    location.pathname === "/job-aptitude" ||
    location.pathname === "/applied-jobs" ||
    location.pathname === "/offered-jobs" ||
    location.pathname === "/archived-jobs" ||
    location.pathname === "/subscriptions-company" ||
    location.pathname === "/subscribed-companies" ||
    location.pathname === "/profile" ||
    location.pathname === "/job-list" ||
    location.pathname === "/job-view" ||
    location.pathname === "/search" ||
    location.pathname === "/faq" ||
    location.pathname === "/blank-page" ||
    location.pathname === "/user-asset-details" ||
    location.pathname === "/leaves-setting" ||
    location.pathname === "/project-reports" ||
    location.pathname === "/client-profile"
  ) {
    addButton = (
      <div className="row">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div>
      </div>
    );
  } else if (
    location.pathname === "/settings/company-settings" ||
    location.pathname === "/settings/localization" ||
    location.pathname === "/settings/theme-settings" ||
    location.pathname === "/settings/roles-permissions" ||
    location.pathname === "/settings/approval-setting" ||
    location.pathname === "/settings/invoice-settings" ||
    location.pathname === "/settings/salary-settings" ||
    location.pathname === "/settings/notifications-settings" ||
    location.pathname === "/settings/toxbox-setting" ||
    location.pathname === "/settings/cron-setting"
  ) {
    addButton = (
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">{props.maintitle}</h3>
        </div>
      </div>
    );
  } else if (location.pathname === "/admin-dashboard") {
    addButton = (
      <div className="row">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item active">{props.title}</li>
          </ul>
        </div>
      </div>
    );
  } else if (location.pathname === "/invoice-view") {
    addButton = (
      <div className="row">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <div className="btn-group btn-group-sm">
            <button className="btn btn-white">CSV</button>
            <button className="btn btn-white">PDF</button>
            <button className="btn btn-white">
              <i className="fa-solid fa-print fa-lg" /> Print
            </button>
          </div>
        </div>
      </div>
    );
  } else if (
    location.pathname === "/projects" ||
    location.pathname === "/clients" ||
    location.pathname === "/clients-list" ||
    location.pathname === "/project-list" ||
    location.pathname === "/employees" ||
    location.pathname === "/employees-list"
  ) {
    addButton = (
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <Link
            to="#"
            className="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target={props.modal}
          >
            <i className="fa fa-plus" /> {props.name}
          </Link>
          <div className="view-icons">
            <Link
              to={props.Linkname}
              className="grid-view btn btn-link active mx-2"
            >
              <i className="fa fa-th" />
            </Link>
            <Link to={props.Linkname1} className="list-view btn btn-link">
              <i className="fa fa-bars" />
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (
    location.pathname === "/estimates" ||
    location.pathname === "/invoices"
  ) {
    addButton = (
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <Link
            to={props.link}
            className="btn add-btn"
            data-bs-target={props.modal}
          >
            <i className="fa fa-plus" />
            {props.name}
          </Link>
        </div>
      </div>
    );
  } else if (
    location.pathname === "/employee-reports" ||
    location.pathname === "/leave-reports" ||
    location.pathname === "/daily-reports"
  ) {
    addButton = (
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div>
        <div className="col-auto">
          <Link to="#" className="btn btn-primary">
            PDF
          </Link>
        </div>
      </div>
    );
  } else if (location.pathname === "/project-view") {
    addButton = (
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">{props.maintitle}</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin-dashboard">{props.title}</Link>
              </li>
              <li className="breadcrumb-item active">{props.subtitle}</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <Link
              to="#"
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#edit_project"
            >
              <i className="fa-solid fa-plus"></i> {props.add}
            </Link>
            <Link
              to={props.menu}
              className="btn btn-white float-end me-3"
              data-bs-toggle="tooltip"
              title="Task Board"
            >
              <i className="fa-solid fa-bars"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (location.pathname === "/salary-view") {
    addButton = (
      <div className="row">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <div className="btn-group btn-group-sm">
            <button className="btn btn-white">CSV</button>
            <button className="btn btn-white">PDF</button>
            <button className="btn btn-white">
              <i className="fa fa-print fa-lg" /> Print
            </button>
          </div>
        </div>
      </div>
    );
  } else if (location.pathname === "/interview-questions") {
    addButton = (
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <Link
            to="#"
            className="btn add-btn "
            data-bs-toggle="modal"
            data-bs-target={props.modalone}
          >
            <i className="fa fa-plus" />
            {props.nameone}
          </Link>

          <Link
            to="#"
            className="btn add-btn me-2"
            data-bs-toggle="modal"
            data-bs-target={props.modaltwo}
          >
            <i className="fa fa-plus" />
            {props.nametwo}
          </Link>
        </div>
      </div>
    );
  } else {
    addButton = (
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto">
          <Link
            to="#"
            className="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target={props.modal}
          >
            <i className="fa fa-plus" />
            {props.name}
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="page-header">{addButton}</div>
    </>
  );
};

export default Breadcrumbs;
