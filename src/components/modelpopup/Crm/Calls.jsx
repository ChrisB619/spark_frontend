import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import DatePicker from "react-datepicker";
const Calls = () => {
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const recentlyViewd = [
    { value: 'Busy', label: 'Busy' },
    { value: 'Unavailable', label: 'Unavailable' },
    { value: 'No Answer', label: 'No Answer' },
    { value: 'Wrong Number', label: 'Wrong Number' },
    { value: 'Left Voice Message', label: 'Left Voice Message' },
    { value: 'Moving Forward', label: 'Moving Forward' },

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

    <div>
      {/* Create Call Log */}
      <div
        className="modal custom-modal fade modal-padding"
        id="create_call"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border align-items-center justify-content-between p-0">
              <h5 className="modal-title">Create Call Log</h5>
              <button
                type="button"
                className="btn-close position-static"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <form action="/contact-details">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Status <span className="text-danger"> *</span>
                      </label>

                      <Select
                        className="select"
                        options={recentlyViewd}
                        placeholder="Sort By Alphabet"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Follow-up Date <span className="text-danger"> *</span>
                      </label>
                    
                      <DatePicker
                        selected={selectedDate2}
                        onChange={handleDateChange2}
                        className="form-control datetimepicker"
                        type="date"
                        dateFormat="dd-MM-yyyy" // Add the placeholderText prop here
                      />
                    </div>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Note <span className="text-danger"> *</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Add text"
                    defaultValue={""}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="custom_check check-box mb-0">
                    <input type="checkbox" />
                    <span className="checkmark" /> Create a Follow up task
                  </label>
                </div>
                <div className="col-lg-12 text-end form-wizard-button">
                  <button className="button btn-lights reset-btn" type="reset">
                    Reset
                  </button>
                  <Link className="btn btn-primary" to="#">
                    Save Call
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Create Call Log */}
    </div>



  )
}

export default Calls
