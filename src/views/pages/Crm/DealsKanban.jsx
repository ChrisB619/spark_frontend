import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Select from 'react-select';
import { Avatar_15, Avatar_17, Avatar_20, Avatar_21, avatar1, avatar16, avatar19, avatar22, avatar23, avatar24, avatar25, avatar26 } from '../../../Routes/ImagePath';
import DealsModal from '../../../components/modelpopup/DealsModal';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DealsKanban = () => {

  const [tasks, setTasks] = useState({
    qualify: [
      {
        id: "task1",
        company: "Howell, Tremblay and Rath",
        abbreviation: "HT",
        amount: "$03,50,000",
        email: "darleeo@example.com",
        phone: "+1 12445-47878",
        location: "Newyork, United States",
        profile_picture: avatar19,
        profile_link: "/deals-details",
        user_name: "Darlee Robertson",
        progress: "85%",
        date: "10 Jan 2024"
      },
      {
        id: "task2",
        company: "Robert, John and Carlos",
        abbreviation: "RJ",
        amount: "$02,10,000",
        email: "sheron@example.com",
        phone: "+1 12445-47878",
        location: "Exeter, United States",
        profile_picture: Avatar_20,
        profile_link: "/deals-details",
        user_name: "Darlee Robertson",
        progress: "15%",
        date: "12 Jan 2024"
      },
      {
        id: "task3",
        company: "Wendy, Star and David",
        abbreviation: "WS",
        amount: "$04,22,000",
        email: "vau@example.com",
        phone: "+1 12445-47878",
        location: "Phoenix, United States",
        profile_picture: Avatar_21,
        profile_link: "/deals-details",
        user_name: "Darlee Robertson",
        progress: "95%",
        date: "14 Jan 2024"
      }
    ],
    contact: [
      {
        id: "task4",
        company: "Byron, Roman and Bailey",
        abbreviation: "BR",
        amount: "$02,45,000",
        email: "jessica13@example.com",
        phone: "+1 89351-90346",
        location: "Chester, United States",
        profile_picture: avatar1,
        profile_link: "/deals-details",
        user_name: "Jessica",
        progress: "47%",
        date: "06 Feb 2024"
      },
      {
        id: "task5",
        company: "Robert, John and Carlos",
        abbreviation: "CH",
        amount: "$01,17,000",
        email: "caroltho3@example.com",
        phone: "+1 78982-09163",
        location: "Charlotte, United States",
        profile_picture: avatar16,
        profile_link: "/deals-details",
        user_name: "Carol Thomas",
        progress: "98%",
        date: "15 Feb 2024"
      },
      {
        id: "task6",
        company: "Irene, Charles and Wilston",
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


  const [showFilter, setShowFilter] = useState(false);
  const [fieldInputs, setFieldInputs] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedDate1, setSelectedDate1] = useState(null);

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
  const optionsSortValue = [
    { value: 'sortAlphabet', label: 'Sort By Alphabet' },
    { value: 'ascending', label: 'Ascending' },
    { value: 'descending', label: 'Descending' },
    { value: 'recentlyViewed', label: 'Recently Viewed' },
    { value: 'recentlyAdded', label: 'Recently Added' }
  ];

  const optionSort = [
    { value: 'Germany', label: 'Germany' },
    { value: 'USA', label: 'USA' },
    { value: 'Canada', label: 'Canada' },
    { value: 'India', label: 'India' },
    { value: 'China', label: 'China' }
  ];

  const options = [
    { value: 'Conversation', label: 'Conversation' },
    { value: 'Pipeline', label: 'Pipeline' },
    { value: 'Won', label: 'Won' },
    { value: 'Lost', label: 'Lost' },
    { value: 'Follow Up', label: 'Follow Up' }
  ];

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

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };



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

  return (

    <div className="page-wrapper">
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h3 className="page-title">Deals</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Deals</li>
              </ul>
            </div>
            <div className="col-md-8 float-end ms-auto">
              <div className="d-flex title-head">
                <div className="view-icons">
                  <Link to="#" className="grid-view btn btn-link"><i className="las la-redo-alt" /></Link>
                  <Link to="#" className="list-view btn btn-link" id="collapse-header" ref={maximizeBtnRef}><i className="las la-expand-arrows-alt" /></Link>
                  <Link to="#" className={fieldInputs ? "list-view btn btn-link active-filter" : "list-view btn btn-link"} id="filter_search" onClick={() => setFieldInputs(!fieldInputs)}><i className="las la-filter" /></Link>
                </div>
                <div className="form-sort">
                  <Link to="#" className="list-view btn btn-link" data-bs-toggle="modal" data-bs-target="#export"><i className="las la-file-export" />Export</Link>
                </div>
                <Link to="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_deals"><i className="la la-plus-circle" /> Add Deals</Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="filter-filelds" id="filter_inputs" style={{ display: fieldInputs ? "block" : "none" }} >
          <div className="row filter-row">
            <div className="col-xl-2">
              <div
                className={
                  focused || inputValue !== ""
                    ? "input-block form-focus focused"
                    : "input-block form-focus"
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
                <label className="focus-label" onClick={handleLabelClick}>
                  Deal Name
                </label>
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
              <div className="input-block mb-3 form-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={selectedDate1}
                    onChange={handleDateChange1}
                    className="form-control floating datetimepicker"
                    type="date"
                    dateFormat="dd-MM-yyyy"
                  />
                </div>
                <label className="focus-label" style={{ top: "-20px" }}>Expected Date</label>
              </div>
            </div>

            <div className="col-xl-2">
              <div className="input-block mb-3 form-focus select-focus">
                <Select className="select floating" options={options} placeholder="--Select--" />

                <label className="focus-label">Stage</label>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="input-block mb-3 form-focus select-focus">
                <Select
                  options={optionSort}
                  placeholder="--Select--"
                  className="select floating"
                  isSearchable={false}
                />
                <label className="focus-label">Location</label>
              </div>
            </div>
            <div className="col-xl-2">
              <Link to="#" className="btn btn-success w-100"> Search </Link>
            </div>
          </div>
        </div>
        <hr />
        {/* /Search Filter */}
        <div className="filter-section filter-bottom">
          <ul>
            <li>
              <div className="view-icons">
                <Link to="/deals" className="list-view btn btn-link "><i className="las la-list" /></Link>
                <Link to="/deals-kanban" className="grid-view btn btn-link active"><i className="las la-th" /></Link>
              </div>
            </li>
            <li>
              <div className="form-sort value-contain">
                <i className="las la-sort-alpha-up-alt" />
                <Select
                  options={optionsSortValue}
                  placeholder="Sort By Alphabet"
                  className="select w-100"
                  isSearchable={false}
                />
              </div>
            </li>
            <li>

              <div className={showFilter ? "form-sorts dropdown table-filter-show" : "form-sorts dropdown"} >
                <Link to="#" className="dropdown-toggle" id="table-filter" onClick={() => setShowFilter(!showFilter)}><i className="las la-filter me-2" />Filter</Link>
                <div className="filter-dropdown-menu" style={{ display: showFilter ? "block" : "none" }}>
                  <div className="filter-set-view">
                    <div className="filter-set-head">
                      <h4>Filter</h4>
                    </div>
                    <div className="accordion" id="accordionExample">
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <Link to="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Rating<i className="las la-angle-right" /></Link>
                        </div>
                        <div className="filter-set-contents accordion-collapse collapse show" id="collapseOne" data-bs-parent="#accordionExample">
                          <ul>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" defaultChecked />
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
                          <Link to="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Owner<i className="las la-angle-right" /></Link>
                        </div>
                        <div className="filter-set-contents accordion-collapse collapse" id="collapseTwo" data-bs-parent="#accordionExample">
                          <ul>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" defaultChecked />
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
                          <Link to="#" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Tags<i className="las la-angle-right" /></Link>
                        </div>
                        <div className="filter-set-contents accordion-collapse collapse" id="collapseThree" data-bs-parent="#accordionExample">
                          <ul>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" defaultChecked />
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
                      <Link to="#" className="btn btn-light">Reset</Link>
                      <Link to="#" className="btn btn-primary">Filter</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="search-set">
                <div className="search-input">
                  <Link to="#" className="btn btn-searchset"><i className="las la-search" /></Link>
                  <div className="dataTables_filter">
                    <label> <input type="search" className="form-control form-control-sm" placeholder="Search" /></label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="kanban-wrapper">
              <DragDropContext onDragEnd={onDragEnd}>

                <div className="kanban-list-items">
                  <div className="kanban-list-head">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="kanban-title-head dot-success">
                        <h5>Qualify To Buy</h5>
                        <span>45 Leads - $15,44,540</span>
                      </div>
                      <div className="kanban-action-btns d-flex align-items-center">
                        <Link to="#" className="plus-btn"><i className="la la-plus" /></Link>
                        <div className="dropdown dropdown-action">
                          <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_deals"><i className="fa-solid fa-pencil m-r-5" /> Edit</Link>
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_deals"><i className="fa-regular fa-trash-can m-r-5" /> Delete</Link>
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
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="card-user-info">
                                        <Link to="/deals-details" className="avatar"><img src={task?.profile_picture} alt="Img" /></Link>
                                        <Link to="/deals-details" className="user-name">{task?.user_name}</Link>
                                      </div>
                                      <span className="badge badge-soft-info">{task?.progress}</span>
                                    </div>
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
                      <div className="kanban-title-head dot-info">
                        <h5>Contact Made</h5>
                        <span>30 Leads - $19,94,938</span>
                      </div>
                      <div className="kanban-action-btns d-flex align-items-center">
                        <Link to="#" className="plus-btn"><i className="la la-plus" /></Link>
                        <div className="dropdown dropdown-action">
                          <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_deals"><i className="fa-solid fa-pencil m-r-5" /> Edit</Link>
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_deals"><i className="fa-regular fa-trash-can m-r-5" /> Delete</Link>
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
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="card-user-info">
                                        <Link to="/deals-details" className="avatar"><img src={task?.profile_picture} alt="Img" /></Link>
                                        <Link to="/deals-details" className="user-name">{task?.user_name}</Link>
                                      </div>
                                      <span className="badge badge-soft-info">{task?.progress}</span>
                                    </div>
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
                        <h5>Presentation</h5>
                        <span>25 Leads - $10,36.390</span>
                      </div>
                      <div className="kanban-action-btns d-flex align-items-center">
                        <Link to="#" className="plus-btn"><i className="la la-plus" /></Link>
                        <div className="dropdown dropdown-action">
                          <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_deals"><i className="fa-solid fa-pencil m-r-5" /> Edit</Link>
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_deals"><i className="fa-regular fa-trash-can m-r-5" /> Delete</Link>
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
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="card-user-info">
                                        <Link to="/deals-details" className="avatar"><img src={task?.profile_picture} alt="Img" /></Link>
                                        <Link to="/deals-details" className="user-name">{task?.user_name}</Link>
                                      </div>
                                      <span className="badge badge-soft-info">{task?.progress}</span>
                                    </div>
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
                      <div className="kanban-title-head dot-purple">
                        <h5>Proposal Made</h5>
                        <span>50 Leads - $18,83,013</span>
                      </div>
                      <div className="kanban-action-btns d-flex align-items-center">
                        <Link to="#" className="plus-btn"><i className="la la-plus" /></Link>
                        <div className="dropdown dropdown-action">
                          <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_deals"><i className="fa-solid fa-pencil m-r-5" /> Edit</Link>
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_deals"><i className="fa-regular fa-trash-can m-r-5" /> Delete</Link>
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
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="card-user-info">
                                        <Link to="/deals-details" className="avatar"><img src={task?.profile_picture} alt="Img" /></Link>
                                        <Link to="/deals-details" className="user-name">{task?.user_name}</Link>
                                      </div>
                                      <span className="badge badge-soft-info">{task?.progress}</span>
                                    </div>
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

      <DealsModal />
    </div>


  )
}

export default DealsKanban