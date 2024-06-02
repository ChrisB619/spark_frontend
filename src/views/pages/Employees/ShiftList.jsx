import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { Table } from "antd";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import ShiftModelPopup from "../../../components/modelpopup/ShiftModelPopup";
import ScheduleModelPopup from "../../../components/modelpopup/ScheduleModelPopup";
import SearchBox from "../../../components/SearchBox";

const ShiftList = () => {
  const me = 1;
  const data = [
    {
      id: 1,
      shift_name: "10'o clock Shift",
      min_start_time: "09:00:00 am",
      start_time: "10:00:00 am",
      max_start_time: "10:30:00 am",
      min_end_time: "06:00:00 pm",
      end_time: "07:00:00 pm",
      max_end_time: "07:00:00 pm",
      break_time: "30 mins",
    },
    {
      id: 2,
      shift_name: "10:30 shift",
      min_start_time: "10:00:00 am",
      start_time: "10:30:00 am",
      max_start_time: "11:00:00 am",
      min_end_time: "06:30:00 pm",
      end_time: "06:30:00 pm",
      max_end_time: "07:30:00 pm",
      break_time: "45 mins",
    },
    {
      id: 3,
      shift_name: "Daily Rout",
      min_start_time: "06:00:00 am",
      start_time: "06:30:00 am",
      max_start_time: "06:00:00 am",
      min_end_time: "03:00:00 pm",
      end_time: "03:30:00 pm",
      max_end_time: "04:00:00 pm",
      break_time: "60 mins",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      className: me - 1,
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Shift Name",
      dataIndex: "shift_name",
      className: me - 1,
      sorter: (a, b) => a.shift_name.length - b.shift_name.length,
    },
    {
      title: "Min Start Time",
      dataIndex: "min_start_time",
      className: me - 1,
      sorter: (a, b) => a.min_start_time.length - b.min_start_time.length,
    },

    {
      title: "Start Time",
      dataIndex: "start_time",
      className: me - 1,
      sorter: (a, b) => a.start_time.length - b.start_time.length,
    },

    {
      title: "Max Start Time",
      dataIndex: "max_start_time",
      className: me - 1,

      sorter: (a, b) => a.max_start_time.length - b.max_start_time.length,
    },

    {
      title: "Min End Time",
      dataIndex: "min_end_time",

      sorter: (a, b) => a.min_end_time.length - b.min_end_time.length,
    },
    {
      title: "End Time",
      dataIndex: "end_time",

      sorter: (a, b) => a.end_time.length - b.end_time.length,
    },
    {
      title: "Max End Time",
      dataIndex: "max_end_time",

      sorter: (a, b) => a.max_end_time.length - b.max_end_time.length,
    },
    {
      title: "Break Time",
      dataIndex: "break_time",

      sorter: (a, b) => a.break_time.length - b.break_time.length,
    },
    {
      title: () => (
        <div className="ant-table-column-sorters text-end">Status</div>
      ),
      render: () => (
        <div className="ant-table-row ant-table-row-level-0 text-end">
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
      sorter: true,
    },
    {
      title: "Action",
      render: () => (
        <div className="dropdown dropdown-action">
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
              data-bs-target="#edit_shift"
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
      sorter: true,
    },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Shift List</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Employees</Link>
                  </li>
                  <li className="breadcrumb-item active">Shift List</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn m-r-5"
                  data-bs-toggle="modal"
                  data-bs-target="#add_shift"
                >
                  Add Shifts
                </Link>
                <Link
                  to="#"
                  className="btn add-btn m-r-5"
                  data-bs-toggle="modal"
                  data-bs-target="#add_schedule"
                >
                  {" "}
                  Assign Shifts
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Content Starts */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
                <Table
                  className="table-striped"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
          {/* /Content End */}
        </div>
        {/* /Page Content */}
      </div>
      {/* /Page Wrapper */}
      {/* Add Shift Modal */}
      <ScheduleModelPopup />
      <ShiftModelPopup />
      <DeleteModal Name="Delete Shift" />
    </>
  );
};

export default ShiftList;
