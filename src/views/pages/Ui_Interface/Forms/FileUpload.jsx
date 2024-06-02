import React from "react";
import { Link } from "react-router-dom";
import { DownloadImg } from "../../../../Routes/ImagePath";

const FileUpload = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="content-page-header">
            <h5>File Upload</h5>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Drag Card */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Single File Upload</h5>
              </div>
              <div className="card-body">
                <div
                  className="custom-file-container"
                  data-upload-id="myFirstImage"
                >
                  <label>
                    Upload (Single File){" "}
                    <Link
                      to="#"
                      className="custom-file-container__image-clear"
                      title="Clear Image"
                    >
                      x
                    </Link>
                  </label>
                  <label className="custom-file-container__custom-file">
                    <input
                      type="file"
                      className="custom-file-container__custom-file__custom-file-input"
                      accept="image/*"
                    />
                    <input
                      type="hidden"
                      name="MAX_FILE_SIZE"
                      defaultValue={10485760}
                    />

                    <span className="custom-file-container__custom-file__custom-file-control">
                      <span className="custom-file-container__custom-file__custom-file-control_button">
                        Browser
                      </span>
                    </span>
                    <br />
                  </label>

                  <div
                    className="custom-file-container__image-preview"
                    style={{ backgroundImage: "url(" + DownloadImg + ")" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Multiple File Upload</h5>
              </div>
              <div className="card-body">
                <div
                  className="custom-file-container"
                  data-upload-id="mySecondImage"
                >
                  <label>
                    Upload (Allow Multiple){" "}
                    <Link
                      to="#"
                      className="custom-file-container__image-clear"
                      title="Clear Image"
                    >
                      x
                    </Link>
                  </label>
                  <label className="custom-file-container__custom-file">
                    <input
                      type="file"
                      className="custom-file-container__custom-file__custom-file-input"
                      multiple
                    />
                    {/* <input
                  type="hidden"
                  name="MAX_FILE_SIZE"
                  defaultValue={10485760} 
                /> */}

                    <span className="custom-file-container__custom-file__custom-file-control">
                      <span className="custom-file-container__custom-file__custom-file-control_button">
                        Browser
                      </span>
                    </span>
                  </label>

                  <div
                    className="custom-file-container__image-preview"
                    style={{ backgroundImage: "url(" + DownloadImg + ")" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* /Drag Card */}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
