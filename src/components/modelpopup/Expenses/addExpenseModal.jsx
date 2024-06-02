import React, { useState } from "react";
import { PlaceHolder } from "../../../Routes/ImagePath";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const AddExpenseModal = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [setSelectedOption] = useState(null);
  const [setselectTwo] = useState(null);
  const [setselectThree] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const options = [
    { value: "Daniel Porter", label: "Daniel Porter" },
    { value: "Roger Dixon", label: "Roger Dixon" },
  ];

  const optionsTwo = [
    { value: "Cash", label: "Cash" },
    { value: "Cheque", label: "Cheque" },
  ];

  const optionsThree = [
    { value: "Pending", label: "Pending" },
    { value: "Approved", label: "Approved" },
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
    <div id="add_expense" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Expense</h5>
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
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Item Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchase From</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchase Date</label>
                    <div className="cal-icon">
                      <DatePicker
                        className="form-control floating datetimepicker "
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd-MM-yyyy"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Purchased By </label>
                    {/* <div className="input-block mb-3 form-focus select-focus"> */}
                    <Select
                      placeholder="Daniel Porter"
                      onChange={setSelectedOption}
                      options={options}
                      styles={customStyles}
                      className="select"
                    />
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Amount</label>
                    <input
                      placeholder="$50"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Paid By</label>
                    <Select
                      placeholder="Cash"
                      onChange={setselectTwo}
                      options={optionsTwo}
                      className="select"
                      styles={customStyles}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status</label>

                    <Select
                      placeholder="Pending"
                      onChange={setselectThree}
                      options={optionsThree}
                      styles={customStyles}
                      className="select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Attachments</label>
                    <input className="form-control" type="file" />
                  </div>
                </div>
              </div>
              <div className="attach-files">
                <ul>
                  <li>
                    <img src={PlaceHolder} alt="PlaceholderImage" />
                    <Link to="#" className="fa fa-close file-remove" />
                  </li>
                  <li>
                    <img src={PlaceHolder} alt="PlaceholderImage" />
                    <Link to="#" className="fa fa-close file-remove" />
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
