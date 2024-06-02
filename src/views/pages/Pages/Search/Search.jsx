import React from "react";
import { Link } from "react-router-dom";
import ProjectSearch from "./ProjectSearch";
import ClientSearch from "./ClientSearch";
import UserSearch from "./UserSearch";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const Search = () => {
  return (
    <div>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs maintitle="Search" title="Dashboard" subtitle="Search" />

          <div className="row">
            <div className="col-12">
              {/* Search Form */}
              <div className="main-search">
                <form action="#">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                      <button className="btn btn-primary h-100" type="button">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* /Search Form */}
              <div className="search-result">
                <h3>
                  Search Result Found For: <u>Keyword</u>
                </h3>
                <p>215 Results found</p>
              </div>
              <div className="search-lists">
                <ul className="nav nav-tabs nav-tabs-solid">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="#results_projects"
                      data-bs-toggle="tab"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#results_clients"
                      data-bs-toggle="tab"
                    >
                      Clients
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#results_users"
                      data-bs-toggle="tab"
                    >
                      Users
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <ProjectSearch id="results_projects" />
                  <ClientSearch id="results_clients" />
                  <UserSearch id="results_users" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
