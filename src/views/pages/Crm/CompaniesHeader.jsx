import React from 'react';
import { Link } from 'react-router-dom';

const CompaniesHeader = ({ setViewType, fieldInputs, setFieldInputs, handleAddCompany }) => (
  <div className="page-header">
    <div className="row align-items-center">
      <div className="col-md-4">
        <h3 className="page-title">Companies</h3>
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin-dashboard">Dashboard</Link></li>
          <li className="breadcrumb-item active">Companies</li>
        </ul>
      </div>
      <div className="col-md-8 float-end ms-auto">
        <div className="d-flex title-head">
          <div className="view-icons">
            <Link to="#" className="grid-view btn btn-link" onClick={() => setViewType('grid')}><i className="las la-th" /></Link>
            <Link to="#" className="list-view btn btn-link" onClick={() => setViewType('table')}><i className="las la-list" /></Link>
            <Link to="#" className={fieldInputs ? "list-view btn btn-link active-filter" : "list-view btn btn-link"} id="filter_search" onClick={() => setFieldInputs(!fieldInputs)}><i className="las la-filter" /></Link>
          </div>
          <div className="form-sort">
            <Link to="#" className="list-view btn btn-link" data-bs-toggle="modal" data-bs-target="#export"><i className="las la-file-export" />Export</Link>
          </div>
          <Link to="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_company" onClick={handleAddCompany}><i className="la la-plus-circle" /> Add Company</Link>
        </div>
      </div>
    </div>
  </div>
);

export default CompaniesHeader;
