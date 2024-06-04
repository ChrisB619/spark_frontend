import React from 'react';
import { Link } from 'react-router-dom';

const FilterFields = ({ fieldInputs, inputValue, setInputValue, inputValueTwo, setInputValueTwo, inputValueThree, setInputValueThree, handleSearch }) => (
  <div className="filter-filelds" id="filter_inputs" style={{ display: fieldInputs ? "block" : "none" }}>
    <div className="row filter-row">
      <div className="col-xl-2">
        <div className="input-block form-focus focused">
          <input
            type="text"
            className="form-control floating"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <label className="focus-label">Company Name</label>
        </div>
      </div>
      <div className="col-xl-2">
        <div className="input-block form-focus focused">
          <input
            type="text"
            className="form-control floating"
            value={inputValueTwo}
            onChange={(e) => setInputValueTwo(e.target.value)}
          />
          <label className="focus-label">Email</label>
        </div>
      </div>
      <div className="col-xl-2">
        <div className="input-block form-focus focused">
          <input
            type="text"
            className="form-control floating"
            value={inputValueThree}
            onChange={(e) => setInputValueThree(e.target.value)}
          />
          <label className="focus-label">Phone Number</label>
        </div>
      </div>
      <div className="col-xl-2">
        <Link to="#" className="btn btn-success w-100" onClick={handleSearch}> Search </Link>
      </div>
    </div>
  </div>
);

export default FilterFields;
