import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Avatar_16,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
} from "../../Routes/ImagePath/index";
import { Link } from "react-router-dom";
import Select from "react-select";

const TaskboardModal = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const SelectOptions = [
    { value: 1, label: "Select" },
    { value: 2, label: "High" },
    { value: 3, label: "Normal" },
    { value: 4, label: "Low" },
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
      <div
        id="add_task_board"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Task Board</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">Task Board Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block mb-3 task-board-color">
                  <label className="col-form-label">Task Board Color</label>
                  <div className="board-color-list">
                    <label className="board-control board-primary">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="primary"
                        defaultChecked
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-success">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="success"
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-info">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="info"
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-purple">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="purple"
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-warning">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="warning"
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-danger">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="danger"
                      />
                      <span className="board-indicator" />
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="edit_task_board"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task Board</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">Task Board Name</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Pending"
                  />
                </div>
                <div className="input-block mb-3 task-board-color">
                  <label className="col-form-label">Task Board Color</label>
                  <div className="board-color-list">
                    <label className="board-control board-primary">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="primary"
                        defaultChecked
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-success">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="success"
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-info">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="info"
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-purple">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="purple"
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-warning">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="warning"
                      />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-danger">
                      <input
                        name="radio"
                        type="radio"
                        className="board-control-input"
                        defaultValue="danger"
                      />
                      <span className="board-indicator" />
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="new_project" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Create New Project</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">Project Name</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Assign Leader Modal */}
      <div id="assign_leader" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign Leader to this project</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input
                  placeholder="Search to add a leader"
                  className="form-control search-input"
                  type="text"
                />
                <button className="btn btn-primary">Search</button>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img src={Avatar_09} alt="User Images" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img src={Avatar_10} alt="images" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="chat-block d-flex">
                        <span className="avatar flex-shrink-0">
                          <img src={Avatar_16} alt="Images" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button
                  className="btn btn-primary submit-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="reset"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Assign Leader Modal */}
      {/* Assign User Modal */}
      <div id="assign_user" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign the user to this project</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input
                  placeholder="Search a user to assign"
                  className="form-control search-input"
                  type="text"
                />
                <button className="btn btn-primary">Search</button>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar_09} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar_10} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar_16} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button
                  className="btn btn-primary submit-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="reset"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Assign User Modal */}
      {/* Add Task Modal */}
      <div
        id="add_task_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Task</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">Task Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Task Priority</label>
                  <Select
                    options={SelectOptions}
                    placeholder="Select"
                    styles={customStyles}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Due Date</label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate1}
                      onChange={handleDateChange1}
                      className="form-control floating datetimepicker"
                      type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>{" "}
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Task Followers</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search to add"
                  />
                  <div className="task-follower-list">
                    <span data-bs-toggle="tooltip" title="John Doe">
                      <img
                        src={Avatar_02}
                        className="avatar"
                        alt="John Doe"
                        width={20}
                        height={20}
                      />
                      <i className="fa fa-times" />
                    </span>
                    <span data-bs-toggle="tooltip" title="Richard Miles">
                      <img
                        src={Avatar_09}
                        className="avatar"
                        alt="Richard Miles"
                        width={20}
                        height={20}
                      />
                      <i className="fa fa-times" />
                    </span>
                    <span data-bs-toggle="tooltip" title="John Smith">
                      <img
                        src={Avatar_10}
                        className="avatar"
                        alt="John Smith"
                        width={20}
                        height={20}
                      />
                      <i className="fa fa-times" />
                    </span>
                    <span data-bs-toggle="tooltip" title="Mike Litorus">
                      <img
                        src={Avatar_05}
                        className="avatar"
                        alt="Mike Litorus"
                        width={20}
                        height={20}
                      />
                      <i className="fa fa-times" />
                    </span>
                  </div>
                </div>
                <div className="submit-section text-center">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Task Modal */}
      {/* Edit Task Modal */}
      <div
        id="edit_task_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">Task Name</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Website Redesign"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Task Priority</label>
                  <Select
                    options={SelectOptions}
                    placeholder="Select"
                    styles={customStyles}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Due Date</label>
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate2}
                      onChange={handleDateChange2}
                      className="form-control floating datetimepicker"
                      type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">Task Followers</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search to add"
                  />
                  <div className="task-follower-list">
                    <span data-bs-toggle="tooltip" title="John Doe">
                      <img
                        src={Avatar_02}
                        className="avatar"
                        alt="John Doe"
                        width={20}
                        height={20}
                      />
                      <i className="fa fa-times" />
                    </span>
                    <span data-bs-toggle="tooltip" title="Richard Miles">
                      <img
                        src={Avatar_09}
                        className="avatar"
                        alt="Richard Miles"
                        width={20}
                        height={20}
                      />
                      <i className="fa fa-times" />
                    </span>
                    <span data-bs-toggle="tooltip" title="John Smith">
                      <img
                        src={Avatar_10}
                        className="avatar"
                        alt="John Smith"
                        width={20}
                        height={20}
                      />
                      <i className="fa fa-times" />
                    </span>
                    <span data-bs-toggle="tooltip" title="Mike Litorus">
                      <img
                        src={Avatar_05}
                        className="avatar"
                        alt="Mike Litorus"
                        width={20}
                        height={20}
                      />
                      <i className="fa fa-times" />
                    </span>
                  </div>
                </div>
                <div className="submit-section text-center">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Task Modal */}
    </>
  );
};

export default TaskboardModal;
