import React from "react";

const JobDashboardWidget = () => {
  const data = [
    {
      icon: "fa-solid fa-briefcase",
      value: 110,
      label: "Jobs",
    },
    {
      icon: "fa-solid fa-users",
      value: 40,
      label: "Job Seekers",
    },
    {
      icon: "fa-solid fa-user",
      value: 374,
      label: "Employees",
    },
    {
      icon: "fa-solid fa-paste",
      value: 220,
      label: "Applications",
    },
  ];

  return (
    <div className="row">
      {data.map((widget, index) => (
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3" key={index}>
          <div className="card dash-widget">
            <div className="card-body">
              <span className="dash-widget-icon">
                <i className={widget.icon} />
              </span>
              <div className="dash-widget-info">
                <h3>{widget.value}</h3>
                <span>{widget.label}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobDashboardWidget;
