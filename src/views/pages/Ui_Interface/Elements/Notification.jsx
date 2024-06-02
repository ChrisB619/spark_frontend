import React from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/semantic.css";

const Notification = () => {
  const handleSuccess = () => {
    alertify.success("Success message");
  };

  const handleError = () => {
    alertify.error("Error message");
  };

  const handleWarning = () => {
    alertify.warning("Warning message");
  };

  const handleAlertBoxClick = () => {
    alertify.alert("Custom Heading", "This is an alert dialog.", function () {
      alertify.success("OK");
    });
  };

  const handleOkCancelConfirmation = () => {
    alertify.confirm(
      "Custom Heading",
      "This is a confirm dialog.",
      function () {
        alertify.success("Ok");
      },
      function () {
        alertify.error("Cancel");
      }
    );
  };

  const handlePrompt = () => {
    alertify.prompt(
      "Custom Heading",
      "This is a prompt dialog.",
      "Default value",
      function (evt, value) {
        alertify.success("Ok: " + value);
      },
      function () {
        alertify.error("Cancel");
      }
    );
  };
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="content-page-header">
            <h5>Notification</h5>
          </div>
        </div>
        <div className="row">
          {/* Alert */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Alert</div>
              </div>
              <div className="card-body">
                <Link
                  to="#"
                  id="alert"
                  className="btn btn-primary waves-effect waves-light"
                  onClick={handleAlertBoxClick}
                >
                  Click me
                </Link>
              </div>
            </div>
          </div>
          {/* /Alert */}
          {/* Alert */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Confirm</div>
              </div>
              <div className="card-body">
                <Link
                  to="#"
                  id="alert-confirm"
                  className="btn btn-primary waves-effect waves-light"
                  onClick={handleOkCancelConfirmation}
                >
                  Click me
                </Link>
              </div>
            </div>
          </div>
          {/* /Alert */}
          {/* Alert */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Prompt</div>
              </div>
              <div className="card-body">
                <Link
                  to="#"
                  id="alert-prompt"
                  className="btn btn-primary waves-effect waves-light"
                  onClick={handlePrompt}
                >
                  Click me
                </Link>
              </div>
            </div>
          </div>
          {/* /Alert */}
          {/* Alert */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Success Alert</div>
              </div>
              <div className="card-body">
                <Link
                  to="#"
                  id="alert-success"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                  onClick={handleSuccess}
                >
                  Click me
                </Link>
              </div>
            </div>
          </div>
          {/* /Alert */}
          {/* Alert */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Error Alert</div>
              </div>
              <div className="card-body">
                <Link
                  to="#"
                  id="alert-error"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                  onClick={handleError}
                >
                  Click me
                </Link>
              </div>
            </div>
          </div>
          {/* /Alert */}
          {/* Alert */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Warning Alert</div>
              </div>
              <div className="card-body">
                <Link
                  to="#"
                  id="alert-warning"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                  onClick={handleWarning}
                >
                  Click me
                </Link>
              </div>
            </div>
          </div>
          {/* /Alert */}
        </div>
      </div>
    </div>
  );
};
export default Notification;
