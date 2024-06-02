import React from "react";

const DashboardWidget = () => {
  const data = [
    {
      icon: "fa fa-file-text",
      value: 110,
      label: "Offered",
    },
    {
      icon: "fa fa-clipboard",
      value: 40,
      label: "Applied",
    },
    {
      icon: "fa fa-retweet",
      value: 374,
      label: "Visited",
    },
    {
      icon: "fa fa-floppy-disk",
      value: 220,
      label: "Saved",
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

export default DashboardWidget;
