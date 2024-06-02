/* eslint-disable no-unused-expressions */

import { Table } from "antd";
import { AddHoliday } from "../../../components/modelpopup/AddHoliday";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { base_url } from "../../../base_urls";

const Holidays = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(base_url + "/api/holiday.json").then((res) => setUsers(res.data));
  }, []);

  const userElements = users.map((user, index) => ({
    key: index,
    id: user.id,
    Title: user.Title,
    HolidayDate: user.HolidayDate,
    Day: user.Day,
  }));

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Title",
      dataIndex: "Title",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.Title.length - b.Title.length,
    },
    {
      title: "HolidayDate",
      dataIndex: "HolidayDate",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.HolidayDate.length - b.HolidayDate.length,
    },
    {
      title: "Day",
      dataIndex: "Day",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.Day.length - b.Day.length,
    },
    {
      title: "Action",
      render: () => (
        <div className="dropdown dropdown-action ">
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
              data-bs-target="#edit_holiday"
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
      ),
      sorter: true,
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Holidays"
            title="Dashboard"
            subtitle="Holidays"
            modal="#add_holiday"
            name="Add Holiday"
          />

          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={userElements?.length > 0 ? userElements : []}
                  className="table-striped"
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <AddHoliday />
      <DeleteModal Name="Delete Holiday" />
    </>
  );
};

export default Holidays;
