import React from "react";
import Select from "react-select";
import Breadcrumbs from "../../../../components/Breadcrumbs";

const Localization = () => {
  const selectDate = [
    { label: "15/05/2023", value: "option1" },
    { label: "15.05.2023", value: "option2" },
    { label: "15-05-2023", value: "option3" },
    { label: "05/15/2023", value: "option4" },
    { label: "2023/05/15", value: "option5" },
    { label: "2023-05-15", value: "option6" },
    { label: "May 15 2023", value: "option7" },
    { label: "15 May 2023", value: "option8" },
  ];
  const selectUSA = [
    { label: "USA", value: "option1" },
    { label: "United Kingdom", value: "option2" },
  ];
  const selectUTC = [
    { label: "(UTC +5:30) Antarctica/Palmer", value: "option1" },
  ];
  const selectEnglish = [
    { label: "English", value: "option1" },
    { label: "French", value: "option2" },
  ];
  const selectUSD = [
    { label: "USD", value: "option1" },
    { label: "Pound", value: "option2" },
    { label: "EURO", value: "option3" },
    { label: "Ringgit", value: "option4" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2 box-align">
              {/* Page Header */}
              <Breadcrumbs maintitle="Basic Settings" />
              {/* /Page Header */}
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Default Country</label>
                      <Select
                        options={selectUSA}
                        placeholder="USA"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Date Format</label>
                      <Select
                        options={selectDate}
                        placeholder="15 May 2023"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Timezone</label>
                      <Select
                        options={selectUTC}
                        placeholder="(UTC +5:30) Antarctica/Palmer"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Default Language</label>
                      <Select
                        options={selectEnglish}
                        placeholder="English"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Currency Code</label>
                      <Select
                        options={selectUSD}
                        placeholder="USD"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Currency Symbol</label>
                      <input
                        className="form-control"
                        readOnly
                        defaultValue="$"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        type="reset"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default Localization;
