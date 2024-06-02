import React from "react";

const SearchBox = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="dataTables_length d-flex">
            <label className="d-flex">
              Show{" "}
              <select
                name="DataTables_Table_0_length"
                aria-controls="DataTables_Table_0"
                className="custom-select custom-select-sm form-control form-control-sm me-1 ms-1 mb-2"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{" "}
              entries
            </label>
          </div>
        </div>
        <div className="col-sm-12 col-md-6"></div>
      </div>
    </>
  );
};

export default SearchBox;
