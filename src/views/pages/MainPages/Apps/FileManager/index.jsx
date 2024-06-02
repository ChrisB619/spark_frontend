import React from "react";

import { Link } from "react-router-dom";
import RecentFiles from "./recentFiles";
import Files from "./files";

const FileManager = () => {

  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="file-wrap">
                <div className="file-sidebar">
                  <div className="file-header justify-content-center">
                    <span>Projects</span>
                    <Link to="#" className="file-side-close">
                      <i className="fa-solid fa-xmark" />
                    </Link>
                  </div>
                  <form className="file-search">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fa-solid fa-magnifying-glass" />
                      </div>
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                  <div className="file-pro-list">
                    <div className="file-scroll">
                      <ul className="file-menu">
                        <li className="active">
                          <Link to="#">All Projects</Link>
                        </li>
                        <li>
                          <Link to="#">Office Management</Link>
                        </li>
                        <li>
                          <Link to="#">Video Calling App</Link>
                        </li>
                        <li>
                          <Link to="#">Hospital Administration</Link>
                        </li>
                        <li>
                          <Link to="#">Virtual Host</Link>
                        </li>
                      </ul>
                      <div className="show-more">
                        <Link to="#">Show More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="file-cont-wrap">
                  <div className="file-cont-inner">
                    <div className="file-cont-header">
                      <div className="file-options">
                        <Link
                          to="#"
                          id="file_sidebar_toggle"
                          className="file-sidebar-toggle"
                        >
                          <i className="fa-solid fa-bars" />
                        </Link>
                      </div>
                      <span>File Manager</span>
                      <div className="file-options">
                        <span className="btn-file">
                          <input type="file" className="upload" />
                          <i className="fa-solid fa-upload" />
                        </span>
                      </div>
                    </div>
                    <div className="file-content">
                      <form className="file-search">
                        <div className="input-group">
                          <div className="input-group-text">
                            <i className="fa-solid fa-magnifying-glass" />
                          </div>
                          <input
                            type="text"
                            className="form-control rounded-pill"
                            placeholder="Search"
                          />
                        </div>
                      </form>
                      <div className="file-body">
                        <div className="file-scroll">
                          <div className="file-content-inner">
                            <h4>Recent Files</h4>
                            <RecentFiles />
                            <h4>Files</h4>
                            <Files />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default FileManager;
