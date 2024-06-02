import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../../../../../assets/json/contactlist";

const ContactContents = () => {
  const data = Contacts.Contacts;
  return (
    <div className="chat-contents">
      <div className="chat-content-wrap">
        <div className="chat-wrap-inner">
          <div className="contact-box">
            <div className="row">
              <div className="contact-cat col-sm-4 col-lg-3">
                <Link
                  to="#"
                  className="btn btn-primary btn-block w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#add_contact">
                  <i className="fa fa-plus" /> Add Contact
                </Link>
                <div className="roles-menu">
                  <ul>
                    <li className="active">
                      <Link to="#">All</Link>
                    </li>
                    <li>
                      <Link to="#">Company</Link>
                    </li>
                    <li>
                      <Link to="#">Client</Link>
                    </li>
                    <li>
                      <Link to="#">Staff</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contacts-list col-sm-8 col-lg-9">
                <ul className="contact-list">
                  {data.map((contact, index) => (
                    <li key={index}>
                      <div className="contact-cont">
                        <div className="float-start user-img">
                          <Link
                            to="/profile"
                            className="avatar">
                            <img
                              className="rounded-circle"
                              alt=""
                              src={contact.imageSrc}
                            />
                            <span className="status online" />
                          </Link>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            {contact.name}
                          </span>
                          <span className="contact-date">
                            {contact.jobTitle}
                          </span>
                        </div>
                        <ul className="contact-action">
                          <li className="dropdown dropdown-action">
                            <Link
                              to="#"
                              className="dropdown-toggle action-icon"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link
                                className="dropdown-item"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_contact">
                                Edit
                              </Link>
                              <Link
                                className="dropdown-item"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_contact">
                                Delete
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="contact-alphapets">
                <div className="alphapets-inner">
                  <Link to="#">A</Link>
                  <Link to="#">B</Link>
                  <Link to="#">C</Link>
                  <Link to="#">D</Link>
                  <Link to="#">E</Link>
                  <Link to="#">F</Link>
                  <Link to="#">G</Link>
                  <Link to="#">H</Link>
                  <Link to="#">I</Link>
                  <Link to="#">J</Link>
                  <Link to="#">K</Link>
                  <Link to="#">L</Link>
                  <Link to="#">M</Link>
                  <Link to="#">N</Link>
                  <Link to="#">O</Link>
                  <Link to="#">P</Link>
                  <Link to="#">Q</Link>
                  <Link to="#">R</Link>
                  <Link to="#">S</Link>
                  <Link to="#">T</Link>
                  <Link to="#">U</Link>
                  <Link to="#">V</Link>
                  <Link to="#">W</Link>
                  <Link to="#">X</Link>
                  <Link to="#">Y</Link>
                  <Link to="#">Z</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContents;
