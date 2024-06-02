import React from "react";

import { Bar, Line, Doughnut } from "react-chartjs-2";
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
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
  datasets: [
    {
      // label: "Series A",
      data: [12, 18, 15, 25, 30, 18, 12],
      backgroundColor: "#664dc9",
      borderColor: "#664dc9",
      fill: false,
    },
    {
      label: "Series B",
      data: [18, 22, 18, 28, 35, 28, 18],
      backgroundColor: "#44c4fa",
      borderColor: "#44c4fa",
      fill: false,
    },
  ],
};
const option1 = {
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
const state2 = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
  datasets: [
    {
      label: "Series A",
      data: [10, 25, 80, 38, 30, 18, 12],
      backgroundColor: "#9B95D1",
      borderColor: "#664dc9",
      fill: true,
    },
    {
      label: "Series B",
      data: [15, 35, 100, 48, 40, 28, 22],
      backgroundColor: "#A8DBF0",
      borderColor: "#44c4fa",
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
          max: 100,
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
const state3 = {
  labels: ["Sales", "Pending;", "Process"],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ["#664dc9", "#44c4fa", "#38cb89"],
    },
  ],
};
const option3 = {
  maintainAspectRatio: false,
  responsive: true,
  resize: true,
  animation: {
    animateScale: true,
    animateRotate: true,
  },
  legend: {
    display: false,
    labels: {
      display: true,
    },
  },
};
const MorrisCharts = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="content-page-header">
              <h3>Morris Chart</h3>
            </div>
          </div>

          <div className="row">
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Bar Chart</div>
                </div>
                <div className="card-body">
                  <Bar data={state1} options={option1} />
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Stacked Bar Chart </div>
                </div>
                <div className="card-body">
                  <Bar data={state1} options={option1} />
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
                  <div id="morrisLine1" />
                  <Line data={state1} options={option1} />
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
                  <Line data={state2} options={option2} />
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            {/* <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Line Chart</div>
            </div>
            <div className="card-body">
              <div id="morrisBar6" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Line Chart</div>
            </div>
            <div className="card-body">
              <div id="morrisBar7" />
            </div>
          </div>
        </div> */}
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Donut Chart</div>
                </div>
                <div className="card-body">
                  <Doughnut className="h-300" data={state3} options={option3} />
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
export default MorrisCharts;
