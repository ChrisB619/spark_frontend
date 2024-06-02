import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import ProfessionalExcellence from "./ProfessionalExcellence";
import PersonalExcellence from "./PersonalExcellence";
import Achievements from "./Achievements";
import CommandRoleTwo from "./CommandRoleTwo";
import PersonalUpdates from "./PersonalUpdates";
import ProfessionalGoals from "./ProfessionalGoals";
import GeneralComments from "./GeneralComments";
import ROUseOnly from "./ROUseOnly";
import HRDUseOnly from "./HRDUseOnly";

function PerformanceReview() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <Breadcrumbs
            maintitle="Performance"
            title="Dashboard"
            subtitle="Performance"
          />

          {/* /Page Header */}
          <section className="review-section information">
            <div className="review-header text-center">
              <h3 className="review-title">Employee Basic Information</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="table-responsive">
                  <table className="table table-bordered table-nowrap review-table mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <form>
                            <div className="input-block">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="depart3">Department</label>
                              <input
                                type="text"
                                className="form-control"
                                id="depart3"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="departa">Designation</label>
                              <input
                                type="text"
                                className="form-control"
                                id="departa"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="qualif">Qualification: </label>
                              <input
                                type="text"
                                className="form-control"
                                id="qualif"
                              />
                            </div>
                          </form>
                        </td>
                        <td>
                          <form>
                            <div className="input-block">
                              <label htmlFor="doj">Emp ID</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="DGT-009"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="doj">Date of Join</label>
                              <input
                                type="text"
                                className="form-control"
                                id="doj"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="doc">Date of Confirmation</label>
                              <input
                                type="text"
                                className="form-control"
                                id="doc"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="qualif1">
                                Previous years of Exp
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="qualif1"
                              />
                            </div>
                          </form>
                        </td>
                        <td>
                          <form>
                            <div className="input-block">
                              <label htmlFor="name1"> RO's Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name1"
                              />
                            </div>
                            <div className="input-block">
                              <label htmlFor="depart1">RO Designation:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="depart1"
                              />
                            </div>
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <ProfessionalExcellence />
          <PersonalExcellence />
          <Achievements />
          <CommandRoleTwo />
          <PersonalUpdates />
          <ProfessionalGoals />
          <GeneralComments />
          <ROUseOnly />
          <HRDUseOnly />
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
}

export default PerformanceReview;
