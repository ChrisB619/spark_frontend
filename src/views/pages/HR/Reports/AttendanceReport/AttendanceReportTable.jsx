import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AttendanceReportTable = () => {
  const data = [
    {
      id: 1,
      date: "1 Jan 2023",
      column2: "-",
      column3: "-",
      column4: "-",
    },
    {
      id: 2,
      date: "2 Jan 2023",
      column2: "-",
      column3: "-",
      column4: "-",
    },
    {
      id: 3,
      date: "3 Jan 2023",
      column2: "-",
      column3: "-",
      column4: "-",
    },
    {
      id: 4,
      date: "4 Jan 2023",
      column2: "-",
      column3: "Week Off",
      column4: "-",
    },
    {
      id: 5,
      date: "5 Jan 2023",
      column2: "-",
      column3: "Week Off",
      column4: "-",
    },
    {
      id: 6,
      date: "6 Jan 2023",
      column2: "-",
      column3: "-",
      column4: "-",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Clock In",
      dataIndex: "column2",
      sorter: (a, b) => a.column2.length - b.column2.length,
    },

    {
      title: "Clock Out",
      dataIndex: "column3",
      render: (text) => (
        <Link className={text === "Week Off" ? "text-danger" : ""}>{text}</Link>
      ),
      sorter: (a, b) => a.column3.length - b.column3.length,
    },
    {
      title: "Work Status",
      dataIndex: "column4",
      sorter: (a, b) => a.column4.length - b.column4.length,
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
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AttendanceReportTable;
