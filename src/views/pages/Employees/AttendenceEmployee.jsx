import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import Breadcrumbs from "../../../components/Breadcrumbs";
import AttendanceEmployeeFilter from "../../../components/AttendanceEmployeeFilter";
import { base_url } from "../../../base_urls";

const AttendanceEmployee = () => {
  const [users, setUsers] = useState([]);
  const [activity, setActivity] = useState([]);
  const [data, setData] = useState([]);

  const userElements = data?.map((user, index) => ({
    key: index,
    id: user.id,
    Date: user.Date,
    PunchIn: user.PunchIn,
    PunchOut: user.PunchOut,
    Production: user.Production,
    Break: user.Break,
    Overtime: user.Overtime,
  }));

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "PunchIn",
      dataIndex: "PunchIn",
      sorter: (a, b) => a.PunchIn.length - b.PunchIn.length,
    },
    {
      title: "PunchOut",
      dataIndex: "PunchOut",
      sorter: (a, b) => a.PunchOut.length - b.PunchOut.length,
    },
    {
      title: "Break",
      dataIndex: "Break",
      sorter: (a, b) => a.Break.length - b.Break.length,
    },
    {
      title: "Overtime",
      dataIndex: "Overtime",
      sorter: (a, b) => a.Overtime.length - b.Overtime.length,
    },
  ];
  useEffect(() => {
    axios
      .get(base_url + "/api/attendenceemployeedatatable.json")
      .then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    axios.get(base_url + "/api/attendenceemployee.json").then((res) => {
      // Assuming the API response is an array of objects
      const apiData = res.data;
      // Map the API data to the statisticsData format
      const mappedData = apiData?.map((data) => ({
        title: data.title,
        value: data.value,
        valuespan: data.valuespan,
        progressWidth: data.progressWidth,
        progressBarColor: data.progressBarColor,
      }));
      setUsers(mappedData);
    });
  }, []);

  useEffect(() => {
    axios
      .get(base_url + "/api/attendenceemployeeactivity.json")
      .then((res) => setActivity(res.data));
  }, []);

  return (
    <>
      <div className="page-wrapper">
        {/* /Page Header */}
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Attendance"
            title="Dashboard"
            subtitle="Attendance"
          />

          {/* /Page Header */}
          <div className="row">
            <div className="col-md-4">
              <div className="card punch-status">
                <div className="card-body">
                  <h5 className="card-title">
                    Timesheet <small className="text-muted">11 Mar 2023</small>
                  </h5>
                  <div className="punch-det">
                    <h6>Punch In at</h6>
                    <p>Wed, 11th Mar 2023 10.00 AM</p>
                  </div>
                  <div className="punch-info">
                    <div className="punch-hours">
                      <span>3.45 hrs</span>
                    </div>
                  </div>
                  <div className="punch-btn-section">
                    <button type="button" className="btn btn-primary punch-btn">
                      Punch Out
                    </button>
                  </div>
                  <div className="statistics">
                    <div className="row">
                      <div className="col-md-6 col-6 text-center">
                        <div className="stats-box">
                          <p>Break</p>
                          <h6>1.21 hrs</h6>
                        </div>
                      </div>
                      <div className="col-md-6 col-6 text-center">
                        <div className="stats-box">
                          <p>Overtime</p>
                          <h6>3 hrs</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card att-statistics">
                <div className="card-body">
                  <h5 className="card-title">Statistics</h5>
                  <div className="stats-list">
                    {Array.isArray(users) && users.length > 0 ? (
                      users.map((data, index) => (
                        <div className="stats-info" key={index}>
                          <p>
                            {data.title}{" "}
                            <strong>
                              {data.value} <small>{data.valuespan}</small>
                            </strong>
                          </p>
                          <div className="progress">
                            <div
                              className={`progress-bar ${data.progressBarColor}`}
                              role="progressbar"
                              style={{ width: data.progressWidth }}
                              aria-valuenow={data.progressWidth}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No data availble</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card recent-activity">
                <div className="card-body">
                  <h5 className="card-title">Today Activity</h5>
                  <ul className="res-activity-list">
                    {Array.isArray(activity) && activity.length > 0 ? (
                      activity.map((activity, index) => (
                        <li key={index}>
                          <p className="mb-0">{activity.title}</p>
                          <p className="res-activity-time">
                            <i className="fa-regular fa-clock"></i>{" "}
                            {activity.time}
                          </p>
                        </li>
                      ))
                    ) : (
                      <p>No activities available.</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <AttendanceEmployeeFilter />
            <div className="row">
              <div className="col-lg-12">
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
        </div>
      </div>
    </>
  );
};

export default AttendanceEmployee;
