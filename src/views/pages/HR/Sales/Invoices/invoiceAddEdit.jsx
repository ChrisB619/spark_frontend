import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Select from "react-select";

const options = [
  { value: "Please Select", label: "Please Select" },
  { value: "Barry Cuda", label: "Barry Cuda" },
  { value: "Tressa Wexler", label: "Tressa Wexler" },
];

const projects = [
  { value: "Select Project", label: "Select Project" },
  { value: "Office Management", label: "Office Management" },
  { value: "Project Management", label: "Project Management" },
];

const taxes = [
  { value: "Select Tax", label: "Select Tax" },
  { value: "GST", label: "GST" },
  { value: "VAT", label: "VAT" },
  { value: "No Tax", label: "No Tax" },
];

const InvoiceAddEdit = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedOption, setSelectedOption] = useState(options[1]);
  const [selectProjects, setselectProjects] = useState(projects[0]);
  const [selectTax, setselectTax] = useState(taxes[0]);
  const [rows, setRows] = useState([
    {
      id: 1,
      data1: "",
      data2: "",
      data3: "",
      data4: "",
      data5: "",
    },
  ]);

  const addRow = () => {
    const newRow = {
      id: rows.length + 2,
      data1: "",
      data2: "",
      data3: "",
      data4: "",
      data5: "",
    };
    setRows([...rows, newRow]);
  };

  const removeRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

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
      <div className="row">
        <div className="col-sm-12">
          <form>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="input-block">
                  <label>
                    Client <span className="text-danger">*</span>
                  </label>

                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={customStyles}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="input-block">
                  <label>
                    Project <span className="text-danger">*</span>
                  </label>

                  <Select
                    value={selectProjects}
                    onChange={setselectProjects}
                    options={projects}
                    styles={customStyles}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="input-block">
                  <label>Email</label>
                  <input className="form-control" type="email" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="input-block">
                  <label>Tax</label>

                  <Select
                    value={selectTax}
                    onChange={setselectTax}
                    options={taxes}
                    styles={customStyles}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="input-block">
                  <label>Client Address</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="input-block">
                  <label>Billing Address</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="input-block">
                  <label>
                    Invoice Date <span className="text-danger">*</span>
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
              <div className="col-sm-6 col-md-3">
                <div className="input-block">
                  <label>
                    Due Date <span className="text-danger">*</span>
                  </label>
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
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="table-responsive">
                  <table
                    className="table table-hover table-white"
                    id="addTable"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th className="col-sm-2">Item</th>
                        <th className="col-md-6">Description</th>
                        <th>Unit Cost</th>
                        <th>Qty</th>
                        <th>Amount</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody className="tbodyone">
                      <tr>
                        <td>1</td>
                        <td>
                          <input className="form-control" type="text" />
                        </td>
                        <td>
                          <input className="form-control" type="text" />
                        </td>
                        <td>
                          <input className="form-control" type="text" />
                        </td>
                        <td>
                          <input className="form-control" type="text" />
                        </td>
                        <td>
                          <input
                            className="form-control"
                            readOnly
                            type="text"
                          />
                        </td>
                        <td>
                          <Link
                            to="#"
                            className="text-success font-18"
                            title="Add"
                            id="addProduct"
                            onClick={addRow}
                          >
                            <i className="fa-solid fa-plus" />
                          </Link>
                        </td>
                      </tr>
                      {rows.map((row) => (
                        <tr key={row.id}>
                          <td>{row.id}</td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              value={row.data1}
                              onChange={(e) =>
                                setRows((prevRows) =>
                                  prevRows.map((prevRow) =>
                                    prevRow.id === row.id
                                      ? { ...prevRow, data1: e.target.value }
                                      : prevRow
                                  )
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              value={row.data2}
                              onChange={(e) =>
                                setRows((prevRows) =>
                                  prevRows.map((prevRow) =>
                                    prevRow.id === row.id
                                      ? { ...prevRow, data2: e.target.value }
                                      : prevRow
                                  )
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              value={row.data3}
                              onChange={(e) =>
                                setRows((prevRows) =>
                                  prevRows.map((prevRow) =>
                                    prevRow.id === row.id
                                      ? { ...prevRow, data3: e.target.value }
                                      : prevRow
                                  )
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              value={row.data4}
                              onChange={(e) =>
                                setRows((prevRows) =>
                                  prevRows.map((prevRow) =>
                                    prevRow.id === row.id
                                      ? { ...prevRow, data4: e.target.value }
                                      : prevRow
                                  )
                                )
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              value={row.data5}
                              onChange={(e) =>
                                setRows((prevRows) =>
                                  prevRows.map((prevRow) =>
                                    prevRow.id === row.id
                                      ? { ...prevRow, data5: e.target.value }
                                      : prevRow
                                  )
                                )
                              }
                              readOnly
                            />
                          </td>
                          <td>
                            <Link
                              className="text-danger font-18 remove"
                              title="Remove"
                              onClick={() => removeRow(row.id)}
                            >
                              <i className="fa-regular fa-trash-can" />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover table-white">
                    <tbody>
                      <tr>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td className="text-end">Total</td>
                        <td className="text-end pe-4">0</td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="text-end">
                          Tax
                        </td>
                        <td className="text-end pe-4">
                          <input
                            className="form-control text-end"
                            defaultValue={0}
                            readOnly
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="text-end">
                          Discount %
                        </td>
                        <td className="text-end pe-4">
                          <input
                            className="form-control text-end"
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="text-end pe-4">
                          <b>Grand Total</b>
                        </td>
                        <td className="text-end tdata-width pe-4">
                          <b>$ 0.00</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Other Information
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*
               */}
            </div>

            <div className="submit-section">
              <button className="btn btn-primary submit-btn m-r-10">
                Save &amp; Send
              </button>
              <button
                className="btn btn-primary submit-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
                type="reset"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvoiceAddEdit;
