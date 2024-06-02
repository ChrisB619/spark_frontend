import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditBudgetExpenseModal = () => {
  const [setselectOne] = useState(null);
  const [setselectTwo] = useState(null);
  const [setselectThree] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const currencyOptions = [
    { value: "$ - AUD", label: "$ - Australian Dollar" },
    { value: "Bs. - VEF", label: "Bs. - Bolívar Fuerte" },
    { value: "R$ - BRL", label: "R$ - Brazilian Real" },
    { value: "£ - GBP", label: "£ - British Pound" },
    { value: "$ - CAD", label: "$ - Canadian Dollar" },
  ];

  const optionsTwo = [
    { value: 1, label: "project1" },
    { value: 3, label: "test category" },
    { value: 4, label: "Hardware" },
    { value: 5, label: "Material" },
    { value: 6, label: "Vehicle" },
    { value: 8, label: "TestctrE" },
    { value: 9, label: "Twocatr" },
    { value: 10, label: "fesferwf" },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const optionsThree = [
    { value: 1, label: "project1" },
    { value: 3, label: "test category" },
    { value: 4, label: "Hardware" },
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
        className="modal custom-modal fade"
        id="edit_categories"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Expenses</h5>
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
              <form action="budget-expenses">
                <div className="input-block mb-3 row">
                  <label className="col-lg-12 control-label col-form-label">
                    Amount <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={800.0}
                      name="amount"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Select
                      placeholder="currency_symbol"
                      options={currencyOptions}
                      onChange={setselectOne}
                      className="select"
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-12 control-label col-form-label">
                    Notes <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control ta"
                      name="notes"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-12 control-label col-form-label">
                    Expense Date <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-12">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      className="form-control floating datetimepicker"
                      type="date"
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-12 control-label col-form-label">
                    Category <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-12">
                    <Select
                      placeholder="Choose Category"
                      options={optionsTwo}
                      onChange={setselectTwo}
                      className="select"
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="input-block mb-3 row">
                  <label className="col-lg-12 control-label col-form-label">
                    Sub Category <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-12">
                    <Select
                      placeholder="Choose Sub-Category"
                      options={optionsThree}
                      onChange={setselectThree}
                      className="select"
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="input-block mb-3 row  position-relative">
                  <label className="col-lg-12 control-label col-form-label">
                    Attach File
                  </label>
                  <div className="col-lg-12">
                    <input
                      type="file"
                      className="form-control"
                      data-buttontext="Choose File"
                      data-icon="false"
                      data-classbutton="btn btn-default"
                      data-classinput="form-control inline input-s"
                      name="receipt"
                    />
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
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

export default EditBudgetExpenseModal;
