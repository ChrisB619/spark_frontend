import React from "react";
import { Link } from "react-router-dom";
import CompentencyTable from "./CompentencyTable";

const Compentency = () => {
  const competencyData = [
    {
      title: "Adaptability",
      definition:
        "Ability to handle ambiguity and certain situations outside of their control. Dealing with a change in process, systems, role, and direction of the company. Adapting to new ways of doing things.",
    },
    {
      title: "Collaboration & Teamwork",
      definition:
        "Works harmoniously with others to get a job done; shares critical information with everyone involved in a project. Works cooperatively with others to achieve common goals. Seeks opinions and values the contributions of others; involves the team in discussion and decision-making.",
    },
    {
      title: "Communication",
      definition:
        "Communicates in an engaging, effective, and respectful way to a wide variety of groups. Delivers convincing and meaningful messages that leave a positive impact. Effective oral and written communication skills. The ability to persuade and convince others including management.",
    },
    {
      title: "Customer Service",
      definition:
        "Listens and responds effectively to customer questions; resolves customer problems to the customer’s satisfaction; respects all internal and external customers; follows up to evaluate customer satisfaction; exceeds customer expectations.",
    },
  ];
  return (
    <>
      {/* Compentency Config */}
      <div className="tab-pane" id="compentency_tab">
        <div className="row">
          <div className="col-md-12">
            <div className="input-block mb-3">
              <label className="col-form-label">Competency-based</label>
              <textarea
                rows={4}
                cols={5}
                className="form-control"
                name="competencies_desc"
                defaultValue={
                  "Competency-based performance management allow companies to evaluate employees' performance through define core competencies that align with the company’s mission, vision and goals. A 360-degree assessment can also be added to capture ratings and feedback "
                }
              />
            </div>
            <div className="submit-section my-3">
              <button
                className="m-0 btn btn-sm btn-primary submit-btn performance_status "
                data-status="competency"
                style={{ margin: "23px 0px" }}
              >
                Activate Competency-based
              </button>
            </div>
          </div>
          <div className="col-md-12">
            <div className="input-block mb-3">
              <table className="table table-bordered table-center">
                <thead style={{ background: "#f2f2f2" }}>
                  <tr>
                    <th style={{ width: 250 }}>Competency</th>
                    <th>Definition</th>
                    <th style={{ width: 70, textAlign: "center" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {competencyData.map((competency, index) => (
                    <tr key={index}>
                      <th>{competency.title}</th>
                      <td>
                        <div className="task-textarea">
                          <textarea
                            placeholder="Definition"
                            id={`competency_definition_${index + 6}`}
                            className={`form-control definition_edit_${
                              index + 6
                            }`}
                            readOnly
                            defaultValue={competency.definition}
                          />
                        </div>
                      </td>
                      <td className="text-center">
                        <Link
                          to="#"
                          className="text-warning me-1"
                          id={`definition_edit_${index + 6}`}
                          data-original-title="Edit"
                        >
                          <i className="fa fa-pencil" />
                        </Link>
                        <Link
                          to={`https://newhrms.com/newhrms_stagging/settings/delete_performance_competency/${
                            index + 6
                          }`}
                          className="text-danger"
                          data-bs-toggle="ajaxModal"
                          data-original-title="Delete"
                        >
                          <i className="fa fa-times" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="input-block mb-3">
              <form>
                <table className="table performance-table">
                  <tbody>
                    <tr>
                      <td className="pe-0">
                        <input
                          type="text"
                          className="form-control"
                          name="competency[]"
                          required
                          placeholder="Competency"
                        />
                      </td>
                      <td>
                        <textarea
                          rows={4}
                          cols={20}
                          className="form-control"
                          name="definition[]"
                          placeholder="Definition"
                          required
                          defaultValue={""}
                        />
                      </td>
                      <td
                        className="pe-0 width-55"
                        style={{
                          paddingRight: 0,
                          minWidth: 55,
                          maxWidth: 55,
                          width: 55,
                        }}
                      >
                        <button
                          type="button"
                          className="btn btn-white add_competency_performance"
                          data-bs-toggle="tooltip"
                          data-original-title="Add Competency"
                          style={{
                            height: 44,
                            fontSize: 16,
                            padding: "10px 15px",
                          }}
                        >
                          <i className="fa fa-plus-circle" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    id="create_offers_submit"
                  >
                    Create Competencies
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <hr style={{ marginTop: 0 }} />
            <div className="input-block mb-3 m-b-0">
              <label className="col-form-label">Choose Your Rating Scale</label>
              <div className="radio_input" id="rating_scale_select_competency">
                <label className="radio-inline custom_radio">
                  <input
                    type="radio"
                    name="rating_scale_competency"
                    defaultValue="rating_1_5"
                    required
                    className="rating_scale"
                    defaultChecked
                  />
                  1 - 5 <span className="checkmark me-1" />
                </label>
                <label className="radio-inline custom_radio">
                  <input
                    type="radio"
                    name="rating_scale_competency"
                    defaultValue="rating_1_10"
                    className="rating_scale"
                  />
                  1 - 10 <span className="checkmark ms-1" />
                </label>
                <label className="radio-inline custom_radio">
                  <input
                    type="radio"
                    name="rating_scale_competency"
                    defaultValue="custom_rating"
                    className="rating_scale"
                  />
                  Custom <span className="checkmark ms-1" />
                </label>
              </div>
            </div>
            {/* 5 Ratings Content */}
            <div
              className="input-block mb-3"
              id="5ratings_cont_competency"
              style={{ display: "block" }}
            >
              <CompentencyTable />
            </div>
            {/* /5 Ratings Content */}
            {/* 10 Ratings Content */}
            <div
              className="input-block mb-3"
              id="10ratings_cont_competency"
              style={{ display: "none" }}
            >
              <CompentencyTable />
            </div>
            {/* 10 Ratings Content */}
            {/* Custom Ratings Content */}
            <div
              className="input-block mb-3"
              id="custom_rating_cont_competency"
              style={{ display: "none" }}
            >
              <label className="col-form-label">Custom Rating Count</label>
              <div className="input-block mb-3">
                <input
                  type="text"
                  className="form-control custom_rating_input"
                  data-type="competency"
                  id="custom_rating_input1"
                  name="custom_rating_count"
                  defaultValue
                  placeholder={20}
                  style={{ width: 160 }}
                />
              </div>
              <CompentencyTable />
            </div>
            {/* /Custom Ratings Content */}
          </div>
        </div>
      </div>
      {/* /Compentency Config */}
    </>
  );
};

export default Compentency;
