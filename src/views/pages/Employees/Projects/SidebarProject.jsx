import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarProject= () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div className="sidebar-menu">
          <ul>
            <li>
              <Link onClick={() => localStorage.setItem("firstload", "true")} to="/admin-dashboard"><i className="la la-home" /> <span>Back to Home</span></Link>
            </li>
            <li className="menu-title">Projects<Link to="#" data-bs-toggle="modal" data-bs-target="#create_project"><i className="fa fa-plus" /></Link></li>
            <li>
              <Link to="/task/tasks">Project Management</Link>
            </li>
            <li className="active">
              <Link to="/task/tasks">Hospital Administration</Link>
            </li>
            <li>
              <Link to="/task/tasks">Video Calling App</Link>
            </li>
            <li>
              <Link to="/task/tasks">Office Management</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
