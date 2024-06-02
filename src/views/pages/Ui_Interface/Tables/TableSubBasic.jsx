import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../../../base_urls";

const TableSubBasic = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = axios.get(base_url + "/api/tablebasic.json");
    const fetchUser = axios.get(base_url + "/api/tablesubbasic.json");
    Promise.all([fetchUsers, fetchUser])
      .then((responses) => {
        const usersResponse = responses[0];
        const userResponse = responses[1];

        // Check for successful responses and set state accordingly
        if (usersResponse.status === 200 && userResponse.status === 200) {
          setUsers(usersResponse.data);
          setUser(userResponse.data);
        } else {
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Contextual Classes</h4>
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
                    {users.map((item, index) => (
                      <tr key={index} className={item.className}>
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
              <h4 className="card-title mb-0">Responsive Tables</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((item) => (
                      <tr key={item.id}>
                        <td>{item.num}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableSubBasic;
