import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base_url } from "../../../../../base_urls";

const Files = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get(base_url + "/api/files.json").then((res) => setValues(res.data));
  }, []);
  return (
    <div className="row row-sm">
      {values.map((file, index) => (
        <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3" key={index}>
          <div className="card card-file">
            <div className="dropdown-file">
              <Link to="#" className="dropdown-link" data-bs-toggle="dropdown">
                <i className="fa fa-ellipsis-v" />
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <Link to="#" className="dropdown-item">
                  View Details
                </Link>
                <Link to="#" className="dropdown-item">
                  Share
                </Link>
                <Link to="#" className="dropdown-item">
                  Download
                </Link>
                <Link to="#" className="dropdown-item">
                  Rename
                </Link>
                <Link to="#" className="dropdown-item">
                  Delete
                </Link>
              </div>
            </div>
            <div className="card-file-thumb">
              <i className={`fa-regular ${file.icon}`} />
            </div>
            <div className="card-body">
              <h6>
                <Link to="#">{file.fileName}</Link>
              </h6>
              <span>{file.fileSize}</span>
            </div>
            <div className="card-footer">{file.lastModified}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Files;
