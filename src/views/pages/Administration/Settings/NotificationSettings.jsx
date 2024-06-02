import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const NotificationSettings = () => {
  const notificationData = [
    {
      id: "staff_module",
      label: "Employee",
      checked: false,
    },
    {
      id: "holidays_module",
      label: "Holidays",
      checked: true,
    },
    {
      id: "leave_module",
      label: "Leaves",
      checked: true,
    },
    {
      id: "events_module",
      label: "Events",
      checked: true,
    },
    {
      id: "chat_module",
      label: "Chat",
      checked: true,
    },
    {
      id: "job_module",
      label: "Jobs",
      checked: false,
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3 box-align">
              {/* Page Header */}
              <Breadcrumbs maintitle="Notifications Settings" />

              {/* /Page Header */}
              <div>
                <ul className="list-group notification-list">
                  {notificationData.map((item, index) => (
                    <li className="list-group-item" key={index}>
                      {item.label}
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id={item.id}
                          className="check"
                          defaultChecked={item.checked}
                        />
                        <label htmlFor={item.id} className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default NotificationSettings;
