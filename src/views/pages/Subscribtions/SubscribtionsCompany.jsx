import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import axios from "axios";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { base_url } from "../../../base_urls";

const SubscribtionsCompany = () => {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("monthly"); // 'monthly' is initially active

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      features: ["1 User", "5 Projects", "5 GB Storage", "Unlimited Message"],
    },
    {
      name: "Professional",
      price: "$21",
      pricemo: "/mo",
      features: [
        "30 Users",
        "50 Projects",
        "100 GB Storage",
        "Unlimited Message",
        "24/7 Customer Support",
      ],
    },
    {
      name: "Enterprise",
      price: "$38",
      pricemo: "/mo",
      features: [
        "Unlimited Users",
        "Unlimited Projects",
        "500 GB Storage",
        "Unlimited Message",
        "Voice and Video Call",
        "24/7 Customer Support",
      ],
    },
  ];
  const pricingPlansyearly = [
    {
      name: "Free",
      price: "$0",
      features: ["1 User", "5 Projects", "5 GB Storage", "Unlimited Message"],
    },
    {
      name: "Professional",
      price: "$199",
      pricemo: "/mo",
      features: [
        "30 Users",
        "50 Projects",
        "100 GB Storage",
        "Unlimited Message",
        "24/7 Customer Support",
      ],
    },
    {
      name: "Enterprise",
      price: "$399",
      pricemo: "/mo",
      features: [
        "Unlimited Users",
        "Unlimited Projects",
        "500 GB Storage",
        "Unlimited Message",
        "Voice and Video Call",
        "24/7 Customer Support",
      ],
    },
  ];

  const userElements = users.map((user, index) => ({
    key: index,
    id: user.id,
    Plan: user.Plan,
    PlanType: user.PlanType,
    CreateDate: user.CreateDate,
    ModifiedDate: user.ModifiedDate,
    Amount: user.Amount,
    UpGradePlan: user.UpGradePlan,
  }));

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
      width: "10%",
    },
    {
      title: "Plan",
      dataIndex: "Plan",
      sorter: (a, b) => a.Plan.length - b.Plan.length,
    },
    {
      title: "PlanType",
      dataIndex: "PlanType",
      sorter: (a, b) => a.PlanType.length - b.PlanType.length,
    },
    {
      title: "CreateDate",
      dataIndex: "CreateDate",
      sorter: (a, b) => a.CreateDate.length - b.CreateDate.length,
    },
    {
      title: "ModifiedDate",
      dataIndex: "ModifiedDate",
      sorter: (a, b) => a.ModifiedDate.length - b.ModifiedDate.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },

    {
      title: "UpGradePlan",
      dataIndex: "UpGradePlan",
      render: (text) => <span className="btn btn-primary btn-sm">{text}</span>,
      sorter: (a, b) => a.UpGradePlan.length - b.UpGradePlan.length,
    },
  ];

  useEffect(() => {
    axios
      .get(base_url + "/api/subscribtioncompant.json")
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
            modal="#add_plan"
            name="Add Subscriptions"
          />
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* Plan Tab */}
              <div className="row justify-content-center mb-4">
                <div className="col-auto">
                  <nav className="nav btn-group">
                    <Link
                      to="#monthly"
                      className={`btn ${
                        activeTab === "monthly"
                          ? "btn-outline-secondary active"
                          : "btn-outline-secondary"
                      }`}
                      data-bs-toggle="tab"
                      onClick={() => handleTabChange("monthly")}
                    >
                      Monthly Plan
                    </Link>
                    <Link
                      to="#annual"
                      className={`btn ${
                        activeTab === "annual"
                          ? "btn-outline-secondary active"
                          : "btn-outline-secondary"
                      }`}
                      data-bs-toggle="tab"
                      onClick={() => handleTabChange("annual")}
                    >
                      Annual Plan
                    </Link>
                  </nav>
                </div>
              </div>
              {/* Plan Tab */}
              <div className="tab-content">
                {/* Monthly Tab */}
                <div className="tab-pane fade active show" id="monthly">
                  <div className="row mb-30 equal-height-cards">
                    <div className="row">
                      {pricingPlans.map((plan, index) => (
                        <div className="col-md-4" key={index}>
                          <div className="card pricing-box">
                            <div className="card-body d-flex flex-column">
                              <div className="mb-4">
                                <h3>{plan.name}</h3>
                                <span className="display-4 me-1">
                                  {plan.price}
                                </span>
                                <span>{plan.pricemo}</span>
                              </div>
                              <ul>
                                {plan.features.map((feature, featureIndex) => (
                                  <li
                                    key={featureIndex}
                                    className={
                                      feature.includes("1 User") ||
                                      feature.includes("30 Users") ||
                                      feature.includes("Unlimited Users")
                                        ? "bold-text"
                                        : ""
                                    }
                                  >
                                    <i className="fa fa-check" /> {feature}
                                  </li>
                                ))}
                              </ul>
                              <Link
                                to="#"
                                className="btn btn-lg btn-secondary mt-auto"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_plan"
                              >
                                Edit
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Monthly Plan Details */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card card-table mb-0">
                        <div className="card-header">
                          <h4 className="card-title mb-0">Plan Details</h4>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <Table
                              columns={columns}
                              dataSource={
                                userElements?.length > 0 ? userElements : []
                              }
                              className="table-striped"
                              rowKey={(record) => record.id}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade active show" id="annual">
                  <div className="row mb-30 equal-height-cards">
                    {pricingPlansyearly.map((plan, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="card pricing-box">
                          <div className="card-body d-flex flex-column">
                            <div className="mb-4">
                              <h3>{plan.name}</h3>
                              <span className="display-4 me-1">
                                {plan.price}
                              </span>
                              <span>{plan.pricemo}</span>
                            </div>
                            <ul>
                              {plan.features.map((feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className={
                                    feature.includes("1 User") ||
                                    feature.includes("30 Users") ||
                                    feature.includes("Unlimited Users")
                                      ? "bold-text"
                                      : ""
                                  }
                                >
                                  <i className="fa fa-check" /> {feature}
                                </li>
                              ))}
                            </ul>
                            <Link
                              to="#"
                              className="btn btn-lg btn-secondary mt-auto"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_plan"
                            >
                              Edit
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Monthly Plan Details */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card card-table mb-0">
                        <div className="card-header">
                          <h4 className="card-title mb-0">Plan Details</h4>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <Table
                              columns={columns}
                              dataSource={
                                userElements?.length > 0 ? userElements : []
                              }
                              className="table-striped"
                              rowKey={(record) => record.id}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribtionsCompany;
