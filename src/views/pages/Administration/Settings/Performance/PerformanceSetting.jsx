import React from 'react';
import { Link } from 'react-router-dom';
import RatingsTable from './RatingsTable';
import Compentency from './Compentency';
import Smartgoals from './Smartgoals';

const PerformanceSetting = () => {
  return (
    <>
       {/* Page Wrapper */}
       <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="page-title">
                Performance Configuration
                <button className="btn btn-success m-t-5 btn-sm ms-2" type="submit">
                  OKRs Activated
                </button>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card-box">
                <p>
                  <b>
                    Click the tabs below for more information on each
                    Performance Management module. Only one Performance module
                    can be activated at a time.
                  </b>
                </p>
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item active">
                    <Link
                      className="nav-link active"
                      to="#okr_tab"
                      data-bs-toggle="tab"
                    >
                      OKRs
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link"
                      to="#compentency_tab"
                      data-bs-toggle="tab"
                    >
                      Competency-based
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link"
                      to="#smart_goals_tab"
                      data-bs-toggle="tab"
                    >
                      SMART Goals
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  {/* OKR Config */}
                  <div className="tab-pane active" id="okr_tab">
                    <div className="row">
                      <div className="col-md-12 col-lg-12">
                        <div className="input-block mb-3">
                        <label className="col-form-label">OKRs Description</label>
                          <textarea
                            rows={5}
                            cols={5}
                            className="form-control"
                            name="description"
                            defaultValue={
                              "Objectives and Key Results (OKR) is a framework for defining and tracking organizations objectives and their outcomes. OKRs comprise an Objective—a clearly defined goal—and one or more Key Results—specific measures used to track the achievement of that goal. The goal of OKR is to define how to achieve objectives through concrete, specific and measurable actions. Key Results can be measured on a sliding scale from 0.0 - 1.0 or 0-100%. Objectives should also be supported by initiatives, which are the plans and activities that help to achieve the objective and move forward the key results. Once objectives and key results have been established, regular and quarterly check-ins are required to make sure OKRs is progressing"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="rating-list m-t-20">
                          <span className="rating-bad">
                            <span className="rating-count">
                              <Link className="me-1">0.0</Link>
                              <Link className="me-1">0.1</Link>
                              <Link className="me-1">0.2</Link>
                              <Link>0.3</Link>
                            </span>
                            <br />
                            <span className="rating-text">
                              We failed to make real progress
                            </span>
                          </span>
                          <span className="rating-normal">
                            <span className="rating-count">
                              <Link className="me-1">0.4</Link>
                              <Link className="me-1">0.5</Link>
                              <Link>0.6</Link>
                            </span>
                            <br />
                            <span className="rating-text">
                              We made progress, but fell short of completion
                            </span>
                          </span>
                          <span className="rating-good">
                            <span className="rating-count">
                              <Link className="me-1">0.7</Link>
                              <Link className="me-1">0.8</Link>
                              <Link className="me-1">0.9</Link>
                              <Link>1.0</Link>
                            </span>
                            <br />
                            <span className="rating-text">We delivered</span>
                          </span>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="submit-section my-3">
                          <button
                            className="btn btn-primary submit-btn performance_status red_circle"
                            data-status="okr"
                            title="Admin can’t activate it again"
                          >
                            Activate OKR
                          </button>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <hr style={{ marginTop: 0 }} />
                        <div className="input-block m-b-0">
                          <label className="col-form-label">Choose Your Rating Scale</label>
                          <div
                            className="radio_input"
                            id="rating_scale_select_okr"
                          >
                            <label className="radio-inline custom_radio">
                              <input
                                type="radio"
                                name="rating_scale"
                                defaultValue="rating_01_010"
                                required
                                className="rating_scale"
                                defaultChecked
                              />
                              0.1 - 1.0 <span className="checkmark me-1" />
                            </label>
                            <label className="radio-inline custom_radio">
                              <input
                                type="radio"
                                name="rating_scale"
                                defaultValue="rating_1_5"
                                required
                                className="rating_scale"
                              />
                              1 - 5 <span className="checkmark ms-1" />
                            </label>
                            <label className="radio-inline custom_radio">
                              <input
                                type="radio"
                                name="rating_scale"
                                defaultValue="rating_1_10"
                                className="rating_scale"
                              />
                              1 - 10 <span className="checkmark ms-1" />
                            </label>
                            <label className="radio-inline custom_radio">
                              <input
                                type="radio"
                                name="rating_scale"
                                defaultValue="custom_rating"
                                className="rating_scale"
                              />
                              Custom <span className="checkmark ms-1" />
                            </label>
                          </div>
                        </div>
                        {/*0.1 to  1.0 Ratings Content */}
                        <div
                          className="input-block"
                          id="01ratings_cont_okr"
                          style={{ display: "block" }}
                        >
                          <RatingsTable />
                        </div>
                        {/* 0.1 to  1.0  Ratings Content */}
                        {/* 5 Ratings Content */}
                        <div
                          className="input-block"
                          id="5ratings_cont_okr"
                          style={{ display: "none" }}
                        >
                         <RatingsTable />
                        </div>
                        {/* /5 Ratings Content */}
                        {/* 10 Ratings Content */}
                        <div
                          className="input-block"
                          id="10ratings_cont_okr"
                          style={{ display: "none" }}
                        >
                        <RatingsTable />
                        </div>
                        {/* 10 Ratings Content */}
                        {/* Custom Ratings Content */}
                        <div
                          className="input-block"
                          id="custom_rating_cont_okr"
                          style={{ display: "none" }}
                        >
                          <label className="col-form-label">Custom Rating Count</label>
                          <div className="input-block">
                            <input
                              type="text"
                              className="form-control custom_rating_input"
                              data-type="okr"
                              id="custom_rating_input3"
                              name="custom_rating_count"
                              defaultValue
                              placeholder={20}
                              style={{ width: 160 }}
                            />
                          </div>
                          <RatingsTable />
                        </div>
                        {/* /Custom Ratings Content */}
                      </div>
                    </div>
                  </div>
                  {/* Compentency Config */}
                  <Compentency />
                  {/* /Compentency Config */}
                  {/* Smart Goal Config */}
                  <Smartgoals />
                  {/* /Smart Goal Config */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
}

export default PerformanceSetting;
