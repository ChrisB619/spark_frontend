import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimePicker } from 'antd';
import Select from 'react-select';
import { Link } from 'react-router-dom';

dayjs.extend(customParseFormat);


const AddActivity = () => {

    const [inputSets, setInputSets] = useState([
        {
            id: 1,
            namePlaceholder: 'Enter Name',
            emailPlaceholder: 'Email Address',
        },
    ]);
    const handleAddInputSet = () => {
        const newInputSet = {
            id: inputSets.length + 1,
            namePlaceholder: 'Enter Name',
            emailPlaceholder: 'Email Address',
        };
        setInputSets([...inputSets, newInputSet]);
    };

    const handleRemoveInputSet = (id) => {
        const updatedInputSets = inputSets.filter((inputSet) => inputSet.id !== id);
        setInputSets(updatedInputSets);
    };
    const [selectedDate1, setSelectedDate1] = useState(null);
    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };
    const onChange = (time, timeString) => {
        // console.log(time, timeString, "timepicker");
    };

    const time = [
        { value: "Minutes", label: "Minutes" },
        { value: "Hours", label: "Hours" },
    ];
    const ownerlist = [
        { value: "Select", label: "Select" },
        { value: "Monty Beer", label: "Monty Beer" },
        { value: "Itzel", label: "Itzel" },
        { value: "Andrew", label: "Andrew" },
    ];
    const namelist = [
        { value: "Select", label: "Select" },
        { value: "Collins", label: "Collins" },
        { value: "Konopelski", label: "Konopelski" },
        { value: "Adams", label: "Adams" },
    ];
    const options = [
        { value: "Select", label: "Select" },
        { value: "Darlee Robertson", label: "Darlee Robertson" },
        { value: "Sharon Roy", label: "Sharon Roy" },
        { value: "Vaughan", label: "Vaughan" },
    ];
    const list = [
        { value: "Select", label: "Select" },
        { value: "NovaWaveLLC", label: "NovaWaveLLC" },
        { value: "SilverHawk", label: "SilverHawk" },
        { value: "SummitPeak", label: "SummitPeak" },
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
            {/* Add Activity */}
            <div
                className="modal custom-modal fade custom-modal-two modal-padding"
                id="add_activity"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Add New Activity</h5>
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
                            <form action="/activities">
                                <div className="contact-input-set">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Title <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3 activity-date-picker">
                                                <label className="col-form-label">
                                                    Due Date <span className="text-danger">*</span>
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
                                        <div className="col-md-6">
                                            <div className="activity-date-picker input-block mb-3">
                                                <label className="col-form-label">
                                                    Time <span className="text-danger">*</span>
                                                </label>
                                                <div className="cal-icon time-icon">
                                                    <TimePicker
                                                        className="form-control timepicker"
                                                        onChange={onChange}
                                                        bordered={false}
                                                        defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                                                    />
                                                    <span className="cus-icon">
                                                        <i className="feather-clock" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="activity-date-picker input-block mb-3">
                                                <label className="col-form-label">
                                                    Reminder <span className="text-danger">*</span>
                                                </label>
                                                <div className="cal-icon reminder">
                                                    <input type="text" className="form-control" />
                                                    <span className="cus-icon">
                                                        <i className="feather-clock" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-end">
                                            <div className="input-block mb-3 d-flex align-items-center">
                                                <div className="w-100">

                                                    <Select
                                                        options={time}
                                                        placeholder="Select"
                                                        styles={customStyles}
                                                    />
                                                </div>
                                                <span className="use-before">Before Use</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Owner <span className="text-danger">*</span>
                                                </label>

                                                <Select
                                                    options={ownerlist}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block tag-with-img mb-3">
                                                <label className="col-form-label">
                                                    Guests <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    className="input-tags form-control"
                                                    id="inputBox3"
                                                    type="text"
                                                    data-role="tagsinput"
                                                    name="Label"
                                                    defaultValue="Darlee Robertson"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Description <span className="text-danger">*</span>
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows={5}
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 deals-add-col">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    {inputSets.map((inputSet, index) => (

                                                        <div className="input-block mb-3">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <label className="col-form-label">
                                                                    Deals <span className="text-danger">*</span>
                                                                </label>
                                                                <Link to="#" className="add-new add-new-deal"
                                                                    onClick={index === 0 ? handleAddInputSet : () => handleRemoveInputSet(inputSet.id)}>


                                                                    <i className="la la-plus-circle me-2" />
                                                                    Add New
                                                                </Link>

                                                            </div>

                                                            <Select
                                                                options={namelist}
                                                                placeholder="select"
                                                                styles={customStyles}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 contact-add-col">
                                            <div className="input-block mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label className="col-form-label">
                                                        Contacts <span className="text-danger">*</span>
                                                    </label>
                                                    <Link to="#" className="add-new add-new-contact">
                                                        <i className="la la-plus-circle me-2" />
                                                        Add New
                                                    </Link>
                                                </div>

                                                <Select
                                                    options={options}
                                                    placeholder="select"
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 company-add-col">
                                            <div className="input-block mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label className="col-form-label">
                                                        Company <span className="text-danger">*</span>
                                                    </label>
                                                    <Link to="#" className="add-new add-new-company">
                                                        <i className="la la-plus-circle me-2" />
                                                        Add New
                                                    </Link>
                                                </div>
                                                <Select
                                                    options={list}
                                                    placeholder="select"
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-end form-wizard-button">
                                            <button
                                                className="button btn-lights reset-btn"
                                                type="reset"
                                                data-bs-dismiss="modal"
                                            >
                                                Reset
                                            </button>
                                            <Link className="btn btn-primary" to="#">
                                                Save Activity
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Activity */}
        </div>

    )
}

export default AddActivity
