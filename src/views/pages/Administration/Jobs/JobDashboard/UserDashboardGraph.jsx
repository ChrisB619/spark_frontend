import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const UserDashboardGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    legend: {
      display: false,
    },
    datasets: [
      {
        label: "UI Developer",
        data: [20, 10, 5, 5, 20],
        lineTension: 0.2,
        fill: false,
        borderColor: "#373651",
        backgroundColor: "#373651",
        borderWidth: 1,
      },
      {
        label: "Android",
        data: [2, 2, 3, 4, 1],
        fill: false,
        lineTension: 0.2,
        legend: false,
        borderColor: "#E65A26",
        backgroundColor: "#E65A26",
        borderWidth: 1,
      },
      {
        label: "Web Designing",
        data: [1, 3, 6, 8, 10],
        fill: false,
        lineTension: 0.2,
        borderColor: "#a1a1a1",
        backgroundColor: "#a1a1a1",
        borderWidth: 1,
      },
    ],
  };

  const dataTable = [
    {
      position: "UI Developer",
      postedAgo: "1 Hours ago",
    },
    {
      position: "Android Developer",
      postedAgo: "1 Days ago",
    },
    {
      position: "IOS Developer",
      postedAgo: "2 Days ago",
    },
    {
      position: "PHP Developer",
      postedAgo: "3 Days ago",
    },
    {
      position: "UI Developer",
      postedAgo: "3 Days ago",
    },
  ];

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6 text-center d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <h3 className="card-title">Overview</h3>
                <Line data={data} />
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <h3 className="card-title text-center">Latest Jobs</h3>
                <ul className="list-group">
                  {dataTable.map((job, index) => (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action"
                    >
                      {job.position}{" "}
                      <span className="float-end text-sm text-muted">
                        {job.postedAgo}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardGraph;
