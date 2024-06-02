import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import "../../../../../assets/css/calendar.css";
import CalendarModal from "../../../../../components/modelpopup/CalendarModal";

const Calendar = () => {
  const [weekendsVisible] = useState(true);

  const defaultEvents = [
    {
      title: "Event Name 4",
      start: Date.now() + 148000000,
      className: "bg-purple",
    },
    {
      title: "Test Event 1",
      start: Date.now(),
      end: Date.now(),
      className: "bg-success",
    },
    {
      title: "Test Event 2",
      start: Date.now() + 168000000,
      className: "bg-info",
    },
    {
      title: "Test Event 3",
      start: Date.now() + 338000000,
      className: "bg-primary",
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Events</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="admin-dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Events</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <Link
                to="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_event"
              >
                <i className="fa-solid fa-plus" /> Add Event
              </Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-0">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    {/* Calendar */}
                    <div id="calendar" />
                    <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                      }}
                      initialView="dayGridMonth"
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
                      weekends={weekendsVisible}
                      initialEvents={defaultEvents}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CalendarModal />
    </div>
  );
};

export default Calendar;
