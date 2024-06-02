import { Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { companyicon01, companyicon02, companyicon03, companyicon04, companyicon05, companyicon06, companyicon07, companyicon08, companyicon09, companyicon10 } from '../../../Routes/ImagePath';
import ExportLeads from '../../../components/modelpopup/Crm/ExportLeads';
import AddLeads from '../../../components/modelpopup/Crm/AddLeads';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Select from 'react-select';
import CrmDeleteModal from '../../../components/modelpopup/Crm/CrmDeleteModal';
import EditLeads from '../../../components/modelpopup/Crm/EditLeads';
import { Star } from 'react-feather';
import SearchBox from '../../../components/SearchBox';

const LeadsList = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };
  const data = [
    {
      stars: "fa fa-star filled",
      img: companyicon01,
      LeadName: "Collins",
      CompanyName: "NovaWaveLLC",
      Phone: "+1 875455453",
      Email: "robertson@example.com",
      LeadStatus: "Closed",
      CreatedData: "10 Feb 2024, 09:00 am",
      LeadOwner: "Hendry",
    },
    {
      stars: "fa fa-star",
      img: companyicon02,
      LeadName: "Konopelski",
      CompanyName: "BlueSky Industries",
      Phone: "+1 989757485",
      Email: "sharon@example.com",
      LeadStatus: "Closed",
      CreatedData: "24 Feb 2024, 12:20 pm",
      LeadOwner: "Guillory",
    },
    { 
      stars: "fa fa-star filled",
      img: companyicon03,
      LeadName: "Adams",
      CompanyName: "SilverHawk",
      Phone: "+1 546555455",
      Email: "vaughan12@example.com",
      LeadStatus: "Not Contacted",
      CreatedData: "5 Mar 2024, 10:00 am",
      LeadOwner: "Jami",
    },
    {
      stars: "fa fa-star",
      img: companyicon04,
      LeadName: "Schumm",
      CompanyName: "SummitPeak",
      Phone: "+1 454478787",
      Email: "jessica13@example.com",
      LeadStatus: "Contacted",
      CreatedData: "17 Mar 2024, 02:00 pm",
      LeadOwner: "Theresa",
    },
    {
      stars: "fa fa-star",
      img: companyicon05,
      LeadName: "Wisozk",
      CompanyName: "RiverStone Ventur",
      Phone: "+1 124547845",
      Email: "carolTho3@example.com",
      LeadStatus: "Closed",
      CreatedData: "8 Apr 2024, 11:00 am",
      LeadOwner: "Espinosa",
    },

    {
      stars: "fa fa-star",
      img: companyicon06,
      LeadName: "Heller",
      CompanyName: "Bright Bridge Grp",
      Phone: "+1 478845447",
      Email: "dawnmercha@example.com",
      LeadStatus: "Closed",
      CreatedData: "20 Apr 2024, 03:15 pm",
      LeadOwner: "Martin",
    },
    {
      stars: "fa fa-star",
      img: companyicon07,
      LeadName: "Gutkowski",
      CompanyName: "CoastalStar Co.",
      Phone: "+1 215544845",
      Email: "rachel@example.com",
      LeadStatus: "Closed",
      CreatedData: "12 May 2024, 08:30 am",
      LeadOwner: "Newell",
    },
    {
      stars: "fa fa-star filled",
      img: companyicon08,
      LeadName: "Walter",
      CompanyName: "HarborView",
      Phone: "+1 121145471",
      Email: "jonelle@example.com",
      LeadStatus: "Closed",
      CreatedData: "26 May 2024, 04:10 pm",
      LeadOwner: "Janet",
    },
    {
      stars: "fa fa-star",
      img: companyicon09,
      LeadName: "Hansen",
      CompanyName: "Golden Gate Ltd",
      Phone: "+1 321454789",
      Email: "jonathan@example.com",
      LeadStatus: "Closed",
      CreatedData: "13 June 2024, 10:30 am",
      LeadOwner: "Craig",
    },
    {
      stars: "fa fa-star",
      img: companyicon10,
      LeadName: "Leuschke",
      CompanyName: "Redwood Inc",
      Phone: "+1 278907145",
      Email: "brook@example.com",
      LeadStatus: "Lost",
      CreatedData: "28 June 2024, 05:40 pm",
      LeadOwner: "Daniel",
    }
  ]
  const columns = [
    {
      title: "",
      dataIndex: "stars",
      render: (text, record) => (
        <div className="d-flex">
          <div>
            <div className="set-star star-select star-position">
              <i className={record.stars} />
            </div>
          </div>

        </div>
      ),
    },
    {
      title: "Lead Name",
      dataIndex: "LeadName",
      render: (text) => (
        <Link to="/leads-details" className="company-img">{text}</Link>
      ),
      sorter: (a, b) => a.LeadName.length - b.LeadName.length,
    },
    {
      title: "Company Name",
      dataIndex: "CompanyName",
      render: (text, record) => (
        <span className="table-avatar d-flex align-items-center">
          <Link to="/company-details" className="company-img">
            <img alt="img" src={`${record.img}`} /> {/* Updated field name */}
          </Link>
          <Link  to="/company-details">{text}</Link>
           <span>{record.role}</span>
        </span>
      ),
      sorter: (a, b) => a.CompanyName.length - b.CompanyName.length,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a, b) => a.Phone.length - b.Phone.length,
    },

    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },

    {
      title: "Lead Status",
      dataIndex: "LeadStatus",
      render: (text) => (
        <div>
          {text === "Closed" && (
            <span className="badge badge-soft-success">{text}</span>
          )}
          {text === "Not Contacted" && (
            <span className="badge badge-soft-info">{text}</span>
          )}
          {text === "Contacted" && (
            <span className="badge badge-soft-warning">{text}</span>
          )}
          {text === "Lost" && (
            <span className="badge badge-soft-danger">{text}</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.LeadStatus.length - b.LeadStatus.length,
    },

    {
      title: "Created Data",
      dataIndex: "CreatedData",
      sorter: (a, b) => a.CreatedData.length - b.CreatedData.length,
    },
    {
      title: "Lead Owner",
      dataIndex: "LeadOwner",
      sorter: (a, b) => a.LeadOwner.length - b.LeadOwner.length,
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
              data-bs-target="#edit_leads"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_leads"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
            <Link class="dropdown-item" to="/contact-details"><i class="fa-regular fa-eye"></i> Preview</Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.length - b.length,
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
  const status = [
    { value: '--Select--', label: '--Select--' },
    { value: 'Closed', label: 'Closed' },
    { value: 'Not Contacted', label: 'Not Contacted' },
    { value: 'Contacted', label: 'Contacted' },
    { value: 'Lost', label: 'Lost' }
  ];
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
                >
                  <input
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
                    className='form-sort-two w-100'
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
            <div className="col-md-12">
              <div className="table-responsive">
                <SearchBox />
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
        <ExportLeads />
        <AddLeads />
        <EditLeads />
        <CrmDeleteModal />
      </div>
      {/* /Page Content */}
    </div>

  )
}

export default LeadsList
