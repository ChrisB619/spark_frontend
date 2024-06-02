import { Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar_05 } from '../../../Routes/ImagePath'

const LeaveSettingCustomPolicy = () => {

    const leavesetting = [
        {   
          id:1,
            img: Avatar_05,
            name : "5 years service",
            days : "5",
            assignee: "John Deo"
        }
    ]
     
    
      const columns = [
        {
          title: "Name",
          dataIndex: "name",
          render: (text) => <span>{text}</span>,
          sorter: (a, b) => a.name.length - b.name.length,
        },
        {
          title: "Day",
          dataIndex: "days",
          render: (text) => <span>{text}</span>,
          sorter: (a, b) => a.days.length - b.days.length,
        },
        {
          title: "Assignee",
          dataIndex: "assignee",
          render: (text, record) => (
            <span className="table-avatar">
            <div className="avatar">
              <img alt="" src={record.img} />
            </div>
          <Link to="/profile" className="avatar">{text}
        </Link>
        </span>
          ),
          sorter: (a, b) => a.assignee.length - b.assignee.length,
      
        },
    
        {
          title: "",
          render: () => (
            <div className="dropdown dropdown-action text-end">
              <Link
                to="#"
                className="action-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="material-icons">more_vert</i>
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <Link
                  className="dropdown-item"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_custom_policy"
                >
                  <i className="fa fa-pencil m-r-5" /> Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_custom_policy"
                >
                  <i className="fa fa-trash m-r-5" /> Delete
                </Link>
              </div>
            </div>
          ),
        },
      ]
  return (
    <div>
      {/* Custom Policy */}
      <div className="custom-policy">
      <div className="leave-header">
        <div className="title">Custom policy</div>
        <div className="leave-action">
          <button
            className="btn btn-sm btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#add_custom_policy">
            <i className="fa fa-plus" /> Add custom policy
          </button>
        </div>
      </div>
      <div className="table-responsive">
      <Table
      columns={columns}
      dataSource={leavesetting}
      className="table-striped"
       rowKey={(record) => record.id}
    />
      </div>
      </div>
    {/* /Custom Policy */}

     
    </div>
  )
}

export default LeaveSettingCustomPolicy
