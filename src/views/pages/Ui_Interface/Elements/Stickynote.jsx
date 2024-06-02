import React from "react";
import ReactStickyNotes from "@react-latest-ui/react-sticky-notes";

const Stickynotes = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid pb-0">
        {/* Page Header */}
        <div className="page-header">
          <div className="content-page-header">
            <h4>Sticky Note</h4>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Sticky */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Sticky Note</h5>
              </div>
              <ReactStickyNotes />
            </div>
          </div>
          {/* /Sticky */}
        </div>
      </div>
    </div>
  );
};

export default Stickynotes;
