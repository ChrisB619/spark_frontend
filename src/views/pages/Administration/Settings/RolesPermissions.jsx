import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../../../../components/modelpopup/DeleteModal";
import RolesPermissionsModal from "../../../../components/modelpopup/RolesPermissionsModal";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const RolesPermissions = () => {
  const tableData = [
    {
      category: "Employee",
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
    },
    {
      category: "Holidays",
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
    },
    {
      category: "Leaves",
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
    },
    {
      category: "Events",
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
    },
  ];
  const notificationItems = [
    { id: "staff_module", label: "Employee", defaultChecked: false },
    { id: "holidays_module", label: "Holidays", defaultChecked: true },
    { id: "leave_module", label: "Leaves", defaultChecked: true },
    { id: "events_module", label: "Events", defaultChecked: true },
    { id: "chat_module", label: "Chat", defaultChecked: true },
    { id: "job_module", label: "Jobs", defaultChecked: false },
  ];
  const roles = [
    "Administrator",
    "CEO",
    "Manager",
    "Team Leader",
    "Accountant",
    "Web Developer",
    "Web Designer",
    "HR",
    "UI/UX Developer",
    "SEO Analyst",
  ];
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs maintitle="Roles & Permissions" />

          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3">
              <Link
                to="#"
                className="btn btn-primary btn-block w-100"
                data-bs-toggle="modal"
                data-bs-target="#add_role"
              >
                <i className="fa fa-plus" /> Add Roles
              </Link>
              <div className="roles-menu">
                <ul>
                  {roles.map((role, index) => (
                    <li key={index} className={index === 0 ? "active" : ""}>
                      <Link to="#">
                        {role}
                        <span className="role-action">
                          <span
                            className="action-circle large me-1"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-9">
              <h6 className="card-title m-b-20">Module Access</h6>
              <div className="m-b-30">
                <ul className="list-group notification-list">
                  {notificationItems.map((item) => (
                    <li key={item.id} className="list-group-item">
                      {item.label}
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id={item.id}
                          className="check"
                          defaultChecked={item.defaultChecked}
                        />
                        <label htmlFor={item.id} className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="table-responsive">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Module Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((categoryData, index) => (
                      <tr key={index}>
                        <td>{categoryData.category}</td>
                        {categoryData.items.map((item, itemIndex) => (
                          <td key={itemIndex} className="text-center">
                            <label className="custom_check">
                              <input type="checkbox" defaultChecked="Checked" />
                              <span className="checkmark" />
                            </label>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        <RolesPermissionsModal />
        <DeleteModal Name="Role" />
      </div>
    </>
  );
};

export default RolesPermissions;
