/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar_15, Avatar_17, Avatar_20, Avatar_21, avatar1, avatar16, avatar19, avatar22, avatar23, avatar24, avatar25, avatar26, company_icon_09, companyicon01, companyicon02, companyicon03, companyicon04, companyicon05, companyicon06, companyicon07, companyicon08, companyicon09, companyicon10 } from '../../../Routes/ImagePath'
import Select from 'react-select';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { Star } from 'react-feather';
import CrmDeleteModal from '../../../components/modelpopup/Crm/CrmDeleteModal';
import AddLeads from '../../../components/modelpopup/Crm/AddLeads';
import EditLeads from '../../../components/modelpopup/Crm/EditLeads';
import dragula from 'dragula';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const LeadsKanban = () => {
    const [tasks, setTasks] = useState({
        qualify: [
            {
                id: "task1",
                company: "Schumm",
                abbreviation: "SM",
                amount: "$03,50,000",
                email: "darleeo@example.com",
                phone: "+1 12445-47878",
                location: "Newyork, United States",
            },
            {
                id: "task2",
                company: "Collins",
                abbreviation: "RJ",
                amount: "$02,10,000",
                email: "sheron@example.com",
                phone: "+1 12445-47878",
                location: "Exeter, United States",
            },
            {
                id: "task3",
                company: "Schumm",
                abbreviation: "WS",
                amount: "$04,22,000",
                email: "vau@example.com",
                phone: "+1 12445-47878",
                location: "Phoenix, United States",
            }
        ],
        contact: [
            {
                id: "task4",
                company: "Adams",
                abbreviation: "BR",
                amount: "$02,45,000",
                email: "jessica13@example.com",
                phone: "+1 89351-90346",
                location: "Chester, United States",
            },
            {
                id: "task5",
                company: "Wizosk",
                abbreviation: "CH",
                amount: "$01,17,000",
                email: "caroltho3@example.com",
                phone: "+1 78982-09163",
                location: "Charlotte, United States",
            },
            {
                id: "task6",
                company: "Heller",
                abbreviation: "IC",
                amount: "$02,12,000",
                email: "dawnmercha@example.com",
                phone: "+1 27691-89246",
                location: "Bristol, United States",
                profile_picture: avatar22,
                profile_link: "/deals-details",
                user_name: "Dawn Mercha",
                progress: "78%",
                date: "25 Jan 2024"
            }
        ],
        presentation: [
            {
                id: "task7",
                company: "Jody, Powell and Cecil",
                abbreviation: "HT",
                amount: "$01,84,043",
                email: "rachel@example.com",
                phone: "+1 17839-93617",
                location: "Baltimore, United States",
                profile_picture: avatar23,
                profile_link: "/deals-details",
                user_name: "Rachel Hampton",
                progress: "25%",
                date: "18 Mar 2024"
            },
            {
                id: "task8",
                company: "Bonnie, Linda and Mullin",
                abbreviation: "BL",
                amount: "$09,35,189",
                email: "jonelle@example.com",
                phone: "+1 16739-47193",
                location: "Coventry, United States",
                profile_picture: avatar24,
                profile_link: "/deals-details",
                user_name: "Jonelle Curtiss",
                progress: "70%",
                date: "15 Feb 2024"
            },
            {
                id: "task9",
                company: "Carlos, Jones and Jim",
                abbreviation: "CJ",
                amount: "$04,27,940",
                email: "jonathan@example.com",
                phone: "+1 18390-37153",
                location: "Seattle",
                profile_picture: avatar25,
                profile_link: "/deals-details",
                user_name: "Jonathan",
                progress: "45%",
                date: "30 Jan 2024"
            }
        ],
        proposal: [

            {
                id: "task10",
                company: "Freda,Jennfier and Thompson",
                abbreviation: "FJ",
                amount: "$04,17,593",
                email: "sidney@example.com",
                phone: "+1 11739-38135",
                location: "London, United States",
                profile_picture: Avatar_17,
                profile_link: "/deals-details",
                user_name: "Sidney Franks",
                progress: "59%",
                date: "11 Apr 2024"
            },
            {
                id: "task11",
                company: "Bruce, Faulkner and Lela",
                abbreviation: "BF",
                amount: "$08,81,389",
                email: "brook@example.com",
                phone: "+1 19302-91043",
                location: "Detroit, United States",
                profile_picture: avatar26,
                profile_link: "/deals-details",
                user_name: "Brook",
                progress: "72%",
                date: "17 Apr 2024"
            },
            {
                id: "task12",
                company: "Lawrence, Patrick and Vandorn",
                abbreviation: "LP",
                amount: "$09,27,193",
                email: "mickey@example.com",
                phone: "+1 17280-92016",
                location: "Manchester, United States",
                profile_picture: Avatar_15,
                profile_link: "/deals-details",
                user_name: "Mickey",
                progress: "20%",
                date: "10 Feb 2024"
            }
        ],

    });
    // eslint-disable-next-line
    const onDragEnd = (result) => {
        if (!result.destination) {
            return; // Dropped outside the list
        }

        const { source, destination } = result;

        if (source.droppableId === destination.droppableId) {
            // Reorder tasks in the same list
            const updatedTasks = [...tasks[source.droppableId]];
            const [reorderedTask] = updatedTasks.splice(source.index, 1);
            updatedTasks.splice(destination.index, 0, reorderedTask);

            setTasks({
                ...tasks,
                [source.droppableId]: updatedTasks,
            });
        } else {
            // Move task from pending to progress
            const sourceTasks = [...tasks[source.droppableId]];
            const destinationTasks = [...tasks[destination.droppableId]];
            const [movedTask] = sourceTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, movedTask);

            setTasks({
                ...tasks,
                [source.droppableId]: sourceTasks,
                [destination.droppableId]: destinationTasks,
            });
        }
    };


    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const toggleFilterVisibility = () => {
        setIsFilterVisible((prevVisibility) => !prevVisibility);
    };
    const companyName = [
        { value: '--Select--', label: '--Select--' },
        { value: 'NovaWaveLLC', label: 'NovaWaveLLC' },
        { value: 'SilverHawk', label: 'SilverHawk' },
        { value: 'SummitPeak', label: 'SummitPeak' },
        { value: 'HarborView', label: 'HarborView' },
        { value: 'Redwood Inc', label: 'Redwood Inc' },
    ];
    const sortoption = [
        { value: 'Sort By Alphabet', label: 'Sort By Alphabet' },
        { value: 'Ascending', label: 'Ascending' },
        { value: 'Descending', label: 'Descending' },
        { value: 'Recently Viewed', label: 'Recently Viewed' },
        { value: 'Recently Added', label: 'Recently Added' },
    ];
    const status = [
        { value: '--Select--', label: '--Select--' },
        { value: 'Closed', label: 'Closed' },
        { value: 'Not Contacted', label: 'Not Contacted' },
        { value: 'Contacted', label: 'Contacted' },
        { value: 'Lost', label: 'Lost' }
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
    //filter
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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

    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);

    useEffect(() => {
        const leftContainer = leftContainerRef.current;
        const rightContainer = rightContainerRef.current;

        if (leftContainer && rightContainer) {
            dragula([leftContainer, rightContainer]);
        }
    }, []);

    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                {/* Page Content */}
                <div className="content container-fluid">
                    {/* Page Header */}
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <h3 className="page-title">Leads</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/admin-dashboard">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Leads</li>
                                </ul>
                            </div>
                            <div className="col-md-8 float-end ms-auto">
                                <div className="d-flex title-head">
                                    <div className="view-icons">
                                        <Link
                                            to="#"
                                            className="grid-view btn btn-link"
                                        >
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
                                        <Link
                                            to="#"
                                            className={`list-view btn btn-link ${isFilterVisible ? "active-filter" : ""}`}
                                            id="filter_search" onClick={toggleFilterVisibility}
                                        >
                                            <i className="las la-filter" />
                                        </Link>
                                    </div>
                                    <div className="form-sort">
                                        <Link
                                            to="#"
                                            className="list-view btn btn-link"
                                            data-bs-toggle="modal"
                                            data-bs-target="#export"
                                        >
                                            <i className="las la-file-export" />
                                            Export
                                        </Link>
                                    </div>
                                    <Link
                                        to="#"
                                        className="btn add-btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_leads"
                                    >
                                        <i className="la la-plus-circle" /> Add Leads
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
                                    <label className="focus-label" onClick={handleLabelClick}>LeadName</label>

                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div
                                    className={
                                        focused1 || inputValue1 !== ""
                                            ? "input-block mb-3 form-focus focused"
                                            : "input-block mb-3 form-focus"
                                    }
                                >                  <input
                                        type="text"
                                        className="form-control floating"
                                        value={inputValue1}
                                        onFocus={handleLabelClick1}
                                        onBlur={handleInputBlur1}
                                        onChange={handleInputChange1}
                                    />
                                    <label className="focus-label" onClick={handleLabelClick1}>Email</label>
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
                                        options={status}
                                        placeholder="Select"
                                        styles={customStyles}
                                    />
                                    <label className="focus-label">Lead Status</label>
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="input-block mb-3 form-focus select-focus">
                                    <Select
                                        options={companyName}
                                        placeholder="Select"
                                        styles={customStyles}
                                    />
                                    <label className="focus-label">Company Name</label>
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
                                    <Link to="/leads-list" className="list-view btn btn-link active">
                                        <i className="las la-list" />
                                    </Link>
                                    <Link to="/leads-kanban" className="grid-view btn btn-link">
                                        <i className="las la-th" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="form-sort value-contain">
                                    <i className="las la-sort-alpha-up-alt" />

                                    <Select
                                        className='select w-100'
                                        options={sortoption}
                                        placeholder="Select By Alphabet"
                                        styles={customStyles}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className={`form-sorts dropdown ${isDropdownOpen ? 'table-filter-show' : ''}`}>
                                    <Link onClick={handleToggleDropdown}
                                        to="#"
                                        className="dropdown-toggle"
                                        id="table-filter"
                                    >
                                        <i className="las la-filter me-2" />
                                        Filter
                                    </Link>
                                    <div className="filter-dropdown-menu">
                                        <div className="filter-set-view">
                                            <div className="filter-set-head">
                                                <h4>Filter</h4>
                                            </div>
                                            <div className="accordion" id="accordionExample">
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne"
                                                            aria-expanded="true"
                                                            aria-controls="collapseOne"
                                                        >
                                                            Rating
                                                            <i className="las la-angle-right" />
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className="filter-set-contents accordion-collapse collapse show"
                                                        id="collapseOne"
                                                        data-bs-parent="#accordionExample"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" defaultChecked={true} />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="rating">
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />

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
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />
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
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />

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
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />


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
                                                                    <Star className='me-1' size={18} color='#FFBC34' fill='#FFBC34' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />
                                                                    <Star className='me-1' size={18} color='#E2E4E6' fill='#E2E4E6' />

                                                                    <span>1.0</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwo"
                                                        >
                                                            Owner
                                                            <i className="las la-angle-right" />
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseTwo"
                                                        data-bs-parent="#accordionExample"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" defaultChecked="" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Hendry</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Guillory</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Jami</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Theresa</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Espinosa</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree"
                                                            aria-expanded="false"
                                                            aria-controls="collapseThree"
                                                        >
                                                            Tags
                                                            <i className="las la-angle-right" />
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseThree"
                                                        data-bs-parent="#accordionExample"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" defaultChecked="" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Promotion</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Rated</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Rejected</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Collab</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Calls</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
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
                    <br />
                    <div className="row">
                        <div className="col-md-12" id="draggable-left">
                            <div className="kanban-wrapper leads-kanban-wrapper">
                                <DragDropContext onDragEnd={onDragEnd}>

                                    <div className="kanban-list-items">
                                        <div className="kanban-list-head">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="kanban-title-head dot-purple">
                                                    <h5>Not Contacted</h5>
                                                    <span>13 Leads - $19,38,092</span>
                                                </div>
                                                <div className="kanban-action-btns d-flex align-items-center">
                                                    <Link to="#" className="plus-btn">
                                                        <i className="la la-plus" />
                                                    </Link>
                                                    <div className="dropdown dropdown-action">
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
                                                                data-bs-target="#edit_leads"
                                                            >
                                                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                                                            </Link>
                                                            <Link
                                                                className="dropdown-item"
                                                                to="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete_leads"
                                                            >
                                                                <i className="fa-regular fa-trash-can m-r-5" /> Delete
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Droppable droppableId="qualify" direction="vertical">
                                            {(provided) => (
                                                <ul className="kanban-drag-wrap" ref={provided.innerRef} >
                                                    {tasks.qualify.map((task, index) => (

                                                        <Draggable
                                                            key={task.id}
                                                            draggableId={task.id}
                                                            index={index}
                                                        >
                                                            {(provided) => (
                                                                <li
                                                                    className="card panel kanban-box"
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >


                                                                    <div className="kanban-card">
                                                                        <div className="kanban-card-head">
                                                                            <span className="bar-design bg-purple" />
                                                                            <div className="kanban-card-title">
                                                                                <span>{task?.abbreviation}</span>
                                                                                <h6>{task?.company}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="kanban-card-body">
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="la la-dollar-sign" />
                                                                                    {task?.amount}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-envelope" />
                                                                                    {task?.email}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-phone" />
                                                                                    {task?.phone}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-map-marker-alt" />
                                                                                    {task?.location}
                                                                                </li>
                                                                            </ul>

                                                                        </div>
                                                                        <div className="kanban-card-footer d-flex align-items-center justify-content-between">
                                                                            <span><i className="la la-calendar" />{task?.date}</span>
                                                                            <ul className="icons-social">
                                                                                <li><Link to="#"><i className="la la-phone-volume" /></Link></li>
                                                                                <li><Link to="#"><i className="lab la-facebook-messenger" /></Link></li>
                                                                                <li><Link to="#"><i className="la la-swatchbook" /></Link></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </li>

                                                            )}
                                                        </Draggable>
                                                    ))}
                                                </ul>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className="kanban-list-items">
                                        <div className="kanban-list-head">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="kanban-title-head dot-warning">
                                                    <h5>Contacted</h5>
                                                    <span>20 Leads - $12,48,924</span>
                                                </div>
                                                <div className="kanban-action-btns d-flex align-items-center">
                                                    <Link to="#" className="plus-btn">
                                                        <i className="la la-plus" />
                                                    </Link>
                                                    <div className="dropdown dropdown-action">
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
                                                                data-bs-target="#edit_leads"
                                                            >
                                                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                                                            </Link>
                                                            <Link
                                                                className="dropdown-item"
                                                                to="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete_leads"
                                                            >
                                                                <i className="fa-regular fa-trash-can m-r-5" /> Delete
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Droppable droppableId="contact" direction="vertical">
                                            {(provided) => (
                                                <ul className="kanban-drag-wrap" ref={provided.innerRef} >
                                                    {tasks.contact.map((task, index) => (

                                                        <Draggable
                                                            key={task.id}
                                                            draggableId={task.id}
                                                            index={index}
                                                        >
                                                            {(provided) => (
                                                                <li
                                                                    className="card panel kanban-box"
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >


                                                                    <div className="kanban-card">
                                                                        <div className="kanban-card-head">
                                                                            <span className="bar-design bg-success" />
                                                                            <div className="kanban-card-title">
                                                                                <span>{task?.abbreviation}</span>
                                                                                <h6>{task?.company}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="kanban-card-body">
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="la la-dollar-sign" />
                                                                                    {task?.amount}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-envelope" />
                                                                                    {task?.email}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-phone" />
                                                                                    {task?.phone}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-map-marker-alt" />
                                                                                    {task?.location}
                                                                                </li>
                                                                            </ul>

                                                                        </div>
                                                                        <div className="kanban-card-footer d-flex align-items-center justify-content-between">
                                                                            <span>
                                                                                <img src={company_icon_09} alt="Img"></img>
                                                                            </span>
                                                                            <ul className="icons-social">
                                                                                <li><Link to="#"><i className="la la-phone-volume" /></Link></li>
                                                                                <li><Link to="#"><i className="lab la-facebook-messenger" /></Link></li>
                                                                                <li><Link to="#"><i className="la la-swatchbook" /></Link></li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>

                                                                </li>

                                                            )}
                                                        </Draggable>
                                                    ))}
                                                </ul>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className="kanban-list-items">
                                        <div className="kanban-list-head">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="kanban-title-head dot-success">
                                                    <h5>Closed</h5>
                                                    <span>18 Leads - $16,39,093</span>
                                                </div>
                                                <div className="kanban-action-btns d-flex align-items-center">
                                                    <Link to="#" className="plus-btn">
                                                        <i className="la la-plus" />
                                                    </Link>
                                                    <div className="dropdown dropdown-action">
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
                                                                data-bs-target="#edit_leads"
                                                            >
                                                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                                                            </Link>
                                                            <Link
                                                                className="dropdown-item"
                                                                to="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete_leads"
                                                            >
                                                                <i className="fa-regular fa-trash-can m-r-5" /> Delete
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Droppable droppableId="presentation" direction="vertical">
                                            {(provided) => (
                                                <ul className="kanban-drag-wrap" ref={provided.innerRef}>
                                                    {tasks.presentation.map((task, index) => (

                                                        <Draggable
                                                            key={task.id}
                                                            draggableId={task.id}
                                                            index={index}
                                                        >
                                                            {(provided) => (
                                                                <li
                                                                    className="card panel kanban-box"
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >


                                                                    <div className="kanban-card">
                                                                        <div className="kanban-card-head">
                                                                            <span className="bar-design bg-warning" />
                                                                            <div className="kanban-card-title">
                                                                                <span>{task?.abbreviation}</span>
                                                                                <h6>{task?.company}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="kanban-card-body">
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="la la-dollar-sign" />
                                                                                    {task?.amount}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-envelope" />
                                                                                    {task?.email}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-phone" />
                                                                                    {task?.phone}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-map-marker-alt" />
                                                                                    {task?.location}
                                                                                </li>
                                                                            </ul>

                                                                        </div>
                                                                        <div className="kanban-card-footer d-flex align-items-center justify-content-between">
                                                                            <span><i className="la la-calendar" />{task?.date}</span>
                                                                            <ul className="icons-social">
                                                                                <li><Link to="#"><i className="la la-phone-volume" /></Link></li>
                                                                                <li><Link to="#"><i className="lab la-facebook-messenger" /></Link></li>
                                                                                <li><Link to="#"><i className="la la-swatchbook" /></Link></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>


                                                            )}
                                                        </Draggable>
                                                    ))}
                                                </ul>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className="kanban-list-items">
                                        <div className="kanban-list-head">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="kanban-title-head dot-danger">
                                                    <h5>Lost</h5>
                                                    <span>15 Leads - $14,89,543</span>
                                                </div>
                                                <div className="kanban-action-btns d-flex align-items-center">
                                                    <Link to="#" className="plus-btn">
                                                        <i className="la la-plus" />
                                                    </Link>
                                                    <div className="dropdown dropdown-action">
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
                                                                data-bs-target="#edit_leads"
                                                            >
                                                                <i className="fa-solid fa-pencil m-r-5" /> Edit
                                                            </Link>
                                                            <Link
                                                                className="dropdown-item"
                                                                to="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete_leads"
                                                            >
                                                                <i className="fa-regular fa-trash-can m-r-5" /> Delete
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Droppable droppableId="proposal" direction="vertical">
                                            {(provided) => (
                                                <ul className="kanban-drag-wrap" ref={provided.innerRef}>
                                                    {tasks.proposal.map((task, index) => (

                                                        <Draggable
                                                            key={task.id}
                                                            draggableId={task.id}
                                                            index={index}
                                                        >
                                                            {(provided) => (
                                                                <li
                                                                    className="card panel kanban-box"
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >


                                                                    <div className="kanban-card">
                                                                        <div className="kanban-card-head">
                                                                            <span className="bar-design bg-danger" />
                                                                            <div className="kanban-card-title">
                                                                                <span>{task?.abbreviation}</span>
                                                                                <h6>{task?.company}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="kanban-card-body">
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="la la-dollar-sign" />
                                                                                    {task?.amount}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-envelope" />
                                                                                    {task?.email}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-phone" />
                                                                                    {task?.phone}
                                                                                </li>
                                                                                <li>
                                                                                    <i className="la la-map-marker-alt" />
                                                                                    {task?.location}
                                                                                </li>
                                                                            </ul>

                                                                        </div>
                                                                        <div className="kanban-card-footer d-flex align-items-center justify-content-between">
                                                                            <span><i className="la la-calendar" />{task?.date}</span>
                                                                            <ul className="icons-social">
                                                                                <li><Link to="#"><i className="la la-phone-volume" /></Link></li>
                                                                                <li><Link to="#"><i className="lab la-facebook-messenger" /></Link></li>
                                                                                <li><Link to="#"><i className="la la-swatchbook" /></Link></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>


                                                            )}
                                                        </Draggable>
                                                    ))}
                                                </ul>
                                            )}
                                        </Droppable>
                                    </div>
                                </DragDropContext>
                            </div>
                        </div>
                    </div>
                </div>
                <AddLeads />
                <EditLeads />
                <CrmDeleteModal />
            </div>
            {/* /Page Content */}
        </div>

    )
}

export default LeadsKanban
