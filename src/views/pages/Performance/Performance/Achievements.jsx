import React from "react";
import AddDeleteTable from "./AddDeleteTable";

const Achievements = () => {
  return (
    <>
      <section className="review-section">
        <div className="review-header text-center">
          <h3 className="review-title">
            Special Initiatives, Achievements, contributions if any
          </h3>
          <p className="text-muted">Lorem ipsum dollar</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <AddDeleteTable />
            </div>
          </div>
        </div>
      </section>
      <section className="review-section">
        <div className="review-header text-center">
          <h3 className="review-title">Comments on the role</h3>
          <p className="text-muted">
            alterations if any requirred like addition/deletion of
            responsibilities
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <AddDeleteTable />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
