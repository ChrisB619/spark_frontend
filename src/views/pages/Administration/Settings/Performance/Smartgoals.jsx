import React from 'react';
import SmartgoalsTable from './SmartgoalsTable';

const Smartgoals = () => {
  return (
    <>
      {/* Smart Goal Config */}
      <div className="tab-pane" id="smart_goals_tab">
        <div className="row">
          <div className="col-md-12">
            <div className="input-block mb-3">
              <label className="col-form-label">Smart Goals Configuration</label>
              <textarea
                rows={4}
                cols={5}
                className="form-control"
                name="smart_goals"
                defaultValue={
                  "A 360-degree assessment can also be added to capture ratings and feedback"
                }
              />
            </div>
            <div className="submit-section my-3">
              <button
                className="btn btn-primary submit-btn performance_status "
                data-status="smart_goals"
              >
                Activate SMART Goals
              </button>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: 0 }} />
        <div className="input-block mb-3 m-b-0">
          <label className="col-form-label">Choose Your Rating Scale</label>
          <div className="radio_input" id="rating_scale_select">
            <label className="radio-inline custom_radio">
              <input
                type="radio"
                name="rating_scale_smart_goal"
                defaultValue="rating_1_5"
                required
                className="rating_scale"
                defaultChecked
              />
              1 - 5 <span className="checkmark ms-1" />
            </label>
            <label className="radio-inline custom_radio">
              <input
                type="radio"
                name="rating_scale_smart_goal"
                defaultValue="rating_1_10"
                className="rating_scale"
              />
              1 - 10 <span className="checkmark ms-1" />
            </label>
            <label className="radio-inline custom_radio">
              <input
                type="radio"
                name="rating_scale_smart_goal"
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
          id="5ratings_cont"
          style={{ display: "block" }}
        >
        <SmartgoalsTable />
        </div>
        {/* /5 Ratings Content */}
        {/* 10 Ratings Content */}
        <div
          className="input-block mb-3"
          id="10ratings_cont"
          style={{ display: "none" }}
        >
          <SmartgoalsTable />
        </div>
        {/* 10 Ratings Content */}
        {/* Custom Ratings Content */}
        <div
          className="input-block mb-3"
          id="custom_rating_cont"
          style={{ display: "none" }}
        >
          <label className="col-form-label">Custom Rating Count</label>
          <div className="input-block mb-3">
            <input
              type="text"
              className="form-control custom_rating_input"
              data-type="smart_goal"
              id="custom_rating_input2"
              name="custom_rating_count"
              defaultValue
              placeholder={20}
              style={{ width: 160 }}
            />
          </div>
          <SmartgoalsTable />
        </div>
        {/* /Custom Ratings Content */}
      </div>
      {/* /Smart Goal Config */}
    </>
  );
}

export default Smartgoals;
