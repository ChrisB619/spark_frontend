import axios from "axios";
import React, { useEffect, useState } from "react";


const Reports = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/dashreports.json")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card-group m-b-30">
            {Array.isArray(users) && users.length > 0 ? (
              users.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <span className="d-block">{item.title}</span>
                      </div>
                      <div>
                        <span
                          className={`text-${
                            item.changePercentage.includes("+")
                              ? "success"
                              : "danger"
                          }`}
                        >
                          {item.changePercentage}
                        </span>
                      </div>
                    </div>
                    <h3 className="mb-3">{item.value}</h3>
                    <div className="progress mb-2" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mb-0">
                      {item.changeDescription}
                      <span className="text-muted"> {item.previousValue}</span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
