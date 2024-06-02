import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_19,
  Avatar_29,
} from "../../../../../Routes/ImagePath";

const ProjectReportTable = () => {
  const data = [
    {
      id: "1",
      ProjectTitle: "Hospital Administration",
      ClientName: "Global Technologies",
      StartDate: "9 Jan 2023",
      EndDate: "10 Apr 2023",
      Status: "Active",
      image: Avatar_19,
      Name_1: "John Doe",
      Avatar_1: Avatar_02,
      Name_2: "Richard Miles",
      Avatar_2: Avatar_09,
      Name_3: "John Smith",
      Avatar_3: Avatar_10,
      Name_4: "Mike Litorus",
      Avatar_4: Avatar_05,
    },
    {
      id: "2",
      ProjectTitle: "Office Management",
      ClientName: "Delta Infotech",
      StartDate: "10 Dec 2023",
      EndDate: "2 May 2023",
      Status: "Active",
      image: Avatar_29,
      Name_1: "John Doe",
      Avatar_1: Avatar_02,
      Name_2: "Richard Miles",
      Avatar_2: Avatar_09,
      Name_3: "John Smith",
      Avatar_3: Avatar_10,
      Name_4: "Mike Litorus",
      Avatar_4: Avatar_05,
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Project Title",
      dataIndex: "ProjectTitle",
      sorter: (a, b) => a.ProjectTitle.localeCompare(b.ProjectTitle),
    },
    {
      title: "Client Name",
      dataIndex: "ClientName",
      render: (text, record) => (
        <div className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile">
            {text} <span>{record.role}</span>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.ClientName.length - b.ClientName.length,
    },
    {
      title: "Start Date",
      dataIndex: "StartDate",
      sorter: (a, b) => new Date(a.StartDate) - new Date(b.StartDate),
    },
    {
      title: "End Date",
      dataIndex: "EndDate",
      sorter: (a, b) => new Date(a.EndDate) - new Date(b.EndDate),
    },
    {
      title: "Status",
      dataIndex: "Status",
      sorter: (a, b) => a.Status.localeCompare(b.Status),
    },
    {
      title: "Team",
      dataIndex: "Team",
      render: () => (
        <ul className="team-members">
          <li>
            <Link to="#" title="John Doe" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_02} />
            </Link>
          </li>
          <li>
            <Link to="#" title="Richard Miles" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_09} />
            </Link>
          </li>
          <li>
            <Link to="#" title="Richard Miles" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_10} />
            </Link>
          </li>
          <li>
            <Link to="#" title="Richard Miles" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_19} />
            </Link>
          </li>
          <li className="dropdown avatar-dropdown">
            <Link
              to="#"
              className="all-users dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              +15
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="avatar-group">
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_02} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_09} />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <Table
            className="table-striped"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectReportTable;
