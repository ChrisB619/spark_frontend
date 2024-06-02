import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
} from "../../../../../Routes/ImagePath";

const EmployeeReportTable = () => {
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      number: "#0001",
      employeetype: "Employee",
      email: "johndoe@example.com",
      department: "Design",
      designation: "UI Design",
      joiningdate: "20 Aug 2023",
      dob: "03 Mar 1992",
      martialstatus: "Married",
      gender: "Male",
      terminateddate: "-",
      relievingdate: "-",
      salary: "$20000",
      address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
      contactnumber: "9876543210",
      emergencycontactdetails: "7894561235",
      experience: "0 years 4 months and 9 days",
    },

    {
      id: 2,
      image: Avatar_05,
      name: "Richard Miles",
      number: "#0002",
      employeetype: "Employee",
      email: "richardmiles@example.com",
      department: "Android Developer",
      designation: "IT Support",
      joiningdate: "01 Jul 2023",
      dob: "05 Dec 1979",
      martialstatus: "Single",
      gender: "Male",
      terminateddate: "-",
      relievingdate: "-",
      salary: "$15000",
      address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
      contactnumber: "9876543210",
      emergencycontactdetails: "7894561235",
      experience: "0 years 5 months and 24 days",
    },

    {
      id: 3,
      image: Avatar_09,
      name: "Mike Litorous",
      number: "#0004",
      employeetype: "Employee",
      email: "mikelitorous@example.com",
      department: "IOS Developer",
      designation: "IT Support",
      joiningdate: "01 Jul 2023",
      dob: "05 jan 1981",
      martialstatus: "Single",
      gender: "Male",
      terminateddate: "-",
      relievingdate: "-",
      salary: "$16000",
      address: "1920 Bayonne Ave, Flat Township, NJ, 21345",
      contactnumber: "9764536733",
      emergencycontactdetails: "7894561235",
      experience: "4 years 3 months and 08 days",
    },
  ];

  const columns = [
    {
      title: "Employee Name",
      dataIndex: "name",
      render: (text, record) => (
        <div className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile" className="text-primary">
            {text} <span>{record.number}</span>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Employee Type",
      dataIndex: "employeetype",
      sorter: (a, b) => a.employeetype.length - b.employeetype.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text) => <p className="text-info">{text}</p>,
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Designation",
      dataIndex: "designation",
      sorter: (a, b) => a.designation.length - b.designation.length,
    },
    {
      title: "Joining Date",
      dataIndex: "joiningdate",
      sorter: (a, b) => a.joiningdate.length - b.joiningdate.length,
    },
    {
      title: "DOB",
      dataIndex: "dob",
      sorter: (a, b) => a.dob.length - b.dob.length,
    },
    {
      title: "Martial Status",
      dataIndex: "martialstatus",
      sorter: (a, b) => a.martialstatus.length - b.martialstatus.length,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.length - b.gender.length,
    },
    {
      title: "Terminated Date",
      dataIndex: "terminateddate",
      sorter: (a, b) => a.terminateddate.length - b.terminateddate.length,
    },
    {
      title: "Relieving Date",
      dataIndex: "relievingdate",
      sorter: (a, b) => a.relievingdate.length - b.relievingdate.length,
    },
    {
      title: "Salary",
      dataIndex: "salary",
      sorter: (a, b) => a.salary.length - b.salary.length,
    },

    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address.length - b.address.length,
    },

    {
      title: "Contact Number",
      dataIndex: "contactnumber",
      sorter: (a, b) => a.contactnumber.length - b.contactnumber.length,
    },

    {
      title: "Emercency Contact Details",
      dataIndex: "emergencycontactdetails",
      sorter: (a, b) =>
        a.emergencycontactdetails.length - b.emergencycontactdetails.length,
    },
    {
      title: "Experience",
      dataIndex: "experience",
      sorter: (a, b) => a.experience.length - b.experience.length,
    },
    {
      title: "Status",
      render: () => (
        <button className="btn btn-outline-success btn-sm">Active</button>
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

export default EmployeeReportTable;
