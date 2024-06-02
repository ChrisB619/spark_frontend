import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_04,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_16,
} from "../../../Routes/ImagePath";
import AttendenceModelPopup from "../../../components/modelpopup/AttendenceModelPopup";
const TableAvatar = () => {
  return (
    <>
      <table className="table table-striped custom-table table-nowrap mb-0">
        <thead>
          <tr>
            <th>Employee</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
            <th>19</th>
            <th>20</th>
            <th>22</th>
            <th>23</th>
            <th>24</th>
            <th>25</th>
            <th>26</th>
            <th>27</th>
            <th>28</th>
            <th>29</th>
            <th>30</th>
            <th>31</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_09} />
                </Link>
                <Link to="/profile">John Doe</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <div className="half-day">
                <span className="first-off">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#attendance_info"
                  >
                    <i className="fa fa-check text-success" />
                  </Link>
                </span>
                <span className="first-off">
                  <i className="fa fa-close text-danger" />
                </span>
              </div>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <div className="half-day">
                <span className="first-off">
                  <i className="fa fa-close text-danger" />
                </span>
                <span className="first-off">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#attendance_info"
                  >
                    <i className="fa fa-check text-success" />
                  </Link>
                </span>
              </div>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_09} />
                </Link>
                <Link to="/profile">Richard Miles</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_10} />
                </Link>
                <Link to="/profile">John Smith</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_05} />
                </Link>
                <Link to="/profile">Mike Litorus</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_11} />
                </Link>
                <Link to="/profile">Wilmer Deluna</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_12} />
                </Link>
                <Link to="/profile">Jeffrey Warden</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_13} />
                </Link>
                <Link to="/profile">Bernardo Galaviz</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_01} />
                </Link>
                <Link to="/profile">Lesley Grauer</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_16} />
                </Link>
                <Link to="/profile">Jeffery Lalor</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="table-avatar">
                <Link className="avatar avatar-xs" to="/profile">
                  <img alt="" src={Avatar_04} />
                </Link>
                <Link to="/profile">Loren Gatlin</Link>
              </h2>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <i className="fa fa-close text-danger" />{" "}
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
            <td>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <i className="fa fa-check text-success" />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <AttendenceModelPopup />
    </>
  );
};
export default TableAvatar;
