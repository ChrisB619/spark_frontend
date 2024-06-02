import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const state1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [24, 15, 32, 24, 26, 20],
      backgroundColor: "#664dc9",
    },
  ],
};
const option1 = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: true,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          max: 40,
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 0.6,
        ticks: {
          beginAtZero: true,
          fontSize: 11,
        },
      },
    ],
  },
};
const state2 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: "#44c4fa",
    },
  ],
};
const option2 = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: true,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          max: 40,
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 0.6,
        ticks: {
          beginAtZero: true,
          fontSize: 11,
        },
      },
    ],
  },
};
const state3 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: "#5099E8",
    },
  ],
};
const option3 = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: true,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          max: 40,
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 0.6,
        ticks: {
          beginAtZero: true,
          fontSize: 11,
        },
      },
    ],
  },
};
const state4 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: [
        "#664dc9",
        "#44c4fa",
        "#38cb89",
        "#3e80eb",
        "#ffab00",
        "#ef4b4b",
      ],
    },
  ],
};
const option4 = {
  indexAxis: "y",
  maintainAspectRatio: false,
  legend: {
    display: true,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 10,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 11,
          max: 35,
        },
      },
    ],
  },
};
const state5 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: ["#664dc9", "#38cb89", "#116e7c", "#ffab00", "#ef4b4b"],
    },
    {
      data: [22, 30, 25, 30, 20, 40],
      backgroundColor: "#44c4fa",
    },
  ],
};
const option5 = {
  indexAxis: "y",
  maintainAspectRatio: false,
  legend: {
    display: true,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 11,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 11,
          max: 40,
        },
      },
    ],
  },
};
const state6 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: "#664dc9",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: "#44c4fa",
      borderWidth: 1,
      fill: true,
    },
  ],
};
const option6 = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
          fontSize: 11,
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 0.5,
        stacked: true,
        ticks: {
          fontSize: 11,
        },
      },
    ],
  },
};
const state7 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: "#664dc9",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [14, 12, 34, 25, 24, 20],
      backgroundColor: "#44c4fa",
      borderWidth: 1,
      fill: true,
    },
  ],
};
const option7 = {
  indexAxis: "y",
  maintainAspectRatio: false,
  legend: {
    display: true,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          max: 35,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
          fontSize: 11,
        },
      },
    ],
  },
};
const state8 = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25],
      borderColor: "#664dc9",
      borderWidth: 1,
      fill: false,
    },
    {
      data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
      borderColor: "#44c4fa",
      borderWidth: 1,
      fill: false,
    },
  ],
};
const option8 = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          max: 60,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 11,
        },
      },
    ],
  },
};
const state9 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      data: [35, 20, 8, 15, 24],
      backgroundColor: [
        "#664dc9",
        "#44c4fa",
        "#38cb89",
        "#3e80eb",
        "#ffab00",
        "#ef4b4b",
      ],
    },
  ],
};
const option9 = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: true,
  },
  animation: {
    animateScale: true,
    animateRotate: true,
  },
};
const state10 = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25],
      borderColor: "#664dc9",
      borderWidth: 1,
      fill: false,
    },
    {
      data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
      borderColor: "#44c4fa",
      borderWidth: 1,
      fill: false,
    },
  ],
};
const option10 = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 10,
          max: 80,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 11,
        },
      },
    ],
  },
};
const ChartJs = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Chartjs</h5>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Bar Chart</div>
                </div>
                <div className="card-body">
                  <div>
                    <Bar className="h-300" data={state1} options={option1} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Transparency </div>
                </div>
                <div className="card-body">
                  <div>
                    <Bar className="h-300" data={state2} options={option2} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Gradient Bar Chart</div>
                </div>
                <div className="card-body">
                  <div>
                    <Bar className="h-300" data={state3} options={option3} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Horizontal Bar Chart</div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo">
                    <Bar className="h-300" data={state4} options={option4} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Horizontal Bar Chart Style2</div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo">
                    <Bar className="h-300" data={state5} options={option5} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Vertical Stacked Bar Chart</div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo">
                    <Bar className="h-300" data={state6} options={option6} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Horizontal Stacked Bar Chart</div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo">
                    <Bar className="h-300" data={state7} options={option7} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Line Chart</div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo">
                    <Line className="h-300" data={state8} options={option8} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Donut Chart</div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo">
                    <Doughnut
                      className="h-300"
                      data={state9}
                      options={option9}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Pie Chart</div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo">
                    <Pie className="h-300" data={state9} options={option9} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Area Chart</div>
                </div>
                <div className="card-body">
                  <div className="chartjs-wrapper-demo">
                    <Line className="h-300" data={state10} options={option10} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};
export default ChartJs;
