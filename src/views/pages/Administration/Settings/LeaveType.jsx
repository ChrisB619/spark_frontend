import React from "react";
import SearchBox from "../../../../components/SearchBox";
import { Table } from "antd";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import DeleteModal from "../../../../components/modelpopup/DeleteModal";
import LeaveTypeModal from "../../../../components/modelpopup/LeaveTypeModal";

const LeaveType = () => {
  const data = [
    { id: 1, leavetype: "Medical Leave", leavedays: "12 days" },
    { id: 2, leavetype: "Loss of Pay", leavedays: "-" },
    { id: 3, leavetype: "Casual Leave", leavedays: "12 days" },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      render: (text) => (
        <div className="ant-table-row ant-table-row-level-0 ">
          <span>{text}</span>
        </div>
      ),
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Leave Type",
      dataIndex: "leavetype",
      render: (text) => (
        <div className="ant-table-row ant-table-row-level-0 ">
          <span>{text}</span>
        </div>
      ),
      sorter: (a, b) => a.leavetype.length - b.leavetype.length,
    },

    {
      title: "Leave Days",
      dataIndex: "leavedays",
      render: (text) => (
        <div className="ant-table-row ant-table-row-level-0">
          <span>{text}</span>
        </div>
      ),
      sorter: (a, b) => a.leavedays.length - b.leavedays.length,
    },
    {
      title: "Status",
      sorter: true,
      render: () => (
        <div className="ant-table-row ant-table-row-level-0 ">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="far fa-dot-circle text-success" /> Active
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="#" className="dropdown-item">
              <i className="far fa-dot-circle text-success" /> Active
            </Link>
            <Link to="#" className="dropdown-item">
              <i className="far fa-dot-circle text-danger" /> Inactive
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Action",
      sorter: true,
      className: "text-end",
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
              data-bs-target="#edit_leavetype"
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
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Leave Type"
            title="Dashboard"
            subtitle="Leave Type"
            modal="#add_leavetype"
            name="Add Leave Type"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                <Table
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        <LeaveTypeModal />
        <DeleteModal Name="Delete Leave Type" />
      </div>
    </>
  );
};

export default LeaveType;
