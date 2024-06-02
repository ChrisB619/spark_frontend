import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
  Avatar_04,
  Avatar_05,
  Avatar_06,
  Avatar_07,
  Avatar_08,
  Avatar_09,
  Avatar_10,
} from "../../../Routes/ImagePath";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SearchBox from "../../../components/SearchBox";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import { AddTimeSheetModelPopup } from "../../../components/modelpopup/AddTimeSheetModelPopup";

const TimeSheet = () => {
  const timesheet = [
    {
      id: 1,
      img: Avatar_01,
      name: "John Doe",
      role: "Web Designer",
      date: "1 Jan 2023",
      projects: "Video Calling App",
      assignedhours: "20",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: Avatar_02,
      name: "Richard Miles",
      role: "Android Developer",
      date: "1 Jan 2023",
      projects: "Project Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      img: Avatar_03,
      name: "Jeffery Lalor ",
      role: "Team Leader",
      date: "1 Jan 2023",
      projects: "Ware house developement",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      img: Avatar_04,
      name: "Jeffrey Warden",
      role: "Web Developer ",
      date: "1 Jan 2023",
      projects: "Project Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      img: Avatar_05,
      name: "John Doe",
      role: "Web Designer",
      date: "1 Jan 2023",
      projects: "Office Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      img: Avatar_06,
      name: "John Smith ",
      role: "Android Developer",
      date: "1 Jan 2023",
      projects: "Video Calling App",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      img: Avatar_07,
      name: " Lesley Grauer",
      role: "Team Leader",
      date: "1 Jan 2023",
      projects: "Hospital Administration",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      img: Avatar_08,
      name: " Loren Gatlin ",
      role: "Android Developer",
      date: "1 Jan 2023",
      projects: "Office Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      img: Avatar_09,
      name: " Mike Litorus",
      role: "Android DeveloperIOS Developer",
      date: "1 Jan 2023",
      projects: "Hospital Administration",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 10,
      img: Avatar_10,
      name: "Richard Miles",
      role: "Web Developer",
      date: "1 Jan 2023",
      projects: "Project Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="img" src={`${record.img}`} /> {/* Updated field name */}
          </Link>
          {text} <span>{record.role}</span>
        </span>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },

    {
      title: "Projects",
      dataIndex: "projects",
      sorter: (a, b) => a.projects.length - b.projects.length,
    },

    {
      title: "Assigned Hours",
      dataIndex: "assignedhours",
      sorter: (a, b) => a.assignedhours.length - b.assignedhours.length,
    },

    {
      title: "Hours",
      dataIndex: "hours",
      sorter: (a, b) => a.hours.length - b.hours.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text) => (
        <span className="d-none d-sm-table-cell col-md-4">{text}</span>
      ),
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Action",

      render: () => (
        <div className="dropdown dropdown-action text-end">
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
              data-bs-target="#edit_todaywork"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.length - b.length,
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Time Sheet"
            title="Dashboard"
            subtitle="Time Sheet"
            modal="#add_todaywork"
            name="Add Today Work"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                <Table
                  columns={columns}
                  dataSource={timesheet}
                  className="table-striped"
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <AddTimeSheetModelPopup />
      <DeleteModal Name="Delete Work Details" />
    </>
  );
};

export default TimeSheet;
