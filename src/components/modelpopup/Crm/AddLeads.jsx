import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { TagsInput } from 'react-tag-input-component';

const AddLeads = () => {
    const [tags] = useState(["Promotion ", "Rated"]);
    const [owner] = useState(["James"]);
    const companyList = [
        { value: 1, label: "Select" },
        { value: 2, label: "NovaWaveLLC" },
        { value: 3, label: "SilverHawk" },
        { value: 4, label: "SummitPeak" },
    ];
    const currency = [
        { value: "Select", label: "Select" },
        { value: "$", label: "$" },
        { value: "€", label: "€" },
    ];
    const mode = [
        { value: "Work", label: "Work" },
        { value: "Home", label: "Home" },
    ];
    const mode1 = [
        { value: "Work", label: "Work" },
        { value: "Home", label: "Home" },
    ];
    const status = [
        { value: "Select", label: "Select" },
        { value: "Highy", label: "Highy" },
        { value: "Low", label: "Low" },
        { value: "Medium", label: "Medium" },
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
    const [inputCompany, setInputCompany] = useState([
        {
            id: 1,
            namePlaceholder: 'Enter Name',
            emailPlaceholder: 'Email Address',
        },
    ]);
    const handleAddInputCompany = () => {
        const newInputSet = {
            id: inputCompany.length + 1,
            namePlaceholder: 'Enter Name',
            emailPlaceholder: 'Email Address',
        };
        setInputCompany([...inputSets, newInputSet]);
    };

    const handleRemoveInputCompany = (id) => {
        const updatedInputSets = inputCompany.filter((inputSet) => inputSet.id !== id);
        setInputCompany(updatedInputSets);
    };
    const [inputEmail, setEmail] = useState([
        {
            id: 1,
            emailPlaceholder: 'Email Address',
        },
    ]);
    const handleAddEmailInputSet = () => {
        const newInputSet = {
            id: inputEmail.length + 1,
            namePlaceholder: 'Enter Name',
            emailPlaceholder: 'Email Address',
        };
        setEmail([...inputEmail, newInputSet]);
    };

    const handleRemoveEmailInputSet = (id) => {
        const updatedInputSets = inputSets.filter((inputSet) => inputSet.id !== id);
        setEmail(updatedInputSets);
    };
    return (
        <div>
            {/* Add Leads */}
            <div
                className="modal custom-modal fade custom-modal-two modal-padding"
                id="add_leads"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Add New Lead</h5>
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
                            <form action="/leads">
                                <div className="contact-input-set">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Lead Name <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-block mb-3">
                                                <h5 className="mb-3">Lead Type</h5>
                                                <div className="status-radio-btns d-flex">
                                                    <div className="people-status-radio">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="test1"
                                                            name="radio-group"
                                                            defaultChecked=""
                                                        />
                                                        <label htmlFor="test1">Person</label>
                                                    </div>
                                                    <div className="people-status-radio">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="test2"
                                                            name="radio-group"
                                                        />
                                                        <label htmlFor="test2">Organization</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 company-add-col">
                                            {inputCompany.map((inputSet, index) => (
                                                <div className="input-block mb-3">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <label className="col-form-label">
                                                            Company <span className="text-danger">*</span>
                                                        </label>
                                                        <Link to="#" className="add-new add-new-company"
                                                            onClick={index === 0 ? handleAddInputCompany : () => handleRemoveInputCompany(inputSet.id)}>

                                                            <i className={index === 0 ? 'las la-plus-circle' : ''} />
                                                            Add New
                                                        </Link>

                                                    </div>
                                                    <Select
                                                        options={companyList}
                                                        placeholder="Select"
                                                        styles={customStyles}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Value<span className="text-danger"> *</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Currency <span className="text-danger">*</span>
                                                </label>
                                                <Select
                                                    options={currency}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 lead-phno-col del-phno-col">
                                            {inputSets.map((inputSet, index) => (
                                                <div className="row">
                                                    <div className="col-lg-8">
                                                        <div className="input-block mb-3">
                                                            <label className="col-form-label">
                                                                Phone Number <span className="text-danger">*</span>
                                                            </label>
                                                            <input className="form-control" type="text" placeholder={inputSet.namePlaceholder} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 d-flex align-items-end">
                                                        <div className="input-block mb-3 d-flex align-items-center">
                                                            <div className="w-100">
                                                                <Select
                                                                    options={mode}
                                                                    styles={customStyles}
                                                                    placeholder={inputSet.namePlaceholder}
                                                                />
                                                            </div>
                                                            <Link to="#" className="add-modal-row add-lead-phno"
                                                                onClick={index === 0 ? handleAddInputSet : () => handleRemoveInputSet(inputSet.id)}>

                                                                <i className={index === 0 ? 'las la-plus-circle' : 'las la-trash'} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-12 lead-email-col del-email-col">
                                            {inputEmail.map((inputSet, index) => (
                                                <div className="row">
                                                    <div className="col-lg-8">
                                                        <div className="input-block mb-3">
                                                            <label className="col-form-label">
                                                                Email <span className="text-danger">*</span>
                                                            </label>
                                                            <input className="form-control" type="email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 d-flex align-items-end">
                                                        <div className="input-block mb-3 d-flex align-items-center">
                                                            <div className="w-100">
                                                                <Select
                                                                    options={mode1}
                                                                    placeholder="Select"
                                                                    styles={customStyles}
                                                                />
                                                            </div>
                                                            <Link to="#" className="add-modal-row add-lead-email"
                                                                onClick={index === 0 ? handleAddEmailInputSet : () => handleRemoveEmailInputSet(inputSet.id)}>

                                                                <i className={index === 0 ? 'las la-plus-circle' : 'las la-trash'} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Source <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Industry <span className="text-danger">*</span>
                                                </label>

                                                <Select
                                                    options={status}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block tag-with-img mb-3">
                                                <label className="col-form-label">
                                                    Owner <span className="text-danger">*</span>
                                                </label>

                                                <div>
                                                    <TagsInput
                                                        tags={owner}
                                                        value={owner}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Tags <span className="text-danger">*</span>
                                                </label>
                                                <div>
                                                    <TagsInput
                                                        tags={tags}
                                                        value={tags}
                                                    />
                                                </div>
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
                                        <div className="col-md-12">
                                            <div className="input-block mb-3">
                                                <h5 className="mb-3">Visibility</h5>
                                                <div className="status-radio-btns d-flex">
                                                    <div className="people-status-radio">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="test3"
                                                            name="radio-group2"
                                                            defaultChecked="true"
                                                        />
                                                        <label htmlFor="test3">Pubilc</label>
                                                    </div>
                                                    <div className="people-status-radio">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="test4"
                                                            name="radio-group2"
                                                        />
                                                        <label htmlFor="test4">Private</label>
                                                    </div>
                                                    <div className="people-status-radio">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="test5"
                                                            name="radio-group2"
                                                        />
                                                        <label htmlFor="test5">Select People</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-block mb-3">
                                                <h5 className="mb-3">Status</h5>
                                                <div className="status-radio-btns d-flex">
                                                    <div className="people-status-radio">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="test6"
                                                            name="radio-group3"
                                                            defaultChecked="true"
                                                        />
                                                        <label htmlFor="test6">Active</label>
                                                    </div>
                                                    <div className="people-status-radio">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="test7"
                                                            name="radio-group3"
                                                        />
                                                        <label htmlFor="test7">Inactive</label>
                                                    </div>
                                                </div>
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
                                                Save Lead
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Leads */}
        </div>

    )
}

export default AddLeads
