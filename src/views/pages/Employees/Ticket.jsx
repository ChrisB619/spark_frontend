import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from "antd";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import TicketModelPopup from "../../../components/modelpopup/TicketModelPopup";
import Breadcrumbs from "../../../components/Breadcrumbs";
import TicketFilter from "../../../components/TicketFilter";


const Ticket = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/ticket.json")
    .then((res) => setUsers(res.data));
  }, []);

  const [data, setData] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [staffs, setStaff] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const primaryResponse = await axios.get('https://wd79p.com/backend/public/api/tickets');
      setData(primaryResponse.data);
    };

    
    const fetchCompanies = async () => {
      const companyResponse = await axios.get('https://wd79p.com/backend/public/api/companies');
      setCompanies(companyResponse.data);
    };
    const fetchStaff = async () => {
      const staffResponse = await axios.get('https://wd79p.com/backend/public/api/users');
      setStaff(staffResponse.data);
    };

    fetchData();
    fetchCompanies();
    fetchStaff();
  }, []);

  const mergedData = data.map(item => {
    const company = companies.find(c => c.id === item.company_id);
    const staff = staffs.find(c => c.id === item.assign_staff);
    return {
      ...item,
      companyName: company ? company.name : '--',
      staffName: staff ? staff.name : '--',
    };
    
  });
  
  const columns = [
    { 
      title: "Ticket Id",
      dataIndex: "id",
      render: (text, record) => (
        <Link
          onClick={() => localStorage.setItem("minheight", "true")}
          to={{
            pathname: `/ticket-details/${record.id}`,
            state: { ticket: record }
          }}
        >
          {record.id}
        </Link>
      ),
     sorter: (a, b) => a.id.length - b.id.length,
    },  
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
      sorter: (a, b) => a.companyName.length - b.companyName.length,
    },

    {
      title: "Ticket Subject",
      dataIndex: "subject",
      sorter: (a, b) => a.ticketsubject.length - b.ticketsubject.length,
    },
    {
      title: "Assigned Staff",
      dataIndex: "staffName",
      key: "staffName",
      sorter: (a, b) => a.staffName.length - b.staffName.length,
    },
    {
      title: "Created Date",
      dataIndex: "created_at",
      sorter: (a, b) => a.createddate.length - b.createddate.length,
    },

    {
      title: "Last Reply",
      dataIndex: "updated_at",
      sorter: (a, b) => a.lastreply.length - b.lastreply.length,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      render: (priority) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          <i className={`far fa-dot-circle ${priority === 'Emergency' ? 'far fa-dot-circle text-danger' 
          : priority === 'High' ? 'far fa-circle text-danger' 
          : priority === 'Medium' ? 'far fa-circle text-warning' 
          : 'far fa-circle text-success'}`} /> {priority}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
          <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Emergency
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-circle text-danger" /> High
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-circle text-warning" /> Medium
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-circle text-success" /> Low
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.priority.length - b.priority.length,
    },
    {
      title: "Status",
  dataIndex: "status",
  render: (status) => (
    <div className="dropdown action-label text-center">
      <Link
        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
        to="#"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className={`far fa-dot-circle ${
            status === 'New' ? 'far fa-circle text-success' 
          : status === 'Open' ? 'far fa-dot-circle text-success' 
          : status === 'Reopened' ? 'far fa-dot-circle text-info' 
          : status === 'On Hold' ? 'far fa-dot-circle text-warning' 
          : status === 'Closed' ? 'far fa-dot-circle text-danger' 
          : status === 'In Progress' ? 'far fa-circle text-info' 
          : status === 'Cancelled' ? 'far fa-circle text-dangertext-danger' 
          : ''
        }`} /> {status}
      </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-circle text-success" /> New
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Open
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-info" /> Reopened
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-warning" /> On Hold
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Closed
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-circle text-info" /> In Progress
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-circle text-dangertext-danger" /> Cancelled
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
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
              data-bs-target="#edit_ticket"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
      sorter: true,
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Tickets"
            title="Dashboard"
            subtitle="Tickets"
            modal="#add_ticket"
            name="Add Ticket"
          />
          <div className="row">
            <div className="col-md-12">
              <div className="card-group m-b-30">
                {users?.map((user, index) => (
                  <div className="card" key={index}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">{user.title}</span>
                        </div>
                        <div>
                          <span
                            className={
                              user.percentage.includes("-")
                                ? "text-danger"
                                : "text-success"
                            }
                          >
                            {user.percentage}
                          </span>
                        </div>
                      </div>
                      <h3 className="mb-3">{user.value}</h3>
                      <div className="progress mb-2" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <TicketFilter />

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped"
                  rowKey={(record) => record.id}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  dataSource={mergedData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TicketModelPopup />
      <DeleteModal Name="Delete Ticket" />
    </>
  );
};

export default Ticket;
