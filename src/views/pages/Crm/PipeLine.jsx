import { Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import ExportLeads from '../../../components/modelpopup/Crm/ExportLeads'
import AddPipeLine from '../../../components/modelpopup/Crm/AddPipeLine'
import SearchBox from '../../../components/SearchBox'
import EditPipeLine from '../../../components/modelpopup/Crm/EditPipeLine'
import DetelePipeLine from '../../../components/modelpopup/Crm/DetelePipeLine'

const PipeLine = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
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
  const sortoption = [
    { value: 'Sort By Alphabet', label: 'Sort By Alphabet' },
    { value: 'Ascending', label: 'Ascending' },
    { value: 'Descending', label: 'Descending' },
    { value: 'Recently Viewed', label: 'Recently Viewed' },
    { value: 'Recently Added', label: 'Recently Added' },
  ];
  const pipelinelist = [
    { value: '--Select--', label: '--Select--' },
    { value: 'Win', label: 'Win' },
    { value: 'In PipeLine', label: 'In PipeLine' },
    { value: 'Conversation', label: 'Conversation' },
    { value: 'Folllow Up', label: 'Folllow Up' },
    { value: 'Lost', label: 'Lost' },
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
  const data = [
    {
      PipeLine: "Sales",
      TotalDealValue: "$04,51,000",
      NoofDeals: "315",
      Stages: "Win",
      CreatedDate: "10 Feb 2024",
      Status: "Active",
    },
    {
      PipeLine: "Marketing",
      TotalDealValue: "$03,12,500",
      NoofDeals: "447",
      Stages: "Win",
      CreatedDate: "24 Feb 2024",
      Status: "Active",
    },
    {
      PipeLine: "Calls",
      TotalDealValue: "$04,14,400",
      NoofDeals: "654",
      Stages: "In PipeLine",
      CreatedDate: "05 Mar 2024",
      Status: "Active",
    },
    {
      PipeLine: "Email",
      TotalDealValue: "$09,14,400",
      NoofDeals: "545",
      Stages: "Win",
      CreatedDate: "17 Mar 2024",
      Status: "Active",
    },
    {
      PipeLine: "Chats",
      TotalDealValue: "$11,14,400",
      NoofDeals: "787",
      Stages: "Win",
      CreatedDate: "08 Apr 2024",
      Status: "Active",
    },
    {
      PipeLine: "Operational",
      TotalDealValue: "$16,11,400",
      NoofDeals: "142",
      Stages: "Conversation",
      CreatedDate: "20 Apr 2024",
      Status: "Active",
    },
    {
      PipeLine: "Collabrative",
      TotalDealValue: "$78,11,800",
      NoofDeals: "315",
      Stages: "Follow Up",
      CreatedDate: "12 May 2024",
      Status: "Active",
    },
    {
      PipeLine: "Differentiate",
      TotalDealValue: "$09,05,947",
      NoofDeals: "478",
      Stages: "Schedule Service",
      CreatedDate: "26 May 2024",
      Status: "Inactive",
    },
    {
      PipeLine: "Interact",
      TotalDealValue: "$04,51,000",
      NoofDeals: "664",
      Stages: "Win",
      CreatedDate: "13 June 2024",
      Status: "Active",
    },
    {
      PipeLine: "Identify",
      TotalDealValue: "$72,14,078",
      NoofDeals: "128",
      Stages: "Lost",
      CreatedDate: "28 June 2024",
      Status: "Active",
    }
  ]
  const columns = [
    {
      title: "Pipeline Name",
      dataIndex: "PipeLine",

      sorter: (a, b) => a.PipeLine.length - b.PipeLine.length,
    },
    {
      title: "Total Deal Value",
      dataIndex: "TotalDealValue",
      sorter: (a, b) => a.TotalDealValue.length - b.TotalDealValue.length,
    },
    {
      title: "No of Deals",
      dataIndex: "NoofDeals",
      sorter: (a, b) => a.NoofDeals.length - b.NoofDeals.length,
    },
    {
      title: 'Stages',
      dataIndex: 'Stages',
      render: (text, record) => (
        <div className='pipeline-progress d-flex align-items-center'>
          <div className='progress'>
            {text === 'In Pipeline' && (
              <div className='progress-bar progress-bar-violet' role='progressbar'></div>
            )}
            {text === 'Win' && (
              <div className='progress-bar progress-bar-success' role='progressbar'></div>
            )}
            {text === 'Follow Up' && (
              <div className='progress-bar progress-bar-warning' role='progressbar'></div>
            )}
            {text === 'In PipeLine' && (
              <div className='progress-bar progress-bar-violet' role='progressbar'></div>
            )}
            {text === 'Schedule Service' && (
              <div className='progress-bar progress-bar-pink' role='progressbar'></div>
            )}
            {text === 'Lost' && (
              <div className='progress-bar progress-bar-danger' role='progressbar'></div>
            )}
            {text === 'Conversation' && (
              <div className='progress-bar progress-bar-info' role='progressbar'></div>
            )}
          </div>
          <span>{text}</span>
        </div>
      ),
      sorter: (a, b) => a.Stages.length - b.Stages.length,
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      sorter: (a, b) => a.CreatedDate.length - b.CreatedDate.length,
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
              data-bs-target="#edit_pipeline"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_pipeline"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
            <Link class="dropdown-item" to="/leads-details"><i class="fa-regular fa-eye"></i> Preview</Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.length - b.length,
    },
  ];
  //datepicker
  const [selectedDate, setSelectedDate] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleDateFocus = () => {
    setFocused(true);
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
                <h3 className="page-title">Pipeline</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Pipeline</li>
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
                    data-bs-target="#add_pipeline"
                  >
                    <i className="la la-plus-circle" /> Add PipeLine
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
            <div className="row filter-row custom-filter-row">
              <div className="custom-col">
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
                  <label className="focus-label" onClick={handleLabelClick}>Pipeline Name</label>
                </div>
              </div>
              <div className="custom-col">
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
                  <label className="focus-label" onClick={handleLabelClick1}>Deal Value</label>
                </div>
              </div>
              <div className="custom-col">
                <div
                  className={`input-block mb-3 form-focus ${isFocused ? "focused" : ""
                    }`}
                >
                  <div className="cal-icon focused ">
                    <DatePicker
                      className="form-control floating datetimepicker"
                      selected={selectedDate}
                      onChange={handleDateChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      dateFormat="dd-MM-yyyy"
                    />
                  </div>
                  <label className="focus-label" onClick={handleDateFocus}>Created Date</label>
                </div>
              </div>
              <div className="custom-col">
                <div className="input-block mb-3 form-focus select-focus">

                  <Select
                    options={pipelinelist}
                    placeholder="Select"
                    styles={customStyles}
                  />
                  <label className="focus-label">Stages</label>
                </div>
              </div>
              <div className="custom-col">
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
                <div className="form-sort value-contain">
                  <i className="las la-sort-alpha-up-alt" />
                  <Select
                   className='form-sort-two w-100'
                    options={sortoption}
                    placeholder="Select By Alphabet"
                    styles={customStyles}
                  />
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
            <div className="col-md-12">
              <div className="table-responsive">
              <SearchBox/>
                <Table
                  className="table table-striped custom-table datatable contact-table"
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <ExportLeads />
      <AddPipeLine />
      <EditPipeLine />
      <DetelePipeLine />
    </div>

  )
}

export default PipeLine
