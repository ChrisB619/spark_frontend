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
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [9, 4, 9, 11, 15, 17, 7, 17, 13, 17, 25, 28],
      backgroundColor: "#664dc9",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [18, 19, 22, 21, 32, 28, 11, 15, 17, 7, 17, 13],
      backgroundColor: "#44c4fa",
      borderWidth: 1,
      fill: true,
      height: 500,
    },
  ],
};
const option1 = {
  maintainAspectRatio: false,
  legend: {
    display: false,
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
        stacked: true,
        ticks: {
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
      data: [9, 4, 9, 11, 15, 17],
      backgroundColor: "#664dc9",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [18, 19, 22, 21, 32, 28],
      backgroundColor: "#44c4fa",
      borderWidth: 1,
      fill: true,
    },
  ],
};
const option2 = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
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
          max: 35,
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
const option3 = {
  indexAxis: "y",
  maintainAspectRatio: false,
  legend: {
    display: false,
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
const state4 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep"],
  datasets: [
    {
      data: [0, 9, 16, 19, 30, 25, 19, 12, 0],
      borderColor: "#664dc9",
      backgroundColor: "#664dc9",
      borderWidth: 1,
      fill: true,
    },
  ],
};
const state5 = {
  labels: ["6", "7", "8", "9", "10", "11", "12"],
  datasets: [
    {
      data: [12, 7, 8, 6, 8, 9, 12],
      borderColor: "#664dc9",
      backgroundColor: "#664dc9",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [8, 10, 10, 9, 7, 10, 8],
      borderColor: "#44c4fa",
      backgroundColor: "#44c4fa",
      borderWidth: 1,
      fill: true,
    },
  ],
};
const state6 = {
  labels: ["6", "7", "8", "9", "10", "11"],
  datasets: [
    {
      data: [12, 9, 16, 19, 20, 18],
      borderColor: "#44c4fa",
      backgroundColor: "#44c4fa",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [8, 8, 6, 8, 10, 13],
      borderColor: "#664dc9",
      backgroundColor: "#664dc9",
      borderWidth: 1,
      fill: true,
    },
  ],
};
const option4 = {
  maintainAspectRatio: false,
  legend: {
    display: false,
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
          max: 30,
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
const state7 = {
  labels: ["A", "B", "C", "D"],
  datasets: [
    {
      data: [63, 44, 12, 14],
      backgroundColor: ["#664dc9", "#44c4fa", "#2dce89", "#ff5b51"],
    },
  ],
};
const state8 = {
  labels: ["sales1", "sales2", "sales3"],
  datasets: [
    {
      data: [58, 65, 35],
      backgroundColor: ["#664dc9", "#44c4fa", "#2dce89"],
    },
  ],
};
const option7 = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  animation: {
    animateScale: true,
    animateRotate: true,
  },
};

const C3Charts = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="content-page-header">
              <h3>C3 Charts</h3>
            </div>
          </div>

          <div className="row">
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Bar Chart</div>
                </div>
                <div className="card-body h-550">
                  <Bar data={state1} options={option1} />
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Multiple Bar Chart</div>
                </div>
                <div className="card-body">
                  <Bar className="h-300" data={state2} options={option2} />
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
                  <Bar data={state2} options={option3} />
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
                  <Line data={state4} options={option4} />
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
                  <Line data={state5} options={option4} />
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
                  <Line data={state6} options={option4} />
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
                  <Pie className="h-300" data={state7} options={option7} />
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
                  <Doughnut className="h-300" data={state8} options={option7} />
                </div>
              </div>
            </div>
            {/* /Chart */}
          </div>
        </div>
      </div>
    </>
  );
};
export default C3Charts;
