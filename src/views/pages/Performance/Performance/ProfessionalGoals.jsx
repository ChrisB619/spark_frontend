import React from "react";
import AddDeleteTable from "./AddDeleteTable";

const ProfessionalGoals = () => {
  return (
    <>
      <section className="review-section">
        <div className="review-header text-center">
          <h3 className="review-title">
            Professional Goals Achieved for last year
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
          <h3 className="review-title">
            Professional Goals for the forthcoming year
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
          <h3 className="review-title">Training Requirements</h3>
          <p className="text-muted">
            if any to achieve the Performance Standard Targets completely
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

export default ProfessionalGoals;
