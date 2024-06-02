/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./sidebardata";
import * as Icon from 'react-feather';


const Sidebar = () => {
  const location = useLocation();
  // const pathname = location.pathname.split("/")[1];
  const pathname = location.pathname;
  // console.log("pageurl", pathname);

  const [sidebarData, setSidebarData] = useState(SidebarData); 
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [isMouseOverSidebar, setMouseOverSidebar] = useState(false);
  const [submenuDrop ,setSubmenudrop,] = useState(false);

  const [isSideMenu, setSideMenu] = useState("");
  const [level2Menu, setLevel2Menu] = useState("");
  const [level3Menu, setLevel3Menu] = useState("");
  const [isSideMenunew, setSideMenuNew] = useState("dashboard");

  

  useEffect(() => {
    if (
      isMouseOverSidebar &&
      document.body.classList.contains("mini-sidebar")
    ) {
      document.body.classList.add("expand-menu");
      return;
    }
    document.body.classList.remove("expand-menu");
  }, [isMouseOverSidebar]);


  

  const handleMouseEnter = () => {
    setMouseOverSidebar(true);
  };

  const handleMouseLeave = () => {
    setMouseOverSidebar(false);
  };
  const { t } = useTranslation();


  const expandSubMenus = (menu) => {
    sessionStorage.setItem('menuValue', menu.menuValue);
    const updatedAdminSidebar = sidebarData.map((section) => {
      const updatedSection = { ...section };
      updatedSection.menu = section.menu.map((menuItem) =>
        menu.menuValue != menuItem.menuValue
          ? {
              ...menuItem,
              showSubRoute: false,
            }
          : {
              ...menuItem,
              showSubRoute: !menu.showSubRoute,
            },
      );
      return updatedSection;
    });
    setSidebarData(updatedAdminSidebar);
  };

  const activeRouterPath = (routesArray) => {
    return (routesArray = Location.pathname);

  };


  const activeRouterMenu = (menu) => {
    return Location.pathname.includes(menu.toLowerCase());
  };
  
  const arrowDrop=()=>{
    setSubmenudrop(!submenuDrop);
  }


  const toggleSidebar = (value) => {
    setSideMenu(value);
    setSideMenuNew(value);
  };

  const toggleLvelTwo = (value) => {
    setLevel2Menu(value);
  };
  const toggleLevelThree = (value) => {
    setLevel3Menu(value);
  };


  const MenuMore = () => {
    document.getElementById("more-menu-hidden").classList.toggle("hidden");
  };
  return (
    <div
      className={`sidebar ${isSidebarExpanded ? "" : "hidden"}`}
      id="sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-inner slimscroll" style={{ overflow: false }}>
        <div id="sidebar-menu" className="sidebar-menu">  
        <nav className="greedys sidebar-horizantal" id="horizantal-sidebar">

        <ul className="list-inline-item list-unstyled links">
              <li className="menu-title">
                <span> {t("main")}</span>
              </li>

              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "dashboard" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "dashboard" ? "" : "dashboard")
                  }
                >
                  <i className="la la-dashcube" />
                  <span> {t("dashboard")}</span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "dashboard" ? (
                  <ul
                    style={{
                      display: isSideMenu == "dashboard" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          pathname.includes("admin-dashboard") ? "active" : ""
                        }
                        to="/admin-dashboard"
                      >
                        {t("AdminDashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("employee-dashboard")
                            ? "active"
                            : ""
                        }
                        to="/employee-dashboard"
                      >
                        {t("EmployeeDashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("deals-dashboard")
                            ? "active"
                            : ""
                        }
                        to="/deals-dashboard"
                      >
                        {t("Deals Dashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leads-dashboard")
                            ? "active"
                            : ""
                        }
                        to="/leads-dashboard"
                      >
                        {t("Leads Dashboard")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "apps" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "apps" ? "" : "apps")
                  }
                >
                  <i className="la la-cube" /> <span> {t("Apps")}</span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "apps" ? (
                  <ul>
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/call/chat"
                      >
                        {t("Chat")}
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={level2Menu == "calls" ? "subdrop" : ""}
                        onClick={() =>
                          toggleLvelTwo(level2Menu == "calls" ? "" : "calls")
                        }
                      >
                        <span> {t("Calls")}</span>{" "}
                        <span className="menu-arrow" />
                      </Link>
                      {level2Menu == "calls" ? (
                        <ul>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/call/voice-call"
                            >
                              {t("VideoCall")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/call/video-call"
                            >
                              {t("VideoCall")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/call/outgoing-call"
                            >
                              {t("OutgoingCall")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/call/incoming-call"
                            >
                              {t("IncomingCall")}
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("events") ? "active" : ""}
                        to="/events"
                      >
                        {t("Calendar")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        className={
                          pathname.includes("contacts") ? "active" : ""
                        }
                        to="/contacts"
                      >
                        {t("Contacts")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/email/inbox">{t("Email")}</Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("file-manager") ? "active" : ""
                        }
                        to="/file-manager"
                      >
                        {t("FileManager")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="menu-title">
                <span>{t("employees")}</span>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "employee" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "employee" ? "" : "employee")
                  }
                >
                  <i className="la la-user" />
                  <span className="noti-dot"> {t("Employee")}</span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "employee" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("employees")
                            ? "active"
                            : pathname.includes("employees-list")
                            ? "active"
                            : ""
                        }
                        to="/employees"
                      >
                        {t("All Employee")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("holidays") ? "active" : ""
                        }
                        to="/holidays"
                      >
                        {t("Holidays")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("adminleaves") ? "active" : ""
                        }
                        to="/adminleaves"
                      >
                        {t("Leaves (Admin)")}
                        <span className="badge rounded-pill bg-primary float-end">
                          1
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leaves-employee") ? "active" : ""
                        }
                        to="/leaves-employee"
                      >
                        {t("Leaves (Employee)")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leave-settings") ? "active" : ""
                        }
                        to="/leave-settings"
                      >
                        {t("Leave Setting")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("adminattendance") ? "active" : ""
                        }
                        to="/adminattendance"
                      >
                        {t("Attendance (Admin)")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("attendance-employee")
                            ? "active"
                            : ""
                        }
                        to="/attendance-employee"
                      >
                        {t("Attendance (Employee)")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("departments") ? "active" : ""
                        }
                        to="/departments"
                      >
                        {t("Department")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("designations") ? "active" : ""
                        }
                        to="/designations"
                      >
                        {t("Designation")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("timesheet") ? "active" : ""
                        }
                        to="/timesheet"
                      >
                        {t("Timesheet")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("shift-scheduling") ||
                          pathname.includes("shift-list")
                            ? "active"
                            : ""
                        }
                        to="/shift-scheduling"
                      >
                        {t("Shift & Schedule")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("overtime") ? "active" : ""
                        }
                        to="/overtime"
                      >
                        {t("Overtime")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className={pathname.includes("clients") ? "active" : ""}>
                <Link to="/clients">
                  <i className="la la-users" /> <span>{t("Clients")}</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "projects" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "projects" ? "" : "projects")
                  }
                >
                  <i className="la la-rocket" /> <span> {t("Projects")}</span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "projects" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("projects")
                            ? "active"
                            : pathname.includes("project-list")
                            ? "active"
                            : pathname.includes("project-view")
                            ? "active"
                            : ""
                        }
                        to="/projects"
                      >
                        {t("Projects")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/task/tasks"
                      >
                        {t("Task")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("task-board") ? "active" : ""
                        }
                        to="/task-board"
                      >
                        {t("Task Board")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "Crm" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Crm" ? "" : "Crm")
                  }
                >
                  <i className="la la-ticket" /> <span> {t("Crm")}</span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "Crm" ? (
                  <ul>
                    <li>
                      <Link
                        // className={
                        //   pathname.includes("projects")
                        //     ? "active"
                        //     : pathname.includes("project-list")
                        //     ? "active"
                        //     : pathname.includes("project-view")
                        //     ? "active"
                        //     : ""
                        // }
                        to="/contact-list"
                      >
                        {t("Contacts")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/companies"
                      >
                        {t("Companies")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("deals") ? "active" : ""
                        }
                        to="/deals"
                      >
                        {t("Deals")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leads") ? "active" : ""
                        }
                        to="/leads"
                      >
                        {t("Leads")}
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          pathname.includes("pipeline") ? "active" : ""
                        }
                        to="/pipeline"
                      >
                        {t("Pipeline")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("analytics") ? "active" : ""
                        }
                        to="/analytics"
                      >
                        {t("Analytics")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
             
              <li
                className={
                  pathname.includes("tickets")
                    ? "active"
                    : pathname.includes("ticket-view")
                    ? "active"
                    : ""
                }
              >
                <Link to="/tickets">
                  <i className="la la-ticket" /> <span>{t("Tickets")}</span>
                </Link>
              </li>
              <li className="menu-title">
                <span>{t("hr")}</span>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "sales" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "sales" ? "" : "sales")
                  }
                >
                  <i className="la la-files-o" /> <span> {t("Sales")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "sales" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("estimates") ? "active" : ""
                        }
                        to="/estimates"
                      >
                        {t("Estimates")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("invoices") ? "active" : ""
                        }
                        to="/invoices"
                      >
                        {t("Invoices")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payments") ? "active" : ""
                        }
                        to="/payments"
                      >
                        {t("Payments")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("expenses") ? "active" : ""
                        }
                        to="/expenses"
                      >
                        {t("Expenses")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("provident-fund") ? "active" : ""
                        }
                        to="/provident-fund"
                      >
                        {t("Provident Fund")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("taxes") ? "active" : ""}
                        to="/taxes"
                      >
                        {t("Taxes")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
            </ul>
            <button
              className="viewmoremenu"
              id="more-menu"
              onClick={() => MenuMore()}
            >
              More Menu
            </button>
            <ul className="hidden-links hidden" id="more-menu-hidden">
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "accounting" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "accounting" ? "" : "accounting"
                    )
                  }
                >
                  <i className="la la-files-o" />{" "}
                  <span> {t("Accounting")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "accounting" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("categories") ||
                          pathname.includes("sub-category")
                            ? "active"
                            : ""
                        }
                        to="/categories"
                      >
                        {t("Categories")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("budgets") ? "active" : ""}
                        to="/budgets"
                      >
                        {t("Budgets")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("budget-expenses") ? "active" : ""
                        }
                        to="/budget-expenses"
                      >
                        {t("Budgets Expenses")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("budget-revenues") ? "active" : ""
                        }
                        to="/budget-revenues"
                      >
                        {t("Budgets Revenues")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "payroll" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "payroll" ? "" : "payroll")
                  }
                >
                  <i className="la la-money" />
                  <span> {t("Payroll")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "payroll" ? (
                  <ul>
                    <li>
                      <Link
                        className={pathname.includes("salary") ? "active" : ""}
                        to="/salary"
                      >
                        {t("Employee Salary")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("salary-view") ? "active" : ""
                        }
                        to="/salary-view"
                      >
                        {t("Payslip")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payroll-items") ? "active" : ""
                        }
                        to="/payroll-items"
                      >
                        {t("Payroll Items")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className={pathname.includes("policies") ? "active" : ""}>
                <Link to="/policies">
                  <i className="la la-file-pdf-o" />{" "}
                  <span>{t("Policies")}</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "reports" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "reports" ? "" : "reports")
                  }
                >
                  <i className="la la-pie-chart" />{" "}
                  <span> {t("Reports")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "reports" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("expense-reports") ? "active" : ""
                        }
                        to="/expense-reports"
                      >
                        {t("Expense Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("invoice-reports") ? "active" : ""
                        }
                        to="/invoice-reports"
                      >
                        {t("Invoice Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payments-reports") ? "active" : ""
                        }
                        to="/payments-reports"
                      >
                        {t("Payment Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payments-reports") ? "active" : ""
                        }
                        to="/payments-reports"
                      >
                        {t("Project Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("task-reports") ? "active" : ""
                        }
                        to="/task-reports"
                      >
                        {t("Task Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("user-reports") ? "active" : ""
                        }
                        to="/user-reports"
                      >
                        {t("User Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("employee-reports") ? "active" : ""
                        }
                        to="/employee-reports"
                      >
                        {t("Employee Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payslip-reports") ? "active" : ""
                        }
                        to="/payslip-reports"
                      >
                        {t("Payslip Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("attendance-reports")
                            ? "active"
                            : ""
                        }
                        to="/attendance-reports"
                      >
                        {t("Attendence Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leave-reports") ? "active" : ""
                        }
                        to="/leave-reports"
                      >
                        {t("Leave Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("daily-reports") ? "active" : ""
                        }
                        to="/daily-reports"
                      >
                        {t("Daily Report")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="menu-title">
                <span> {t("Performance")}</span>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "performance" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "performance" ? "" : "performance"
                    )
                  }
                >
                  <i className="la la-graduation-cap" />
                  <span> {t("Performance")}</span>{" "}
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "performance" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("performance-indicator")
                            ? "active"
                            : ""
                        }
                        to="/performance-indicator"
                      >
                        {t("Performance Indicator")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("performance") ? "active" : ""
                        }
                        to="/performance"
                      >
                        {t("Performance Review")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("performance-appraisal")
                            ? "active"
                            : ""
                        }
                        to="/performance-appraisal"
                      >
                        {t("Performance Appraisal")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "goals" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "goals" ? "" : "goals")
                  }
                >
                  <i className="la la-crosshairs" /> <span> {t("Goals")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "goals" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("goal-tracking") ? "active" : ""
                        }
                        to="/goal-tracking"
                      >
                        {t("Goal List")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("goal-type") ? "active" : ""
                        }
                        to="/goal-type"
                      >
                        {t("Goal Type")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "training" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "training" ? "" : "training")
                  }
                >
                  <i className="la la-edit" /> <span> {t("Training")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "training" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("training") ||
                          pathname.includes("training-list")
                            ? "active"
                            : ""
                        }
                        to="/training"
                      >
                        {t("Training")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("trainers") ? "active" : ""
                        }
                        to="/trainers"
                      >
                        {t("Trainers")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("training-type") ? "active" : ""
                        }
                        to="/training-type"
                      >
                        {t("Training Type")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className={pathname.includes("promotion") ? "active" : ""}>
                <Link to="/promotion">
                  <i className="la la-bullhorn" /> <span>{t("Promotion")}</span>
                </Link>
              </li>
              <li className={pathname.includes("resignation") ? "active" : ""}>
                <Link to="/resignation">
                  <i className="la la-external-link-square" />
                  <span>{t("Resignation")}</span>
                </Link>
              </li>
              <li className={pathname.includes("termination") ? "active" : ""}>
                <Link to="/termination">
                  <i className="la la-times-circle" />
                  <span>{t("Termination")}</span>
                </Link>
              </li>
              <li className="menu-title">
                <span>{t("administration")}</span>
              </li>
              <li className={pathname.includes("assets") ? "active" : ""}>
                <Link to="/assets">
                  <i className="la la-object-ungroup" />{" "}
                  <span>{t("Assets")}</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "jobs" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "jobs" ? "" : "jobs")
                  }
                >
                  <i className="la la-briefcase" /> <span> {t("Jobs")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "jobs" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("user-dashboard") ||
                          pathname.includes("user-all-jobs") ||
                          pathname.includes("saved-jobs") ||
                          pathname.includes("applied-jobs") ||
                          pathname.includes("interviewing") ||
                          pathname.includes("offered-jobs") ||
                          pathname.includes("visited-jobs") ||
                          pathname.includes("archived-jobs") ||
                          pathname.includes("job-aptitude") ||
                          pathname.includes("questions")
                            ? "active"
                            : ""
                        }
                        to="/user-dashboard"
                      >
                        {t("User Dashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("jobs-dashboard") ? "active" : ""
                        }
                        to="/jobs-dashboard"
                      >
                        {t("Jobs Dashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname === "/jobs" ? "active" : ""}
                        to="/jobs"
                      >
                        {t("Manage Jobs")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("manage-resumes") ? "active" : ""
                        }
                        to="/manage-resumes"
                      >
                        {t("Manage Resume")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("shortlist-candidates")
                            ? "active"
                            : ""
                        }
                        to="/shortlist-candidates"
                      >
                        {t("Shortlisted Candidate")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname === "/interview-questions" ? "active" : ""
                        }
                        to="/interview-questions"
                      >
                        {t("Interview Question")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("offer_approvals") ? "active" : ""
                        }
                        to="/offer_approvals"
                      >
                        {t("Offer Approvals")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("experiance-level") ? "active" : ""
                        }
                        to="/experiance-level"
                      >
                        {t("Experience Level")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname === "/candidates" ? "active" : ""}
                        to="/candidates"
                      >
                        {t("Candidate List")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("schedule-timing") ? "active" : ""
                        }
                        to="/schedule-timing"
                      >
                        {t("Schedule Timing")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("apptitude-result") ? "active" : ""
                        }
                        to="/apptitude-result"
                      >
                        {t("Aptitude Results")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li
                className={pathname.includes("knowledgebase") ? "active" : ""}
              >
                <Link to="/knowledgebase">
                  <i className="la la-question" />{" "}
                  <span>{t("Knowledgebase")}</span>
                </Link>
              </li>
              <li className={pathname.includes("activities") ? "active" : ""}>
                <Link to="/activities">
                  <i className="la la-bell" /> <span>{t("Activities")}</span>
                </Link>
              </li>
              <li className={pathname.includes("users") ? "active" : ""}>
                <Link to="/users">
                  <i className="la la-user-plus" /> <span>{t("User")}</span>
                </Link>
              </li>
              <li>
                <Link to="/settings/company-settings">
                  <i className="la la-cog" /> <span>{t("Settings")}</span>
                </Link>
              </li>
              <li className="menu-title">
                <span>{t("pages")}</span>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "profile" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "profile" ? "" : "profile")
                  }
                >
                  <i className="la la-user" /> <span> {t("Profile")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "profile" ? (
                  <ul>
                    <li>
                      <Link
                        className={pathname.includes("profile") ? "active" : ""}
                        to="/profile"
                      >
                        {t("Employee Profile")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("client-profile") ? "active" : ""
                        }
                        to="/client-profile"
                      >
                        {t("Client Profile")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "authentication" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "authentication" ? "" : "authentication"
                    )
                  }
                >
                  <i className="la la-key" />{" "}
                  <span> {t("Authentication")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "authentication" ? (
                  <ul>
                    <li>
                      <Link to="/"> {t("Login")}</Link>
                    </li>
                    <li>
                      <Link to="/register">{t("Register")} </Link>
                    </li>
                    <li>
                      <Link to="/forgot-password">
                        {" "}
                        {t("Forgot Password")}{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/otp">{t("OTP")}</Link>
                    </li>
                    <li>
                      <Link to="/lock-screen"> {t("Lock Screen")}</Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "error pages" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "error pages" ? "" : "error pages"
                    )
                  }
                >
                  <i className="la la-exclamation-triangle" />
                  <span> Error Pages </span> <span className="menu-arrow" />
                </Link>
                {isSideMenu == "error pages" ? (
                  <ul>
                    <li>
                      <Link to="/error-404">{t("404 Error")} </Link>
                    </li>
                    <li>
                      <Link to="/error-500">{t("500 Error")} </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "subscriptions" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "subscriptions" ? "" : "subscriptions"
                    )
                  }
                >
                  <i className="la la-hand-o-up" />
                  <span> {t("Subscriptions")} </span>{" "}
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "subscriptions" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("subscriptions") ? "active" : ""
                        }
                        to="/subscriptions"
                      >
                        {t("Subscriptions (Admin)")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("subscriptions-company")
                            ? "active"
                            : ""
                        }
                        to="/subscriptions-company"
                      >
                        {t("Subscriptions (Company")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("subscribed-companies")
                            ? "active"
                            : ""
                        }
                        to="/subscribed-companies"
                      >
                        {t("Subscribed Companies")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "pages" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "pages" ? "" : "pages")
                  }
                >
                  <i className="la la-columns" /> <span>{t("Pages")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "pages" ? (
                  <ul>
                    <li>
                      <Link
                        className={pathname.includes("search") ? "active" : ""}
                        to="/search"
                      >
                        {t("Search")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("faq") ? "active" : ""}
                        to="/faq"
                      >
                        {t("FAQ")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("terms") ? "active" : ""}
                        to="/terms"
                      >
                        {t("Terms")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("privacy-policy") ? "active" : ""
                        }
                        to="/privacy-policy"
                      >
                        {t("Privacy Policy")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("blank-page") ? "active" : ""
                        }
                        to="/blank-page"
                      >
                        {t("Blank Page")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="menu-title">
                <span>{t("uiInterface")}</span>
              </li>
              <li>
                <Link to="/ui/components">
                  <i className="la la-puzzle-piece" />{" "}
                  <span> {t("Components")}</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "forms" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "forms" ? "" : "forms")
                  }
                >
                  <i className="la la-object-group" />{" "}
                  <span> {t("Forms")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "forms" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-basic-inputs") ? "active" : ""
                        }
                        to="/form-basic-inputs"
                      >
                        {t("Basic Inputs")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-input-groups") ? "active" : ""
                        }
                        to="/form-input-groups"
                      >
                        {t("Input Group")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-horizontal") ? "active" : ""
                        }
                        to="/form-horizontal"
                      >
                        {t("Horizontal Form")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-vertical") ? "active" : ""
                        }
                        to="/form-vertical"
                      >
                        {t("Vertical Form")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-mask") ? "active" : ""
                        }
                        to="/form-mask"
                      >
                        {t("Form Mask")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-validation") ? "active" : ""
                        }
                        to="/form-validation"
                      >
                        {t("Form Validation")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-select2") ? "active" : ""
                        }
                        to="/form-select2"
                      >
                        {t("Form Select2")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("file-upload") ? "active" : ""
                        }
                        to="/file-upload"
                      >
                        {t("Form Upload")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "tables" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "tables" ? "" : "tables")
                  }
                >
                  <i className="la la-table" /> <span> {t("Tables")} </span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "tables" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("tables-basic") ? "active" : ""
                        }
                        to="/tables-basic"
                      >
                        {t("Basic Tables")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("data-tables") ? "active" : ""
                        }
                        to="/data-tables"
                      >
                        {t("Data Table")}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="menu-title">
                <span>{t("extras")}</span>
              </li>
              <li>
                <Link to="#">
                  <i className="la la-file-text" />{" "}
                  <span> {t("Documentation")}</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="la la-info" /> <span>{t("Change Log")}</span>
                  <span className="badge badge-primary ms-auto">v3.4</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "multi Level" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "multi Level" ? "" : "multi Level"
                    )
                  }
                >
                  <i className="la la-share-alt" />{" "}
                  <span>{t("Multi Level")}</span>
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "multi Level" ? (
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={level2Menu == "level 1" ? "subdrop" : ""}
                        onClick={() =>
                          toggleLvelTwo(
                            level2Menu == "level 1" ? "" : "level 1"
                          )
                        }
                      >
                        <span>{t("Level 1")}</span>{" "}
                        <span className="menu-arrow" />
                      </Link>
                      {level2Menu == "level 1" ? (
                        <ul>
                          <li>
                            <Link to="#">
                              <span>{t("Level 2")}</span>
                            </Link>
                          </li>
                          <li className="submenu">
                            <Link
                              to="#"
                              className={
                                level3Menu == "level 2" ? "subdrop" : ""
                              }
                              onClick={() =>
                                toggleLevelThree(
                                  level3Menu == "level 2" ? "" : "level 2"
                                )
                              }
                            >
                              <span>{t("Level 2")}</span>
                              <span className="menu-arrow" />
                            </Link>
                            {level3Menu == "level 2" ? (
                              <ul>
                                <li>
                                  <Link to="#">Level 3</Link>
                                </li>
                                <li>
                                  <Link to="#">Level 3</Link>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <Link to="#">
                              <span>{t("Level 2")}</span>
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link to="#">
                        <span>{t("Level 1")}</span>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </nav>     
          <Scrollbars
            autoHide={false}
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight
            autoHeightMin={0}
            autoHeightMax="100vh"
            thumbMinSize={30}
            universal={false}
            hideTracksWhenNotNeeded={true}
          >
         <ul className="sidebar-vertical" id="veritical-sidebar"> 
         
              {sidebarData.map((mainTittle, index) => {
                return (
                  <>
                    <li className="menu-title" key={index + 1}>

                      <span>{t(mainTittle.tittle)}</span>
                      {mainTittle?.tittle === "CRM" ? (
                        <small class="newly-added-features">New</small>):("")
                      }
                    </li>
                    {mainTittle.menu.map(
                      (menu, menuIndex) => {
                        return (
                          <>
                            {menu.hasSubRoute === false ? (
                              <li key={menuIndex + 1}  className={pathname == menu.route ? "active" : ""}>
                                <Link
                                  to={menu.route}
                                 
                                >
                                  {/* {menu.icon} */}
                                  <i className={menu?.icon}/>
                                   <span>{t(menu.menuValue)}</span>
                                </Link>
                              </li>
                            ) : (
                              <li className="submenu">
                                <Link
                                  to="#"
                                  onClick={() => expandSubMenus(menu)}
                                  
                                  className={
                                    menu.showSubRoute  ? 'subdrop' : ''
                                  } 
                                >
                                 
                                  <i className={menu?.icon}/>
                                  <span className={menu?.menuValue == "Employees" ? "noti-dot" : ""}>{t(menu.menuValue)}</span>
                                  <span className="menu-arrow">
                                  
                                  </span>
                                </Link>
                                <ul
                                  style={{
                                    display: menu.showSubRoute
                                      ? 'block'
                                      : 'none',
                                  }}
                                >
                                  {menu.subMenus.map(
                                    (
                                      subMenus,
                                      subMenu,
                                    ) => {
                                      return (
                                        <>
                                      
                                      {/* {console.log(subMenus?.showMenuRoute)} */}
                                      {subMenus?.showMenuRoute === true ? (
                                          <li key={subMenu + 1}>
                                            <Link
                                              to={subMenus.route}
                                            

                                              className={submenuDrop ? "subdrop":""}
                                              onClick={arrowDrop}
                                              
                                            >
                                              {t(subMenus.menuValue)}
                                              <span className="menu-arrow" ></span>
                                            </Link>

                                            <ul style={{display: submenuDrop ? "block":"none"}}>
                                              {subMenus?.subMenusValues?.map((value,index)=>{
                                                return(
                                            <li key={index}>
                                              <span>
                                            <Link to={value.route}><span>{t(value.menuValue)} </span></Link>
                                            </span>
                                            </li>)})
                                      }
                                      </ul>
                                               </li>) :(
                                                                                      
                                              <li key={subMenu + 1}>
                                              <Link
                                                to={subMenus.route}
                                                
                                                className={pathname== subMenus?.route ? "active" : ""}
                                              >
                                                {t(subMenus.menuValue)}
                                              </Link>
                                              
                                              <ul>
                                              {subMenus?.subMenusValues?.map((value,index)=>{
                                                return(
                                            <li key={index}>

                                            <Link to={value.route} className={pathname== value?.route ? "active" : ""}
                                                >{t(value.menuValue)}</Link>
                                            </li>)})
                                            }
                                            </ul>
                                            </li>
                                          )

                                    }

                                          
                                        </>
                                      );
                                    },
                                  )}
                                </ul>
                              </li>
                            )}
                          </>
                        );
                      },
                    )}
                  </>
                );
              })}
            </ul>

          </Scrollbars>
        </div>
      </div>

    

      <div className="two-col-bar" id="two-col-bar">
        <div className="sidebar sidebar-twocol">
          <div className="sidebar-left slimscroll">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <Link
                className="nav-link"
                id="v-pills-dashboard-tab"
                title="Dashboard"
                data-bs-toggle="pill"
                to="#v-pills-dashboard"
                role="tab"
                aria-controls="v-pills-dashboard"
                aria-selected="true"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    setSideMenuNew(
                      isSideMenunew == "dashboard" ? "dashboard" : "dashboard"
                    )
                  }
                >
                  home
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-apps-tab"
                title="Apps"
                data-bs-toggle="pill"
                to="#v-pills-apps"
                role="tab"
                aria-controls="v-pills-apps"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "apps" ? "apps" : "apps")
                  }
                >
                  dashboard
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-employees-tab"
                title="Employees"
                data-bs-toggle="pill"
                to="#v-pills-employees"
                role="tab"
                aria-controls="v-pills-employees"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "employee" ? "employee" : "employee"
                    )
                  }
                >
                  people
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-clients-tab"
                title="Clients"
                data-bs-toggle="pill"
                to="#v-pills-clients"
                role="tab"
                aria-controls="v-pills-clients"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "clients" ? "clients" : "clients"
                    )
                  }
                >
                  person
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-projects-tab"
                title="Projects"
                data-bs-toggle="pill"
                to="#v-pills-projects"
                role="tab"
                aria-controls="v-pills-projects"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "projects" ? "projects" : "projects"
                    )
                  }
                >
                  topic
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-leads-tab"
                title="Leads"
                data-bs-toggle="pill"
                to="#v-pills-leads"
                role="tab"
                aria-controls="v-pills-leads"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "leads" ? "leads" : "leads")
                  }
                >
                  leaderboard
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-tickets-tab"
                title="Tickets"
                data-bs-toggle="pill"
                to="#v-pills-tickets"
                role="tab"
                aria-controls="v-pills-tickets"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "tickets" ? "tickets" : "tickets"
                    )
                  }
                >
                  confirmation_number
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-sales-tab"
                title="Sales"
                data-bs-toggle="pill"
                to="#v-pills-sales"
                role="tab"
                aria-controls="v-pills-sales"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "sales" ? "sales" : "sales")
                  }
                >
                  shopping_bag
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-accounting-tab"
                title="Accounting"
                data-bs-toggle="pill"
                to="#v-pills-accounting"
                role="tab"
                aria-controls="v-pills-accounting"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "accounting" ? "accounting" : "accounting"
                    )
                  }
                >
                  account_balance_wallet
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-payroll-tab"
                title="Payroll"
                data-bs-toggle="pill"
                to="#v-pills-payroll"
                role="tab"
                aria-controls="v-pills-payroll"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "payroll" ? "payroll" : "payroll"
                    )
                  }
                >
                  request_quote
                </span>
              </Link>
              {/* <Link class="nav-link" id="v-pills-policies-tab" title="Policies" data-bs-toggle="pill" to="#v-pills-policies" role="tab" aria-controls="v-pills-policies" aria-selected="false">
              <span class="material-icons-outlined">
                request_quote
              </span>
            </Link> */}
              <Link
                className="nav-link"
                id="v-pills-policies-tab"
                title="Policies"
                data-bs-toggle="pill"
                to="#v-pills-policies"
                role="tab"
                aria-controls="v-pills-policies"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "policies" ? "policies" : "policies"
                    )
                  }
                >
                  verified_user
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-reports-tab"
                title="Reports"
                data-bs-toggle="pill"
                to="#v-pills-reports"
                role="tab"
                aria-controls="v-pills-reports"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "reports" ? "reports" : "reports"
                    )
                  }
                >
                  report_gmailerrorred
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-performance-tab"
                title="Performance"
                data-bs-toggle="pill"
                to="#v-pills-performance"
                role="tab"
                aria-controls="v-pills-performance"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "performance"
                        ? "performance"
                        : "performance"
                    )
                  }
                >
                  shutter_speed
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-goals-tab"
                title="Goals"
                data-bs-toggle="pill"
                to="#v-pills-goals"
                role="tab"
                aria-controls="v-pills-goals"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "goals" ? "goals" : "goals")
                  }
                >
                  track_changes
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-training-tab"
                title="Training"
                data-bs-toggle="pill"
                to="#v-pills-training"
                role="tab"
                aria-controls="v-pills-training"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "training" ? "training" : "training"
                    )
                  }
                >
                  checklist_rtl
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-promotion-tab"
                title="Promotions"
                data-bs-toggle="pill"
                to="#v-pills-promotion"
                role="tab"
                aria-controls="v-pills-promotion"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "promotion" ? "promotion" : "promotion"
                    )
                  }
                >
                  auto_graph
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-resignation-tab"
                title="Resignation"
                data-bs-toggle="pill"
                to="#v-pills-resignation"
                role="tab"
                aria-controls="v-pills-resignation"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "resignation"
                        ? "resignation"
                        : "resignation"
                    )
                  }
                >
                  do_not_disturb_alt
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-termination-tab"
                title="Termination"
                data-bs-toggle="pill"
                to="#v-pills-termination"
                role="tab"
                aria-controls="v-pills-termination"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "termination"
                        ? "termination"
                        : "termination"
                    )
                  }
                >
                  indeterminate_check_box
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-assets-tab"
                title="Assets"
                data-bs-toggle="pill"
                to="#v-pills-assets"
                role="tab"
                aria-controls="v-pills-assets"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "assets" ? "assets" : "assets")
                  }
                >
                  web_asset
                </span>
              </Link>
              <Link
                className="nav-link active"
                id="v-pills-jobs-tab"
                title="Jobs"
                data-bs-toggle="pill"
                to="#v-pills-jobs"
                role="tab"
                aria-controls="v-pills-jobs"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "jobs" ? "jobs" : "jobs")
                  }
                >
                  work_outline
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-knowledgebase-tab"
                title="Knowledgebase"
                data-bs-toggle="pill"
                to="#v-pills-knowledgebase"
                role="tab"
                aria-controls="v-pills-knowledgebase"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "knowledgebase"
                        ? "knowledgebase"
                        : "knowledgebase"
                    )
                  }
                >
                  school
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-activities-tab"
                title="Activities"
                data-bs-toggle="pill"
                to="#v-pills-activities"
                role="tab"
                aria-controls="v-pills-activities"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "activities" ? "activities" : "activities"
                    )
                  }
                >
                  toggle_off
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-users-tab"
                title="Users"
                data-bs-toggle="pill"
                to="#v-pills-users"
                role="tab"
                aria-controls="v-pills-users"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "users" ? "users" : "users")
                  }
                >
                  group_add
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-settings-tab"
                title="Settings"
                data-bs-toggle="pill"
                to="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "settings" ? "settings" : "settings"
                    )
                  }
                >
                  settings
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-profile-tab"
                title="Profile"
                data-bs-toggle="pill"
                to="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "profile" ? "profile" : "profile"
                    )
                  }
                >
                  manage_accounts
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-authentication-tab"
                title="Authentication"
                data-bs-toggle="pill"
                to="#v-pills-authentication"
                role="tab"
                aria-controls="v-pills-authentication"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "authentication"
                        ? "authentication"
                        : "authentication"
                    )
                  }
                >
                  perm_contact_calendar
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-errorpages-tab"
                title="Error Pages"
                data-bs-toggle="pill"
                to="#v-pills-errorpages"
                role="tab"
                aria-controls="v-pills-errorpages"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "error pages"
                        ? "error pages"
                        : "error pages"
                    )
                  }
                >
                  announcement
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-subscriptions-tab"
                title="Subscriptions"
                data-bs-toggle="pill"
                to="#v-pills-subscriptions"
                role="tab"
                aria-controls="v-pills-subscriptions"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "subscriptions"
                        ? "subscriptions"
                        : "subscriptions"
                    )
                  }
                >
                  loyalty
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-pages-tab"
                title="Pages"
                data-bs-toggle="pill"
                to="#v-pills-pages"
                role="tab"
                aria-controls="v-pills-pages"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "pages" ? "pages" : "pages")
                  }
                >
                  layers
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-forms-tab"
                title="Forms"
                data-bs-toggle="pill"
                to="#v-pills-forms"
                role="tab"
                aria-controls="v-pills-forms"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "forms" ? "forms" : "forms")
                  }
                >
                  view_day
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-tables-tab"
                title="Tables"
                data-bs-toggle="pill"
                to="#v-pills-tables"
                role="tab"
                aria-controls="v-pills-tables"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "tables" ? "tables" : "tables")
                  }
                >
                  table_rows
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-documentation-tab"
                title="Documentation"
                data-bs-toggle="pill"
                to="#v-pills-documentation"
                role="tab"
                aria-controls="v-pills-documentation"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "documentation"
                        ? "documentation"
                        : "documentation"
                    )
                  }
                >
                  description
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-changelog-tab"
                title="Changelog"
                data-bs-toggle="pill"
                to="#v-pills-changelog"
                role="tab"
                aria-controls="v-pills-changelog"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "Changelog" ? "Changelog" : "Changelog"
                    )
                  }
                >
                  sync_alt
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-multilevel-tab"
                title="Multilevel"
                data-bs-toggle="pill"
                to="#v-pills-multilevel"
                role="tab"
                aria-controls="v-pills-multilevel"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "multi Level"
                        ? "multi Level"
                        : "multi Level"
                    )
                  }
                >
                  library_add_check
                </span>
              </Link>
            </div>
          </div>
          <div className="sidebar-right">
            <div className="tab-content" id="v-pills-tabContent">
              {isSideMenunew == "dashboard" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-dashboard"
                  role="tabpanel"
                  aria-labelledby="v-pills-dashboard-tab"
                >
                  <p>Dashboard</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("admin-dashboard") ? "active" : ""
                        }
                        to="/admin-dashboard"
                      >
                        {t("AdminDashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("employee-dashboard")
                            ? "active"
                            : ""
                        }
                        to="/employee-dashboard"
                      >
                        {t("EmployeeDashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("deals-dashboard") ? "active" : ""
                        }
                        to="/deals-dashboard"
                      >
                        {t("Deals Dashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leads-dashboard") ? "active" : ""
                        }
                        to="/leads-dashboard"
                      >
                        {t("Leads Dashboard")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "apps" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-apps"
                  role="tabpanel"
                  aria-labelledby="v-pills-apps-tab"
                >
                  <p>App</p>
                  <ul>
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/call/chat"
                      >
                        {t("Chat")}
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={level2Menu == "calls" ? "subdrop" : ""}
                        onClick={() =>
                          toggleLvelTwo(level2Menu == "calls" ? "" : "calls")
                        }
                      >
                        <span> {t("Calls")}</span>
                      </Link>
                      {level2Menu == "calls" ? (
                        <ul>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/call/voice-call"
                            >
                              {t("VideoCall")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/call/video-call"
                            >
                              {t("VideoCall")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/call/outgoing-call"
                            >
                              {t("OutgoingCall")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/call/incoming-call"
                            >
                              {t("IncomingCall")}
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("calendar") ? "active" : ""
                        }
                        to="/events"
                      >
                        {t("Calendar")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        className={
                          pathname.includes("contacts") ? "active" : ""
                        }
                        to="/contacts"
                      >
                        {t("Contacts")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/email/inbox">{t("Email")}</Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("file-manager") ? "active" : ""
                        }
                        to="/file-manager"
                      >
                        {t("FileManager")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "employee" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-employees"
                  role="tabpanel"
                  aria-labelledby="v-pills-employees-tab"
                >
                  <p>{t("employees")}</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("employees")
                            ? "active"
                            : pathname.includes("employees-list")
                            ? "active"
                            : ""
                        }
                        to="/employees"
                      >
                        {t("All Employee")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("holidays") ? "active" : ""
                        }
                        to="/holidays"
                      >
                        {t("Holidays")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("adminleaves") ? "active" : ""
                        }
                        to="/adminleaves"
                      >
                        {t("Leaves (Admin)")}
                        <span className="badge rounded-pill bg-primary float-end">
                          1
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leaves-employee") ? "active" : ""
                        }
                        to="/leaves-employee"
                      >
                        {t("Leaves (Employee)")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leave-settings") ? "active" : ""
                        }
                        to="/leave-settings"
                      >
                        {t("Leave Setting")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("adminattendance") ? "active" : ""
                        }
                        to="/adminattendance"
                      >
                        {t("Attendance (Admin)")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("attendance-employee")
                            ? "active"
                            : ""
                        }
                        to="/attendance-employee"
                      >
                        {t("Attendance (Employee)")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("departments") ? "active" : ""
                        }
                        to="/departments"
                      >
                        {t("Department")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("designations") ? "active" : ""
                        }
                        to="/designations"
                      >
                        {t("Designation")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("timesheet") ? "active" : ""
                        }
                        to="/timesheet"
                      >
                        {t("Timesheet")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("shift-scheduling") ||
                          pathname.includes("shift-list")
                            ? "active"
                            : ""
                        }
                        to="/shift-scheduling"
                      >
                        {t("Shift & Schedule")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("overtime") ? "active" : ""
                        }
                        to="/overtime"
                      >
                        {t("Overtime")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "clients" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-clients"
                  role="tabpanel"
                  aria-labelledby="v-pills-clients-tab"
                >
                  <p>Clients</p>
                  <ul>
                    <li
                      className={pathname.includes("clients") ? "active" : ""}
                    >
                      <Link to="/clients">
                        <i className="la la-users" />{" "}
                        <span>{t("Clients")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "projects" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-projects"
                  role="tabpanel"
                  aria-labelledby="v-pills-projects-tab"
                >
                  <p>Projects</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("projects")
                            ? "active"
                            : pathname.includes("project-list")
                            ? "active"
                            : pathname.includes("projects-view")
                            ? "active"
                            : ""
                        }
                        to="/projects"
                      >
                        {t("Projects")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/task/tasks"
                      >
                        {t("Task")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("task-board") ? "active" : ""
                        }
                        to="/task-board"
                      >
                        {t("Task Board")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "leads" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-leads"
                  role="tabpanel"
                  aria-labelledby="v-pills-leads-tab"
                >
                  <p>CRM</p>
                  <ul>
                    <li className={pathname.includes("contact-list") ? "active" : ""}>
                      <Link to="/contact-list">
                       
                        <span>{t("Contacts")}</span>
                      </Link>
                    </li>
                    <li className={pathname.includes("companies") ? "active" : ""}>
                      <Link to="/companies">
                       
                        <span>{t("Companies")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("deals") ? "active" : ""
                        }
                        to="/deals"
                      >
                        {t("Deals")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leads") ? "active" : ""
                        }
                        to="/leads"
                      >
                        {t("Leads")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("pipeline") ? "active" : ""
                        }
                        to="/pipeline"
                      >
                        {t("Pipeline")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("analytics") ? "active" : ""
                        }
                        to="/analytics"
                      >
                        {t("Analytics")}
                      </Link>
                    </li>


                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "tickets" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-tickets"
                  role="tabpanel"
                  aria-labelledby="v-pills-tickets-tab"
                >
                  <p>Tickets</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("tickets")
                          ? "active"
                          : pathname.includes("ticket-view")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/tickets">
                        <i className="la la-ticket" />{" "}
                        <span>{t("Tickets")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "sales" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-sales"
                  role="tabpanel"
                  aria-labelledby="v-pills-sales-tab"
                >
                  <p>Sales</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("estimates") ? "active" : ""
                        }
                        to="/estimates"
                      >
                        {t("Estimates")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("invoices") ? "active" : ""
                        }
                        to="/invoices"
                      >
                        {t("Invoices")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payments") ? "active" : ""
                        }
                        to="/payments"
                      >
                        {t("Payments")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("expenses") ? "active" : ""
                        }
                        to="/expenses"
                      >
                        {t("Expenses")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("provident-fund") ? "active" : ""
                        }
                        to="/provident-fund"
                      >
                        {t("Provident Fund")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("taxes") ? "active" : ""}
                        to="/taxes"
                      >
                        {t("Taxes")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "accounting" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-accounting"
                  role="tabpanel"
                  aria-labelledby="v-pills-accounting-tab"
                >
                  <p>Accounting</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("categories") ||
                          pathname.includes("sub-category")
                            ? "active"
                            : ""
                        }
                        to="/categories"
                      >
                        {t("Categories")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("budgets") ? "active" : ""}
                        to="/budgets"
                      >
                        {t("Budgets")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("budget-expenses") ? "active" : ""
                        }
                        to="/budget-expenses"
                      >
                        {t("Budgets Expenses")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("budget-revenues") ? "active" : ""
                        }
                        to="/budget-revenues"
                      >
                        {t("Budgets Revenues")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "payroll" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-payroll"
                  role="tabpanel"
                  aria-labelledby="v-pills-payroll-tab"
                >
                  <p>Payroll</p>
                  <ul>
                    <li>
                      <Link
                        className={pathname.includes("salary") ? "active" : ""}
                        to="/salary"
                      >
                        {t("Employee Salary")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("salary-view") ? "active" : ""
                        }
                        to="/salary-view"
                      >
                        {t("Payslip")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payroll-items") ? "active" : ""
                        }
                        to="/payroll-items"
                      >
                        {t("Payroll Items")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "policies" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-policies"
                  role="tabpanel"
                  aria-labelledby="v-pills-policies-tab"
                >
                  <p>Policies</p>
                  <ul>
                    <li
                      className={pathname.includes("policies") ? "active" : ""}
                    >
                      <Link to="/policies">
                        <i className="la la-file-pdf-o" />{" "}
                        <span>{t("Policies")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "reports" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-reports"
                  role="tabpanel"
                  aria-labelledby="v-pills-reports-tab"
                >
                  <p>Reports</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("expense-reports") ? "active" : ""
                        }
                        to="/expense-reports"
                      >
                        {t("Expense Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("invoice-reports") ? "active" : ""
                        }
                        to="/invoice-reports"
                      >
                        {t("Invoice Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payments-reports") ? "active" : ""
                        }
                        to="/payments-reports"
                      >
                        {t("Payment Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("project-reports") ? "active" : ""
                        }
                        to="/payments-reports"
                      >
                        {t("Project Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("task-reports") ? "active" : ""
                        }
                        to="/task-reports"
                      >
                        {t("Task Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("user-reports") ? "active" : ""
                        }
                        to="/user-reports"
                      >
                        {t("User Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("employee-reports") ? "active" : ""
                        }
                        to="/employee-reports"
                      >
                        {t("Employee Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payslip-reports") ? "active" : ""
                        }
                        to="/payslip-reports"
                      >
                        {t("Payslip Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("attendance-reports")
                            ? "active"
                            : ""
                        }
                        to="/attendance-reports"
                      >
                        {t("Attendence Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("leave-reports") ? "active" : ""
                        }
                        to="/leave-reports"
                      >
                        {t("Leave Report")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("daily-reports") ? "active" : ""
                        }
                        to="/daily-reports"
                      >
                        {t("Daily Report")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "performance" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-performance"
                  role="tabpanel"
                  aria-labelledby="v-pills-performance-tab"
                >
                  <p>Performance</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("performance-indicator")
                            ? "active"
                            : ""
                        }
                        to="/performance-indicator"
                      >
                        {t("Performance Indicator")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("performance") ? "active" : ""
                        }
                        to="/performance"
                      >
                        {t("Performance Review")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("performance-appraisal")
                            ? "active"
                            : ""
                        }
                        to="/performance-appraisal"
                      >
                        {t("Performance Appraisal")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "goals" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-goals"
                  role="tabpanel"
                  aria-labelledby="v-pills-goals-tab"
                >
                  <p>Goals</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("goal-tracking") ? "active" : ""
                        }
                        to="/goal-tracking"
                      >
                        {t("Goal List")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("goal-type") ? "active" : ""
                        }
                        to="/goal-type"
                      >
                        {t("Goal Type")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "training" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-training"
                  role="tabpanel"
                  aria-labelledby="v-pills-training-tab"
                >
                  <p>Training</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("training-list") ||
                          pathname.includes("training")
                            ? "active"
                            : ""
                        }
                        to="/training"
                      >
                        {t("Training")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("trainers") ? "active" : ""
                        }
                        to="/trainers"
                      >
                        {t("Trainers")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("training-type") ? "active" : ""
                        }
                        to="/training-type"
                      >
                        {t("Training Type")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "promotion" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-promotion"
                  role="tabpanel"
                  aria-labelledby="v-pills-promotion-tab"
                >
                  <p>Promotion</p>
                  <ul>
                    <li
                      className={pathname.includes("promotion") ? "active" : ""}
                    >
                      <Link to="/promotion">
                        <i className="la la-bullhorn" />{" "}
                        <span>{t("Promotion")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "resignation" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-resignation"
                  role="tabpanel"
                  aria-labelledby="v-pills-resignation-tab"
                >
                  <p>Resignation</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("resignation") ? "active" : ""
                      }
                    >
                      <Link to="/resignation">
                        <i className="la la-external-link-square" />
                        <span>{t("Resignation")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "termination" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-termination"
                  role="tabpanel"
                  aria-labelledby="v-pills-termination-tab"
                >
                  <p>Termination</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("termination") ? "active" : ""
                      }
                    >
                      <Link to="/termination">
                        <i className="la la-times-circle" />
                        <span>{t("Termination")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "assets" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-assets"
                  role="tabpanel"
                  aria-labelledby="v-pills-assets-tab"
                >
                  <p>Assets</p>
                  <ul>
                    <li className={pathname.includes("assets") ? "active" : ""}>
                      <Link to="/assets">
                        <i className="la la-object-ungroup" />
                        <span>{t("Assets")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "jobs" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-jobs"
                  role="tabpanel"
                  aria-labelledby="v-pills-jobs-tab"
                >
                  <p>Jobs</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("user-dashboard") ||
                          pathname.includes("user-all-jobs") ||
                          pathname.includes("saved-jobs") ||
                          pathname.includes("applied-jobs") ||
                          pathname.includes("interviewing") ||
                          pathname.includes("offered-jobs") ||
                          pathname.includes("visited-jobs") ||
                          pathname.includes("archived-jobs") ||
                          pathname.includes("job-aptitude") ||
                          pathname.includes("questions")
                            ? "active"
                            : ""
                        }
                        to="/user-dashboard"
                      >
                        {t("User Dashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("jobs-dashboard") ? "active" : ""
                        }
                        to="/jobs-dashboard"
                      >
                        {t("Jobs Dashboard")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname === "/jobs" ? "active" : ""}
                        to="/jobs"
                      >
                        {t("Manage Jobs")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("manage-resumes") ? "active" : ""
                        }
                        to="/manage-resumes"
                      >
                        {t("Manage Resume")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("shortlist-candidates")
                            ? "active"
                            : ""
                        }
                        to="/shortlist-candidates"
                      >
                        {t("Shortlisted Candidate")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname === "/interview-questions" ? "active" : ""
                        }
                        to="/interview-questions"
                      >
                        {t("Interview Question")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("offer_approvals") ? "active" : ""
                        }
                        to="/offer_approvals"
                      >
                        {t("Offer Approvals")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("experiance-level") ? "active" : ""
                        }
                        to="/experiance-level"
                      >
                        {t("Experience Level")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname === "/candidates" ? "active" : ""}
                        to="/candidates"
                      >
                        {t("Candidate List")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("schedule-timing") ? "active" : ""
                        }
                        to="/schedule-timing"
                      >
                        {t("Schedule Timing")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("apptitude-result") ? "active" : ""
                        }
                        to="/apptitude-result"
                      >
                        {t("Aptitude Results")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "knowledgebase" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-knowledgebase"
                  role="tabpanel"
                  aria-labelledby="v-pills-knowledgebase-tab"
                >
                  <p>Knowledgebase</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("knowledgebase") ? "active" : ""
                      }
                    >
                      <Link to="/knowledgebase">
                        <i className="la la-question" />
                        <span>{t("Knowledgebase")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "activities" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-activities"
                  role="tabpanel"
                  aria-labelledby="v-pills-activities-tab"
                >
                  <p>Activities</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("activities") ? "active" : ""
                      }
                    >
                      <Link to="/activities">
                        <i className="la la-bell" />{" "}
                        <span>{t("Activities")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "administrator/users" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-users"
                  role="tabpanel"
                  aria-labelledby="v-pills-activities-tab"
                >
                  <p>Users</p>
                  <ul>
                    <li className={pathname.includes("users") ? "active" : ""}>
                      <Link to="/users">
                        <i className="la la-user-plus" />{" "}
                        <span>{t("User")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "settings" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <p>Settings</p>
                  <ul>
                    <li>
                      <Link to="/settings/company-settings">
                        <i className="la la-cog" /> <span>{t("Settings")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "profile" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <p>Profile</p>
                  <ul>
                    <li>
                      <Link
                        className={pathname.includes("profile") ? "active" : ""}
                        to="/profile"
                      >
                        {t("Employee Profile")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("client-profile") ? "active" : ""
                        }
                        to="/client-profile"
                      >
                        {t("Client Profile")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "authentication" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-authentication"
                  role="tabpanel"
                  aria-labelledby="v-pills-authentication-tab"
                >
                  <p>Authentication</p>
                  <ul>
                    <li>
                      <Link to="/"> {t("Login")}</Link>
                    </li>
                    <li>
                      <Link to="/register">{t("Register")} </Link>
                    </li>
                    <li>
                      <Link to="/forgot-password">
                        {" "}
                        {t("Forgot Password")}{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/otp">{t("OTP")}</Link>
                    </li>
                    <li>
                      <Link to="/lock-screen"> {t("Lock Screen")}</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "error pages" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-errorpages"
                  role="tabpanel"
                  aria-labelledby="v-pills-errorpages-tab"
                >
                  <p>{t("Error Page")}</p>
                  <ul>
                    <li>
                      <Link to="/error-404">{t("404 Error")} </Link>
                    </li>
                    <li>
                      <Link to="/error-500">{t("500 Error")} </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "subscriptions" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-subscriptions"
                  role="tabpanel"
                  aria-labelledby="v-pills-subscriptions-tab"
                >
                  <p>{t("Subscriptions")}</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("subscriptions") ? "active" : ""
                        }
                        to="/subscriptions"
                      >
                        {t("Subscriptions (Admin)")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("subscriptions-company")
                            ? "active"
                            : ""
                        }
                        to="/subscriptions-company"
                      >
                        {t("Subscriptions (Company")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("subscribed-companies")
                            ? "active"
                            : ""
                        }
                        to="/subscribed-companies"
                      >
                        {t("Subscribed Companies")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "pages" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-pages"
                  role="tabpanel"
                  aria-labelledby="v-pills-pages-tab"
                >
                  <p>Pages</p>
                  <ul>
                    <li>
                      <Link
                        className={pathname.includes("search") ? "active" : ""}
                        to="/search"
                      >
                        {t("Search")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("faq") ? "active" : ""}
                        to="/faq"
                      >
                        {t("FAQ")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("terms") ? "active" : ""}
                        to="/terms"
                      >
                        {t("Terms")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("privacy-policy") ? "active" : ""
                        }
                        to="/privacy-policy"
                      >
                        {t("Privacy Policy")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("blank-page") ? "active" : ""
                        }
                        to="/blank-page"
                      >
                        {t("Blank Page")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "forms" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-forms"
                  role="tabpanel"
                  aria-labelledby="v-pills-forms-tab"
                >
                  <p>Forms</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-basic-inputs") ? "active" : ""
                        }
                        to="/form-basic-inputs"
                      >
                        {t("Basic Inputs")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-input-groups") ? "active" : ""
                        }
                        to="/form-input-groups"
                      >
                        {t("Input Group")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-horizontal") ? "active" : ""
                        }
                        to="/form-horizontal"
                      >
                        {t("Horizontal Form")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-vertical") ? "active" : ""
                        }
                        to="/form-vertical"
                      >
                        {t("Vertical Form")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-mask") ? "active" : ""
                        }
                        to="/form-mask"
                      >
                        {t("Form Mask")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-validation") ? "active" : ""
                        }
                        to="/form-validation"
                      >
                        {t("Form Validation")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("form-select2") ? "active" : ""
                        }
                        to="/form-select2"
                      >
                        {t("Form Select2")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("file-upload") ? "active" : ""
                        }
                        to="/file-upload"
                      >
                        {t("Form Upload")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "tables" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-tables"
                  role="tabpanel"
                  aria-labelledby="v-pills-tables-tab"
                >
                  <p>Tables</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("tables-basic") ? "active" : ""
                        }
                        to="/tables-basic"
                      >
                        {t("Basic Tables")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("data-tables") ? "active" : ""
                        }
                        to="/data-tables"
                      >
                        {t("Data Table")}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "documentation" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-documentation"
                  role="tabpanel"
                  aria-labelledby="v-pills-documentation-tab"
                >
                  <p>Documentation</p>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="la la-file-text" />
                        <span> {t("Documentation")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "Changelog" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-changelog"
                  role="tabpanel"
                  aria-labelledby="v-pills-changelog-tab"
                >
                  <p>Change Log</p>
                  <ul>
                    <li>
                      <Link to="#">
                        <span>{t("Change Log")}</span>
                        <span className="badge badge-primary ms-auto">
                          v3.4
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "multi Level" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-multilevel"
                  role="tabpanel"
                  aria-labelledby="v-pills-multilevel-tab"
                >
                  <p>{t("Multi Level")}</p>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={level2Menu == "level 1" ? "subdrop" : ""}
                        onClick={() =>
                          toggleLvelTwo(
                            level2Menu == "level 1" ? "" : "level 1"
                          )
                        }
                      >
                        <span>{t("Level 1")}</span>
                      </Link>
                      {level2Menu == "level 1" ? (
                        <ul>
                          <li>
                            <Link to="#">
                              <span>{t("Level 2")}</span>
                            </Link>
                          </li>
                          <li className="submenu">
                            <Link
                              to="#"
                              className={
                                level3Menu == "level 2" ? "subdrop" : ""
                              }
                              onClick={() =>
                                toggleLevelThree(
                                  level3Menu == "level 2" ? "" : "level 2"
                                )
                              }
                            >
                              <span>{t("Level 2")}</span>
                              <span className="menu-arrow" />
                            </Link>
                            {level3Menu == "level 2" ? (
                              <ul>
                                <li>
                                  <Link to="#">Level 3</Link>
                                </li>
                                <li>
                                  <Link to="#">Level 3</Link>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <Link to="#">
                              <span>{t("Level 2")}</span>
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link to="#">
                        <span>{t("Level 1")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
