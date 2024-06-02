import React from "react";

const RatingsTable = () => {
  const ratingData = [
    { number: "0.1", value: "dsdsd", definition: "dfsdfa" },
    { number: "0.2", value: "sdfdsf", definition: "sdfdsf" },
    { number: "0.3", value: "sdfds", definition: "fsdf" },
    { number: "0.4", value: "sdfds", definition: "fsdf" },
    { number: "0.5", value: "sdfdsf", definition: "sdf" },
    { number: "0.6", value: "sdfds", definition: "fsdsdf" },
    { number: "0.7", value: "dsfd", definition: "fsdf" },
    { number: "0.8", value: "sdfsdf", definition: "sdfds" },
    { number: "0.9", value: "sdf", definition: "sdfsdsf" },
    { number: "1.0", value: "dg", definition: "fg" },
  ];
  return (
    <>
      <div className="table-responsive">
        <form>
          <table className="table setting-performance-table">
            <thead>
              <tr>
                <th>Rating</th>
                <th>Short Descriptive Word</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
              {ratingData.map((data, index) => (
                <tr key={index}>
                  <td style={{ width: 50 }}>{data.number}</td>
                  <td style={{ width: 300 }}>
                    <input
                      type="hidden"
                      name="rating_no[]"
                      className="form-control"
                      defaultValue={data.number}
                    />
                    <input
                      type="text"
                      name="rating_value_ten[]"
                      className="form-control"
                      defaultValue={data.value}
                      placeholder={`Short word to describe rating of ${data.number}`}
                      required
                    />
                  </td>
                  <td>
                    <textarea
                      rows={3}
                      name="definition_ten[]"
                      className="form-control"
                      placeholder="Descriptive Rating Definition"
                      required
                      defaultValue={data.definition}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="submit-section m-b-0">
            <button
              className="btn btn-primary submit-btn create_goal_configuration_submit"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RatingsTable;
