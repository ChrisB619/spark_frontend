import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { avatar16, avatar19, avatar20, avatar22, avatar23, avatar24, avatar25, company_icon_02, company_icon_03, company_icon_04, company_icon_05, company_icon_06, companyicon01 } from '../../../Routes/ImagePath'
import Select from 'react-select';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import ExportLeads from '../../../components/modelpopup/Crm/ExportLeads';
import AddContact from '../../../components/modelpopup/Crm/AddContact';
import DatePicker from "react-datepicker";
import AddActivity from '../../../components/modelpopup/Crm/AddActivity';

const Analytics = () => {
    const [selectedDate1, setSelectedDate1] = useState(null);
    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };
    const [selectedDate2, setSelectedDate2] = useState(null);
    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
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
    //


    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const toggleFilterVisibility = () => {
        setIsFilterVisible((prevVisibility) => !prevVisibility);
    };

    const sortoption = [
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 3 month', label: 'Last 3 month' },
        { value: 'Last 6 month', label: 'Last 6 month' },
    ];
    const sortoption1 = [
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 3 month', label: 'Last 3 month' },
        { value: 'Last 6 month', label: 'Last 6 month' },
    ];
    const sortoption2 = [
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 3 month', label: 'Last 3 month' },
        { value: 'Last 6 month', label: 'Last 6 month' },
    ];
    const pipelinelist = [
        { value: 'Sales Pipeline', label: 'Sales Pipeline' },
        { value: 'Marketing Pipeline', label: 'Marketing Pipeline' },
    ];
    const pipelinelist1 = [
        { value: 'Sales Pipeline', label: 'Sales Pipeline' },
        { value: 'Marketing Pipeline', label: 'Marketing Pipeline' },
    ];
    const duration = [
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 3 months', label: 'Last 3 months' },
        { value: 'Last 6 months', label: 'Last 6 months' },
    ];
    const wondealsstage = [
        { value: 'Marketing Pipeline', label: 'Marketing Pipeline' },
        { value: 'Pipeline', label: 'Pipeline' },
    ];
    const wondealsstage2 = [
        { value: 'Marketing Pipeline', label: 'Marketing Pipeline' },
        { value: 'Pipeline', label: 'Pipeline' },
    ];
    const wondealsstage1 = [
        { value: 'Marketing Pipeline', label: 'Marketing Pipeline' },
        { value: 'Pipeline', label: 'Pipeline' },
    ];
    const days = [
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 15 days', label: 'Last 15 days' },
        { value: 'Last 7 days', label: 'Last 7 days' },
    ];
    const days1 = [
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 15 days', label: 'Last 15 days' },
        { value: 'Last 7 days', label: 'Last 7 days' },
    ];
    const days2 = [
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 15 days', label: 'Last 15 days' },
        { value: 'Last 7 days', label: 'Last 7 days' },
    ];
    
    const daysandmonth = [
        { value: 'select', label: 'select' },
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 3 months', label: 'Last 3 months' },
        { value: 'Last 6 months', label: 'Last 6 months' },
    ];
    const status = [
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Todo', label: 'Todo' },
    ];
    const status1 = [
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Todo', label: 'Todo' },
    ];
    const status2 = [
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Todo', label: 'Todo' },
    ];
    const status3 = [
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Todo', label: 'Todo' },
    ];
    const status4 = [
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Todo', label: 'Todo' },
    ];
    const status5 = [
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Todo', label: 'Todo' },
    ];
    const activity = [
        { value: 'Meeting', label: 'Meeting' },
        { value: 'Calls', label: 'Calls' },
        { value: 'Email', label: 'Email' },
        { value: 'Task', label: 'Task' },
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
    const [chartOptions] = useState({
        series: [{
            name: "sales",
            colors: ['#FFC38F'],
            data: [{
                x: 'Inpipeline',
                y: 400,
            }, {
                x: 'Follow Up',
                y: 30
            }, {
                x: 'Schedule',
                y: 248
            }, {
                x: 'Conversation',
                y: 470
            }, {
                x: 'Won',
                y: 470
            }, {
                x: 'Lost',
                y: 180
            }]
        }],
        chart: {
            type: 'bar',
            height: 250,
            toolbar: {
                show: true,
                tools: {
                    download: false, // You can adjust other toolbar options as needed
                },
                autoSelected: 'zoom'
            },
            offsetY: 10, // Adjust the offset as needed
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                borderRadiusApplication: 'around',
            }
        },
        colors: ['#FFC38F'],
        xaxis: {
            type: 'category',
            group: {
                style: {
                    fontSize: '7px',
                    fontWeight: 700,
                },

            }
        },
    });

    const chartRefWonChart = useRef(null);
    useEffect(() => {
        const options = {
            series: [{
                data: [400, 122, 250]
            }],
            chart: {
                type: 'bar',
                height: 150
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#77D882'],
            xaxis: {
                categories: ['Conversation', 'Follow Up', 'Inpipeline'],
            }
        };

        const chart = new ApexCharts(chartRefWonChart.current, options);
        chart.render();

        // Cleanup the chart on component unmount
        return () => {
            chart.destroy();
        };
    }, []);
    const chartRefWonChart2 = useRef(null);
    useEffect(() => {
        const options = {
            series: [{
                data: [400, 122, 250]
            }],
            chart: {
                type: 'bar',
                height: 150
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#77D882'],
            xaxis: {
                categories: ['Conversation', 'Follow Up', 'Inpipeline'],
            }
        };

        const chart = new ApexCharts(chartRefWonChart2.current, options);
        chart.render();

        // Cleanup the chart on component unmount
        return () => {
            chart.destroy();
        };
    }, []);
    const chartRefLostDeal = useRef(null);
    useEffect(() => {
        const options = {
            series: [{
                data: [400, 220, 448]
            }],
            chart: {
                type: 'bar',
                height: 150
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            borderRadius: 50,
            colors: ['#F96C85'],
            xaxis: {
                categories: ['Conversation', 'Follow Up', 'Inpipeline'],
            }
        };

        const chart = new ApexCharts(chartRefLostDeal.current, options);
        chart.render();

        // Cleanup the chart on component unmount
        return () => {
            chart.destroy();
        };
    }, []);
    const chartRefLostDeal2 = useRef(null);
    useEffect(() => {
        const options = {
            series: [{
                data: [400, 220, 448]
            }],
            chart: {
                type: 'bar',
                height: 150
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            borderRadius: 50,
            colors: ['#F96C85'],
            xaxis: {
                categories: ['Conversation', 'Follow Up', 'Inpipeline'],
            }
        };

        const chart = new ApexCharts(chartRefLostDeal2.current, options);
        chart.render();

        // Cleanup the chart on component unmount
        return () => {
            chart.destroy();
        };
    }, []);
    // Leads By Stage Chart
    const [chartOptions1] = useState({
        series: [{
            name: "sales",
            colors: ['#BEA4F2'],
            data: [{
                x: 'Inpipeline',
                y: 400,
            }, {
                x: 'Follow Up',
                y: 30
            }, {
                x: 'Schedule',
                y: 248
            }, {
                x: 'Conversation',
                y: 470
            }, {
                x: 'Won',
                y: 470
            }, {
                x: 'Lost',
                y: 180
            }]
        }],
        chart: {
            type: 'bar',
            height: 250,
            toolbar: {
                show: true,
                tools: {
                    download: false, // You can adjust other toolbar options as needed
                },
                autoSelected: 'zoom'
            },
            offsetY: 10, // Adjust the offset as needed
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                borderRadiusApplication: 'around',
            }
        },
        colors: ['#BEA4F2'],
        xaxis: {
            type: 'category',
            group: {
                style: {
                    fontSize: '7px',
                    fontWeight: 700,
                },

            }
        },
    });
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
                                <h3 className="page-title">Analytics</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/admin-dashboard">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Analytics</li>
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
                                    <label className="focus-label">Activity</label>
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
                                    <label className="focus-label">Owner</label>
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
                                    <label className="focus-label">Due Date</label>
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
                                    <label className="focus-label">Created at</label>
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="input-block mb-3 form-focus select-focus">
                                    <Select
                                        options={activity}
                                        placeholder="--Select--"
                                        styles={customStyles}
                                    />
                                    <label className="focus-label">Activity Type</label>
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
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between align-items-center flex-wrap row-gap-3">
                                    <h3>
                                        Recently Created Contacts
                                        <Link to="#">
                                            <i className="la la-link" />
                                        </Link>
                                    </h3>
                                    <div className="input-block mb-0">

                                        <Select
                                            className='select'
                                            options={sortoption}
                                            placeholder="Last 30 days"
                                            styles={customStyles}
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-nowrap custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Contact</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Created at</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex">
                                                            <Link to="/contact-details" className="avatar">
                                                                <img
                                                                    src={avatar16}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link
                                                                to="/contact-details"
                                                                className="profile-split d-flex flex-column"
                                                            >
                                                                Carol Thomas<span>UI /UX Designer</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>CarolTho3@example.com</td>
                                                    <td>+1 124547845</td>
                                                    <td>12 Jan 2024,10:00 am</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex">
                                                            <Link to="/contact-details" className="avatar">
                                                                <img
                                                                    src={avatar22}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link
                                                                to="/contact-details"
                                                                className="profile-split d-flex flex-column"
                                                            >
                                                                Dawn Mercha<span>Technician</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>dawnmercha@example.com</td>
                                                    <td>+1 478845447</td>
                                                    <td>20 Jan 2024,12:20 pm</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex">
                                                            <Link to="/contact-details" className="avatar">
                                                                <img
                                                                    src={avatar23}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link
                                                                to="/contact-details"
                                                                className="profile-split d-flex flex-column"
                                                            >
                                                                Rachel Hampton<span>Software Developer</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>rachel@example.com</td>
                                                    <td>+1 215544845</td>
                                                    <td>15 Feb 2024,08:30 am</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex">
                                                            <Link to="/contact-details" className="avatar">
                                                                <img
                                                                    src={avatar24}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link
                                                                to="/contact-details"
                                                                className="profile-split d-flex flex-column"
                                                            >
                                                                Jonelle Curtiss<span>Supervisor</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>jonelle@example.com</td>
                                                    <td>+1 121145471</td>
                                                    <td>24 Feb 2024,11:00 am</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex">
                                                            <Link to="/contact-details" className="avatar">
                                                                <img
                                                                    src={avatar23}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link
                                                                to="/contact-details"
                                                                className="profile-split d-flex flex-column"
                                                            >
                                                                Jonathan<span>Team Lead Dev</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>jonathan@example.com</td>
                                                    <td>+1 321454789</td>
                                                    <td>10 Mar 2024,02:10 pm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between card-selectsview flex-wrap row-gap-3 mb-0">
                                    <h3 className="card-title mb-0">Won Deals Stage</h3>
                                    <div className="card-select">
                                        <ul>
                                            <li>
                                                <Select
                                                    className='select'
                                                    options={wondealsstage}
                                                    placeholder="Last 30 days"
                                                    styles={customStyles}
                                                />
                                            </li>
                                            <li>
                                                <Select
                                                    className='select'
                                                    options={days}
                                                    placeholder="Last 30 days"
                                                    styles={customStyles}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div ref={chartRefWonChart} />
                                </div>
                            </div>
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between align-items-center flex-wrap row-gap-3">
                                    <h3>
                                        Recently Created Deals
                                        <Link to="#">
                                            <i className="la la-link" />
                                        </Link>
                                    </h3>
                                    <div className="input-block mb-0">

                                        <Select
                                            className='select'
                                            options={daysandmonth}
                                            placeholder="select"
                                            styles={customStyles}
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-nowrap custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Deal Name</th>
                                                    <th>Stage</th>
                                                    <th>Deal Value</th>
                                                    <th>Probability</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Collins</td>
                                                    <td>Conversation</td>
                                                    <td>$04,51,000</td>
                                                    <td>85 %</td>
                                                    <td>
                                                        <span className="badge badge-soft-info">Open</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Konopelski</td>
                                                    <td>Pipeline</td>
                                                    <td>$03,12,500</td>
                                                    <td>15 %</td>
                                                    <td>
                                                        <span className="badge badge-soft-danger">Lost</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Adams</td>
                                                    <td>Won</td>
                                                    <td>$04,14,800</td>
                                                    <td>95 %</td>
                                                    <td>
                                                        <span className="badge badge-soft-success">Won</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Schumm</td>
                                                    <td>Lost</td>
                                                    <td>$9,14,400</td>
                                                    <td>47 %</td>
                                                    <td>
                                                        <span className="badge badge-soft-danger">Lost</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Wisozk</td>
                                                    <td>Follow Up</td>
                                                    <td>$11,14,400</td>
                                                    <td>98 %</td>
                                                    <td>
                                                        <span className="badge badge-soft-danger">Lost</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between card-selectsview mb-0 flex-wrap row-gap-3">
                                    <h3 className="card-title mb-0">Lost Leads Stage</h3>
                                    <div className="card-select">
                                        <ul>
                                            <li>
                                                <Select
                                                    className='select'
                                                    options={wondealsstage1}
                                                    placeholder="Last 30 days"
                                                    styles={customStyles}
                                                />
                                            </li>
                                            <li>
                                                <Select
                                                    className='select'
                                                    options={days1}
                                                    placeholder="select"
                                                    styles={customStyles}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div ref={chartRefLostDeal} />
                                </div>
                            </div>
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between align-items-center flex-wrap row-gap-3">
                                    <h3>Leads By Stage</h3>
                                    <div className="d-flex flex-wrap row-gap-3">
                                        <div className="input-block mb-0 me-3">
                                            <Select
                                                className="select"
                                                options={pipelinelist1}
                                                placeholder="Sales Pipeline"
                                                styles={customStyles}
                                            />
                                        </div>
                                        <div className="input-block mb-0">
                                            <Select
                                                className="select"
                                                options={sortoption1}
                                                placeholder="Sales Pipeline"
                                                styles={customStyles}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Chart options={chartOptions1} series={chartOptions1.series} type="bar" height={250} />

                                </div>
                            </div>
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between align-items-center flex-wrap row-gap-3">
                                    <h3>
                                        Recently Added Companies
                                        <Link to="#">
                                            <i className="la la-link" />
                                        </Link>
                                    </h3>
                                    <div className="title-head d-flex">
                                        <div className="input-block mb-0">
                                            <Select
                                                className="select"
                                                options={sortoption2}
                                                placeholder="Sales Pipeline"
                                                styles={customStyles}
                                            />
                                        </div>
                                        <Link
                                            to="#"
                                            className="btn add-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add_contact"
                                        >
                                            <i className="la la-plus-circle" /> Add Company
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-nowrap custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Company Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Created at</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={companyicon01}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                NovaWaveLLC
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>Robertson@example.com</td>
                                                    <td>+1 875455453</td>
                                                    <td>12 Jan 2024,10:00 am</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={company_icon_02}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                SilverHawk
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>Vaughan12@example.com</td>
                                                    <td>+1 546555455</td>
                                                    <td>20 Jan 2024,12:20 pm</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={company_icon_03}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                SummitPeak
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>Jessica13@example.com</td>
                                                    <td>+1 454478787</td>
                                                    <td>15 Feb 2024,08:30 am</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={company_icon_04}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                RiverStone Ventur
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>CarolTho3@example.com</td>
                                                    <td>+1 124547845</td>
                                                    <td>24 Feb 2024,11:00 am</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={company_icon_05}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                CoastalStar Co.
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>Rachel@example.com</td>
                                                    <td>+1 215544845</td>
                                                    <td>10 Mar 2024,02:10 pm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between align-items-center flex-wrap row-gap-3">
                                    <h3>Deals By Stage</h3>
                                    <div className="d-flex flex-wrap row-gap-3">
                                        <div className="input-block mb-0 me-3">
                                            <Select
                                                className="select"
                                                options={pipelinelist}
                                                placeholder="Sales Pipeline"
                                                styles={customStyles}
                                            />
                                        </div>
                                        <div className="input-block mb-0">

                                            <Select
                                                className="select"
                                                options={duration}
                                                placeholder="Last 30 days"
                                                styles={customStyles}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="deals-chart" />
                                    <Chart options={chartOptions} series={chartOptions.series} type="bar" height={250} />
                                </div>
                            </div>
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between align-items-center flex-wrap row-gap-3">
                                    <h3>
                                        Activities
                                        <Link to="#">
                                            <i className="la la-link" />
                                        </Link>
                                    </h3>
                                    <div className="title-head d-flex">
                                        <div className="input-block mb-0">
                                            <Select
                                                className="select"
                                                options={sortoption}
                                                placeholder="Sales Pipeline"
                                                styles={customStyles}
                                            />
                                        </div>
                                        <Link
                                            to="#"
                                            className="btn add-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add_activity"
                                        >
                                            <i className="la la-plus-circle" /> Add Activity
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="activities-list">
                                        <ul>
                                            <li>
                                                <div className="row align-items-center">
                                                    <div className="col-md-5">
                                                        <div className="activity-name">
                                                            <h5>We scheduled a meeting for next week</h5>
                                                            <p>Due Date : 10 Feb 2024, 09:00 am </p>
                                                            <span className="badge activity-badge badge-bg-violet">
                                                                <i className="la la-user-tie" />
                                                                Meeting
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="user-activity">
                                                            <span>
                                                                <img
                                                                    src={avatar19}
                                                                    alt="Img"
                                                                />
                                                            </span>
                                                            <h6>Darlee Robertson</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="input-block mb-0">
                                                            <Select
                                                                className="select"
                                                                options={status}
                                                                placeholder="Inporgress"
                                                                styles={customStyles}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row align-items-center">
                                                    <div className="col-md-5">
                                                        <div className="activity-name">
                                                            <h5>Built landing pages</h5>
                                                            <p>Due Date : 12 Mar 2024, 08:30 am</p>
                                                            <span className="badge activity-badge badge-bg-warning">
                                                                <i className="la la-envelope" />
                                                                Email
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="user-activity">
                                                            <span>
                                                                <img
                                                                    src={avatar16}
                                                                    alt="Img"
                                                                />
                                                            </span>
                                                            <h6>Carol Thomas</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="input-block mb-0">
                                                            <Select
                                                                className="select"
                                                                options={status1}
                                                                placeholder="Inporgress"
                                                                styles={customStyles}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row align-items-center">
                                                    <div className="col-md-5">
                                                        <div className="activity-name">
                                                            <h5>Call John and discuss about project</h5>
                                                            <p>Due Date : 20 Apr 2024, 03:15 pm</p>
                                                            <span className="badge activity-badge badge-bg-success">
                                                                <i className="la la-phone" />
                                                                Calls
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="user-activity">
                                                            <span>
                                                                <img
                                                                    src={avatar20}
                                                                    alt="Img"
                                                                />
                                                            </span>
                                                            <h6>Sharon Roy</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="input-block mb-0">
                                                            <Select
                                                                className="select"
                                                                options={status2}
                                                                placeholder="Inporgress"
                                                                styles={customStyles}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row align-items-center">
                                                    <div className="col-md-5">
                                                        <div className="activity-name">
                                                            <h5>Store and manage contact data</h5>
                                                            <p>Due Date : 13 May 2024, 10:30 am </p>
                                                            <span className="badge activity-badge badge-bg-info">
                                                                <i className="la la-tasks" />
                                                                Task
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="user-activity">
                                                            <span>
                                                                <img
                                                                    src={avatar22}
                                                                    alt="Img"
                                                                />
                                                            </span>
                                                            <h6>Dawn Mercha</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="input-block mb-0">
                                                            <Select
                                                                className="select"
                                                                options={status3}
                                                                placeholder="Inporgress"
                                                                styles={customStyles}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row align-items-center">
                                                    <div className="col-md-5">
                                                        <div className="activity-name">
                                                            <h5>Regarding latest updates in project</h5>
                                                            <p>Due Date : 25 May 2024, 02:10 pm </p>
                                                            <span className="badge activity-badge badge-bg-violet">
                                                                <i className="la la-user-tie" />
                                                                Meeting
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="user-activity">
                                                            <span>
                                                                <img
                                                                    src={avatar24}
                                                                    alt="Img"
                                                                />
                                                            </span>
                                                            <h6>Jonelle Curtiss</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="input-block mb-0">
                                                            <Select
                                                                className="select"
                                                                options={status4}
                                                                placeholder="Inporgress"
                                                                styles={customStyles}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row align-items-center">
                                                    <div className="col-md-5">
                                                        <div className="activity-name">
                                                            <h5>Discussed budget proposal with Edwin</h5>
                                                            <p>Due Date : 05 June 2024, 05:40 pm </p>
                                                            <span className="badge activity-badge badge-bg-success">
                                                                <i className="la la-phone" />
                                                                Calls
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="user-activity">
                                                            <span>
                                                                <img
                                                                    src={avatar25}
                                                                    alt="Img"
                                                                />
                                                            </span>
                                                            <h6>Jonathan</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="input-block mb-0">
                                                            <Select
                                                                className="select"
                                                                options={status5}
                                                                placeholder="Inporgress"
                                                                styles={customStyles}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between card-selectsview flex-wrap row-gap-3 mb-0">
                                    <h3 className="card-title mb-0">Lost Leads Stage</h3>
                                    <div className="card-select">
                                        <ul>
                                            <li>
                                                <Select
                                                    className="select"
                                                    options={wondealsstage}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                            </li>
                                            <li>
                                                <Select
                                                    className="select"
                                                    options={days2}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div ref={chartRefLostDeal2} />
                                </div>
                            </div>
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between align-items-center flex-wrap row-gap-3">
                                    <h3>
                                        Recently Created Leads
                                        <Link to="#">
                                            <i className="la la-link" />
                                        </Link>
                                    </h3>
                                    <div className="input-block mb-0">
                                        <Select
                                            className="select"
                                            options={sortoption1}
                                            placeholder="Sales Pipeline"
                                            styles={customStyles}
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-nowrap custom-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Lead Name</th>
                                                    <th>Company Name</th>
                                                    <th>Phone</th>
                                                    <th>Lead Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Collins</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={companyicon01}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                NovaWaveLLC{" "}
                                                                <span className="d-block">Newyork, USA</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 875455453</td>
                                                    <td>
                                                        <span className="badge badge-soft-success">Closed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Konopelski</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={company_icon_02}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                BlueSky Industries{" "}
                                                                <span className="d-block">Winchester, KY</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 989757485</td>
                                                    <td>
                                                        <span className="badge badge-soft-success">Closed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Adams</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={company_icon_03}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                SilverHawk{" "}
                                                                <span className="d-block">Jamestown, NY</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 546555455</td>
                                                    <td>
                                                        <span className="badge badge-soft-info">
                                                            Not Contacted
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Schumm</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={company_icon_04}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                SummitPeak{" "}
                                                                <span className="d-block">Compton, RI</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 454478787</td>
                                                    <td>
                                                        <span className="badge badge-soft-warning">
                                                            Contacted
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Wisozk</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={company_icon_05}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                RiverStone Ventur
                                                                <span className="d-block">Dayton, OH</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 124547845</td>
                                                    <td>
                                                        <span className="badge badge-soft-success">Closed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Heller</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex align-items-center">
                                                            <Link to="#" className="company-img">
                                                                <img
                                                                    src={company_icon_06}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link to="#" className="profile-split">
                                                                Bright Bridge Grp
                                                                <span className="d-block">Saybrook, IL</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 478845447</td>
                                                    <td>
                                                        <span className="badge badge-soft-success">Closed</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card analytics-card">
                                <div className="card-header d-flex justify-content-between card-selectsview flex-wrap row-gap-3 mb-0">
                                    <h3 className="card-title mb-0">Won Leads Stage</h3>
                                    <div className="card-select">
                                        <ul>
                                            <li>
                                                <Select
                                                    className="select"
                                                    options={wondealsstage2}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                            </li>
                                            <li>
                                                <Select
                                                    className="select"
                                                    options={days2}
                                                    placeholder="Last 7 days"
                                                    styles={customStyles}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div ref={chartRefWonChart2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </div>
            {/* /Page Wrapper */}
            <ExportLeads />
            <AddContact />
            <AddActivity />
        </div>

    )
}

export default Analytics
