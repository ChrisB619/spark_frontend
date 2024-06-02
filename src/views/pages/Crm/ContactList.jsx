import { Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar_25, avatar19, avatar20, avatar21, avatar22, avatar23, avatar24, avatar26, avatar27, avatar28 } from '../../../Routes/ImagePath'
import Select from 'react-select'
import { Facebook, Mail, MessageSquare, Phone, PhoneCall, Star } from 'react-feather'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import ExportLeads from '../../../components/modelpopup/Crm/ExportLeads'
import DeleteContact from '../../../components/modelpopup/Crm/DeleteContact'
import AddContact from '../../../components/modelpopup/Crm/AddContact'
import EditContact from '../../../components/modelpopup/Crm/EditContact'
import AddNotes from '../../../components/modelpopup/Crm/AddNotes'


const ContactList = () => {
  

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
  //filter
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const data = [
    {
      Id: 1,
      stars: "fa fa-star filled",
      Image: avatar19,
      Name: "Darlee Robertson",
      Position: "Facility Manager",
      Phone: "+1 875455453",
      Email: "robertson@example.com",
      Tags: "Promotion",
      Location: "Germany",
      Rating: "4.2",
      Owner: "Hendry",
      Status: "Active",

    },
    {
      Id: 2,
      stars: "fa fa-star",
      Image: avatar20,
      Name: "Sharon Roy",
      Position: "Installer",
      Phone: "+1 989757485",
      Email: "sharon@example.com",
      Tags: "Rated",
      Location: "USA",
      Rating: "5.0",
      Owner: "Guillory",
      Status: "Active",
    },
    {
      Id: 3,
      stars: "fa fa-star filled",
      Image: avatar21,
      Name: "Vaughan",
      Position: "Senior Manager",
      Phone: "+1 546555455",
      Email: "vaughan12@example.com",
      Tags: "Promotion",
      Location: "Canada",
      Rating: "3.5",
      Owner: "Jami",
      Status: "Inactive"
    },
    {
      Id: 4,
      stars: "fa fa-star",
      Image: avatar22,
      Name: "Jessica",
      Position: "Test Engineer",
      Phone: "+1 454478787",
      Email: "jessica13@example.com",
      Tags: "Rated",
      Location: "India",
      Rating: "4.5",
      Owner: "Theresa",
      Status: "Active",

    },
    {
      Id: 5,
      stars: "fa fa-star",
      Image: avatar23,
      Name: "Carol Thomas",
      Position: "UI /UX Designer",
      Phone: "+1 124547845",
      Email: "carolTho3@example.com",
      Tags: "Rejected",
      Location: "China",
      Rating: "4.7",
      Owner: "Espinosa",
      Status: "Active",
    },
    {
      Id: 6,
      stars: "fa fa-star filled",
      Image: avatar24,
      Name: "Dawn Mercha",
      Position: "Technician",
      Phone: "+1 478845447",
      Email: "dawnmercha@example.com",
      Tags: "Rated",
      Location: "Japan",
      Rating: "5.0",
      Owner: "Martin",
      Status: "Active",
    },
    {
      Id: 7,
      stars: "fa fa-star",
      Image: Avatar_25,
      Name: "Rachel Hampton",
      Position: "Software Developer",
      Phone: "+1 215544845",
      Email: "rachel@example.com",
      Tags: "Rejected",
      Location: "Indonesia",
      Rating: "3.1",
      Owner: "Newell",
      Status: "Active",

    },
    {
      Id: 8,
      stars: "fa fa-star",
      Image: avatar26,
      Name: "Jonelle",
      Position: " CurtissSupervisor",
      Phone: "+1 121145471",
      Email: "jonelle@example.com",
      Tags: "Rejected",
      Location: "Cuba",
      Rating: "5.0",
      Owner: "Janet",
      Status: "Active",

    },
    {
      Id: 9,
      stars: "fa fa-star",
      Image: avatar27,
      Name: "Jonathan",
      Position: "Team Lead Dev",
      Phone: "+1 321454789",
      Email: "jonathan@example.com",
      Tags: "Collab",
      Location: "Isreal",
      Rating: "2.7",
      Owner: "Craig",
      Status: "Active",
    },
    {
      Id: 10,
      stars: "fa fa-star",
      Image: avatar28,
      Name: "Brook",
      Position: "Team Lead Dev",
      Phone: "+1 278907145",
      Email: "brook@example.com",
      Tags: "Calls",
      Location: "Colombia",
      Rating: "3.0",
      Owner: "Daniel",
      Status: "Active",
      Contact: (
        <div>
          <ul className="social-links d-flex align-items-center">
            <li>
              <Link to="#">
                <Mail />
              </Link>
            </li>
            <li>
              <Link to="#">
                <Phone />
              </Link>
            </li>
            <li>
              <Link to="#">
                <MessageSquare />
              </Link>
            </li>
            <li>
              <Link to="#">
                <PhoneCall />
              </Link>
            </li>
            <li>
              <Link to="#">
                <Facebook />
              </Link>
            </li>
          </ul>
        </div>
      ),
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
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => (
        <h2 className="table-avatar d-flex">
          <Link to="/contact-details" className="avatar">
            <img alt="" src={record.Image} />
          </Link>
          <Link to="/contact-details" className="profile-split d-flex flex-column">
            {text} <span>{record.Position}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,

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
      title: "Tags",
      dataIndex: "Tags",
      render: (text) => (
        <div>
          {text === "Promotion" && (
            <span className="badge badge-soft-info">{text}</span>
          )}
          {text === "Rated" && (
            <span className="badge badge-soft-warning">{text}</span>
          )}
          {text === "Rejected" && (
            <span className="badge badge-soft-danger">{text}</span>
          )}
          {text === "Collab" && (
            <span className="badge badge-soft-danger">{text}</span>
          )}
          {text === "Calls" && (
            <span className="badge badge-soft-purple">{text}</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.Tags.length - b.Tags.length,
    },
    {
      title: "Location",
      dataIndex: "Location",
      sorter: (a, b) => a.Location.length - b.Location.length,
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      render: (text) => (
        <div className='set-star'>
          <i className='fa fa-star filled me-2'></i>
          {text}
        </div>
      ),
      sorter: (a, b) => a.Rating.length - b.Rating.length,
    },
    {
      title: "Owner",
      dataIndex: "Owner",
      sorter: (a, b) => a.Owner.length - b.Owner.length,
    },
    {
      title: 'Contact',
      dataIndex: 'Contact', // Assuming you have a 'contact' field in your dataSource
      render: () => (
        <ul className="social-links d-flex align-items-center">
          <li>
            <Link to="#">
              <i className="la la-envelope" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="la la-phone-volume" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="lab la-facebook-messenger" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="la la-skype" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="la la-facebook " />
            </Link>
          </li>
        </ul>
      ),
      sorter: (a, b) => a.Rating.length - b.Rating.length,
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (text) => (
        <div className="dropdown action-label">
          <Link to="#" className={text === 'Active' ? 'btn btn-white btn-sm badge-outline-success' : 'btn btn-white btn-sm badge-outline-danger'}>
            {text}
          </Link>
        </div>
      ),
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
              data-bs-target="#edit_contact"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_contact"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
            <Link className="dropdown-item" to="/contact-details"><i className="fa-regular fa-eye"></i> Preview</Link>
            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#add_notes" ><i class="la la-file-prescription"></i> Notes</Link>
          </div>
        </div>
      ),
      sorter: true,
    },
  ];
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };
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

                    <Link to="#" className="list-view btn btn-link" id="collapse-header" ref={maximizeBtnRef}>

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
                  <label className="focus-label" onClick={handleLabelClick1}>Phone Number</label>
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
                  <Link
                    to="/contact-list"
                    className="list-view btn btn-link active"
                  >
                    <i className="las la-list" />
                  </Link>
                  <Link to="/contact-grid" className="grid-view btn btn-link">
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
                <Table
                  className="table table-striped custom-table datatable contact-table"
                  style={{ overflowX: "auto" }}
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
      <AddContact />
      <EditContact />
      <DeleteContact />
      <AddNotes />
    </div>

  )
}

export default ContactList
