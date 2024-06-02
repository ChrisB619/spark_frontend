import React from "react";

import { Line } from "peity-react";
import { Doughnut, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const state1 = {
  datasets: [
    {
      data: [1, 6],
      backgroundColor: ["#7638ff", "rgba(67, 87, 133, .09)"],
    },
  ],
};
const state2 = {
  datasets: [
    {
      data: [360, 226],
      backgroundColor: ["#7638ff", "rgba(67, 87, 133, .09)"],
    },
  ],
};
const state3 = {
  datasets: [
    {
      data: [0.5, 1.561],
      backgroundColor: ["#7638ff", "rgba(67, 87, 133, .09)"],
    },
  ],
};
const state4 = {
  datasets: [
    {
      data: [1, 4],
      backgroundColor: ["#7638ff", "rgba(67, 87, 133, .09)"],
    },
  ],
};
const state5 = {
  datasets: [
    {
      data: [226, 134],
      backgroundColor: ["#7638ff", "rgba(67, 87, 133, .09)"],
    },
  ],
};
const state6 = {
  datasets: [
    {
      data: [0.52, 1.041],
      backgroundColor: ["#7638ff", "rgba(67, 87, 133, .09)"],
    },
  ],
};
const option1 = {
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
const donut1 = {
  datasets: [
    {
      data: [1, 6],
      backgroundColor: ["#664dc9", "rgba(67, 87, 133, .09)"],
    },
  ],
  radius: 40,
};
const donut2 = {
  datasets: [
    {
      data: [2, 5],
      backgroundColor: ["#5b73e8", "rgba(67, 87, 133, .09)"],
    },
  ],
  radius: 36,
};
const donut3 = {
  datasets: [
    {
      data: [3, 4],
      backgroundColor: ["#38cb89", "rgba(67, 87, 133, .09)"],
    },
  ],
  radius: 32,
};
const donut4 = {
  datasets: [
    {
      data: [4, 3],
      backgroundColor: ["#ef4b4b", "rgba(67, 87, 133, .09)"],
    },
  ],
  radius: 28,
};
const donut5 = {
  datasets: [
    {
      data: [5, 2],
      backgroundColor: ["#ffab00", "rgba(67, 87, 133, .09)"],
    },
  ],
  radius: 24,
};
const donut6 = {
  datasets: [
    {
      data: [6, 1],
      backgroundColor: ["#3e80eb", "rgba(67, 87, 133, .09)"],
    },
  ],
  radius: 20,
};
const donutopt1 = {
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
const donutopt2 = {
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
const donutopt3 = {
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
const donutopt4 = {
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
const donutopt5 = {
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
const donutopt6 = {
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
const PeityCharts = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h3>Peity Chart</h3>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Chart */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Donut Chart</div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Doughnut
                          className="doughnut-peity"
                          data={state1}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Doughnut
                          className="doughnut-peity"
                          data={state2}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Doughnut
                          className="doughnut-peity"
                          data={state3}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Doughnut
                          className="doughnut-peity"
                          data={state4}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Doughnut
                          className="doughnut-peity"
                          data={state5}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Doughnut
                          className="doughnut-peity"
                          data={state6}
                          options={option1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Pie Chart</div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Pie
                          className="doughnut-peity"
                          data={state1}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Pie
                          className="doughnut-peity"
                          data={state2}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Pie
                          className="doughnut-peity"
                          data={state3}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Pie
                          className="doughnut-peity"
                          data={state4}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Pie
                          className="doughnut-peity"
                          data={state5}
                          options={option1}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <Pie
                          className="doughnut-peity"
                          data={state6}
                          options={option1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            {/* Chart */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Line Charts</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card-body ">
                        <span className="peity-line" data-width="100%">
                          <Line
                            values={[
                              6, 2, 8, 4, 3, 8, 1, 3, 6, 5, 9, 2, 8, 1, 4, 8, 9,
                              8, 2, 1,
                            ]}
                            height="65"
                            width="283"
                            fill="#705EC8"
                            stroke="#705EC8"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card-body ">
                        <span className="peity-line" data-width="100%">
                          <Line
                            values={[
                              6, 2, 8, 4, -3, 8, 1, -3, 6, -5, 9, 2, -8, 1, 4,
                              8, 9, 8, 2, 1,
                            ]}
                            height="65"
                            width="283"
                            fill="#705EC8"
                            stroke="#705EC8"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card-body ">
                        <span className="peity-line" data-width="100%">
                          <Line
                            values={[
                              6, 2, 8, 4, 3, 8, 1, 3, 6, 5, 9, 2, 8, 1, 4, 8, 9,
                              8, 2, 1,
                            ]}
                            height="65"
                            width="283"
                            fill="#705EC8"
                            stroke="#705EC8"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
            <div className="col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Data attributes</h3>
                </div>
                <div className="text-center">
                  <div className="row">
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <p className="data-attributes">
                          <Doughnut
                            className="doughnut-peity"
                            data={donut1}
                            options={donutopt1}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <p className="data-attributes">
                          <Doughnut
                            className="doughnut-peity"
                            data={donut2}
                            options={donutopt2}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <p className="data-attributes">
                          <Doughnut
                            className="doughnut-peity"
                            data={donut3}
                            options={donutopt3}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <p className="data-attributes">
                          <Doughnut
                            className="doughnut-peity"
                            data={donut4}
                            options={donutopt4}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <p className="data-attributes">
                          <Doughnut
                            className="doughnut-peity"
                            data={donut5}
                            options={donutopt5}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                      <div className="card-body ">
                        <p className="data-attributes">
                          <Doughnut
                            className="doughnut-peity"
                            data={donut6}
                            options={donutopt6}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PeityCharts;
