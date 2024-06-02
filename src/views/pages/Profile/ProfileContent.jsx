import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_16,
  eye,
  laptop,
} from "../../../Routes/ImagePath";
import Select from "react-select";

export const ProjectDetails = () => {
  const projectsData = [
    {
      id: 1,
      title: "Office Management",
      openTasks: 1,
      completedTasks: 9,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      deadline: "17 Apr 2019",
      projectLeader: { name: "Jeffery Lalor", avatar: "Avatar_16" },
      teamMembers: [
        { id: 1, name: "John Doe", avatar: "Avatar_02" },
        { id: 2, name: "Richard Miles", avatar: "Avatar_09" },
        { id: 3, name: "John Smith", avatar: "Avatar_10" },
        { id: 4, name: "Mike Litorus", avatar: "Avatar_05" },
      ],
    },
    {
      id: 2,
      title: "Project Management",
      openTasks: 2,
      completedTasks: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      deadline: "17 Apr 2019",
      projectLeader: { name: "Jeffery Lalor", avatar: "Avatar_16" },
      teamMembers: [
        { id: 1, name: "John Doe", avatar: "Avatar_02" },
        { id: 2, name: "Richard Miles", avatar: "Avatar_09" },
        { id: 3, name: "John Smith", avatar: "Avatar_10" },
        { id: 4, name: "Mike Litorus", avatar: "Avatar_05" },
      ],
    },
    {
      id: 3,
      title: "Video Calling App",
      openTasks: 3,
      completedTasks: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      deadline: "17 Apr 2019",
      projectLeader: { name: "Jeffery Lalor", avatar: "Avatar_16" },
      teamMembers: [
        { id: 1, name: "John Doe", avatar: "Avatar_02" },
        { id: 2, name: "Richard Miles", avatar: "Avatar_09" },
        { id: 3, name: "John Smith", avatar: "Avatar_10" },
        { id: 4, name: "Mike Litorus", avatar: "Avatar_05" },
      ],
    },
    {
      id: 4,
      title: "Hospital Administration",
      openTasks: 12,
      completedTasks: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      deadline: "17 Apr 2019",
      projectLeader: { name: "Jeffery Lalor", avatar: "Avatar_16" },
      teamMembers: [
        { id: 1, name: "John Doe", avatar: "Avatar_02" },
        { id: 2, name: "Richard Miles", avatar: "Avatar_09" },
        { id: 3, name: "John Smith", avatar: "Avatar_10" },
        { id: 4, name: "Mike Litorus", avatar: "Avatar_05" },
      ],
    },
  ];

  const assests = [
    {
      id: 1,
      image: laptop,
      Name: "Laptop",
      AssetID: "AST - 001",
      AssignedDate: "22 Nov, 2022 10:32AM",
      img: Avatar_01,
      Assignee: "John Paul Raj\r\n  john@dreamguystech.com",
      Action: eye,
    },
    {
      id: 2,
      image: laptop,
      Name: "Laptop",
      AssetID: "AST - 002",
      AssignedDate: "22 Nov, 2022 10:32AM",
      img: Avatar_02,
      Assignee: "Vinod Selvaraj\r\n   vinod.s@dreamguystech.com",
      Action: eye,
    },
    {
      id: 3,
      image: laptop,
      Name: "Dell Keyboard",
      AssetID: "AST - 003",
      AssignedDate: "22 Nov, 2022 10:32AM",
      img: Avatar_05,
      Assignee: "Harika \r\n          harika.v@dreamguystech.com",
      Action: eye,
    },
    {
      id: 4,
      image: laptop,
      Name: "Logitech Mouse",
      AssetID: "AST - 0024",
      AssignedDate: "22 Nov, 2022 10:32AM",
      img: Avatar_09,
      Assignee: "Mythili\r\n            mythili@dreamguystech.com",
      Action: eye,
    },
    {
      id: 5,
      image: laptop,
      Name: "Laptop",
      AssetID: "AST - 005",
      AssignedDate: "22 Nov, 2022 10:32AM",
      img: Avatar_11,
      Assignee: "John Paul Raj\r\n         john@dreamguystech.com",
      Action: eye,
    },
    {
      id: 6,
      image: laptop,
      Name: "Laptop",
      AssetID: "AST - 006",
      AssignedDate: "22 Nov, 2022 10:32AM",
      img: Avatar_13,
      Assignee: "Vinod Selvaraj\r\n               vinod.s@dreamguystech.com",
      Action: eye,
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
      width: "10%",
    },

    {
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => (
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          {text}
        </span>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },

    {
      title: " AssetID",
      dataIndex: "AssetID",
      sorter: (a, b) => a.AssetID.length - b.AssetID.length,
    },
    {
      title: " AssignedDate",
      dataIndex: "AssignedDate",
      sorter: (a, b) => a.AssignedDate.length - b.AssignedDate.length,
    },

    {
      title: " Assignee",
      dataIndex: "Assignee",
      render: (text, record) => (
        <span className="table-avatar">
          <Link to="/profile" className="avatar">
            <img alt="" src={record.img} />
          </Link>
          {text}
        </span>
      ),
      sorter: (a, b) => a.Assignee.length - b.Assignee.length,
    },

    {
      title: "Action",
      dataIndex: "Action",
      render: (record) => (
        <span className="delete-table me-2">
          <Link to="/user-asset-details" className="table-actions d-flex">
            <img alt="" src={eye} />
          </Link>
        </span>
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];

  const salerytype = [
    { value: 1, label: "Weekly  Type" },
    { value: 2, label: "Hourly Type" },
    { value: 3, label: "Daily Type" },
    { value: 4, label: "Monthly Type" },
  ];
  const bank = [
    { value: 1, label: "Bank transfer" },
    { value: 2, label: "Check" },
    { value: 3, label: "Cash" },
  ];
  const pf = [
    { value: 1, label: "Yes" },
    { value: 2, label: "No" },
  ];
  const esi = [
    { value: 1, label: "Yes" },
    { value: 2, label: "No" },
  ];
  const rate = [
    { value: 1, label: "1%" },
    { value: 2, label: "2%" },
    { value: 3, label: "3%" },
    { value: 4, label: "4%" },
    { value: 5, label: "5%" },
    { value: 6, label: "6%" },
    { value: 7, label: "7%" },
    { value: 8, label: "8%" },
    { value: 9, label: "9%" },
    { value: 10, label: "10%" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };
  return (
    <>
      <div className="tab-content">
        {/* Projects Tab */}
        <div className="tab-pane fade" id="emp_projects">
          <div className="row">
            {projectsData.map((project) => (
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3 d-flex" key={project.id}>
                <div className="card w-100">
                  <div className="card-body">
                    <div className="dropdown dropdown-action profile-action">
                      <Link
                        to="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-trash m-r-5" /> Delete
                        </Link>
                      </div>
                    </div>
                    <h4 className="project-title">
                      <Link to="/projects-view">{project.title}</Link>
                    </h4>
                    <small className="block text-ellipsis m-b-15">
                      <span className="text-xs">{project.openTasks}</span>{" "}
                      <span className="text-muted">open tasks, </span>
                      <span className="text-xs">
                        {project.completedTasks}
                      </span>{" "}
                      <span className="text-muted">tasks completed</span>
                    </small>
                    <p className="text-muted">{project.description}</p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">Deadline:</div>
                      <div className="text-muted">{project.deadline}</div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Project Leader :</div>
                      <ul className="team-members">
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="Jeffery Lalor"
                          >
                            <img alt="" src={Avatar_16} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Team :</div>
                      <ul className="team-members">
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="John Doe"
                          >
                            <img alt="" src={Avatar_02} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="Richard Miles"
                          >
                            <img alt="" src={Avatar_09} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="John Smith"
                          >
                            <img alt="" src={Avatar_10} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="Mike Litorus"
                          >
                            <img alt="" src={Avatar_05} />
                          </Link>
                        </li>
                        <li className="dropdown avatar-dropdown">
                          <Link
                            to="#"
                            className="all-users dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
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
                              <Link className="avatar avatar-xs" to="#">
                                <img alt="" src={Avatar_10} />
                              </Link>
                              <Link className="avatar avatar-xs" to="#">
                                <img alt="" src={Avatar_05} />
                              </Link>
                              <Link className="avatar avatar-xs" to="#">
                                <img alt="" src={Avatar_11} />
                              </Link>
                              <Link className="avatar avatar-xs" to="#">
                                <img alt="" src={Avatar_12} />
                              </Link>
                              <Link className="avatar avatar-xs" to="#">
                                <img alt="" src={Avatar_13} />
                              </Link>
                              <Link className="avatar avatar-xs" to="#">
                                <img alt="" src={Avatar_01} />
                              </Link>
                              <Link className="avatar avatar-xs" to="#">
                                <img alt="" src={Avatar_16} />
                              </Link>
                            </div>
                            <div className="avatar-pagination">
                              <ul className="pagination">
                                <li className="page-item">
                                  <Link
                                    className="page-link"
                                    to="#"
                                    aria-label="Previous"
                                  >
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="#">
                                    1
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="#">
                                    2
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link
                                    className="page-link"
                                    to="#"
                                    aria-label="Next"
                                  >
                                    <span aria-hidden="true">»</span>
                                    <span className="sr-only">Next</span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <p className="m-b-5">
                      Progress{" "}
                      <span className="text-success float-end">40%</span>
                    </p>
                    <div className="progress progress-xs mb-0">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        data-bs-toggle="tooltip"
                        title="40%"
                        style={{ width: "40%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* /Assests Tab */}
        <div className="tab-pane fade" id="emp_assets">
          <div className="table-responsive table-newdatatable">
            <Table
              columns={columns}
              dataSource={assests}
              className="table-striped"
              rowKey={(record) => record.id}
            />
          </div>
        </div>
        {/* /Bank Tab */}

        <div className="tab-pane fade" id="bank_statutory">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title"> Basic Salary Information</h3>
              <form>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Salary basis <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={salerytype}
                        placeholder="Select Basic Slery Type"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Salary amount{" "}
                        <small className="text-muted">per month</small>
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your salary amount"
                          defaultValue={0.0}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">Payment type</label>
                      <Select
                        options={bank}
                        placeholder="Select Payment Tpye"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <h3 className="card-title"> PF Information</h3>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">PF contribution</label>
                      <Select
                        options={pf}
                        placeholder="Select PF Contribution"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        PF No. <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={pf}
                        placeholder="Select PF Contribution"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">Employee PF rate</label>
                      <Select
                        options={pf}
                        placeholder="Select PF Contribution"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Additional rate <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={rate}
                        placeholder="Select Additional Rate"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">Total rate</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="N/A"
                        defaultValue="11%"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">Employee PF rate</label>
                      <Select
                        options={pf}
                        placeholder="Select Additional Rate"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Additional rate
                        <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={rate}
                        placeholder="Select Additional Rate"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">Total rate</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="N/A"
                        defaultValue="11%"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <h3 className="card-title"> ESI Information</h3>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">ESI contribution</label>
                      <Select
                        options={esi}
                        placeholder="Select ESI Contribution"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        ESI No. <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={esi}
                        placeholder="Select ESI Contribution"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Employee ESI rate
                      </label>
                      <Select
                        options={esi}
                        placeholder="Select ESI Contribution"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Additional rate <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={rate}
                        placeholder="Select ESI Contribution"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">Total rate</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="N/A"
                        defaultValue="11%"
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ListItem = ({ title, text }) => (
  <li>
    <div className="title">{title}</div>
    <div className="text">{text}</div>
  </li>
);
