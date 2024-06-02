import React, { useEffect, useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import DealsModal from '../../../components/modelpopup/DealsModal';



const Deals = () => {

  const[showFilter, setShowFilter]=useState(false);
  const[fieldInputs, setFieldInputs]=useState(false);
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

  const data=[
    {
      Dealname: "Collins",
      Stage: "Conversation",
      DealValue: "$04,51,000",
      Tags: "Promotion",
      ExpectedDate: "10 Feb 2024",
      Owner: "Hendry",
      Probability: "85%",
      Status: "Open",
      stars:"fa fa-star",
    },
    {
      Dealname: "Konopelski",
      Stage: "Pipeline",
      DealValue: "$03,12,500",
      Tags: "Rated",
      ExpectedDate: "24 Feb 2024",
      Owner: "Guillory",
      Probability: "15%",
      Status: "Lost",
      stars:"fa fa-star",
    },
    {
      Dealname: "Adams",
      Stage: "Won",
      DealValue: "$04,14,400",
      Tags: "Promotion",
      ExpectedDate: "5 Mar 2024",
      Owner: "Jami",
      Probability: "95%",
      Status: "Won",
      stars:"fa fa-star",
    },
    {
      Dealname: "Schumm",
      Stage: "Lost",
      DealValue: "$09,14,400",
      Tags: "Rated",
      ExpectedDate: "17 Mar 2024",
      Owner: "Theresa",
      Probability: "47%",
      Status: "Won",
      stars:"fa fa-star",
    },
    {
      Dealname: "Wisozk",
      Stage: "Follow Up",
      DealValue: "$11,14,400",
      Tags: "Rejected",
      ExpectedDate: "08 Apr 2024",
      Owner: "Espinosa",
      Probability: "98%",
      Status: "Won",
      stars:"fa fa-star",
    },
    {
      Dealname: "Heller",
      Stage: "Pipeline",
      DealValue: "$16,11,400",
      Tags: "Rated",
      ExpectedDate: "20 Apr 2024",
      Owner: "Martin",
      Probability: "14%",
      Status: "Won",
      stars:"fa fa-star",
    },
    {
      Dealname: "Gutkowski",
      Stage: "Pipeline",
      DealValue: "$78,11,800",
      Tags: "Rejected",
      ExpectedDate: "12 May 2024",
      Owner: "Newell",
      Probability: "78%",
      Status: "Open",
      stars:"fa fa-star",
    },
    {
      Dealname: "Walter",
      Stage: "Pipeline",
      DealValue: "$09,05,947",
      Tags: "Rejected",
      ExpectedDate: "26 May 2024",
      Owner: "Janet",
      Probability: "47%",
      Status: "Lost",
      stars:"fa fa-star",
    },
    {
      Dealname: "Hansen",
      Stage: "Schedule",
      DealValue: "$04,51,000",
      Tags: "Collab",
      ExpectedDate: "13 June 2024",
      Owner: "Craig",
      Probability: "25%",
      Status: "Won",
      stars:"fa fa-star",
    },
    {
      Dealname: "Leuschke",
      Stage: "Conversation",
      DealValue: "$72,14,078",
      Tags: "Calls",
      ExpectedDate: "28 June 2024",
      Owner: "Daniel",
      Probability: "69%",
      Status: "Won",
      stars:"fa fa-star",
    }
  ]
  
  const columns = [
     
    {
      title: "Deal Name",
      dataIndex: "Dealname",
      render: (text, record) => (
      <div className="d-flex">
<div>
  <div className="set-star star-select star-position">
    <i className={record.stars} />
  </div>
</div>
<div>
  <h2 className="table-avatar d-flex align-items-center deal-table">
    <Link to="/deals-details" className="profile-split">{record.Dealname}</Link>
  </h2>
</div>
</div>
      ),
      sorter: (a, b) => a.Dealname.length - b.Dealname.length,
    },
    {
      title: "Stage",
      dataIndex: "Stage",
      sorter: (a, b) => a.Stage.length - b.Stage.length,
    },

    {
      title: "DealValue",
      dataIndex: "DealValue",
      sorter: (a, b) =>
        a.DealValue.length - b.DealValue.length,
    },

    {
      title: "Tags",
      dataIndex: "Tags",
      render: (text) =>     
      <span className={
      text === 'Promotion' ? 'badge badge-soft-info' :
      text === 'Rated' ? 'badge badge-soft-warning' : 
      text === 'Rejected' ? 'badge badge-soft-danger' :
      text === 'Calls' ? 'badge badge-soft-purple' :
      
      'badge badge-soft-danger'}>
      {text}</span>,


      sorter: (a, b) =>
        a.tags.length - b.tags.length,
    },
    {
      title: "Expected Closed Date",
      dataIndex: "ExpectedDate",
      sorter: (a, b) => a.ExpectedDate.length - b.ExpectedDate.length,
    },
   
    {
      title: "Owner",
      dataIndex: "Owner",
      sorter: (a, b) => a.Owner.length - b.Owner.length,
    },
    {
      title: "Probability",
      dataIndex: "Probability",
      sorter: (a, b) => a.Probability.length - b.Probability.length,
    },


   
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) =>     
      <span className={
      text === 'Open' ? 'badge badge-soft-info' :
      text === 'Lost' ? 'badge badge-soft-danger' :     
      'badge badge-soft-success'}>
      {text}</span>,
      sorter: (a, b) =>
        a.tags.length - b.tags.length,
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
              data-bs-target="#edit_deals"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_deals"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];

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
              <Link to="#" className={fieldInputs ? "list-view btn btn-link active-filter" : "list-view btn btn-link"} id="filter_search"  onClick={() => setFieldInputs(!fieldInputs)}><i className="las la-filter" /></Link>
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
    <label className="focus-label" style={{top:"-20px"}}>Expected Date</label>
  </div>
</div>

        <div className="col-xl-2"> 
          <div className="input-block mb-3 form-focus select-focus">
          <Select className="select floating" options={options} placeholder="--Select--"       styles={customStyles}
/>

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
      styles={customStyles}

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
            <Link to="/deals" className="list-view btn btn-link active"><i className="las la-list" /></Link>
            <Link to="/deals-kanban" className="grid-view btn btn-link"><i className="las la-th" /></Link>
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
      styles={customStyles}

    />
          </div>
        </li>
        <li>
          
          <div className={showFilter ? "form-sorts dropdown table-filter-show" :"form-sorts dropdown"} >
            <Link to="#" className="dropdown-toggle" id="table-filter"  onClick={() => setShowFilter(!showFilter)}><i className="las la-filter me-2"/>Filter</Link>
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

  <DealsModal/>
</div>

    </>
  )
}

export default Deals