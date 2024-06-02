// src/views/pages/Crm/CompaniesGrid.jsx
import React from 'react';

const CompaniesGrid = ({ companies }) => {
  return (
    <div className="row">
      {companies.map((company) => (
        <div key={company.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src={company.profile_image || 'default-image-path'} alt="Company" className="img-fluid" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5>{company.name}</h5>
                  <p>{company.about_company}</p>
                  <p>Email: {company.email}</p>
                  <p>Phone: {company.phone_number}</p>
                  <p>Status: {company.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompaniesGrid;
