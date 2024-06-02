import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  PlaceHolder } from '../../../../Routes/ImagePath';
import ProjectViewDetails from './ProjectViewDetails';
import ProjectModelPopup from '../../../../components/modelpopup/ProjectModelPopup';
import Breadcrumbs from '../../../../components/Breadcrumbs';
const ProjectView = () => {

    const projectview = {
        project: {
            title: "Hospital Administration",
            taskCounts: {
                openTasks: 2,
                completedTasks: 5,
            },
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.",
            ],
        },
    };

    const initialTasks = [
        'Patient appointment booking',
        'Appointment booking with payment gateway',
        'Doctor available module',
        'Patient and Doctor video conferencing',
        'Private chat module',
        'Patient Profile add',
      ];
      const [tasks, setTasks] = useState(initialTasks);

      const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
      };

    return (
        <div>
            <div className='page-wrapper'>
                <div className="content container-fluid">
                    {/* Page Header */}
                    <Breadcrumbs
                        maintitle="Hospital Admin"
                        title="Dashboard"
                        subtitle="Project"
                        modal="#create_project"
                        add="Edit Project"
                        menu="/task-board"
                    />
                    <div className="row">
                        <div className="col-lg-8 col-xl-9">
                            <div className="card">
                                <div className="card-body">
                                    <div className="project-title">
                                        <h5 className="card-title">{projectview.project.title}</h5>
                                        <small className="block text-ellipsis m-b-15">
                                            <span className="text-xs me-1">{projectview.project.taskCounts.openTasks}</span>
                                            <span className="text-muted">open tasks, </span>
                                            <span className="text-xs me-1">{projectview.project.taskCounts.completedTasks}</span>
                                            <span className="text-muted">tasks completed</span>
                                        </small>
                                    </div>
                                    {projectview.project.description.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title m-b-20">Uploaded image files</h5>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                                            <div className="uploaded-box">
                                                <div className="uploaded-img">
                                                    <img src={PlaceHolder} className="img-fluid" alt="" />
                                                </div>
                                                <div className="uploaded-img-name">demo.png</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                                            <div className="uploaded-box">
                                                <div className="uploaded-img">
                                                    <img src={PlaceHolder} className="img-fluid" alt="" />
                                                </div>
                                                <div className="uploaded-img-name">demo.png</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                                            <div className="uploaded-box">
                                                <div className="uploaded-img">
                                                    <img src={PlaceHolder} className="img-fluid" alt="" />
                                                </div>
                                                <div className="uploaded-img-name">demo.png</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                                            <div className="uploaded-box">
                                                <div className="uploaded-img">
                                                    <img src={PlaceHolder} className="img-fluid" alt="" />
                                                </div>
                                                <div className="uploaded-img-name">demo.png</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title m-b-20">Uploaded files</h5>
                                    <ul className="files-list">
                                        <li>
                                            <div className="files-cont">
                                                <div className="file-type">
                                                    <span className="files-icon">
                                                        <i className="fa-regular fa-file-pdf" />
                                                    </span>
                                                </div>
                                                <div className="files-info">
                                                    <span className="file-name text-ellipsis">
                                                        <Link to="#">
                                                            AHA Selfcare Mobile Application Test-Cases.xls
                                                        </Link>
                                                    </span>
                                                    <span className="file-author">
                                                        <Link to="#">John Doe</Link>
                                                    </span>{" "}
                                                    <span className="file-date">May 31st at 6:53 PM</span>
                                                    <div className="file-size">Size: 14.8Mb</div>
                                                </div>
                                                <ul className="files-action">
                                                    <li className="dropdown dropdown-action">
                                                        <Link
                                                            to="#"
                                                            className="dropdown-toggle btn btn-link"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="material-icons">more_horiz</i>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#">
                                                                Download
                                                            </Link>
                                                            <Link
                                                                className="dropdown-item"
                                                                to="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#share_files">
                                                                Share
                                                            </Link>
                                                            <Link className="dropdown-item" to="#">
                                                                Delete
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="files-cont">
                                                <div className="file-type">
                                                    <span className="files-icon">
                                                        <i className="fa-regular fa-file-pdf" />
                                                    </span>
                                                </div>
                                                <div className="files-info">
                                                    <span className="file-name text-ellipsis">
                                                        <Link to="#">
                                                            AHA Selfcare Mobile Application Test-Cases.xls
                                                        </Link>
                                                    </span>
                                                    <span className="file-author">
                                                        <Link to="#">Richard Miles</Link>
                                                    </span>{" "}
                                                    <span className="file-date">May 31st at 6:53 PM</span>
                                                    <div className="file-size">Size: 14.8Mb</div>
                                                </div>
                                                <ul className="files-action">
                                                    <li className="dropdown dropdown-action">
                                                        <Link
                                                            to="#"
                                                            className="dropdown-toggle btn btn-link"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="material-icons">more_horiz</i>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="#">
                                                                Download
                                                            </Link>
                                                            <Link
                                                                className="dropdown-item"
                                                                to="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#share_files">
                                                                Share
                                                            </Link>
                                                            <Link className="dropdown-item" to="#">
                                                                Delete
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-task">
                                <ul className="nav nav-tabs nav-tabs-top nav-justified mb-0">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link active"
                                            to="#all_tasks"
                                            data-bs-toggle="tab"
                                            aria-expanded="true">
                                            All Tasks
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="#pending_tasks"
                                            data-bs-toggle="tab"
                                            aria-expanded="false">
                                            Pending Tasks
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="#completed_tasks"
                                            data-bs-toggle="tab"
                                            aria-expanded="false">
                                            Completed Tasks
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="all_tasks">
                                        <div className="task-wrapper">
                                        <div className="task-list-container">
                                        <div className="task-list-body">
                                          <ul id="task-list">
                                            {tasks.map((task, index) => (
                                              <li className="task" key={index}>
                                                <div className="task-container">
                                                  <span className="task-action-btn task-check">
                                                    <span
                                                      className="action-circle large complete-btn"
                                                      title="Mark Complete"
                                                    >
                                                      <i className="material-icons">check</i>
                                                    </span>
                                                  </span>
                                                  <span className="task-label" contentEditable={true} suppressContentEditableWarning={true}>
                                                    {task}
                                                  </span>
                                                  <span className="task-action-btn task-btn-right">
                                                    <span className="action-circle large me-1" title="Assign">
                                                      <i className="material-icons">person_add</i>
                                                    </span>
                                                    <span className="action-circle large delete-btn" title="Delete Task" onClick={() => deleteTask(index)}>
                                                      <i className="material-icons">delete</i>
                                                    </span>
                                                  </span>
                                                </div>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        <div className="task-list-footer">
                                          <div className="new-task-wrapper">
                                            <textarea id="new-task" placeholder="Enter new task here. . ." defaultValue={''} />
                                            <span className="error-message hidden">You need to enter a task first</span>
                                            <span className="add-new-task-btn btn" id="add-task">
                                              Add Task
                                            </span>
                                            <span className="btn" id="close-task-panel">
                                              Close
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="pending_tasks" />
                                    <div className="tab-pane" id="completed_tasks" />
                                </div>
                            </div>
                        </div>
                        <ProjectViewDetails/>
                    </div>

                </div>
            </div>
         <ProjectModelPopup/>
        </div>
    )
}

export default ProjectView
