import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import TableSubBasic from "./TableSubBasic";

const TablesBasic = () => {
  const data = [
    { firstName: "John", lastName: "Doe", email: "john@example.com" },
    { firstName: "Mary", lastName: "Moe", email: "mary@example.com" },
    { firstName: "July", lastName: "Dooley", email: "july@example.com" },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Basic Tables"
            title="Dashboard"
            subtitle="Basic Tables"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Basic Table</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title mb-0">Striped Rows</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                        </tr>
                        <tr>
                          <td>Mary</td>
                          <td>Moe</td>
                          <td>mary@example.com</td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Bordered Table</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Hover Rows</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TableSubBasic />
        </div>
      </div>
    </div>
  );
};

export default TablesBasic;
