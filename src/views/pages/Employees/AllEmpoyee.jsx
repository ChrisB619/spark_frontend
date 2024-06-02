import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_03,
  Avatar_04,
  Avatar_05,
  Avatar_08,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_19,
} from "../../../Routes/ImagePath";
import AllEmployeeAddPopup from "../../../components/modelpopup/AllEmployeeAddPopup";
import Breadcrumbs from "../../../components/Breadcrumbs";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import EmployeeListFilter from "../../../components/EmployeeListFilter";

const AllEmployee = () => {
  const employeeData = [
    {
      id: 1,
      name: "John Doe",
      role: "Web Designer",
      avatar: Avatar_02,
    },
    {
      id: 2,
      name: "Richard Miles",
      role: "Web Developer",
      avatar: Avatar_09,
    },
    {
      id: 3,
      name: "John Smith",
      role: "Android Developer",
      avatar: Avatar_10,
    },
    {
      id: 4,
      name: "Mike Litorus",
      role: "IOS Developer",
      avatar: Avatar_05,
    },
    {
      id: 5,
      name: "Wilmer Deluna",
      role: "Team Leader",
      avatar: Avatar_11,
    },
    {
      id: 6,
      name: "Jeffrey Warden",
      role: "Web Developer",
      avatar: Avatar_12,
    },
    {
      id: 7,
      name: "Bernardo Galaviz",
      role: "Web Developer",
      avatar: Avatar_13,
    },
    {
      id: 8,
      name: "Lesley Gatlin",
      role: "Android Developer",
      avatar: Avatar_04,
    },
    {
      id: 9,
      name: "Tarah Shropshire",
      role: "Android Developer",
      avatar: Avatar_03,
    },
    {
      id: 10,
      name: "Catherine Manseau",
      role: "Android Developer",
      avatar: Avatar_08,
    },
    {
      id: 11,
      name: "Lesley Gatlin",
      role: "Android Developer",
      avatar: Avatar_10,
    },
    {
      id: 12,
      name: "Tarah Shropshire",
      role: "Android Developer",
      avatar: Avatar_19,
    },
  ];
  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Employee"
            title="Dashboard"
            subtitle="Employee"
            modal="#add_employee"
            name="Add Employee"
            Linkname="/employees"
            Linkname1="/employees-list"
          />
           <EmployeeListFilter />

          <div className="row">
            {employeeData.map((employee) => (
              <div
                className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
                key={employee.id}
              >
                <div className="profile-widget">
                  <div className="profile-img">
                    <Link to="/profile" className="avatar">
                      <img src={employee.avatar} alt="" />
                    </Link>
                  </div>
                  <div className="dropdown profile-action">
                    <Link
                      to="#"
                      className="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="material-icons">more_vert</i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> Delete
                      </Link>
                    </div>
                  </div>
                  <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                    <Link to={`/profile/${employee.id}`}>{employee.name}</Link>
                  </h4>
                  <div className="small text-muted">{employee.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AllEmployeeAddPopup />
      {/* Delete Modal */}
      <DeleteModal Name="Delete Employee" />
      {/* Delete Modal */}
    </div>
  );
};

export default AllEmployee;
