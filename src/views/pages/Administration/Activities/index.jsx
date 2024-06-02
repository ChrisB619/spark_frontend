import React, { useEffect, useRef,useState } from 'react'
import { Link } from "react-router-dom";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from 'antd';
import ActivityModal from '../../../../components/modelpopup/ActivityModal';

const Activities = () => {

  const[fieldInputs, setFieldInputs]=useState(false);
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [focusedTwo, setFocusedTwo] = useState(false);
  const [inputValueTwo, setInputValueTwo] = useState("");

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

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };


 
  
    const data=  [
      {
        Title: "We scheduled a meeting for next week",
        ActivityType: "Meeting",
        DueDate: "10 Feb 2024, 09:00 am",
        Owner: "Hendry",
        CreatedAt: "08 Feb 2024, 10:00 am",
        icon:"la la-user-tie",
      },
      {
        Title: "Had conversation with Fred regarding task",
        ActivityType: "Calls",
        DueDate: "24 Feb 2024, 12:20 pm",
        Owner: "Monty Beer",
        CreatedAt: "21 Feb 2024, 09:00 am",
        icon:"la la-phone"
      },
      {
        Title: "Analysing latest time estimation for new project",
        ActivityType: "Email",
        DueDate: "05 Mar 2024, 10:00 am",
        Owner: "Bradtke",
        CreatedAt: "03 Mar 2024, 11:00 am",
        icon:"la la-envelope"
      },
      {
        Title: "Store and manage contact data",
        ActivityType: "Task",
        DueDate: "17 Mar 2024, 02:00 pm",
        Owner: "Swaniawski",
        CreatedAt: "15 Mar 2024, 12:00 pm",
        icon:"la la-tasks"
      },
      {
        Title: "Call John and discuss about project",
        ActivityType: "Calls",
        DueDate: "20 Apr 2024, 03:15 pm",
        Owner: "Itzel",
        CreatedAt: "18 Apr 2024, 01:15 pm",
        icon:"la la-phone"
      },
      {
        Title: "Will have a meeting before project start",
        ActivityType: "Meeting",
        DueDate: "08 Apr 2024, 11:00 am",
        Owner: "Sally",
        CreatedAt: "05 Apr 2024, 03:20 pm",
        icon:"la la-user-tie",
      },
      {
        Title: "Built landing pages",
        ActivityType: "Email",
        DueDate: "12 May 2024, 08:30 am",
        Owner: "Danny",
        CreatedAt: "10 May 2024, 11:30 am",
        icon:"la la-envelope"
      },
      {
        Title: "Regarding latest updates in project",
        ActivityType: "Meeting",
        DueDate: "26 May 2024, 04:10 pm",
        Owner: "Lynch",
        CreatedAt: "23 May 2024, 05:00 pm",
        icon:"la la-user-tie",
      },
      {
        Title: "Attach final proposal for upcoming project",
        ActivityType: "Task",
        DueDate: "13 June 2024, 10:30 am",
        Owner: "Merwin",
        CreatedAt: "11 June 2024, 04:00 pm",
        icon:"la la-tasks"
      },
      {
        Title: "Discussed budget proposal with Edwin",
        ActivityType: "Calls",
        DueDate: "28 June 2024, 05:40 pm",
        Owner: "Andrew",
        CreatedAt: "26 June 2024, 08:50 am",
        icon:"la la-phone"
      }
    ]
  
    const columns = [
     
      {
        title: "Title",
        dataIndex: "Title",
      
        sorter: (a, b) => a.Title.length - b.Title.length,
      },
      {
        title: "Activity Type",
        dataIndex: "ActivityType",
        render: (text,record) =>     
        <span className={
        text === 'Meeting' ? 'badge activity-badge badge-bg-violet' :
        text === 'Email' ? 'badge activity-badge badge-bg-warning' : 
        text === 'Calls' ? 'badge activity-badge badge-bg-success' :        
        'badge activity-badge badge-bg-info'}>
          <i className={record.icon} />
        {text}</span>,
        sorter: (a, b) => a.ActivityType.length - b.ActivityType.length,
      },  
      {
        title: "Due Date",
        dataIndex: "DueDate",
        sorter: (a, b) =>
          a.DueDate.length - b.DueDate.length,
      },
      {
        title: "Owner",
        dataIndex: "Owner",
        sorter: (a, b) =>
          a.Owner.length - b.Owner.length,
      },    
      {
        title: "Created At",
        dataIndex: "CreatedAt",
        sorter: (a, b) => a.CreatedAt.length - b.CreatedAt.length,
      }, 
  
      {
        title: "Action",
        sorter: "true",
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
                data-bs-target="#edit_activity"
              >
                <i className="fa fa-pencil m-r-5" /> Edit
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_activity"
              >
                <i className="fa fa-trash m-r-5" /> Delete
              </Link>
            </div>
          </div>
        ),
      },
    ];

    const handleLabelClickTwo = () => {
      setFocusedTwo(true);
    };
  
    const handleInputBlurTwo = () => {
      if (inputValueTwo === "") {
        setFocusedTwo(false);
      }
    };
    const handleInputChangeTwo = (e) => {
      const value = e.target.value;
      setInputValueTwo(value);
      if (value !== "" && !focusedTwo) {
        setFocusedTwo(true);
      }
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
    
<div className="page-wrapper">
  {/* Page Content */}
  <div className="content container-fluid">

     {/* Page Header */}
     <div className="page-header">
      <div className="row align-items-center">
        <div className="col-md-4">
          <h3 className="page-title">Activities</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
            <li className="breadcrumb-item active">Activities</li>
          </ul>
        </div>
        <div className="col-md-8 float-end ms-auto">
          <div className="d-flex title-head">
            <div className="view-icons">
              <Link to="#" className="grid-view btn btn-link"><i className="las la-redo-alt" /></Link>
              <Link to="#" className="list-view btn btn-link" id="collapse-header" ref={maximizeBtnRef}><i className="las la-expand-arrows-alt" /></Link>
              <Link to="#" className={fieldInputs ? "list-view btn btn-link active-filter" : "list-view btn btn-link"} id="filter_search"  onClick={() => setFieldInputs(!fieldInputs)}><i className="las la-filter" /></Link>
            </div>
            <div className="form-sort">
              <Link to="#" className="list-view btn btn-link" data-bs-toggle="modal" data-bs-target="#export"><i className="las la-file-export" />Export</Link>
            </div>
            <Link to="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_activity"><i className="la la-plus-circle" /> Add Activity</Link>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    {/* Search Filter */}
    <div className="filter-filelds" id="filter_inputs" style={{display : fieldInputs ? "block":"none"}} >
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
        <div
            className={
              focusedTwo || inputValueTwo !== ""
                ? "input-block form-focus focused"
                : "input-block form-focus"
            }
          >
            <input
              type="text"
              className="form-control floating"
              value={inputValueTwo}
              onFocus={handleLabelClickTwo}
              onBlur={handleInputBlurTwo}
              onChange={handleInputChangeTwo}
            />
            <label className="focus-label" onClick={handleLabelClickTwo}>
             Email
            </label>
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
    <label className="focus-label" style={{top:"-20px"}}>Select Date</label>
  </div>
</div>

<div className="col-xl-2">  
  <div className="input-block mb-3 form-focus">
    <div className="cal-icon">
    <DatePicker
                selected={selectedDate2}
                onChange={handleDateChange2}
                className="form-control floating datetimepicker"
                type="date"
                dateFormat="dd-MM-yyyy"
              />    
              </div>
    <label className="focus-label" style={{top:"-20px"}}>Created At</label>
  </div>
</div>

        <div className="col-xl-2"> 
          <div className="input-block mb-3 form-focus select-focus">
          <Select className="select floating" options={options}  placeholder="--Select--" styles={customStyles}
/>

            <label className="focus-label">Stage</label>
          </div>
        </div>
      
        <div className="col-xl-2">  
          <Link to="#" className="btn btn-success w-100"> Search </Link>  
        </div>     
      </div>
    </div>
    <hr />
    {/* /Search Filter */}
   <div className="filter-section activity-filter-head">
  <div className="all-activity-head">
    <h5>All Activity</h5>
    <ul className="activity-list">
      <li>
        <Link to="#"><i className="la la-phone" /></Link>
      </li>
      <li>
        <Link to="#"><i className="la la-envelope" /></Link>
      </li>
      <li>
        <Link to="#"><i className="la la-tasks" /></Link>
      </li>
      <li>
        <Link to="#"><i className="la la-user-tie" /></Link>
      </li>
    </ul>
  </div>
  <ul>
    {/* <li>
								<div class="view-icons">
									<Link to="company.html" class="list-view btn btn-link active"><i class="las la-list"></i></Link>
									<Link to="company-grid.html" class="grid-view btn btn-link"><i class="las la-th"></i></Link>
								</div>
							</li> */}
    <li>
      <div className="form-sort value-contain">
        <i className="las la-sort-alpha-up-alt" />
        <Select
      options={optionsSortValue}
      placeholder="Sort By Alphabet"
      className="select w-100"
      isSearchable={false}
      styles={customStyles}

    />
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
        <div className="table-responsive">
        <Table
                  className="table-striped"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
        </div>
      </div>
    </div>




  </div>
<ActivityModal/>
</div>


  );
};

export default Activities;
