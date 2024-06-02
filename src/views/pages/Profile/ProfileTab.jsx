import React from "react";
import { Link } from "react-router-dom";
import PersonalInformationModelPopup from "../../../components/modelpopup/PersonalInformationModelPopup";
import { ListItem, ProjectDetails } from "./ProfileContent";

const ProfileTab = () => {
  const personalInfoData = [
    { id: 1, title: "Passport No.", text: "9876543210" },
    { id: 2, title: "Passport Exp Date.", text: "9876543210" },
    { id: 3, title: "Tel", text: "9876543210" },
    { id: 4, title: "Nationality", text: "Indian" },
    { id: 5, title: "Religion", text: "Christian" },
    { id: 6, title: "Marital status", text: "Married" },
    { id: 7, title: "Employment of spouse", text: "No" },
    { id: 8, title: "No. of children", text: "2" },
  ];

  const primaryContactData = [
    { id: 1, title: "Name", text: "John Doe" },
    { id: 2, title: "Relationship", text: "Father" },
    { id: 3, title: "Phone", text: "9876543210, 9876543210" },
  ];

  const secondaryContactData = [
    { id: 1, title: "Name", text: "Karen Wills" },
    { id: 2, title: "Relationship", text: "Brother" },
    { id: 3, title: "Phone", text: "9876543210, 9876543210" },
  ];
  const bankInfoData = [
    { id: 1, title: "Bank name", text: "ICICI Bank" },
    { id: 2, title: "Bank account No.", text: "159843014641" },
    { id: 3, title: "IFSC Code", text: "ICI24504" },
    { id: 4, title: "PAN No", text: "TC000Y56" },
  ];
  const familyInfoData = [
    {
      id: 1,
      name: "Leo",
      relationship: "Brother",
      dob: "Feb 16th, 2019",
      phone: "9876543210",
    },
  ];

  const educationData = [
    {
      id: 1,
      name: "International College of Arts and Science (UG)",
      description: "Bsc Computer Science",
      time: "2020 - 2023",
    },
    {
      id: 2,
      name: "International College of Arts and Science (PG)",
      description: "Msc Computer Science",
      time: "2021 - 2023",
    },
    // Add more education info data as needed
  ];
  const experienceData = [
    {
      id: 1,
      name: "Web Designer at Zen Corporation",
      time: "Jan 2023 - Present (5 years 2 months)",
    },
    {
      id: 2,
      name: "Web Designer at Ron-tech",
      time: "Jan 2023 - Present (5 years 2 months)",
    },
    {
      id: 3,
      name: "Web Designer at Dalt Technology",
      time: "2023 2023 - Present (5 years 2 months)",
    },
    // Add more experience info data as needed
  ];

  return (
    <>
      <div className="tab-content">
        <div
          id="emp_profile"
          className="pro-overview tab-pane fade show active"
        >
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card profile-box flex-fill">
                <div className="card-body">
                  <h3 className="card-title">
                    Personal Informations{" "}
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#personal_info_modal"
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                  </h3>
                  <ul className="personal-info">
                    {personalInfoData.map((item, index) => (
                      <ListItem
                        id={item.id}
                        key={index}
                        title={item.title}
                        text={item.text}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card profile-box flex-fill">
                <div className="card-body">
                  <h3 className="card-title">
                    Emergency Contact{" "}
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#emergency_contact_modal"
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                  </h3>
                  <h5 className="section-title">Primary</h5>
                  <ul className="personal-info">
                    {primaryContactData.map((item, index) => (
                      <ListItem
                        id={item.id}
                        key={index}
                        title={item.title}
                        text={item.text}
                      />
                    ))}
                  </ul>
                  <hr />
                  <h5 className="section-title">Secondary</h5>
                  <ul className="personal-info">
                    {secondaryContactData.map((item, index) => (
                      <ListItem
                        id={item.id}
                        key={index}
                        title={item.title}
                        text={item.text}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card profile-box flex-fill">
                <div className="card-body">
                  <h3 className="card-title">Bank information</h3>
                  <ul className="personal-info">
                    {bankInfoData.map((item, index) => (
                      <ListItem
                        id={item.id}
                        key={index}
                        title={item.title}
                        text={item.text}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card profile-box flex-fill">
                <div className="card-body">
                  <h3 className="card-title">
                    Family Informations{" "}
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#family_info_modal"
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                  </h3>
                  <div className="table-responsive">
                    <table className="table table-nowrap">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Relationship</th>
                          <th>Date of Birth</th>
                          <th>Phone</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {familyInfoData.map((item) => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.relationship}</td>
                            <td>{item.dob}</td>
                            <td>{item.phone}</td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                                <Link
                                  aria-expanded="false"
                                  data-bs-toggle="dropdown"
                                  className="action-icon dropdown-toggle"
                                  to="#"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <Link to="#" className="dropdown-item">
                                    <i className="fa fa-pencil m-r-5" /> Edit
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    <i className="fa fa-trash m-r-5" /> Delete
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card profile-box flex-fill">
                <div className="card-body">
                  <h3 className="card-title">
                    Education Informations{" "}
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#education_info"
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                  </h3>
                  <div className="experience-box">
                    <ul className="experience-list">
                      {educationData.map((item) => (
                        <li key={item.id}>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="/" className="name">
                                {item.name}
                              </Link>
                              <div>{item.description}</div>
                              <span className="time">{item.time}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card profile-box flex-fill">
                <div className="card-body">
                  <h3 className="card-title">
                    Experience{" "}
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#experience_info"
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                  </h3>
                  <div className="experience-box">
                    <ul className="experience-list">
                      {experienceData.map((item) => (
                        <li key={item.id}>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="/" className="name">
                                {item.name}
                              </Link>
                              <span className="time">{item.time}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectDetails />
        {/* Bank Statutory Tab */}

        {/* Bank Statutory Tab */}
        {/*  Bank Tab */}
      </div>
      {/* Model Popup*/}
      <PersonalInformationModelPopup />
    </>
  );
};

export default ProfileTab;
