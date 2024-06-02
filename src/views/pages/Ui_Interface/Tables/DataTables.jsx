import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import SearchBox from "../../../../components/SearchBox";
import { base_url } from "../../../../base_urls";

const DataTables = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(base_url + "/api/datatable.json")
      .then((res) => setUsers(res.data));
  }, [users]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Position",
      dataIndex: "position",
      sorter: (a, b) => a.position.length - b.position.length,
    },

    {
      title: "Office",
      dataIndex: "office",
      sorter: (a, b) => a.office.length - b.office.length,
    },

    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age.length - b.age.length,
    },

    {
      title: "Salary",
      dataIndex: "salary",
      render: (text) => <span>{text}</span>,
      sorter: (a, b) => a.salary.length - b.salary.length,
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Data Tables"
            title="Dashboard"
            subtitle="Data Tables"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0 data-table-card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Default Datatable</h4>
                  <p className="card-text">
                    This is the most basic example of the datatables with zero
                    configuration. Use the <code>.datatable</code> class to
                    initialize datatables.
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <SearchBox />
                    <Table
                      className="table-stripped"
                      columns={columns}
                      dataSource={
                        users?.length > 0
                          ? users?.map((user) => ({
                              ...user,
                              key: user.id,
                            }))
                          : []
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTables;
