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
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  datasets: [
    {
      label: "Sales",
      data: [20, 30, 25, 22, 18, 27, 34, 35, 48, 30],
      backgroundColor: "#44C4FA",
    },
  ],
};
const option1 = {
  maintainAspectRatio: true,
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
          max: 50,
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
          max: 100,
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
  labels: ["2.5", "5.0", "7.5", "10.0", "12.5", "15.0", "17.5", "20.0"],
  datasets: [
    {
      label: "Sales",
      data: [80, 20, 24, 17, 10, 24, 30, 16],
      backgroundColor: "#44C4FA",
    },
    {
      label: "Sales",
      data: [30, 15, 45, 22, 18, 27, 34, 35, 48],
      backgroundColor: "#664DC9",
    },
  ],
};
const state3 = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Sales",
      data: [10, 15, 25, 22, 18, 27, 34],
      borderColor: "#664dc9",
      borderWidth: 1,
      fill: false,
    },
    {
      label: "Customer",
      data: [8, 17, 28, 20, 16, 24, 36],
      borderColor: "#44c4fa",
      borderWidth: 1,
      fill: false,
    },
  ],
};
const option3 = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    labels: {
      display: false,
    },
    points: false,
  },
  points: {
    show: false,
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
        ticks: {
          beginAtZero: true,
          fontSize: 11,
        },
      },
    ],
  },
};
const state4 = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Sales",
      data: [10, 15, 25, 22, 18, 27, 34],
      borderColor: "#664dc9",
      backgroundColor: "#D1C9EE",
      borderWidth: 1,
      fill: true,
    },
    {
      label: "Customer",
      data: [8, 17, 28, 20, 16, 24, 36],
      borderColor: "#44c4fa",
      backgroundColor: "#A1C5F1",
      borderWidth: 1,
      fill: true,
    },
  ],
};
const state5 = {
  labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
  datasets: [
    {
      data: [10, 50, 30, 30, 60],
      backgroundColor: ["#664dc9", "#44c4fa", "#38cb89", "#ef4b4b", "#ffab00"],
    },
  ],
};
const option5 = {
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

const FlotCharts = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h3>Flot Chart</h3>
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
                  <div className="h-250" id="flotBar1">
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
                  <div className="card-title">Bar Chart</div>
                </div>
                <div className="card-body">
                  <div className="h-250" id="flotBar2">
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
                  <div className="card-title">Line Chart</div>
                </div>
                <div className="card-body">
                  <div className="h-250">
                    <Line className="h-300" data={state3} options={option3} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Line ChartPOints</div>
                </div>
                <div className="card-body">
                  <div className="h-250" id="flotLine2">
                    <Line className="h-300" data={state3} options={option3} />
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
                  <div className="h-250" id="flotArea1">
                    <Line className="h-300" data={state4} options={option3} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Area Chart Points</div>
                </div>
                <div className="card-body">
                  <div className="h-250" id="flotArea2">
                    <Line className="h-300" data={state4} options={option3} />
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
                  <div className="h-250" id="flotPie1">
                    <Pie className="h-300" data={state5} options={option5} />
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
                  <div className="h-250" id="flotPie2">
                    <Doughnut
                      className="h-300"
                      data={state5}
                      options={option5}
                    />
                  </div>
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
export default FlotCharts;
