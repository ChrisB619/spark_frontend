import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { avatar1, avatar19, avatar20, avatar21, avatar22, googleicon, media35 } from '../../../Routes/ImagePath'
import { Calendar, Edit, Mail, MapPin, MessageCircle, MoreVertical, Phone, PlusCircle } from 'react-feather'
import Select from 'react-select'
import AddNotes from '../../../components/modelpopup/Crm/AddNotes'
import Calls from '../../../components/modelpopup/Crm/Calls'
import AddFiles from '../../../components/modelpopup/Crm/AddFiles'
import CreateEmail from '../../../components/modelpopup/Crm/CreateEmail'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import SendMail from '../../../components/modelpopup/Crm/SendMail'
import AddDealsContactDetail from '../../../components/modelpopup/Crm/AddDealsContactDetail'
import AddCompany from '../../../components/modelpopup/Crm/AddCompany'
import EditContact from '../../../components/modelpopup/Crm/EditContact'
import DeleteContactDetails from '../../../components/modelpopup/Crm/DeleteContactDetails'

const ContactDetails = () => {
    const [showFirstField, setShowFirstField] = useState(false);
    const handleSaveAndNext = () => {
        setShowFirstField(true);
    };
    const handleCancel = () => {
        setShowFirstField(false);
    };
    const [showFirstField1, setShowFirstField1] = useState(false);
    const handleSaveAndNext1 = () => {
        setShowFirstField1(true);
    };
    const handleCancel1 = () => {
        setShowFirstField1(false);
    };
    const [showFirstField2, setShowFirstField2] = useState(false);
    const handleSaveAndNext2 = () => {
        setShowFirstField2(true);
    };
    const handleCancel2 = () => {
        setShowFirstField2(false);
    };
    const tooltipContent = (
        <Tooltip id="tooltip">
            There are no email accounts configured. Please configure your email account in order to Send/Create Emails.
        </Tooltip>
    );

    const recentlyViewd = [
        { value: 'Sort By Alphabet', label: 'Sort By Alphabet' },
        { value: 'Ascending', label: 'Ascending' },
        { value: 'Descending', label: 'Descending' },

    ];
    const recentlyViewdByDate = [
        { value: 'Sort By Alphabet', label: 'Sort By Alphabet' },
        { value: 'Ascending', label: 'Ascending' },
        { value: 'Descending', label: 'Descending' },

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
    const [isFullScreen, setFullScreen] = useState(false);
    const maximizeBtnRef = useRef(null);

    useEffect(() => {
        const handleClick = () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                setFullScreen(true);
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    setFullScreen(false);
                }
            }
        };

        const cleanup = () => {
            if (isFullScreen && document.exitFullscreen) {
                document.exitFullscreen();
                setFullScreen(false);
            }
        };

        const maximizeBtn = maximizeBtnRef.current;
        maximizeBtn.addEventListener('click', handleClick);

        // Cleanup function to remove the event listener and exit fullscreen on component unmount
        return () => {
            maximizeBtn.removeEventListener('click', handleClick);
            cleanup();
        };
    }, [isFullScreen]);

    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                {/* Page Content */}
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <h3 className="page-title">Contact</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/admin-dashboard">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Contact</li>
                                </ul>
                            </div>
                            <div className="col-md-8 float-end ms-auto">
                                <div className="d-flex title-head">
                                    <div className="view-icons">
                                        <Link to="#" className="grid-view btn btn-link">
                                            <i className="las la-redo-alt" />
                                        </Link>
                                        <Link
                                            to="#"
                                            className="list-view btn btn-link"
                                            id="collapse-header"
                                            ref={maximizeBtnRef}
                                        >
                                            <i className="las la-expand-arrows-alt" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <hr />
                    <div className="row">
                        {/* Contact User */}
                        <div className="col-md-12">
                            <div className="contact-head">
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <ul className="contact-breadcrumb">
                                            <li>
                                                <Link to="/contact-grid">
                                                    <i className="las la-arrow-left" /> Contacts
                                                </Link>
                                            </li>
                                            <li>Jackson Daniel</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 text-sm-end">
                                        <div className="contact-pagination">
                                            <p>1 of 40</p>
                                            <ul>
                                                <li>
                                                    <Link to="/contact-details">
                                                        <i className="las la-arrow-left" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact-details">
                                                        <i className="las la-arrow-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-wrap">
                                <div className="contact-profile">
                                    <div className="avatar avatar-xxl">
                                        <img src={avatar19} alt="Img" />
                                        <span className="status online" />
                                    </div>
                                    <div className="name-user">
                                        <h4>Jackson Daniel</h4>
                                        <p>Facility Manager, Global INC</p>
                                        <div className="badge-rate">
                                            <span className="badge badge-light">
                                                <i className="las la-lock" />
                                                Private
                                            </span>
                                            <p>
                                                <i className="fa-solid fa-star" /> 5.0
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contacts-action">
                                    <Link to="#" className="btn-icon text-warning">
                                        <i className="fa-solid fa-star" />
                                    </Link>
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_deals"
                                        className="btn btn-pink"
                                    >
                                        <PlusCircle className='me-1' size={15} />
                                        Add Deal
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_compose"
                                    >
                                        <Mail className='me-1' size={15} />
                                        Send Email
                                    </Link>
                                    <Link to="/call/chat" className="btn-icon">
                                        <MessageCircle size={15} />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_contact"
                                    >
                                        <Edit size={15} />
                                    </Link>
                                    <div className="dropdown">
                                        <Link
                                            to="#"
                                            className="dropdown-toggle marg-tp"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <MoreVertical size={15} />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_contact"
                                            >
                                                Delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Contact User */}
                        {/* Contact Sidebar */}
                        <div className="col-xl-3">
                            <div className='stickybar'>
                                <div className="card contact-sidebar">
                                    <h5>Basic Information</h5>
                                    <ul className="basic-info">
                                        <li>
                                            <span>
                                                <Mail size={15} />
                                            </span>
                                            <p>Darleeo@example.com</p>
                                        </li>
                                        <li>
                                            <span>
                                                <Phone size={15} />
                                            </span>
                                            <p>+1 12445-47878</p>
                                        </li>
                                        <li>
                                            <span>
                                                <MapPin size={15} />
                                            </span>
                                            <p>22, Ave Street, Newyork, USA</p>
                                        </li>
                                        <li>
                                            <span>
                                                <Calendar size={15} />
                                            </span>
                                            <p>Created on 5 Jan 2024, 10:30 am</p>
                                        </li>
                                    </ul>
                                    <h5>Other Information</h5>
                                    <ul className="other-info">
                                        <li>
                                            <span className="other-title">Language</span>
                                            <span>Language</span>
                                        </li>
                                        <li>
                                            <span className="other-title">Currency</span>
                                            <span>United States dollar</span>
                                        </li>
                                        <li>
                                            <span className="other-title">Last Modified</span>
                                            <span>27 Sep 2023, 11:45 pm</span>
                                        </li>
                                        <li>
                                            <span className="other-title">Source</span>
                                            <span>Paid Campaign</span>
                                        </li>
                                    </ul>
                                    <h5>Tags</h5>
                                    <ul className="tag-info">
                                        <li>
                                            <Link to="#" className="bg-success-light">
                                                Collab
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="bg-warning-light">
                                                Rated
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <h5>Company</h5>
                                        <Link
                                            to="#"
                                            className="com-add"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add_contact"
                                        >
                                            <i className="las la-plus-circle me-1" />
                                            Add New
                                        </Link>
                                    </div>
                                    <ul className="company-info">
                                        <li>
                                            <span>
                                                <img src={googleicon} alt="Img" />
                                            </span>
                                            <div>
                                                <h6>
                                                    Google. Inc{" "}
                                                    <i className="fa-solid fa-circle-check text-success" />
                                                </h6>
                                                <p>www.google.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <h5>Social Profile</h5>
                                    <ul className="social-info">
                                        <li>
                                            <Link to="#">
                                                <i className="fa-brands fa-youtube" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa-brands fa-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa-brands fa-whatsapp" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa-brands fa-pinterest" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa-brands fa-linkedin" />
                                            </Link>
                                        </li>
                                    </ul>
                                    <h5>Settings</h5>
                                    <ul className="set-info">
                                        <li>
                                            <Link to="#">
                                                <i className="las la-upload" />
                                                Share Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="feather-star" />
                                                Add to Favourite
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_contact"
                                            >
                                                <i className="feather-trash-2" />
                                                Delete Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Contact Sidebar */}
                        {/* Contact Details */}
                        <div className="col-xl-9">
                            <div className="contact-tab-wrap">
                                <ul className="contact-nav nav">
                                    <li>
                                        <Link
                                            to="#"
                                            data-bs-toggle="tab"
                                            data-bs-target="#activities"
                                            className="active"
                                        >
                                            <i className="las la-user-clock" />
                                            Activities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" data-bs-toggle="tab" data-bs-target="#notes">
                                            <i className="las la-file" />
                                            Notes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" data-bs-toggle="tab" data-bs-target="#calls">
                                            <i className="las la-phone-volume" />
                                            Calls
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" data-bs-toggle="tab" data-bs-target="#files">
                                            <i className="las la-file" />
                                            Files
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" data-bs-toggle="tab" data-bs-target="#email">
                                            <i className="las la-envelope" />
                                            Email
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Tab Content */}
                            <div className="contact-tab-view">
                                <div className="tab-content pt-0">
                                    {/* Activities */}
                                    <div className="tab-pane active show" id="activities">
                                        <div className="view-header">
                                            <h4>Activities</h4>
                                            <ul>
                                                <li>
                                                    <div className="form-sort deals-dash-select">
                                                        <i className="las la-sort-amount-up-alt" />
                                                        <Select
                                                            className="select w-100"
                                                            options={recentlyViewd}
                                                            placeholder="Sort By Alphabet"
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="contact-activity">
                                            <div className="badge-day">
                                                <i className="fa-regular fa-calendar-check" />
                                                15 Feb 2024
                                            </div>
                                            <ul>
                                                <li className="activity-wrap">
                                                    <span className="activity-icon bg-info">
                                                        <i className="las la-comment-alt" />
                                                    </span>
                                                    <div className="activity-info">
                                                        <h6>You sent 1 Message to the contact.</h6>
                                                        <p>10:25 pm</p>
                                                    </div>
                                                </li>
                                                <li className="activity-wrap">
                                                    <span className="activity-icon bg-success">
                                                        <i className="las la-phone" />
                                                    </span>
                                                    <div className="activity-info">
                                                        <h6>
                                                            Denwar responded to your appointment schedule question
                                                            by call at 09:30pm.
                                                        </h6>
                                                        <p>09:25 pm</p>
                                                    </div>
                                                </li>
                                                <li className="activity-wrap">
                                                    <span className="activity-icon bg-warning">
                                                        <i className="las la-file-alt" />
                                                    </span>
                                                    <div className="activity-info">
                                                        <h6>Notes added by Antony</h6>
                                                        <p>
                                                            Please accept my apologies for the inconvenience
                                                            caused. It would be much appreciated if it's possible
                                                            to reschedule to 6:00 PM, or any other day that week.
                                                        </p>
                                                        <p>10.00 pm</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="badge-day">
                                                <i className="fa-regular fa-calendar-check" />
                                                15 Feb 2024
                                            </div>
                                            <ul>
                                                <li className="activity-wrap">
                                                    <span className="activity-icon bg-pending">
                                                        <i className="las la-user-tie" />
                                                    </span>
                                                    <div className="activity-info">
                                                        <h6>
                                                            Meeting With{" "}
                                                            <span className="avatar-xs">
                                                                <img
                                                                    src={avatar19}
                                                                    alt="img"
                                                                />
                                                            </span>{" "}
                                                            Abraham
                                                        </h6>
                                                        <p>Schedueled on 05:00 pm</p>
                                                    </div>
                                                </li>
                                                <li className="activity-wrap">
                                                    <span className="activity-icon bg-success">
                                                        <i className="las la-phone" />
                                                    </span>
                                                    <div className="activity-info">
                                                        <h6>
                                                            Drain responded to your appointment schedule question.
                                                        </h6>
                                                        <p>09:25 pm</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="badge-day">
                                                <i className="fa-regular fa-calendar-check" />
                                                Upcoming Activity
                                            </div>
                                            <ul>
                                                <li className="activity-wrap">
                                                    <span className="activity-icon bg-pending">
                                                        <i className="las la-user-tie" />
                                                    </span>
                                                    <div className="activity-info">
                                                        <h6>Product Meeting</h6>
                                                        <p>
                                                            A product team meeting is a gathering of the
                                                            cross-functional product team — ideally including team
                                                            members from product, engineering, marketing, and
                                                            customer support.
                                                        </p>
                                                        <p>25 Jul 2023, 05:00 pm</p>
                                                        <div className="upcoming-info">
                                                            <div className="row">
                                                                <div className="col-sm-4">
                                                                    <p>Reminder</p>
                                                                    <div className="dropdown">
                                                                        <Link
                                                                            to="#"
                                                                            className="dropdown-toggle"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="las la-clock me-1" />
                                                                            Reminder
                                                                            <i className="las la-angle-down ms-1" />
                                                                        </Link>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="#"
                                                                            >
                                                                                Remainder
                                                                            </Link>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="#"
                                                                            >
                                                                                1 hr
                                                                            </Link>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="#"
                                                                            >
                                                                                10 hr
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <p>Task Priority</p>
                                                                    <div className="dropdown">
                                                                        <Link
                                                                            to="#"
                                                                            className="dropdown-toggle"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="fa-solid fa-circle me-1 text-danger circle" />
                                                                            High
                                                                            <i className="las la-angle-down ms-1" />
                                                                        </Link>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="#"
                                                                            >
                                                                                <i className="fa-solid fa-circle me-1 text-danger circle" />
                                                                                High
                                                                            </Link>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="#"
                                                                            >
                                                                                <i className="fa-solid fa-circle me-1 text-success circle" />
                                                                                Low
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <p>Assigned to</p>
                                                                    <div className="dropdown">
                                                                        <Link
                                                                            to="#"
                                                                            className="dropdown-toggle"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <img
                                                                                src={avatar19}
                                                                                alt="img"
                                                                                className="me-1 avatar-xs"
                                                                            />
                                                                            John
                                                                            <i className="las la-angle-down ms-1" />
                                                                        </Link>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="#"
                                                                            >
                                                                                <img
                                                                                    src={avatar19}
                                                                                    alt="img"
                                                                                    className="me-1 avatar-xs"
                                                                                />
                                                                                John
                                                                            </Link>
                                                                            <Link
                                                                                className="dropdown-item"
                                                                                to="#"
                                                                            >
                                                                                <img
                                                                                    src={avatar19}
                                                                                    alt="img"
                                                                                    className="me-1 avatar-xs"
                                                                                />
                                                                                Peter
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Activities */}
                                    {/* Notes */}
                                    <div className="tab-pane fade" id="notes">
                                        <div className="view-header">
                                            <h4>Notes</h4>
                                            <ul>
                                                <li>
                                                    <div className="form-sort deals-dash-select">
                                                        <Select
                                                            className="select w-100"
                                                            options={recentlyViewdByDate}
                                                            placeholder="Sort By Date"
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#add_notes"
                                                        className="com-add"
                                                    >
                                                        <i className="las la-plus-circle me-1" />
                                                        Add New
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="notes-activity">
                                            <div className="calls-box">
                                                <div className="caller-info">
                                                    <div className="calls-user">
                                                        <img src={avatar19} alt="img" />
                                                        <div>
                                                            <h6>Darlee Robertson</h6>
                                                            <p>15 Sep 2023, 12:10 pm</p>
                                                        </div>
                                                    </div>
                                                    <div className="calls-action">
                                                        <div className="dropdown action-drop">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <MoreVertical size={15} />
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    <i className="las la-edit me-1" />
                                                                    Edit
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    <i className="las la-trash me-1" />
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5>Notes added by Antony</h5>
                                                <p>
                                                    A project review evaluates the success of an initiative
                                                    and identifies areas for improvement. It can also evaluate
                                                    a current project to determine whether it's on the right
                                                    track. Or, it can determine the success of a completed
                                                    project.{" "}
                                                </p>
                                                <ul>
                                                    <li>
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon bg-success">
                                                                    <i className="las la-file-excel" />
                                                                </span>
                                                                <div>
                                                                    <h6>Project Specs.xls</h6>
                                                                    <p>365 KB</p>
                                                                </div>
                                                            </div>
                                                            <Link to="#">
                                                                <i className="las la-download" />
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon">
                                                                    <img
                                                                        src={media35}
                                                                        alt="img"
                                                                    />
                                                                </span>
                                                                <div>
                                                                    <h6>090224.jpg</h6>
                                                                    <p>365 KB</p>
                                                                </div>
                                                            </div>
                                                            <Link to="#">
                                                                <i className="las la-download" />
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="notes-editor">
                                                    <div className="note-edit-wrap" style={{ display: showFirstField ? 'block' : 'none' }}>
                                                        <div className="summernote">
                                                            Write a new comment, send your team notification by
                                                            typing @ followed by their name
                                                        </div>
                                                        <div className="text-end note-btns">
                                                            <Link
                                                                to="#" onClick={handleCancel}
                                                                className="btn btn-lighter add-cancel"
                                                            >
                                                                Cancel
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-primary"
                                                            >
                                                                Save
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link to="#" className="add-comment" onClick={handleSaveAndNext}>
                                                            <i className="las la-plus-circle me-1" />
                                                            Add Comment
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="calls-box">
                                                <div className="caller-info">
                                                    <div className="calls-user">
                                                        <img src={avatar20} alt="img" />
                                                        <div>
                                                            <h6>Sharon Roy</h6>
                                                            <p>18 Sep 2023, 09:52 am</p>
                                                        </div>
                                                    </div>
                                                    <div className="calls-action">
                                                        <div className="dropdown action-drop">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <MoreVertical size={15} />
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    <i className="las la-edit me-1" />
                                                                    Edit
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    <i className="las la-trash me-1" />
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5>Notes added by Antony</h5>
                                                <p>
                                                    A project plan typically contains a list of the essential
                                                    elements of a project, such as stakeholders, scope,
                                                    timelines, estimated cost and communication methods. The
                                                    project manager typically lists the information based on
                                                    the assignment.
                                                </p>
                                                <ul>
                                                    <li>
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon bg-success">
                                                                    <i className="las la-file-excel" />
                                                                </span>
                                                                <div>
                                                                    <h6>Andrewpass.txt</h6>
                                                                    <p>365 KB</p>
                                                                </div>
                                                            </div>
                                                            <Link to="#">
                                                                <i className="las la-file-alt" />
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="reply-box">
                                                    <p>
                                                        The best way to get a project done faster is to start
                                                        sooner. A goal without a timeline is just a dream.The
                                                        goal you set must be challenging. At the same time, it
                                                        should be realistic and attainable, not impossible to
                                                        reach.
                                                    </p>
                                                    <p>
                                                        Commented by <span className="text-primary">Aeron</span>{" "}
                                                        on 15 Sep 2023, 11:15 pm
                                                    </p>
                                                </div>
                                                <div className="notes-editor">
                                                    <div className="note-edit-wrap" style={{ display: showFirstField1 ? 'block' : 'none' }}>
                                                        <div className="summernote">
                                                            Write a new comment, send your team notification by
                                                            typing @ followed by their name
                                                        </div>
                                                        <div className="text-end note-btns">
                                                            <Link
                                                                to="#" onClick={handleCancel1}
                                                                className="btn btn-lighter add-cancel"
                                                            >
                                                                Cancel
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-primary"
                                                            >
                                                                Save
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link to="#" className="add-comment" onClick={handleSaveAndNext1}>
                                                            <i className="las la-plus-circle me-1" />
                                                            Add Comment
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="calls-box">
                                                <div className="caller-info">
                                                    <div className="calls-user">
                                                        <img src={avatar21} alt="img" />
                                                        <div>
                                                            <h6>Vaughan</h6>
                                                            <p>20 Sep 2023, 10:26 pm</p>
                                                        </div>
                                                    </div>
                                                    <div className="calls-action">
                                                        <div className="dropdown action-drop">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <MoreVertical size={15} />
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    <i className="las la-edit me-1" />
                                                                    Edit
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    <i className="las la-trash me-1" />
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>
                                                    Projects play a crucial role in the success of
                                                    organizations, and their importance cannot be overstated.
                                                    Whether it's launching a new product, improving an
                                                    existing
                                                </p>
                                                <div className="notes-editor">
                                                    <div className="note-edit-wrap" style={{ display: showFirstField2 ? 'block' : 'none' }}>
                                                        <div className="summernote">
                                                            Write a new comment, send your team notification by
                                                            typing @ followed by their name
                                                        </div>
                                                        <div className="text-end note-btns">
                                                            <Link
                                                                to="#"
                                                                className="btn btn-lighter add-cancel" onClick={handleCancel2}
                                                            >
                                                                Cancel
                                                            </Link>
                                                            <Link onClick={handleSaveAndNext2}
                                                                to="#"
                                                                className="btn btn-primary"
                                                            >
                                                                Save
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link to="#" className="add-comment" onClick={handleSaveAndNext2}>
                                                            <i className="las la-plus-circle me-1" />
                                                            Add Comment
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Notes */}
                                    {/* Calls */}
                                    <div className="tab-pane fade" id="calls">
                                        <div className="view-header">
                                            <h4>Calls</h4>
                                            <ul>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#create_call"
                                                        className="com-add"
                                                    >
                                                        <i className="las la-plus-circle me-1" />
                                                        Add New
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="calls-activity">
                                            <div className="calls-box">
                                                <div className="caller-info">
                                                    <div className="calls-user">
                                                        <img src={avatar19} alt="img" />
                                                        <p>
                                                            <span>Darlee Robertson</span> logged a call on 23 Jul
                                                            2023, 10:00 pm
                                                        </p>
                                                    </div>
                                                    <div className="calls-action">
                                                        <div className="dropdown call-drop">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                Busy
                                                                <i className="las la-angle-down ms-1" />
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Busy
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    No Answer
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Unavailable
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Wrong Number
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Left Voice Message
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Moving Forward
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <MoreVertical size={15} />
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>
                                                    A project review evaluates the success of an initiative
                                                    and identifies areas for improvement. It can also evaluate
                                                    a current project to determine whether it's on the right
                                                    track. Or, it can determine the success of a completed
                                                    project.{" "}
                                                </p>
                                            </div>
                                            <div className="calls-box">
                                                <div className="caller-info">
                                                    <div className="calls-user">
                                                        <img src={avatar20} alt="img" />
                                                        <p>
                                                            <span>Sharon Roy</span> logged a call on 28 Jul 2023,
                                                            09:00 pm
                                                        </p>
                                                    </div>
                                                    <div className="calls-action">
                                                        <div className="dropdown call-drop">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-toggle bg-light-pending"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                No Answer
                                                                <i className="las la-angle-down ms-1" />
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Busy
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    No Answer
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Unavailable
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Wrong Number
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Left Voice Message
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Moving Forward
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <MoreVertical size={15} />
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>
                                                    A project plan typically contains a list of the essential
                                                    elements of a project, such as stakeholders, scope,
                                                    timelines, estimated cost and communication methods. The
                                                    project manager typically lists the information based on
                                                    the assignment.
                                                </p>
                                            </div>
                                            <div className="calls-box">
                                                <div className="caller-info">
                                                    <div className="calls-user">
                                                        <img src={avatar21} alt="img" />
                                                        <p>
                                                            <span>Vaughan</span> logged a call on 30 Jul 2023,
                                                            08:00 pm
                                                        </p>
                                                    </div>
                                                    <div className="calls-action">
                                                        <div className="dropdown call-drop">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-toggle bg-light-pending"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                No Answer
                                                                <i className="las la-angle-down ms-1" />
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Busy
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    No Answer
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Unavailable
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Wrong Number
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Left Voice Message
                                                                </Link>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Moving Forward
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <MoreVertical size={15} />
                                                            </Link>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>
                                                    Projects play a crucial role in the success of
                                                    organizations, and their importance cannot be overstated.
                                                    Whether it's launching a new product, improving an
                                                    existing
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Calls */}
                                    {/* Files */}
                                    <div className="tab-pane fade" id="files">
                                        <div className="view-header">
                                            <h4>Files</h4>
                                        </div>
                                        <div className="files-activity">
                                            <div className="files-wrap">
                                                <div className="row align-items-center">
                                                    <div className="col-md-8">
                                                        <div className="file-info">
                                                            <h4>Manage Documents</h4>
                                                            <p>
                                                                Send customizable quotes, proposals and contracts to
                                                                close deals faster.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 text-md-end">
                                                        <ul className="file-action">
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-primary"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#new_file"
                                                                >
                                                                    Create Document
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="files-wrap">
                                                <div className="row align-items-center">
                                                    <div className="col-md-8">
                                                        <div className="file-info">
                                                            <h4>Collier-Turner Proposal</h4>
                                                            <p>
                                                                Send customizable quotes, proposals and contracts to
                                                                close deals faster.
                                                            </p>
                                                            <div className="file-user">
                                                                <img
                                                                    src={avatar21}
                                                                    alt="img"
                                                                />
                                                                <div>
                                                                    <p>
                                                                        <span>Owner</span> Vaughan
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 text-md-end">
                                                        <ul className="file-action">
                                                            <li>
                                                                <span className="badge badge-soft-pink">
                                                                    Proposal
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="badge badge-soft-grey priority-badge">
                                                                    <i className="fa-solid fa-circle" />
                                                                    Low
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown action-drop">
                                                                    <Link
                                                                        to="#"
                                                                        className="dropdown-toggle"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <MoreVertical size={15} />
                                                                    </Link>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="las la-edit me-1" />
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="las la-trash me-1" />
                                                                            Delete
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="las la-download me-1" />
                                                                            Download
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="files-wrap">
                                                <div className="row align-items-center">
                                                    <div className="col-md-8">
                                                        <div className="file-info">
                                                            <h4>Collier-Turner Proposal</h4>
                                                            <p>
                                                                Send customizable quotes, proposals and contracts to
                                                                close deals faster.
                                                            </p>
                                                            <div className="file-user">
                                                                <img
                                                                    src={avatar1}
                                                                    alt="img"
                                                                />
                                                                <div>
                                                                    <p>
                                                                        <span>Owner</span> Jessica
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 text-md-end">
                                                        <ul className="file-action">
                                                            <li>
                                                                <span className="badge badge-soft-info">Quote</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge badge-soft-success priority-badge">
                                                                    <i className="fa-solid fa-circle" />
                                                                    Sent
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown action-drop">
                                                                    <Link
                                                                        to="#"
                                                                        className="dropdown-toggle"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <MoreVertical size={15} />
                                                                    </Link>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="las la-edit me-1" />
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="las la-trash me-1" />
                                                                            Delete
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="las la-download me-1" />
                                                                            Download
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="files-wrap">
                                                <div className="row align-items-center">
                                                    <div className="col-md-8">
                                                        <div className="file-info">
                                                            <h4>Collier-Turner Proposal</h4>
                                                            <p>
                                                                Send customizable quotes, proposals and contracts to
                                                                close deals faster.
                                                            </p>
                                                            <div className="file-user">
                                                                <img
                                                                    src={avatar22}
                                                                    alt="img"
                                                                />
                                                                <div>
                                                                    <p>
                                                                        <span>Owner</span> Vaughan
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 text-md-end">
                                                        <ul className="file-action">
                                                            <li>
                                                                <span className="badge badge-soft-pink">
                                                                    Proposal
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="badge badge-soft-grey priority-badge">
                                                                    <i className="fa-solid fa-circle" />
                                                                    Low
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown action-drop">
                                                                    <Link
                                                                        to="#"
                                                                        className="dropdown-toggle"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <MoreVertical size={15} />
                                                                    </Link>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="las la-edit me-1" />
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="las la-trash me-1" />
                                                                            Delete
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="las la-download me-1" />
                                                                            Download
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Files */}
                                    {/* Email */}
                                    <div className="tab-pane fade" id="email">
                                        <div className="view-header">
                                            <h4>Email</h4>
                                            <ul>
                                                <li>
                                                    <OverlayTrigger
                                                        placement="left"
                                                        overlay={tooltipContent}
                                                    >
                                                        <Link
                                                            to="#"
                                                            className="com-add create-mail"
                                                        >
                                                            <i className="las la-plus-circle me-1" />
                                                            Create Email
                                                        </Link>
                                                    </OverlayTrigger>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="files-activity">
                                            <div className="files-wrap">
                                                <div className="row align-items-center">
                                                    <div className="col-md-8">
                                                        <div className="file-info">
                                                            <h4>Manage Emails</h4>
                                                            <p>
                                                                You can send and reply to emails directly via this
                                                                section.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 text-md-end">
                                                        <ul className="file-action">
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-primary"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#create_email"
                                                                >
                                                                    Connect Account
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="files-wrap">
                                                <div className="email-header">
                                                    <div className="row">
                                                        <div className="col top-action-left">
                                                            <div className="float-start d-none d-sm-block">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search Messages"
                                                                    className="form-control search-message"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-auto top-action-right">
                                                            <div className="text-end">
                                                                <button
                                                                    type="button"
                                                                    title="Refresh"
                                                                    data-bs-toggle="tooltip"
                                                                    className="btn btn-white d-none d-md-inline-block me-1"
                                                                >
                                                                    <i className="fa-solid fa-rotate" />
                                                                </button>
                                                                <div className="btn-group">
                                                                    <Link className="btn btn-white">
                                                                        <i className="fa-solid fa-angle-left" />
                                                                    </Link>
                                                                    <Link className="btn btn-white">
                                                                        <i className="fa-solid fa-angle-right" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="text-muted d-none d-md-inline-block">
                                                                    Showing 10 of 112{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="email-content">
                                                    <div className="table-responsive">
                                                        <table className="table table-inbox table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan={6} className="ps-2">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="checkbox-all"
                                                                        />
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr
                                                                    className="unread clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa fa-star starred " />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">John Doe</td>
                                                                    <td className="subject">
                                                                        Lorem ipsum dolor sit amet, consectetuer
                                                                        adipiscing elit
                                                                    </td>
                                                                    <td>
                                                                        <i className="fa-solid fa-paperclip" />
                                                                    </td>
                                                                    <td className="mail-date">13:14</td>
                                                                </tr>
                                                                <tr
                                                                    className="unread clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa-regular fa-star" />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">Envato Account</td>
                                                                    <td className="subject">
                                                                        Important account security update from Envato
                                                                    </td>
                                                                    <td />
                                                                    <td className="mail-date">8:42</td>
                                                                </tr>
                                                                <tr
                                                                    className="clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa-regular fa-star" />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">Twitter</td>
                                                                    <td className="subject">
                                                                        HRMS Bootstrap Admin Template
                                                                    </td>
                                                                    <td />
                                                                    <td className="mail-date">30 Nov</td>
                                                                </tr>
                                                                <tr
                                                                    className="unread clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa-regular fa-star" />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">Richard Parker</td>
                                                                    <td className="subject">
                                                                        Lorem ipsum dolor sit amet, consectetuer
                                                                        adipiscing elit
                                                                    </td>
                                                                    <td />
                                                                    <td className="mail-date">18 Sep</td>
                                                                </tr>
                                                                <tr
                                                                    className="clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa-regular fa-star" />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">John Smith</td>
                                                                    <td className="subject">
                                                                        Lorem ipsum dolor sit amet, consectetuer
                                                                        adipiscing elit
                                                                    </td>
                                                                    <td />
                                                                    <td className="mail-date">21 Aug</td>
                                                                </tr>
                                                                <tr
                                                                    className="clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa-regular fa-star" />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">me, Robert Smith (3)</td>
                                                                    <td className="subject">
                                                                        Lorem ipsum dolor sit amet, consectetuer
                                                                        adipiscing elit
                                                                    </td>
                                                                    <td />
                                                                    <td className="mail-date">1 Aug</td>
                                                                </tr>
                                                                <tr
                                                                    className="unread clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa-regular fa-star" />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">Codecanyon</td>
                                                                    <td className="subject">Welcome To Codecanyon</td>
                                                                    <td />
                                                                    <td className="mail-date">Jul 13</td>
                                                                </tr>
                                                                <tr
                                                                    className="clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa-regular fa-star" />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">Richard Miles</td>
                                                                    <td className="subject">
                                                                        Lorem ipsum dolor sit amet, consectetuer
                                                                        adipiscing elit
                                                                    </td>
                                                                    <td>
                                                                        <i className="fa-solid fa-paperclip" />
                                                                    </td>
                                                                    <td className="mail-date">May 14</td>
                                                                </tr>
                                                                <tr
                                                                    className="unread clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa-regular fa-star" />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">John Smith</td>
                                                                    <td className="subject">
                                                                        Lorem ipsum dolor sit amet, consectetuer
                                                                        adipiscing elit
                                                                    </td>
                                                                    <td />
                                                                    <td className="mail-date">11/11/16</td>
                                                                </tr>
                                                                <tr
                                                                    className="clickable-row"
                                                                    data-to="/mail-view"
                                                                >
                                                                    <td>
                                                                        <input type="checkbox" className="checkmail" />
                                                                    </td>
                                                                    <td>
                                                                        <span className="mail-important">
                                                                            <i className="fa fa-star starred " />
                                                                        </span>
                                                                    </td>
                                                                    <td className="name">Mike Litorus</td>
                                                                    <td className="subject">
                                                                        Lorem ipsum dolor sit amet, consectetuer
                                                                        adipiscing elit
                                                                    </td>
                                                                    <td />
                                                                    <td className="mail-date">10/31/16</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Email */}
                                </div>
                            </div>
                            {/* /Tab Content */}
                        </div>
                        {/* /Contact Details */}
                    </div>
                </div>
                <AddNotes />
                <Calls />
                <AddFiles />
                <CreateEmail />
                <SendMail />
                <AddDealsContactDetail />
                <EditContact />
                <DeleteContactDetails />
                <AddCompany />
            </div>
            {/* /Page Content */}
        </div>

    )
}

export default ContactDetails
