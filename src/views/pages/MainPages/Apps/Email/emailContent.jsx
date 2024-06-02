import React from "react";
import { Link } from "react-router-dom";

const EmailContent = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card mb-0">
          <div className="card-body">
            <div className="email-header">
              <div className="row">
                <div className="col top-action-left">
                  <div className="float-start">
                    <div className="btn-group dropdown-action">
                      <button
                        type="button"
                        className="btn btn-white dropdown-toggle"
                        data-bs-toggle="dropdown">
                        Select <i className="fa fa-angle-down " />
                      </button>
                      &nbsp;
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">
                          All
                        </Link>
                        <Link className="dropdown-item" to="#">
                          None
                        </Link>
                        <div className="dropdown-divider" />
                        <Link className="dropdown-item" to="#">
                          Read
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Unread
                        </Link>
                      </div>
                    </div>
                    <div className="btn-group dropdown-action">
                      <button
                        type="button"
                        className="btn btn-white dropdown-toggle"
                        data-bs-toggle="dropdown">
                        Actions <i className="fa fa-angle-down " />
                      </button>
                      &nbsp;
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">
                          Reply
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Forward
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Archive
                        </Link>
                        <div className="dropdown-divider" />
                        <Link className="dropdown-item" to="#">
                          Mark As Read
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Mark As Unread
                        </Link>
                        <div className="dropdown-divider" />
                        <Link className="dropdown-item" to="#">
                          Delete
                        </Link>
                      </div>
                    </div>
                    <div className="btn-group dropdown-action">
                      <button
                        type="button"
                        className="btn btn-white dropdown-toggle"
                        data-bs-toggle="dropdown">
                        <i className="fa fa-folder" />{" "}
                        <i className="fa fa-angle-down" />
                      </button>
                      &nbsp;
                      <div role="menu" className="dropdown-menu">
                        <Link className="dropdown-item" to="#">
                          Social
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Forums
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Updates
                        </Link>
                        <div className="dropdown-divider" />
                        <Link className="dropdown-item" to="#">
                          Spam
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Trash
                        </Link>
                        <div className="dropdown-divider" />
                        <Link className="dropdown-item" to="#">
                          New
                        </Link>
                      </div>
                    </div>
                    <div className="btn-group dropdown-action">
                      <button
                        type="button"
                        data-bs-toggle="dropdown"
                        className="btn btn-white dropdown-toggle">
                        <i className="fa fa-tags" />{" "}
                        <i className="fa fa-angle-down" />
                      </button>
                      <div role="menu" className="dropdown-menu">
                        <Link className="dropdown-item" to="#">
                          Work
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Family
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Social
                        </Link>
                        <div className="dropdown-divider" />
                        <Link className="dropdown-item" to="#">
                          Primary
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Promotions
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Forums
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="float-start d-none d-sm-block">
                    <input
                      type="text"
                      placeholder="Search Messages"
                      className="form-control search-message"
                    />
                  </div>
                </div>
                <div className="col-auto top-action-right">
                  <div className="text-end">
                    <button
                      type="button"
                      title="Refresh"
                      data-bs-toggle="tooltip"
                      className="btn btn-white d-none d-md-inline-block mx-1">
                      <i className="fa fa-refresh" />
                    </button>
                    <div className="btn-group">
                      <Link className="btn btn-white">
                        <i className="fa fa-angle-left" />
                      </Link>
                      <Link className="btn btn-white">
                        <i className="fa fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="text-muted d-none d-md-inline-block">
                      Showing 10 of 112{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="email-content">
              <div className="table-responsive">
                <table className="table table-inbox table-hover">
                  <thead>
                    <tr>
                      <th colSpan={6}>
                        <input type="checkbox" className="checkbox-all" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className="unread clickable-row"
                      data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="fa fa-star starred" />
                        </span>
                      </td>
                      <td className="name">John Doe</td>
                      <td className="subject">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      </td>
                      <td>
                        <i className="fa fa-paperclip" />
                      </td>
                      <td className="mail-date">13:14</td>
                    </tr>
                    <tr
                      className="unread clickable-row"
                      data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="far fa-star" />
                        </span>
                      </td>
                      <td className="name">Envato Account</td>
                      <td className="subject">
                        Important account security update from Envato
                      </td>
                      <td />
                      <td className="mail-date">8:42</td>
                    </tr>
                    <tr className="clickable-row" data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="far fa-star" />
                        </span>
                      </td>
                      <td className="name">Twitter</td>
                      <td className="subject">HRMS Bootstrap Admin Template</td>
                      <td />
                      <td className="mail-date">30 Nov</td>
                    </tr>
                    <tr
                      className="unread clickable-row"
                      data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="far fa-star" />
                        </span>
                      </td>
                      <td className="name">Richard Parker</td>
                      <td className="subject">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      </td>
                      <td />
                      <td className="mail-date">18 Sep</td>
                    </tr>
                    <tr className="clickable-row" data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="far fa-star" />
                        </span>
                      </td>
                      <td className="name">John Smith</td>
                      <td className="subject">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      </td>
                      <td />
                      <td className="mail-date">21 Aug</td>
                    </tr>
                    <tr className="clickable-row" data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="far fa-star" />
                        </span>
                      </td>
                      <td className="name">me, Robert Smith (3)</td>
                      <td className="subject">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      </td>
                      <td />
                      <td className="mail-date">1 Aug</td>
                    </tr>
                    <tr
                      className="unread clickable-row"
                      data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="far fa-star" />
                        </span>
                      </td>
                      <td className="name">Codecanyon</td>
                      <td className="subject">Welcome To Codecanyon</td>
                      <td />
                      <td className="mail-date">Jul 13</td>
                    </tr>
                    <tr className="clickable-row" data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="far fa-star" />
                        </span>
                      </td>
                      <td className="name">Richard Miles</td>
                      <td className="subject">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      </td>
                      <td>
                        <i className="fa fa-paperclip" />
                      </td>
                      <td className="mail-date">May 14</td>
                    </tr>
                    <tr
                      className="unread clickable-row"
                      data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="far fa-star" />
                        </span>
                      </td>
                      <td className="name">John Smith</td>
                      <td className="subject">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      </td>
                      <td />
                      <td className="mail-date">11/11/16</td>
                    </tr>
                    <tr className="clickable-row" data-to="/email/mail-view">
                      <td>
                        <input type="checkbox" className="checkmail" />
                      </td>
                      <td>
                        <span className="mail-important">
                          <i className="fa fa-star starred" />
                        </span>
                      </td>
                      <td className="name">Mike Litorus</td>
                      <td className="subject">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      </td>
                      <td />
                      <td className="mail-date">10/31/16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailContent;
