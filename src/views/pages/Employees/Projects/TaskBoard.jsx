import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar_16,
  Avatar_02,
  Avatar_09,
  Avatar_11,
  Avatar_12,
  Avatar_01,
} from "../../../../Routes/ImagePath";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import TaskboardModal from "../../../../components/modelpopup/TaskboardModal";

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    pending: [
      {
        id: "task1",
        title: "Website redesign",
        progress: "70%",
        date: "Sep 26",
        priority: "High",
        priorityClsss: "task-priority badge bg-inverse-danger",
        users: [{ userCount: "+2" }],
      },
      {
        id: "task2",
        title: "Make a wireframe",
        progress: "70%",
        date: "Sep 26",
        priority: "Low",
        priorityClsss: "task-priority badge bg-inverse-success",
        users: [{ userCount: "+2" }],
      },
      {
        id: "task3",
        title: "Website redesign",
        progress: "70%",
        date: "Sep 26",
        priority: "Normal",
        priorityClsss: "task-priority badge bg-inverse-warning",
        users: [{ userCount: "+2" }],
      },
    ],
    progress: [
      {
        id: "task4",
        title: "Website redesign",
        progress: "70%",
        date: "Sep 26",
        priority: "Normal",
        priorityClsss: "task-priority badge bg-inverse-warning",
        users: [{ userCount: "+2" }],
      },
      {
        id: "task5",
        title: "Make a redesign",
        progress: "70%",
        date: "Sep 26",
        priority: "High",
        priorityClsss: "task-priority badge bg-inverse-danger",
        users: [{ userCount: "+2" }],
      },
    ],
    success: [
      {
        id: "task6",
        title: "Website redesign",
        progress: "70%",
        date: "Sep 26",
        priority: "Normal",
        priorityClsss: "task-priority badge bg-inverse-warning",
        users: [{ userCount: "+2" }],
      },
    ],
    warning: [
      {
        id: "task7",
        title: "Website redesign",
        progress: "70%",
        date: "Sep 26",
        priority: "Low",
        priorityClsss: "task-priority badge bg-inverse-success",
        users: [{ userCount: "+2" }],
      },
    ],
    purple: [
      {
        id: "task8",
        title: "Website redesign",
        progress: "70%",
        date: "Sep 26",
        priority: "High",
        priorityClsss: "task-priority badge bg-inverse-danger",
        users: [{ userCount: "+2" }],
      },
    ],
    primary: [
      {
        id: "task9",
        title: "Website redesign",
        progress: "70%",
        date: "Sep 26",
        priority: "High",
        priorityClsss: "task-priority badge bg-inverse-danger",
        users: [{ userCount: "+2" }],
      },
    ],
  });

  const onDragEnd = (result) => {
    if (!result.destination) {
      return; // Dropped outside the list
    }

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      // Reorder tasks in the same list
      const updatedTasks = [...tasks[source.droppableId]];
      const [reorderedTask] = updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, reorderedTask);

      setTasks({
        ...tasks,
        [source.droppableId]: updatedTasks,
      });
    } else {
      // Move task from pending to progress
      const sourceTasks = [...tasks[source.droppableId]];
      const destinationTasks = [...tasks[destination.droppableId]];
      const [movedTask] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, movedTask);

      setTasks({
        ...tasks,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destinationTasks,
      });
    }
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Hospital Admin"
            title="Dashboard"
            subtitle="Task Board"
          />
          <div className="row board-view-header">
            <div className="col-4">
              <div className="pro-teams">
                <div className="pro-team-lead">
                  <h4>Lead</h4>
                  <div className="avatar-group">
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle border border-white"
                        alt="User Images"
                        src={Avatar_11}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle border border-white"
                        alt="User Images"
                        src={Avatar_01}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle border border-white"
                        alt="User Images"
                        src={Avatar_16}
                      />
                    </div>
                    <div className="avatar">
                      <Link
                        to="#"
                        className="avatar-title rounded-circle border border-white"
                        data-bs-toggle="modal"
                        data-bs-target="#assign_leader"
                      >
                        <i className="fa fa-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pro-team-members">
                  <h4>Team</h4>
                  <div className="avatar-group">
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle border border-white"
                        alt="User Images"
                        src={Avatar_02}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle border border-white"
                        alt="User Images"
                        src={Avatar_09}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle border border-white"
                        alt="User Images"
                        src={Avatar_12}
                      />
                    </div>
                    <div className="avatar">
                      <Link
                        to="#"
                        className="avatar-title rounded-circle border border-white"
                        data-bs-toggle="modal"
                        data-bs-target="#assign_user"
                      >
                        <i className="fa fa-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 text-end">
              <Link
                to="#"
                className="btn btn-white float-end ms-2"
                data-bs-toggle="modal"
                data-bs-target="#add_task_board"
              >
                <i className="fa fa-plus" /> Create List
              </Link>
              <Link
                to="/project-view"
                className="btn btn-white float-end mx-2"
                title="View Board"
              >
                <i className="fa fa-link" />
              </Link>
            </div>
            <div className="col-12">
              <div className="pro-progress">
                <div className="pro-progress-bar">
                  <h4>Progress</h4>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success w-20"
                      role="progressbar"
                    ></div>
                  </div>
                  <span>20%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="kanban-board card mb-0">
            <div className="card-body">
              <div className="kanban-cont">
                <DragDropContext onDragEnd={onDragEnd}>
                  <div className="kanban-list kanban-danger">
                    <div className="kanban-header">
                      <span className="status-title">Pending</span>
                      <div className="dropdown kanban-action">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_task_board"
                          >
                            Edit
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Pending List */}
                    <Droppable droppableId="pending" direction="vertical">
                      {(provided) => (
                        <div className="kanban-wrap" ref={provided.innerRef}>
                          {tasks.pending.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="card panel kanban-box"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="task-board-header">
                                    <span className="status-title">
                                      <Link to="#">{task.title}</Link>
                                    </span>
                                    <div className="dropdown kanban-task-action">
                                      <Link to="#" data-bs-toggle="dropdown">
                                        <i className="fa-solid fa-angle-down" />
                                      </Link>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <Link
                                          className="dropdown-item"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit_task_modal"
                                        >
                                          Edit
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                          Delete
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="task-board-body">
                                    <div className="kanban-info">
                                      <div className="progress progress-xs">
                                        <div
                                          className="progress-bar w-20"
                                          role="progressbar"
                                          aria-valuenow={20}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span>{task.progress}</span>
                                    </div>
                                    <div className="kanban-footer">
                                      <span className="task-info-cont">
                                        <span className="task-date">
                                          <i className="fa-regular fa-clock" />{" "}
                                          {task.date}
                                        </span>
                                        <span className={task.priorityClsss}>
                                          {task.priority}
                                        </span>
                                      </span>
                                      <span className="task-users">
                                        <img
                                          src={Avatar_12}
                                          className="task-avatar"
                                          width={24}
                                          height={24}
                                          alt="User Images"
                                        />
                                        <span className="task-user-count">
                                          {task.users[0].userCount}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>

                    <div className="add-new-task">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_task_modal"
                      >
                        Add New Task
                      </Link>
                    </div>
                  </div>

                  <div className="kanban-list kanban-info">
                    <div className="kanban-header">
                      <span className="status-title">Progress</span>
                      <div className="dropdown kanban-action">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_task_board"
                          >
                            Edit
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Progress List */}
                    <Droppable droppableId="progress" direction="vertical">
                      {(provided) => (
                        <div className="kanban-wrap" ref={provided.innerRef}>
                          {tasks.progress.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="card panel kanban-box"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="task-board-header">
                                    <span className="status-title">
                                      <Link to="#">{task.title}</Link>
                                    </span>
                                    <div className="dropdown kanban-task-action">
                                      <Link to="#" data-bs-toggle="dropdown">
                                        <i className="fa-solid fa-angle-down" />
                                      </Link>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <Link
                                          className="dropdown-item"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit_task_modal"
                                        >
                                          Edit
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                          Delete
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="task-board-body">
                                    <div className="kanban-info">
                                      <div className="progress progress-xs">
                                        <div
                                          className="progress-bar w-20"
                                          role="progressbar"
                                          aria-valuenow={20}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span>{task.progress}</span>
                                    </div>
                                    <div className="kanban-footer">
                                      <span className="task-info-cont">
                                        <span className="task-date">
                                          <i className="fa-regular fa-clock" />{" "}
                                          {task.date}
                                        </span>
                                        <span className={task.priorityClsss}>
                                          {task.priority}
                                        </span>
                                      </span>
                                      <span className="task-users">
                                        <img
                                          src={Avatar_12}
                                          className="task-avatar"
                                          width={24}
                                          height={24}
                                          alt="User Images"
                                        />
                                        <span className="task-user-count">
                                          {task.users[0].userCount}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                    <div className="add-new-task">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_task_modal"
                      >
                        Add New Task
                      </Link>
                    </div>
                  </div>
                  <div className="kanban-list kanban-success">
                    <div className="kanban-header">
                      <span className="status-title">Completed</span>
                      <div className="dropdown kanban-action">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_task_board"
                          >
                            Edit
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Droppable droppableId="success" direction="vertical">
                      {(provided) => (
                        <div
                          className="kanban-wrap ks-empty"
                          ref={provided.innerRef}
                        >
                          {tasks.success.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="card panel kanban-box"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="task-board-header">
                                    <span className="status-title">
                                      <Link to="#">{task.title}</Link>
                                    </span>
                                    <div className="dropdown kanban-task-action">
                                      <Link to="#" data-bs-toggle="dropdown">
                                        <i className="fa-solid fa-angle-down" />
                                      </Link>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <Link
                                          className="dropdown-item"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit_task_modal"
                                        >
                                          Edit
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                          Delete
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="task-board-body">
                                    <div className="kanban-info">
                                      <div className="progress progress-xs">
                                        <div
                                          className="progress-bar w-20"
                                          role="progressbar"
                                          aria-valuenow={20}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span>{task.progress}</span>
                                    </div>
                                    <div className="kanban-footer">
                                      <span className="task-info-cont">
                                        <span className="task-date">
                                          <i className="fa-regular fa-clock" />{" "}
                                          {task.date}
                                        </span>
                                        <span className={task.priorityClsss}>
                                          {task.priority}
                                        </span>
                                      </span>
                                      <span className="task-users">
                                        <img
                                          src={Avatar_12}
                                          className="task-avatar"
                                          width={24}
                                          height={24}
                                          alt="User Images"
                                        />
                                        <span className="task-user-count">
                                          {task.users[0].userCount}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>

                    <div className="add-new-task">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_task_modal"
                      >
                        Add New Task
                      </Link>
                    </div>
                  </div>
                  <div className="kanban-list kanban-warning">
                    <div className="kanban-header">
                      <span className="status-title">Inprogress</span>
                      <div className="dropdown kanban-action">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link className="dropdown-item" to="#">
                            Edit
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Droppable droppableId="warning" direction="vertical">
                      {(provided) => (
                        <div className="kanban-wrap" ref={provided.innerRef}>
                          {tasks.warning.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="card panel kanban-box"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="task-board-header">
                                    <span className="status-title">
                                      <Link to="#">{task.title}</Link>
                                    </span>
                                    <div className="dropdown kanban-task-action">
                                      <Link to="#" data-bs-toggle="dropdown">
                                        <i className="fa-solid fa-angle-down" />
                                      </Link>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <Link
                                          className="dropdown-item"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit_task_modal"
                                        >
                                          Edit
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                          Delete
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="task-board-body">
                                    <div className="kanban-info">
                                      <div className="progress progress-xs">
                                        <div
                                          className="progress-bar w-20"
                                          role="progressbar"
                                          aria-valuenow={20}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span>{task.progress}</span>
                                    </div>
                                    <div className="kanban-footer">
                                      <span className="task-info-cont">
                                        <span className="task-date">
                                          <i className="fa-regular fa-clock" />{" "}
                                          {task.date}
                                        </span>
                                        <span className={task.priorityClsss}>
                                          {task.priority}
                                        </span>
                                      </span>
                                      <span className="task-users">
                                        <img
                                          src={Avatar_12}
                                          className="task-avatar"
                                          width={24}
                                          height={24}
                                          alt="User Images"
                                        />
                                        <span className="task-user-count">
                                          {task.users[0].userCount}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>

                    <div className="add-new-task">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_task_modal"
                      >
                        Add New Task
                      </Link>
                    </div>
                  </div>
                  <div className="kanban-list kanban-purple">
                    <div className="kanban-header">
                      <span className="status-title">On Hold</span>
                      <div className="dropdown kanban-action">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_task_board"
                          >
                            Edit
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Droppable droppableId="purple" direction="vertical">
                      {(provided) => (
                        <div className="kanban-wrap" ref={provided.innerRef}>
                          {tasks.purple.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="card panel kanban-box"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="task-board-header">
                                    <span className="status-title">
                                      <Link to="#">{task.title}</Link>
                                    </span>
                                    <div className="dropdown kanban-task-action">
                                      <Link to="#" data-bs-toggle="dropdown">
                                        <i className="fa-solid fa-angle-down" />
                                      </Link>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <Link
                                          className="dropdown-item"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit_task_modal"
                                        >
                                          Edit
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                          Delete
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="task-board-body">
                                    <div className="kanban-info">
                                      <div className="progress progress-xs">
                                        <div
                                          className="progress-bar w-20"
                                          role="progressbar"
                                          aria-valuenow={20}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span>{task.progress}</span>
                                    </div>
                                    <div className="kanban-footer">
                                      <span className="task-info-cont">
                                        <span className="task-date">
                                          <i className="fa-regular fa-clock" />{" "}
                                          {task.date}
                                        </span>
                                        <span className={task.priorityClsss}>
                                          {task.priority}
                                        </span>
                                      </span>
                                      <span className="task-users">
                                        <img
                                          src={Avatar_12}
                                          className="task-avatar"
                                          width={24}
                                          height={24}
                                          alt="User Images"
                                        />
                                        <span className="task-user-count">
                                          {task.users[0].userCount}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                    <div className="add-new-task">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_task_modal"
                      >
                        Add New Task
                      </Link>
                    </div>
                  </div>
                  <div className="kanban-list kanban-primary">
                    <div className="kanban-header">
                      <span className="status-title">Review</span>
                      <div className="dropdown kanban-action">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_task_board"
                          >
                            Edit
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Droppable droppableId="primary" direction="vertical">
                      {(provided) => (
                        <div className="kanban-wrap" ref={provided.innerRef}>
                          {tasks.primary.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="card panel kanban-box"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="task-board-header">
                                    <span className="status-title">
                                      <Link to="#">{task.title}</Link>
                                    </span>
                                    <div className="dropdown kanban-task-action">
                                      <Link to="#" data-bs-toggle="dropdown">
                                        <i className="fa-solid fa-angle-down" />
                                      </Link>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <Link
                                          className="dropdown-item"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit_task_modal"
                                        >
                                          Edit
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                          Delete
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="task-board-body">
                                    <div className="kanban-info">
                                      <div className="progress progress-xs">
                                        <div
                                          className="progress-bar w-20"
                                          role="progressbar"
                                          aria-valuenow={20}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                      <span>{task.progress}</span>
                                    </div>
                                    <div className="kanban-footer">
                                      <span className="task-info-cont">
                                        <span className="task-date">
                                          <i className="fa-regular fa-clock" />{" "}
                                          {task.date}
                                        </span>
                                        <span className={task.priorityClsss}>
                                          {task.priority}
                                        </span>
                                      </span>
                                      <span className="task-users">
                                        <img
                                          src={Avatar_12}
                                          className="task-avatar"
                                          width={24}
                                          height={24}
                                          alt="User Images"
                                        />
                                        <span className="task-user-count">
                                          {task.users[0].userCount}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                    <div className="add-new-task">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_task_modal"
                      >
                        Add New Task
                      </Link>
                    </div>
                  </div>
                </DragDropContext>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TaskboardModal />
    </>
  );
};

export default TaskBoard;
