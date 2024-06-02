import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// import DeleteModal from "../../../../../components/modelpopup/deletePopup";

const OvertimeTable = () => {
  const data = [
    {
      id: 1,
      name: "Normal day OT 1.5x",
      rate: "Hourly 1.5",
    },
    {
      id: 2,
      name: "Public holiday OT 3.0x",
      rate: "Hourly 3",
    },
    {
      id: 3,
      name: "Rest day OT 2.0x",
      rate: "Hourly 2",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
      title: "Rate",
      dataIndex: "rate",
      sorter: (a, b) => a.rate.length - b.rate.length,
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
              data-bs-target="#edit_overtime"
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
    },
  ];

  return (
    <>
      <div className="text-end mb-4 clearfix">
        <button
          className="btn btn-primary add-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#add_overtime"
        >
          <i className="fa-solid fa-plus" /> Add Overtime
        </button>
      </div>

      <div className="payroll-table card">
        <div className="table-responsive">
          <Table
            className="table table-hover table-radius"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
          />
        </div>
      </div>

      {/* <DeleteModal Name="Delete Overtime" /> */}
    </>
  );
};

export default OvertimeTable;
