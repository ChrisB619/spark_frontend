import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ApexCharts from 'apexcharts';
import { compamy01, compamy02, compamy03, compamy04 } from '../../../../../Routes/ImagePath';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import "bootstrap-daterangepicker/daterangepicker.css";
import Select from 'react-select';

const LeadsDashboard = () => {
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
    const leadChartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [{
                name: "Session Duration",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            }],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            colors: ['#FFC38F'],
            xaxis: {
                categories: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep',
                    'Oct', 'Nov', 'Dec'
                ],
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: '#f1f1f1',
            }
        };

        const chartInstance = new ApexCharts(leadChartRef.current, options);
        chartInstance.render();

        // Cleanup the chart on component unmount
        return () => {
            chartInstance.destroy();
        };
    }, []); // Empty dependency array means this effect will run once after the initial render
    const leadPieChartRef = useRef(null);

    const options = [
        { value: 'deals', label: 'Deals Dashboard' },
        { value: 'leads', label: 'Leads Dashboard' }
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
    useEffect(() => {
        const options = {
            series: [44, 55, 13, 43],
            chart: {
                width: 450,
                type: 'pie',
            },
            labels: ['Inpipeline', 'Follow Up', 'Schedule Service', 'Conversation'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 275
                    },
                    legend: {
                        position: 'right'
                    }
                }
            }]
        };

        const chartInstance = new ApexCharts(leadPieChartRef.current, options);
        chartInstance.render();

        // Cleanup the chart on component unmount
        return () => {
            chartInstance.destroy();
        };
    }, []); // Empty dependency array means this effect will run once after the initial render
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
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                {/* Page Content */}
                <div className="content container-fluid pb-0">
                    {/* Page Header */}
                    <div className="page-header mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <h3 className="page-title">Leads Dashboard</h3>
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
                                    </div>
                                    <div className="form-sort">
                                        <Link
                                            to="#"
                                            className="list-view btn btn-link"
                                        >
                                            <i className="las la-file-export" />
                                            Export
                                        </Link>
                                    </div>
                                    <div className="daterange-picker d-flex">
                                        <div className="form-sort">
                                            <i className="las la-calendar" />
                                            <DateRangePicker initialSettings={initialSettings}>
                                                <input
                                                    className="form-control  date-range bookingrange"
                                                    type="text"
                                                />
                                            </DateRangePicker>
                                        </div>
                                        <div className="form-sort value-contain">
                                            <i className="las la-cubes" />
                                            <Select
                                              className='select w-100'
                                                options={options}
                                                placeholder="Select Dashboard"
                                                styles={customStyles}
                                                isSearchable={false}

                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="statistic-header">
                                        <h4>Lost Deals Stage</h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            to="#"
                                                        >
                                                            Marketing Pipeline
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Marketing Pipeline
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Sales Pipeline
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Email
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Chats
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Operational
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            to="#"
                                                        >
                                                            Last 3 months
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div ref={chartRefLostDeal} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body ">
                                    <div className="statistic-header">
                                        <h4>Won Deals Stage</h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            to="#"
                                                        >
                                                            Marketing Pipeline
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Marketing Pipeline
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Sales Pipeline
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Email
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Chats
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Operational
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            to="#"
                                                        >
                                                            Last 3 months
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div ref={chartRefWonChart} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="statistic-header">
                                        <h4>Deals by Year</h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            to="#"
                                                        >
                                                            Last 3 months
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div ref={leadChartRef} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="statistic-header">
                                        <h4>Leads By Stage</h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            to="#"
                                                        >
                                                            Marketing Pipeline
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Marketing Pipeline
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Sales Pipeline
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Email
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Chats
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Operational
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            to="#"
                                                        >
                                                            Last 3 months
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div ref={leadPieChartRef} />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="card analytics-card w-100">
                                <div className="card-body">
                                    <div className="statistic-header">
                                        <h4>Recently Created Leads</h4>
                                        <div className="dropdown statistic-dropdown">
                                            <div className="card-select">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            to="#"
                                                        >
                                                            Last 3 months
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 3 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 6 months
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item"
                                                            >
                                                                Last 12 months
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table custom-table table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Deal Name</th>
                                                    <th>Company Name</th>
                                                    <th>Deal Value</th>
                                                    <th>Lead Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Collins</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex">
                                                            <Link to="/profile" className="avatar">
                                                                <img
                                                                    src={compamy01}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link
                                                                to="/profile"
                                                                className="profile-split d-flex flex-column"
                                                            >
                                                                NovaWave LLC<span>Newyork, USA</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 989757485</td>
                                                    <td>
                                                        <span className="badge bg-inverse-danger">Closed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>BlueSky Industries</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex">
                                                            <Link to="/profile" className="avatar">
                                                                <img
                                                                    src={compamy02}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link
                                                                to="/profile"
                                                                className="profile-split d-flex flex-column"
                                                            >
                                                                BlueSky Industries<span>Winchester, KY</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 989757485</td>
                                                    <td>
                                                        <span className="badge bg-inverse-info">
                                                            Not Contacted
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Adams</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex">
                                                            <Link to="/profile" className="avatar">
                                                                <img
                                                                    src={compamy03}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link
                                                                to="/profile"
                                                                className="profile-split d-flex flex-column"
                                                            >
                                                                SilverHawk<span>Jametown, NY</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 546555455</td>
                                                    <td>
                                                        <span className="badge bg-inverse-danger">Closed</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Schumm</td>
                                                    <td>
                                                        <h2 className="table-avatar d-flex">
                                                            <Link to="/profile" className="avatar">
                                                                <img
                                                                    src={compamy04}
                                                                    alt="img"
                                                                />
                                                            </Link>
                                                            <Link
                                                                to="/profile"
                                                                className="profile-split d-flex flex-column"
                                                            >
                                                                SummitPeak<span>Compton, RI</span>
                                                            </Link>
                                                        </h2>
                                                    </td>
                                                    <td>+1 454478787</td>
                                                    <td>
                                                        <span className="badge bg-inverse-warning">
                                                            Contacted
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </div>
            {/* /Page Wrapper */}
        </>

    )
}

export default LeadsDashboard
