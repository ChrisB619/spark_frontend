import React, { useState } from "react";
import Threetablerow from "./Threetablerow";

const CommandRoleTwo = () => {
  const [rows, setRows] = useState([
    { id: 1, strengths: "", areasForImprovement: "" },
    { id: 2, strengths: "", areasForImprovement: "" },
    { id: 3, strengths: "", areasForImprovement: "" },
    { id: 4, strengths: "", areasForImprovement: "" },
    { id: 5, strengths: "", areasForImprovement: "" },
  ]);
  
  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  return (
    <>
      <section className="review-section">
        <div className="review-header text-center">
          <h3 className="review-title">Comments on the role</h3>
          <p className="text-muted">
            Alterations if any required like addition/deletion of
            responsibilities
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered review-table mb-0">
                <thead>
                  <tr>
                    <th className="width-pixel">#</th>
                    <th>Strengths</th>
                    <th>Areas for Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={row.strengths}
                          onChange={(e) =>
                            handleInputChange(
                              row.id,
                              "strengths",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={row.areasForImprovement}
                          onChange={(e) =>
                            handleInputChange(
                              row.id,
                              "areasForImprovement",
                              e.target.value
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="review-section">
        <div className="review-header text-center">
          <h3 className="review-title">
            Appraisee's Strengths and Areas for Improvement perceived by the
            Reporting officer
          </h3>
          <p className="text-muted">Lorem ipsum dollar</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered review-table mb-0">
                <thead>
                  <tr>
                    <th className="width-pixel">#</th>
                    <th>Strengths</th>
                    <th>Area's for Improvement</th>
                  </tr>
                </thead>
               <Threetablerow />
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="review-section">
        <div className="review-header text-center">
          <h3 className="review-title">
            Appraisee's Strengths and Areas for Improvement perceived by the
            Head of the Department
          </h3>
          <p className="text-muted">Lorem ipsum dollar</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered review-table mb-0">
                <thead>
                  <tr>
                    <th className="width-pixel">#</th>
                    <th>Strengths</th>
                    <th>Area's for Improvement</th>
                  </tr>
                </thead>
                <Threetablerow />
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="review-section">
        <div className="review-header text-center">
          <h3 className="review-title">Personal Goals</h3>
          <p className="text-muted">Lorem ipsum dollar</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered review-table mb-0">
                <thead>
                  <tr>
                    <th className="width-pixel">#</th>
                    <th>Goal Achieved during last year</th>
                    <th>Goal set for current year</th>
                  </tr>
                </thead>
                <Threetablerow />
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommandRoleTwo;
