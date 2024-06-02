import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import Select from 'react-select';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import "bootstrap-daterangepicker/daterangepicker.css";

const DealsDashboard = () => {

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
    const chartRef = useRef(null);
    //yearly chart
    const yearlyChartOptions = {
        series: [{
            data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }],
        chart: {
            type: 'line',
            height: 350
        },
        stroke: {
            curve: 'stepline',
        },
        dataLabels: {
            enabled: false
        },
        title: {
            align: 'left'
        },
        colors: ['#FF902F'],
        markers: {
            hover: {
                sizeOffset: 4
            }
        }
    };
    useEffect(() => {
        // Make sure the chart container element exists before rendering
        if (chartRef.current) {
            const chartInstance = new Chart(chartRef.current, yearlyChartOptions);
            chartInstance.render();

            // Cleanup the chart on component unmount
            return () => {
                chartInstance.destroy();
            };
        }
    });

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
                    <div className="page-header mb-3">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <h3 className="page-title">Deals Dashboard</h3>
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
                                        <h4>Deals By Stage</h4>
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
                                    <div id="deals-chart" />
                                    <Chart options={chartOptions} series={chartOptions.series} type="bar" height={250} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="card analytics-card w-100">
                                <div className="card-body">
                                    <div className="statistic-header">
                                        <h4>
                                            Recently Created Contacts
                                            <Link to="#" className="text-muted">
                                                <i className="la la-link ms-1" />
                                            </Link>
                                        </h4>
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
                                                    <td>85%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-warning">Open</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Konopelski</td>
                                                    <td>Pipeline</td>
                                                    <td>$03,12,500</td>
                                                    <td>85%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-danger">Lost</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Adams</td>
                                                    <td>Won</td>
                                                    <td>$04,14,800</td>
                                                    <td>80%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-success">Won</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Schumm</td>
                                                    <td>Lost</td>
                                                    <td>$9,14,400</td>
                                                    <td>47%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-danger">Lost</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Wisozk</td>
                                                    <td>Follow Up</td>
                                                    <td>$11,14,400</td>
                                                    <td>98%</td>
                                                    <td>
                                                        <span className="badge bg-inverse-danger">Lost</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <div className="card mb-0">
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
                                    <div id="year-chart">
                                        {/* Chart will be rendered here */}
                                        <Chart options={yearlyChartOptions} series={yearlyChartOptions.series} type="line" height={350} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </div>
            {/* /Page Wrapper */}
        </div>

    )
}

export default DealsDashboard
