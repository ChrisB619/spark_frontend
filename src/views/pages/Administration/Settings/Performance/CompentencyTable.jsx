import React from "react";

const CompentencyTable = () => {
  const ratingData = [
    {
      rating: "1",
      placeholder: "Short word to describe rating of 1",
      defaultValue: "tst",
    },
    {
      rating: "2",
      placeholder: "Short word to describe rating of 2",
      defaultValue: "dsgds",
    },
    {
      rating: "3",
      placeholder: "Short word to describe rating of 3",
      defaultValue: "sdg",
    },
    {
      rating: "4",
      placeholder: "Short word to describe rating of 4",
      defaultValue: "sdgsdg",
    },
    {
      rating: "5",
      placeholder: "Short word to describe rating of 5",
      defaultValue: "sdg",
    },
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
              {ratingData.map((item, index) => (
                <tr key={index}>
                  <td style={{ width: 50 }}>{item.rating}</td>
                  <td style={{ width: 300 }}>
                    <input
                      type="text"
                      name="rating_value[]"
                      className="form-control"
                      defaultValue={item.defaultValue}
                      placeholder={item.placeholder}
                      required
                    />
                  </td>
                  <td>
                    <textarea
                      rows={3}
                      name="definition[]"
                      className="form-control"
                      placeholder="Descriptive Rating Definition"
                      required
                      defaultValue={"Lorem ipsum"}
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

export default CompentencyTable;
