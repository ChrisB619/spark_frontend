import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Link, useLocation } from "react-router-dom";

const SettingsSidebar = () => {
  const location = useLocation();
  return (
    <>
      {/* Sidebar */}

      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <nav className="greedy">
                <ul className="list-inline-item list-unstyled links">
                  <li>
                    <Link to="/admin-dashboard">
                      <i className="la la-home" /> <span>Back to Home</span>
                    </Link>
                  </li>
                  <li className="menu-title">Settings</li>
                  <li
                    className={
                      location.pathname === "/settings/company-settings"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/company-settings">
                      <i className="la la-building" />
                      <span>Company Settings</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/localization"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/localization">
                      <i className="la la-clock-o" /> <span>Localization</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/theme-settings"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/theme-settings">
                      <i className="la la-photo" /> <span>Theme Settings</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/roles-permissions"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/roles-permissions">
                      <i className="la la-key" />
                      <span>Roles &amp; Permissions</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/email-settings"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/email-settings">
                      <i className="la la-at" /> <span>Email Settings</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/performance-setting"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/performance-setting">
                      <i className="la la-chart-bar" />
                      <span>Performance Settings</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/approval-setting"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/approval-setting">
                      <i className="la la-thumbs-up" />
                      <span>Approval Settings</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/invoice-settings"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/invoice-settings">
                      <i className="la la-pencil-square" />
                      <span>Invoice Settings</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/salary-settings"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/salary-settings">
                      <i className="la la-money" /> <span>Salary Settings</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/notifications-settings"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/notifications-settings">
                      <i className="la la-globe" /> <span>Notifications</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/change-password" ? "active" : ""
                    }
                  >
                    <Link to="/change-password">
                      <i className="la la-lock" /> <span>Change Password</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/leave-type"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/leave-type">
                      <i className="la la-cogs" /> <span>Leave Type</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/toxbox-setting"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/toxbox-setting">
                      <i className="la la-comment" />{" "}
                      <span>ToxBox Settings</span>
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/settings/cron-setting"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/settings/cron-setting">
                      <i className="la la-rocket" /> <span>Cron Settings</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Scrollbars>
      </div>

      {/* Sidebar */}
    </>
  );
};

export default SettingsSidebar;
