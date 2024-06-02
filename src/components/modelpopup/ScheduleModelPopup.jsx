import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { TimePicker } from "antd";
import Select from "react-select";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const ScheduleModelPopup = () => {
  const onChange = (time, timeString) => {
    // console.log(time, timeString, "timepicker");
  };

  const department = [
    { value: 1, label: "Finance" },
    { value: 2, label: "Finance and Management" },
    { value: 3, label: "Hr Finance" },
    { value: 4, label: "ITech" },
  ];
  const Shift = [
    { value: 1, label: "10'o clock Shift" },
    { value: 2, label: "10:30 shift" },
    { value: 3, label: "Daily Shift" },
    { value: 4, label: "New Shift" },
  ];
  const employee = [
    { value: 1, label: "Richard Miles" },
    { value: 2, label: "John Smith" },
    { value: 3, label: "Wilmer Deluna" },
    { value: 4, label: "John Deo" },
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

  const [selectedDate1, setSelectedDate1] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  return (
    <>
      <div id="add_schedule" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Schedule</h5>
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
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Department <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={department}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Employee Name <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={employee}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Shifts <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={Shift}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
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
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
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
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
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
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
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
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
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
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
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
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Break Time <span className="text-danger">*</span>
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
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Accept Extra Hours{" "}
                      </label>
                      <div className="custom-control form-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitch1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customSwitch1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Publish </label>
                      <div className="custom-control form-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitch2"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customSwitch2"
                        />
                      </div>
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

      <div id="edit_schedule" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Schedule</h5>
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
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Department <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={department}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Employee Name <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={employee}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Shifts <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={Shift}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Min Start Time <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="06:11 am"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Start Time <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="06:30 am"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Max Start Time <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="08:12 am"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Min End Time <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="09:12 pm"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        End Time <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="09:30 pm"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Max End Time <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="09:45 pm"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Break Time <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={45}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
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
                      <select className="select">
                        <option value>1 </option>
                        <option value={1}>2</option>
                        <option value={2}>3</option>
                        <option value={3}>4</option>
                        <option value={4}>5</option>
                        <option value={3}>6</option>
                      </select>
                      <label className="col-form-label">Week(s)</label>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3 wday-box">
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          name="week_days[]"
                          defaultValue="monday"
                          className="days recurring"
                          defaultChecked
                        />
                        <span className="checkmark">M</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          name="week_days[]"
                          defaultValue="tuesday"
                          className="days recurring"
                          defaultChecked
                        />
                        <span className="checkmark">T</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          name="week_days[]"
                          defaultValue="wednesday"
                          className="days recurring"
                          defaultChecked
                        />
                        <span className="checkmark">W</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          name="week_days[]"
                          defaultValue="thursday"
                          className="days recurring"
                          defaultChecked
                        />
                        <span className="checkmark">T</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          name="week_days[]"
                          defaultValue="friday"
                          className="days recurring"
                          defaultChecked
                        />
                        <span className="checkmark">F</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          name="week_days[]"
                          defaultValue="saturday"
                          className="days recurring"
                        />
                        <span className="checkmark">S</span>
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          name="week_days[]"
                          defaultValue="sunday"
                          className="days recurring"
                        />
                        <span className="checkmark">S</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        End On <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control floating datetimepicker"
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
                        className="custom-control-input"
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
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Accept Extra Hours{" "}
                      </label>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch3"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Publish </label>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch4"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch4"
                        />
                      </div>
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

export default ScheduleModelPopup;
