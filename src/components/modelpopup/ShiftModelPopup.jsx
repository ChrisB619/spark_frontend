import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimePicker } from "antd";
import Select from "react-select";

dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  // console.log(time, timeString);
};

const ShiftModelPopup = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const employee = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
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
      <div id="add_shift" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Shift</h5>
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
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Shift Name <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time ">
                        <input className="form-control timepicker" />
                        <span className="input-group-text">
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Min Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Max Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Min End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Max End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>Break Time (In Minutes) </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input me-1"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Recurring Shift
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Repeat Every</label>
                      <Select
                        options={employee}
                        placeholder="Select"
                        styles={customStyles}
                      />
                      <label className="col-form-label">Week(s)</label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3 wday-box">
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="monday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">M</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="tuesday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">T</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="wednesday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">W</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="thursday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">T</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="friday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">F</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="saturday"
                          className="days recurring me-1"
                        />
                        <span className="checkmark me-1">S</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="sunday"
                          className="days recurring me-1"
                        />
                        <span className="checkmark">S</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        End On <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input me-1"
                        id="customCheck2"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck2"
                      >
                        Indefinite
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Add Tag </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Add Note </label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                  </div>
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
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="edit_shift" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Shift</h5>
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
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Shift Name <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time ">
                        <input className="form-control timepicker" />
                        <span className="input-group-text">
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Min Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time ">
                        <input className="form-control timepicker" />
                        <span className="input-group-text">
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time ">
                        <input className="form-control timepicker" />
                        <span className="input-group-text">
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Max Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time ">
                        <input className="form-control timepicker" />
                        <span className="input-group-text">
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Min End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time ">
                        <input className="form-control timepicker" />
                        <span className="input-group-text">
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time ">
                        <input className="form-control timepicker" />
                        <span className="input-group-text">
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>
                        Max End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time ">
                        <input className="form-control timepicker" />
                        <span className="input-group-text">
                          <i className="fa fa-clock-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <label>Break Time (In Minutes) </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input me-1"
                        id="customCheck3"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck3"
                      >
                        Recurring Shift
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Repeat Every</label>
                      <Select
                        options={employee}
                        placeholder="Select"
                        styles={customStyles}
                      />
                      <label className="col-form-label">Week(s)</label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3 wday-box">
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="monday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">M</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="tuesday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">T</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="wednesday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">W</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="thursday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">T</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="friday"
                          className="days recurring me-1"
                          defaultChecked
                        />
                        <span className="checkmark me-1">F</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="saturday"
                          className="days recurring me-1"
                        />
                        <span className="checkmark me-1">S</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          defaultValue="sunday"
                          className="days recurring me-1"
                        />
                        <span className="checkmark me-1">S</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        End On <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input me-1"
                        id="customCheck4"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck4"
                      >
                        Indefinite
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Add Tag </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Add Note </label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                  </div>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShiftModelPopup;
