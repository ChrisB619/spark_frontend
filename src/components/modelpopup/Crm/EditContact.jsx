import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { avatar1, avatar19, avatar20, avatar21 } from '../../../Routes/ImagePath'
import Select from 'react-select'
import ReactTagInput from '../../../views/pages/Crm/ReactTagInput'

const EditContact = () => {
    const [fieldOne, setFieldOne] = useState(true);
    const [fieldTwo, setFieldTwo] = useState();
    const [fieldThree, setFieldThree] = useState();
    const [fieldFour, setFieldFour] = useState();

    const FieldsetTwo = () => {
        setFieldOne(false)
        setFieldTwo(true)
        setFieldThree(false)
        setFieldFour(false)
    }

    const FieldsetThree = () => {
        setFieldOne(false)
        setFieldTwo(false)
        setFieldThree(true)
        setFieldFour(false)
    }
    const FieldsetFour = () => {
        setFieldOne(false)
        setFieldTwo(false)
        setFieldThree(false)
        setFieldFour(true)
    }

    const options = {
        companyName: [
            { value: 'novaWave', label: 'NovaWaveLLC' },
            { value: 'blueSky', label: 'BlueSky Industries' },
            { value: 'silverHawk', label: 'SilverHawk' },
        ],
        dealsList: [
            { value: 'select', label: 'Select' },
            { value: 'collins', label: 'Collins' },
            { value: 'konopelski', label: 'Konopelski' },
            { value: 'adams', label: 'Adams' },
        ],
        reviews: [
            { value: 'Select', label: 'Select' },
            { value: 'Lowest', label: 'Lowest' },
            { value: 'Highest', label: 'Highest' },
        ],
        ownerName: [
            { value: 'Select', label: 'Select' },
            { value: 'Hendry', label: 'Hendry' },
            { value: 'Guillory', label: 'Guillory' },
            { value: 'Jami', label: 'Jami' },
        ],
        industry: [
            { value: 'Select', label: 'Select' },
            { value: 'Barry Cuda', label: 'Barry Cuda' },
            { value: 'Tressa Wexler', label: 'Tressa Wexler' },
        ],
        currencySymbol: [
            { value: 'Select', label: 'Select' },
            { value: '$', label: '$' },
            { value: '€', label: '€' },
        ],
        language: [
            { value: 'Select', label: 'Select' },
            { value: 'English', label: 'English' },
            { value: 'French', label: 'French' },
        ],
        sourceList: [
            { value: 'Select', label: 'Select' },
            { value: 'Barry Cuda', label: 'Barry Cuda' },
            { value: 'Tressa Wexler', label: 'Tressa Wexler' },
        ],
        countrylist: [
            { value: 'Select', label: 'Select' },
            { value: 'Germany', label: 'Germany' },
            { value: 'USA', label: 'USA' },
        ],
    }


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
            {/* Add Contact */}
            <div
                className="modal custom-modal fade custom-modal-two modal-padding"
                id="edit_contact"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Edit New Contact</h5>
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
                            <div className="add-details-wizard">
                                <ul id="progressbar" className="progress-bar-wizard">
                                    <li className={fieldOne ? "active" : ""}>
                                        <span>
                                            <i className="la la-user-tie" />
                                        </span>
                                        <div className="multi-step-info">
                                            <h6>Basic Info</h6>
                                        </div>
                                    </li>
                                    <li className={fieldTwo ? "active" : ""}>
                                        <span>
                                            <i className="la la-map-marker" />
                                        </span>
                                        <div className="multi-step-info">
                                            <h6>Address</h6>
                                        </div>
                                    </li>
                                    <li className={fieldThree ? "active" : ""}>
                                        <div className="multi-step-icon">
                                            <span>
                                                <i className="la la-icons" />
                                            </span>
                                        </div>
                                        <div className="multi-step-info">
                                            <h6>Social Profiles</h6>
                                        </div>
                                    </li>
                                    <li className={fieldFour ? "active" : ""}>
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
                                <fieldset id="first-field" style={{ display: fieldOne ? "block" : "none" }}>
                                    <form>
                                        <div className="form-upload-profile">
                                            <h6 className="">
                                                Profile Image <span> *</span>
                                            </h6>
                                            <div className="profile-pic-upload">
                                                <div className="profile-pic">
                                                    <span><img src={avatar19} class="rounded-circle" alt="Img" /></span>
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
                                                        <input className="form-control" type="text" value= 'Darlee'/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Last Name <span className="text-danger"> *</span>
                                                        </label>
                                                        <input className="form-control" type="text" value='Robertson' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Job Title <span className="text-danger"> *</span>
                                                        </label>
                                                        <input className="form-control" type="text" value="Facility Manager" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Company Name <span className="text-danger">*</span>
                                                        </label>
                                                        <Select
                                                            className="select"
                                                            options={options.companyName}
                                                            placeholder="NovaWaveLLC"
                                                            styles={customStyles}
                                                        />
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
                                                               

                                                                <input type="checkbox" id="user3" className="check" defaultChecked />
                                                                <label htmlFor="user3" className="checktoggle" />
                                                            </div>
                                                        </div>
                                                        <input className="form-control" type="email" value='Robertson@example.com'/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Phone Number 1<span className="text-danger"> *</span>
                                                        </label>
                                                        <input className="form-control" type="text"  value='+1 875455453'/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Phone Number 2<span className="text-danger" > *</span>
                                                        </label>
                                                        <input className="form-control" type="text" value='+1 895455455'/>
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
                                                                Edit New
                                                            </Link>
                                                        </div>
                                                        <Select
                                                            className="select"
                                                            options={options.dealsList}
                                                            placeholder="Collins"
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Date of birth <span className="text-danger">*</span>
                                                        </label>
                                                        <input className="form-control" type="text" value='02-05-1998'/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Reviews <span className="text-danger">*</span>
                                                        </label>

                                                        <Select
                                                            className="select"
                                                            options={options.reviews}
                                                            placeholder="Lowest"
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Owner <span className="text-danger">*</span>
                                                        </label>

                                                        <Select
                                                            className="select"
                                                            options={options.ownerName}
                                                            placeholder="Hendry"
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Industry <span className="text-danger">*</span>
                                                        </label>

                                                        <Select
                                                            className="select"
                                                            options={options.industry}
                                                            placeholder="Barry Cuda"
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Currency <span className="text-danger">*</span>
                                                        </label>

                                                        <Select
                                                            className="select"
                                                            options={options.currencySymbol}

                                                            placeholder="$"
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Language <span className="text-danger">*</span>
                                                        </label>

                                                        <Select
                                                            className="select"
                                                            options={options.language} placeholder="English"
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Tags <span className="text-danger">*</span>
                                                        </label>
                                                        <ReactTagInput />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Source <span className="text-danger">*</span>
                                                        </label>

                                                        <Select
                                                            className="select"
                                                            options={options.sourceList}
                                                            placeholder="Barry Cuda"
                                                            styles={customStyles}
                                                        />
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
                                                        type="button" onClick={FieldsetTwo}
                                                    >
                                                        Save &amp; Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </fieldset>

                                <fieldset style={{ display: fieldTwo ? "block" : "none" }}>
                                    <form>
                                        <div className="contact-input-set">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Street Address<span className="text-danger"> *</span>
                                                        </label>
                                                        <input className="form-control" type="text" value='38 Simpson Street' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            City <span className="text-danger"> *</span>
                                                        </label>
                                                        <input className="form-control" type="text" value='Rock Island'/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            State / Province{" "}
                                                            <span className="text-danger"> *</span>
                                                        </label>
                                                        <input className="form-control" type="text" value='USA'/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Country <span className="text-danger">*</span>
                                                        </label>

                                                        <Select
                                                            className="select"
                                                            options={options.countrylist}
                                                            placeholder="Select"
                                                            styles={customStyles}
                                                        />
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
                                                        type="button" onClick={FieldsetThree}

                                                    >
                                                        Save &amp; Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </fieldset>

                                <fieldset style={{ display: fieldThree ? "block" : "none" }}>

                                    <form>
                                        <div className="contact-input-set">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">Facebook</label>
                                                        <input className="form-control" type="text" value='Darlee Robertson'/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">Twitter</label>
                                                        <input className="form-control" type="text" value='Darlee Robertson' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">Linkedin</label>
                                                        <input className="form-control" type="text" value='Darlee Robertson'/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">Skype</label>
                                                        <input className="form-control" type="text" value='Darlee Robertson'/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">Whatsapp</label>
                                                        <input className="form-control" type="text" value='Darlee Robertson' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">Instagram</label>
                                                        <input className="form-control" type="text" value='Darlee Robertson' />
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
                                                        type="button" onClick={FieldsetFour}
                                                    >
                                                        Save &amp; Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </fieldset>
                                <fieldset style={{ display: fieldFour ? "block" : "none" }}>
                                    <form>
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
                                                                        src={avatar19}
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
                                                                        src={avatar20}
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
                                                                        src={avatar21}
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
                                                                        src={avatar1}
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
                                                        id="test4"
                                                        name="radio-group"
                                                        defaultChecked="true"
                                                    />
                                                    <label htmlFor="test4">Active</label>
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
                                                <Link
                                                    className="btn btn-primary"
                                                    to="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#success_msg"
                                                >
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
            {/* /Add Contact */}
            {/* Success Contact */}
            <div className="modal custom-modal fade" id="success_msg" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="success-message text-center">
                                <div className="success-popup-icon">
                                    <i className="la la-user-shield" />
                                </div>
                                <h3>Contact Created Successfully!!!</h3>
                                <p>View the details of contact</p>
                                <div className="col-lg-12 text-center form-wizard-button">
                                    <Link to="#" className="button btn-lights" data-bs-dismiss="modal">
                                        Close
                                    </Link>
                                    <Link to="#" className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Success Contact */}
        </div>


    )
}

export default EditContact
