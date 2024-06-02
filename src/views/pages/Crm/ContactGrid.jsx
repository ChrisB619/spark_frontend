import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import AddContact from '../../../components/modelpopup/Crm/AddContact'
import EditContact from '../../../components/modelpopup/Crm/EditContact'
import DeleteContact from '../../../components/modelpopup/Crm/DeleteContact'
import ExportLeads from '../../../components/modelpopup/Crm/ExportLeads'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import AddNotes from '../../../components/modelpopup/Crm/AddNotes'
import axios from 'axios'
import { Table } from 'antd'

const ContactGrid = () => {
    const [inputValue, setInputValue] = useState("");
    const [focused, setFocused] = useState(false);

    const handleLabelClick = () => {
        setFocused(true);
    };
    const handleInputBlur = () => {
        if (inputValue === "") {
            setFocused(false);
        }
    };
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value !== "" && !focused) {
            setFocused(true);
        }
    };
    //
    const [inputValue1, setInputValue1] = useState("");

    const [focused1, setFocused1] = useState(false);

    const handleLabelClick1 = () => {
        setFocused1(true);
    };
    const handleInputBlur1 = () => {
        if (inputValue1 === "") {
            setFocused1(false);
        }
    };
    const handleInputChange1 = (e) => {
        const value = e.target.value;
        setInputValue1(value);
        if (value !== "" && !focused1) {
            setFocused1(true);
        }
    };
    //
    const [inputValue2, setInputValue2] = useState("");

    const [focused2, setFocused2] = useState(false);

    const handleLabelClick2 = () => {
        setFocused1(true);
    };
    const handleInputBlur2 = () => {
        if (inputValue2 === "") {
            setFocused2(false);
        }
    };
    const handleInputChange2 = (e) => {
        const value = e.target.value;
        setInputValue2(value);
        if (value !== "" && !focused2) {
            setFocused2(true);
        }
    };

    const [data, setData] = useState([])
    useEffect(() => {
    axios.get("")
    .then(res => setData(res.data))
    .catch(err => console.log(err));
    }, [])

    const columns = [
            {
            title: "Ticket Id",
            dataIndex: "id",
            sorter: (a, b) => a.id.length - b.id.length,
            },
            {
            title: "Company Id",
            dataIndex: "company_id",
            render: () => (
                <Link
                onClick={() => localStorage.setItem("minheight", "true")}
                to="/ticket-view"
                >
                #TKT-0001
                </Link>
            ),
            sorter: (a, b) => a.ticketid.length - b.ticketid.length,
            },

            {
            title: "Ticket Subject",
            dataIndex: "subject",
            sorter: (a, b) => a.ticketsubject.length - b.ticketsubject.length,
            },
            {
            title: "Assigned Staff",
            dataIndex: "name",
            render: (text, record) => (
                <span className="table-avatar">
                <Link to="/profile" className="avatar">
                    <img alt="" src={record.image} />
                </Link>
                <Link to="/profile">{text}</Link>
                </span>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
            },
            {
            title: "Created Date",
            dataIndex: "created_at",
            sorter: (a, b) => a.createddate.length - b.createddate.length,
            },

            {
            title: "Last Reply",
            dataIndex: "updated_at",
            sorter: (a, b) => a.lastreply.length - b.lastreply.length,
            },
            {
            title: "Priority",
            dataIndex: "priority",
            render: () => (
                <div className="dropdown action-label">
                <Link
                    className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="far fa-dot-circle text-danger" /> High{" "}
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="#">
                    <i className="far fa-dot-circle text-danger" /> High
                    </Link>
                    <Link className="dropdown-item" to="#">
                    <i className="far fa-dot-circle text-warning" /> Medium
                    </Link>
                    <Link className="dropdown-item" to="#">
                    <i className="far fa-dot-circle text-success" /> Low
                    </Link>
                </div>
                </div>
            ),
            sorter: (a, b) => a.priority.length - b.priority.length,
            },
            {
            title: "Status",
            dataIndex: "status",
            render: () => (
                <div className="dropdown action-label text-center">
                <Link
                    className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="far fa-dot-circle text-danger" /> New
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="#">
                    <i className="far fa-dot-circle text-info" /> Open
                    </Link>
                    <Link className="dropdown-item" to="#">
                    <i className="far fa-dot-circle text-info" /> Reopened
                    </Link>
                    <Link className="dropdown-item" to="#">
                    <i className="far fa-dot-circle text-danger" /> On Hold
                    </Link>
                    <Link className="dropdown-item" to="#">
                    <i className="far fa-dot-circle text-success" /> Closed
                    </Link>
                    <Link className="dropdown-item" to="#">
                    <i className="far fa-dot-circle text-success" /> In Progress
                    </Link>
                    <Link className="dropdown-item" to="#">
                    <i className="far fa-dot-circle text-danger" /> Cancelled
                    </Link>
                </div>
                </div>
            ),
            sorter: (a, b) => a.status.length - b.status.length,
            },
            {
            title: "Action",
            render: () => (
                <div className="dropdown dropdown-action text-end">
                <Link
                    to="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="material-icons">more_vert</i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link
                    className="dropdown-item"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_ticket"
                    >
                    <i className="fa fa-pencil m-r-5" /> Edit
                    </Link>
                    <Link
                    className="dropdown-item"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete"
                    >
                    <i className="fa fa-trash m-r-5" /> Delete
                    </Link>
                </div>
                </div>
            ),
            sorter: true,
            },
        ];


    const initialSettings = {
        endDate: new Date("2020-08-11T12:30:00.000Z"),
        ranges: {
            "Last 30 Days": [
                new Date("2020-07-12T04:57:17.076Z"),
                new Date("2020-08-10T04:57:17.076Z"),
            ],
            "Last 7 Days": [
                new Date("2020-08-04T04:57:17.076Z"),
                new Date("2020-08-10T04:57:17.076Z"),
            ],
            "Last Month": [
                new Date("2020-06-30T18:30:00.000Z"),
                new Date("2020-07-31T18:29:59.999Z"),
            ],
            "This Month": [
                new Date("2020-07-31T18:30:00.000Z"),
                new Date("2020-08-31T18:29:59.999Z"),
            ],
            Today: [
                new Date("2020-08-10T04:57:17.076Z"),
                new Date("2020-08-10T04:57:17.076Z"),
            ],
            Yesterday: [
                new Date("2020-08-09T04:57:17.076Z"),
                new Date("2020-08-09T04:57:17.076Z"),
            ],
        },
        startDate: new Date("2020-08-04T04:57:17.076Z"), // Set "Last 7 Days" as default
        timePicker: false,
    };
    const sortoption = [
        { value: 'Sort By Alphabet', label: 'Sort By Alphabet' },
        { value: 'Ascending', label: 'Ascending' },
        { value: 'Descending', label: 'Descending' },
        { value: 'Recently Viewed', label: 'Recently Viewed' },
        { value: 'Recently Added', label: 'Recently Added' },
    ];
    const countrylist = [
        { value: '--Select--', label: '--Select--' },
        { value: 'Germany', label: 'Germany' },
        { value: 'USA', label: 'USA' },
        { value: 'India', label: 'India' },
        { value: 'China', label: 'China' },
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

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const toggleFilterVisibility = () => {
        setIsFilterVisible((prevVisibility) => !prevVisibility);
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
                                        <Link to="#" className="list-view btn btn-link">
                                            <i className="las la-expand-arrows-alt" ref={maximizeBtnRef} />
                                        </Link>
                                        <Link
                                            to="#"
                                            className={`list-view btn btn-link ${isFilterVisible ? "active-filter" : ""}`}
                                            id="filter_search" onClick={toggleFilterVisibility}
                                        >
                                            <i className="las la-filter" />
                                        </Link>
                                    </div>
                                    <div className="form-sort">
                                        <Link to="#" className="list-view btn btn-link" data-bs-toggle="modal" data-bs-target="#export"><i className="las la-file-export"></i>Export</Link>
                                    </div>
                                    <Link
                                        to="#"
                                        className="btn add-btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_contact"
                                    >
                                        <i className="la la-plus-circle" /> Add Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    {/* Search Filter */}
                    <div
                        className={`filter-filelds${isFilterVisible ? ' visible' : ''}`}
                        id="filter_inputs"
                        style={{ display: isFilterVisible ? 'block' : 'none' }}
                    >
                        <div className="row filter-row">
                            <div className="col-xl-2">
                                <div
                                    className={
                                        focused || inputValue !== ""
                                            ? "input-block mb-3 form-focus focused"
                                            : "input-block mb-3 form-focus"
                                    }
                                >
                                    <input
                                        type="text"
                                        className="form-control floating"
                                        value={inputValue}
                                        onFocus={handleLabelClick}
                                        onBlur={handleInputBlur}
                                        onChange={handleInputChange}
                                    />
                                    <label className="focus-label">Contact Name</label>
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div
                                    className={
                                        focused2 || inputValue2 !== ""
                                            ? "input-block mb-3 form-focus focused"
                                            : "input-block mb-3 form-focus"
                                    }
                                >
                                    <input
                                        type="text"
                                        className="form-control floating"
                                        value={inputValue2}
                                        onFocus={handleLabelClick2}
                                        onBlur={handleInputBlur2}
                                        onChange={handleInputChange2}
                                    />
                                    <label className="focus-label" >Email</label>
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div
                                    className={
                                        focused1 || inputValue1 !== ""
                                            ? "input-block mb-3 form-focus focused"
                                            : "input-block mb-3 form-focus"
                                    }
                                >
                                    <input
                                        type="text"
                                        className="form-control floating"
                                        value={inputValue1}
                                        onFocus={handleLabelClick1}
                                        onBlur={handleInputBlur1}
                                        onChange={handleInputChange1}
                                    />
                                    <label className="focus-label">Phone Number</label>
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="input-block mb-3 form-focus focused">
                                    <DateRangePicker initialSettings={initialSettings}>
                                        <input
                                            className="form-control  date-range bookingrange"
                                            type="text"
                                        />
                                    </DateRangePicker>
                                    <label className="focus-label">From - To Date</label>
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="input-block mb-3 form-focus select-focus">

                                    <Select
                                        options={countrylist}
                                        placeholder="--Select--"
                                        styles={customStyles}
                                    />
                                    <label className="focus-label">Location</label>
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <Link to="#" className="btn btn-success w-100">
                                    {" "}
                                    Search{" "}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* /Search Filter */}
                    <div className="filter-section">
                        <ul>
                            <li>
                                <div className="view-icons">
                                    <Link to="/contact-list" className="list-view btn btn-link">
                                        <i className="las la-list" />
                                    </Link>
                                    <Link
                                        to="/contact-grid"
                                        className="grid-view btn btn-link active"
                                    >
                                        <i className="las la-th" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="form-sort value-contain">
                                    <i className="las la-sort-alpha-up-alt" />

                                    <Select
                                        className="form-sort-two w-100"
                                        options={sortoption}
                                        placeholder="Sort By Alphabet"
                                        styles={customStyles}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className={`form-sorts dropdown ${isDropdownOpen ? 'table-filter-show' : ''}`}>
                                    <Link to="#" onClick={handleToggleDropdown} className="dropdown-toggle" data-bs-toggle="dropdown">
                                        <i className="las la-filter me-2" />
                                        Filter
                                    </Link>
                                    <div className="dropdown-menu">
                                        <div className="filter-set-view">
                                            <div className="filter-set-head">
                                                <h4>Filter</h4>
                                            </div>
                                            <div className="filter-set-content">
                                                <div className="filter-set-content-head">
                                                    <Link to="#">
                                                        Rating
                                                        <i className="las la-angle-right" />
                                                    </Link>
                                                </div>
                                                <div className="filter-set-contents">
                                                    <ul>
                                                        <li>
                                                            <div className="filter-checks">
                                                                <label className="checkboxs">
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarks" />
                                                                </label>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <span>5.0</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="filter-checks">
                                                                <label className="checkboxs">
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarks" />
                                                                </label>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star" />
                                                                <span>4.0</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="filter-checks">
                                                                <label className="checkboxs">
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarks" />
                                                                </label>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <span>3.0</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="filter-checks">
                                                                <label className="checkboxs">
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarks" />
                                                                </label>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <span>2.0</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="filter-checks">
                                                                <label className="checkboxs">
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarks" />
                                                                </label>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fa fa-star filled" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <span>1.0</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-set-content">
                                                <div className="filter-set-content-head">
                                                    <Link to="#">
                                                        Owner
                                                        <i className="las la-angle-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="filter-set-content">
                                                <div className="filter-set-content-head">
                                                    <Link to="#">
                                                        Tags
                                                        <i className="las la-angle-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="filter-reset-btns">
                                                <Link to="#" className="btn btn-light">
                                                    Reset
                                                </Link>
                                                <Link to="#" className="btn btn-primary">
                                                    Filter
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="search-set">
                                    <div className="search-input">
                                        <Link to="#" className="btn btn-searchset">
                                            <i className="las la-search" />
                                        </Link>
                                        <div className="dataTables_filter">
                                            <label>
                                                {" "}
                                                <input
                                                    type="search"
                                                    className="form-control form-control-sm"
                                                    placeholder="Search"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                    <div className="table-responsive">
                        <Table
                        className="table-striped"
                        rowKey={(record) => record.id}
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        dataSource={data?.length > 0 ? data : []}
                        />
                    </div>
                    </div>
                </div>
                    <div className="col-lg-12">
                        <div className="load-more-btn text-center">
                            <Link to="#" className="btn btn-primary">Load More Contacts<i className="spinner-border"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <AddContact />
            <EditContact />
            <ExportLeads />
            <DeleteContact />
            <AddNotes />
        </div>
    )
}

export default ContactGrid
