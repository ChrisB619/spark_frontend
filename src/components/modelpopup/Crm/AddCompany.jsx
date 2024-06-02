import React from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select'

const AddCompany = () => {
    const sourcelist = [
        { value: 'Select', label: 'Select' },
        { value: 'SilverHawk', label: 'SilverHawk' },
        { value: 'NovaWaveLLC', label: 'NovaWaveLLC' },
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
            {/* Add Company */}
            <div
                className="modal custom-modal fade custom-modal-two modal-padding"
                id="add_contact"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Add Company</h5>
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
                            <h5 className="mb-3">Sync emails from</h5>
                            <ul className="nav email-item">
                                <li className="nav-item">
                                    <span
                                        className="active mb-0"
                                        data-bs-toggle="tab"
                                        data-bs-target="#existing-company"
                                    >
                                        <input
                                            type="radio"
                                            className="status-radio"
                                            id="mail1"
                                            name="email"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="mail1">Existing Company</label>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span
                                        className=" mb-0"
                                        data-bs-toggle="pill"
                                        data-bs-target="#new-company"
                                    >
                                        <input
                                            type="radio"
                                            className="status-radio"
                                            id="mail2"
                                            name="email"
                                        />
                                        <label htmlFor="mail2">New Company</label>
                                    </span>
                                </li>
                            </ul>
                            <div className="tab-content pt-0">
                                <div className="tab-pane show active" id="existing-company">
                                    <form action="/contact-details">
                                        <div className="existing-company mb-3">
                                            <div className="input-block mb-0">
                                                <label className="col-form-label">
                                                    Company <span className="text-danger"> *</span>
                                                </label>
                                               
                                                <Select
                                                className="select"
                                                options={sourcelist}
                                                placeholder="Select"
                                                styles={customStyles}
                                            />
                                                <p>
                                                    Use this field to associate existing deal instead of
                                                    creating new one.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-end form-wizard-button">
                                            <button
                                                className="button btn-lights reset-btn"
                                                data-bs-dismiss="modal"
                                                type="reset"
                                            >
                                                Reset
                                            </button>
                                            <button className="btn btn-primary" type="submit">
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="new-company">
                                    <div className="add-details-wizard">
                                        <ul id="progressbar" className="progress-bar-wizard">
                                            <li className="active">
                                                <span>
                                                    <i className="la la-user-tie" />
                                                </span>
                                                <div className="multi-step-info">
                                                    <h6>Basic Info</h6>
                                                </div>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="la la-map-marker" />
                                                </span>
                                                <div className="multi-step-info">
                                                    <h6>Address</h6>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="multi-step-icon">
                                                    <span>
                                                        <i className="la la-icons" />
                                                    </span>
                                                </div>
                                                <div className="multi-step-info">
                                                    <h6>Social Profiles</h6>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="multi-step-icon">
                                                    <span>
                                                        <i className="la la-images" />
                                                    </span>
                                                </div>
                                                <div className="multi-step-info">
                                                    <h6>Access</h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="add-info-fieldset">
                                        <fieldset id="first-field">
                                            <form action="/contact-details">
                                                <div className="form-upload-profile">
                                                    <h6 className="">
                                                        Profile Image <span> *</span>
                                                    </h6>
                                                    <div className="profile-pic-upload">
                                                        <div className="profile-pic">
                                                            <span>
                                                                <img
                                                                    src="assets/img/icons/profile-upload-img.svg"
                                                                    alt="Img"
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="employee-field">
                                                            <div className="mb-0">
                                                                <div className="image-upload mb-0">
                                                                    <input type="file" />
                                                                    <div className="image-uploads">
                                                                        <h4>Upload</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="img-reset-btn">
                                                                <Link to="#">Reset</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contact-input-set">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    First Name <span className="text-danger"> *</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Last Name <span className="text-danger"> *</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Job Title <span className="text-danger"> *</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Company Name{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <select className="select">
                                                                    <option>Select</option>
                                                                    <option>NovaWaveLLC</option>
                                                                    <option>BlueSky Industries</option>
                                                                    <option>SilverHawk</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <label className="col-form-label">
                                                                        Email <span className="text-danger"> *</span>
                                                                    </label>
                                                                    <div className="status-toggle small-toggle-btn d-flex align-items-center">
                                                                        <span className="me-2 label-text">Option</span>
                                                                        <input
                                                                            type="checkbox"
                                                                            id="user2"
                                                                            className="check"
                                                                            defaultChecked=""
                                                                        />
                                                                        <label
                                                                            htmlFor="user2"
                                                                            className="checktoggle"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <input className="form-control" type="email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Phone Number 1
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Phone Number 2
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">Fax </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <label className="col-form-label">
                                                                        Deals <span className="text-danger">*</span>
                                                                    </label>
                                                                    <Link to="#" className="add-new">
                                                                        <i className="la la-plus-circle me-2" />
                                                                        Add New
                                                                    </Link>
                                                                </div>
                                                                <select className="select">
                                                                    <option>Select</option>
                                                                    <option>Collins</option>
                                                                    <option>Konopelski</option>
                                                                    <option>Adams</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Date of birth{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Reviews <span className="text-danger">*</span>
                                                                </label>
                                                                <select className="select">
                                                                    <option>Select</option>
                                                                    <option>Lowest</option>
                                                                    <option>Highest</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Owner <span className="text-danger">*</span>
                                                                </label>
                                                                <select className="select">
                                                                    <option>Select</option>
                                                                    <option>Hendry</option>
                                                                    <option>Guillory</option>
                                                                    <option>Jami</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Industry <span className="text-danger">*</span>
                                                                </label>
                                                                <select className="select">
                                                                    <option>Select</option>
                                                                    <option>Barry Cuda</option>
                                                                    <option>Tressa Wexler</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Currency <span className="text-danger">*</span>
                                                                </label>
                                                                <select className="select">
                                                                    <option>Select</option>
                                                                    <option>$</option>
                                                                    <option>€</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Language <span className="text-danger">*</span>
                                                                </label>
                                                                <select className="select">
                                                                    <option>Select</option>
                                                                    <option>English</option>
                                                                    <option>French</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Tags <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    className="input-tags form-control"
                                                                    id="inputBox"
                                                                    type="text"
                                                                    data-role="tagsinput"
                                                                    name="Label"
                                                                    defaultValue="Label, Label"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Source <span className="text-danger">*</span>
                                                                </label>
                                                                <select className="select">
                                                                    <option>Select</option>
                                                                    <option>Barry Cuda</option>
                                                                    <option>Tressa Wexler</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Comments<span className="text-danger">*</span>
                                                                </label>
                                                                <textarea
                                                                    className="form-control"
                                                                    rows={5}
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 text-end form-wizard-button">
                                                            <button
                                                                className="button btn-lights reset-btn"
                                                                type="reset"
                                                            >
                                                                Reset
                                                            </button>
                                                            <button
                                                                className="btn btn-primary wizard-next-btn"
                                                                type="button"
                                                            >
                                                                Save &amp; Next
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </fieldset>
                                        <fieldset>
                                            <form action="/contact-details">
                                                <div className="contact-input-set">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Street Address
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    City <span className="text-danger"> *</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    State / Province{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Country <span className="text-danger">*</span>
                                                                </label>
                                                                <select className="select">
                                                                    <option>Select</option>
                                                                    <option>Germany</option>
                                                                    <option>USA</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">
                                                                    Zipcode <span className="text-danger"> *</span>
                                                                </label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 text-end form-wizard-button">
                                                            <button
                                                                className="button btn-lights reset-btn"
                                                                type="reset"
                                                            >
                                                                Reset
                                                            </button>
                                                            <button
                                                                className="btn btn-primary wizard-next-btn"
                                                                type="button"
                                                            >
                                                                Save &amp; Next
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </fieldset>
                                        <fieldset>
                                            <form action="/contact-details">
                                                <div className="contact-input-set">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">Facebook</label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">Twitter</label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">Linkedin</label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">Skype</label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">Whatsapp</label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-block mb-3">
                                                                <label className="col-form-label">Instagram</label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-block mb-3">
                                                                <Link to="#" className="add-new">
                                                                    <i className="la la-plus-circle me-2" />
                                                                    Add New
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 text-end form-wizard-button">
                                                            <button
                                                                className="button btn-lights reset-btn"
                                                                type="reset"
                                                            >
                                                                Reset
                                                            </button>
                                                            <button
                                                                className="btn btn-primary wizard-next-btn"
                                                                type="button"
                                                            >
                                                                Save &amp; Next
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </fieldset>
                                        <fieldset>
                                            <form action="/contact-details">
                                                <div className="contact-input-set">
                                                    <div className="input-blocks add-products">
                                                        <label className="mb-3">Visibility</label>
                                                        <div className="access-info-tab">
                                                            <ul
                                                                className="nav nav-pills"
                                                                id="pills-tab1"
                                                                role="tablist"
                                                            >
                                                                <li className="nav-item" role="presentation">
                                                                    <span
                                                                        className="custom_radio mb-0"
                                                                        id="pills-public-tab"
                                                                        data-bs-toggle="pill"
                                                                        data-bs-target="#pills-public"
                                                                        role="tab"
                                                                        aria-controls="pills-public"
                                                                        aria-selected="true"
                                                                    >
                                                                        <input
                                                                            type="radio"
                                                                            className="form-control"
                                                                            name="public"
                                                                            defaultChecked=""
                                                                        />
                                                                        <span className="checkmark" /> Public
                                                                    </span>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <span
                                                                        className="custom_radio mb-0"
                                                                        id="pills-private-tab"
                                                                        data-bs-toggle="pill"
                                                                        data-bs-target="#pills-private"
                                                                        role="tab"
                                                                        aria-controls="pills-private"
                                                                        aria-selected="false"
                                                                    >
                                                                        <input
                                                                            type="radio"
                                                                            className="form-control"
                                                                            name="private"
                                                                        />
                                                                        <span className="checkmark" /> Private
                                                                    </span>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <span
                                                                        className="custom_radio mb-0 active"
                                                                        id="pills-select-people-tab"
                                                                        data-bs-toggle="pill"
                                                                        data-bs-target="#pills-select-people"
                                                                        role="tab"
                                                                        aria-controls="pills-select-people"
                                                                        aria-selected="false"
                                                                    >
                                                                        <input
                                                                            type="radio"
                                                                            className="form-control"
                                                                            name="select-people"
                                                                        />
                                                                        <span className="checkmark" /> Select People
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="tab-content" id="pills-tabContent">
                                                        <div
                                                            className="tab-pane fade"
                                                            id="pills-public"
                                                            role="tabpanel"
                                                            aria-labelledby="pills-public-tab"
                                                        ></div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="pills-private"
                                                            role="tabpanel"
                                                            aria-labelledby="pills-private-tab"
                                                        ></div>
                                                        <div
                                                            className="tab-pane fade show active"
                                                            id="pills-select-people"
                                                            role="tabpanel"
                                                            aria-labelledby="pills-select-people-tab"
                                                        >
                                                            <div className="people-select-tab">
                                                                <h3>Select People</h3>
                                                                <div className="select-people-checkbox">
                                                                    <label className="custom_check">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark" />
                                                                        <span className="people-profile">
                                                                            <img
                                                                                src="assets/img/avatar/avatar-19.jpg"
                                                                                alt="Img"
                                                                            />
                                                                            <Link to="#">Darlee Robertson</Link>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div className="select-people-checkbox">
                                                                    <label className="custom_check">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark" />
                                                                        <span className="people-profile">
                                                                            <img
                                                                                src="assets/img/avatar/avatar-20.jpg"
                                                                                alt="Img"
                                                                            />
                                                                            <Link to="#">Sharon Roy</Link>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div className="select-people-checkbox">
                                                                    <label className="custom_check">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark" />
                                                                        <span className="people-profile">
                                                                            <img
                                                                                src="assets/img/avatar/avatar-21.jpg"
                                                                                alt="Img"
                                                                            />
                                                                            <Link to="#">Vaughan</Link>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div className="select-people-checkbox">
                                                                    <label className="custom_check">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmark" />
                                                                        <span className="people-profile">
                                                                            <img
                                                                                src="assets/img/avatar/avatar-1.jpg"
                                                                                alt="Img"
                                                                            />
                                                                            <Link to="#">Jessica</Link>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div className="select-confirm-btn">
                                                                    <Link to="#" className="btn danger-btn">
                                                                        Confirm
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 className="mb-3">Status</h5>
                                                    <div className="status-radio-btns d-flex mb-3">
                                                        <div className="people-status-radio">
                                                            <input
                                                                type="radio"
                                                                className="status-radio"
                                                                id="test7"
                                                                name="radio-group"
                                                                defaultChecked=""
                                                            />
                                                            <label htmlFor="test7">Active</label>
                                                        </div>
                                                        <div className="people-status-radio">
                                                            <input
                                                                type="radio"
                                                                className="status-radio"
                                                                id="test5"
                                                                name="radio-group"
                                                            />
                                                            <label htmlFor="test5">Private</label>
                                                        </div>
                                                        <div className="people-status-radio">
                                                            <input
                                                                type="radio"
                                                                className="status-radio"
                                                                id="test6"
                                                                name="radio-group"
                                                            />
                                                            <label htmlFor="test6">Inactive</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 text-end form-wizard-button">
                                                        <button
                                                            className="button btn-lights reset-btn"
                                                            type="reset"
                                                        >
                                                            Reset
                                                        </button>
                                                        <Link to="#" className="btn btn-primary">
                                                            Save Contact
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Company */}
        </>

    )
}

export default AddCompany
