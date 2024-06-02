import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
  Avatar_05,
  Avatar_06,
  Avatar_08,
} from "../../../Routes/ImagePath";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { base_url } from "../../../base_urls";

const SubscribedCompany = () => {
  const [users, setUsers] = useState([]);

  const userElements = users.map((user, index) => ({
    key: index,
    id: user.id,
    title: user.title,
    value: user.value,
    period: user.period,
  }));

  const subscribeddata = [
    {
      id: 1,
      image: Avatar_08,
      Client: "Global Technologies",
      Plan: "Free Trial",
      Users: 30,
      PlanDuration: "6 Months",
      StartDate: "15 Feb 2023",
      EndDate: "14 Jul 2023",
      Amount: "$200",
      PlanStatus: "Active",
      UpdatePlan: "Change Plan",
      Status: "checkbox",
    },
    {
      id: 2,
      image: Avatar_08,
      Client: "Delta Infotech",
      Plan: "Premium",
      Users: 50,
      PlanDuration: "1 Year",
      StartDate: "15 Feb 2023",
      EndDate: "14 Feb 2023",
      Amount: "$200",
      PlanStatus: "Expired",
      UpdatePlan: "Change Plan",
      Status: "checkbox",
    },
    {
      id: 3,
      image: Avatar_06,
      Client: "Cream Inc",
      Plan: "Professional",
      Users: 10,
      PlanDuration: "1 Month",
      StartDate: "15 Feb 2023",
      EndDate: "14 Feb 2023",
      Amount: "Free",
      PlanStatus: "Active",
      UpdatePlan: "Change Plan",
      Status: "checkbox",
    },
    {
      id: 4,
      image: Avatar_05,
      Client: "Wellware Company",
      Plan: "Enterprise",
      Users: 10,
      PlanDuration: "1 Month",
      StartDate: "15 Feb 2023",
      EndDate: "14 Feb 2023",
      Amount: "Free",
      PlanStatus: "Active",
      UpdatePlan: "Change Plan",
      Status: "checkbox",
    },
    {
      id: 5,
      image: Avatar_03,
      Client: "Mustang Technologies",
      Plan: "Free Trial",
      Users: 10,
      PlanDuration: "1 Year",
      StartDate: "15 Feb 2023",
      EndDate: "14 Feb 2023",
      Amount: "Free",
      PlanStatus: "Active",
      UpdatePlan: "Change Plan",
      Status: "checkbox",
    },
    {
      id: 6,
      image: Avatar_01,
      Client: "International Software Inc",
      Plan: "Enterprise",
      Users: 10,
      PlanDuration: "1 Month",
      StartDate: "15 Feb 2023",
      EndDate: "14 Feb 2023",
      Amount: "Free",
      PlanStatus: "Active",
      UpdatePlan: "Change Plan",
      Status: "checkbox",
    },
    {
      id: 7,
      image: Avatar_02,
      Client: "Mercury Software Inc",
      Plan: "Professional",
      Users: 10,
      PlanDuration: "1 Year",
      StartDate: "15 Feb 2023",
      EndDate: "14 Feb 2023",
      Amount: "Free",
      PlanStatus: "Active",
      UpdatePlan: "Change Plan",
      Status: "checkbox",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },

    {
      title: "Client",
      dataIndex: "Client",
      render: (text, record) => (
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/profile">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.Client.length - b.Client.length,
    },

    {
      title: "Plan",
      dataIndex: "Plan",
      sorter: (a, b) => a.Plan.length - b.Plan.length,
    },
    {
      title: "Users",
      dataIndex: "Users",
      sorter: (a, b) => a.Users.length - b.Users.length,
    },

    {
      title: "PlanDuration",
      dataIndex: "PlanDuration",
      sorter: (a, b) => a.PlanDuration.length - b.PlanDuration.length,
    },
    {
      title: "StartDate",
      dataIndex: "StartDate",
      sorter: (a, b) => a.StartDate.length - b.StartDate.length,
    },
    {
      title: "EndDate",
      dataIndex: "EndDate",
      sorter: (a, b) => a.EndDate.length - b.EndDate.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "PlanStatus",
      dataIndex: "PlanStatus",
      sorter: (a, b) => a.PlanStatus.length - b.PlanStatus.length,
    },

    {
      title: "UpdatePlan",
      dataIndex: "UpdatePlan",
      render: (text, record) => (
        <span className="btn btn-primary btn-sm">{text}</span>
      ),
      sorter: (a, b) => a.UpdatePlan.length - b.UpdatePlan.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => {
        return text === "Success" ? (
          <span className="badge bg-inverse-success">Success</span>
        ) : text === "Danger" ? (
          <span className="badge bg-inverse-danger">Danger</span>
        ) : (
          text
        );
      },
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
  ];

  useEffect(() => {
    axios
      .get(base_url + "/api/subscribedcompany.json")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Subscriptions"
            title="Dashboard"
            subtitle="Subscriptions"
          />

          <div className="row">
            {userElements.map((stat, index) => (
              <div className="col-md-3" key={index}>
                <div className="stats-info">
                  <h6>{stat.title}</h6>
                  <h4>
                    {stat.value} <span>{stat.period}</span>
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={subscribeddata}
                  className="table-striped"
                  rowKey="id"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribedCompany;
