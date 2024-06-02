import React from "react";
import Select from "react-select";

const FormSelectTwo = () => {
  const options = [
    { label: "Orange", value: "Orange" },
    { label: "White", value: "White" },
    { label: "Purple", value: "Purple" },
  ];
  const optionsTwo = [
    { label: "First", value: "First" },
    { label: "Second", value: "Two" },
    { label: "Third", value: "Three" },
    { label: "Fourth", value: "Four" },
    { label: "Fifth", value: "Five" },
  ];

  const optionsThree = [
    { label: "Orange", value: "Orange" },
    { label: "White", value: "White" },
    { label: "Purple", value: "Purple" },
  ];
  const optionsFour = [
    {
      label: "Group1",
      options: [
        { value: "orange", label: "orange" },
        { value: "white", label: "white" },
        { value: "purple", label: "purple" },
      ],
    },
    {
      label: "Group2",
      options: [
        { value: "purple", label: "purple" },
        { value: "orange", label: "orange" },
        { value: "white", label: "white" },
      ],
    },
    {
      label: "Group3",
      options: [
        { value: "white", label: "white" },
        { value: "purple", label: "purple" },
        { value: "orange", label: "orange" },
      ],
    },
  ];

  const optionsFive = [
    { value: "one", label: "First" },
    { value: "two", label: "Second", isDisabled: true },
    { value: "three", label: "Third" },
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
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="content-page-header">
            <h5>Form Select2</h5>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-6">
            {/* Basic */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Basic</h5>
              </div>
              <div className="card-body card-buttons">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Use select2() function on select element to convert it to
                      Select 2.
                    </p>

                    <Select
                      placeholder="Orange"
                      options={options}
                      styles={customStyles}
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Basic */}
            {/* Nested */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Nested</h5>
              </div>
              <div className="card-body card-buttons">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Add options inside the optgroups to for group options.
                    </p>

                    <Select
                      placeholder="Orange"
                      options={optionsFour}
                      styles={customStyles}
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Nested */}
            {/* Placeholder */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Placeholder</h5>
              </div>
              <div className="card-body card-buttons">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Apply Placeholder by setting option placeholder option.
                    </p>

                    <Select
                      placeholder="Choose..."
                      options={optionsTwo}
                      styles={customStyles}
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Placeholder */}
            {/* Tagging with multi-value */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">
                  Tagging with multi-value select boxes
                </h5>
              </div>
              <div className="card-body card-buttons">
                <div className="row">
                  <div className="col-md-12">
                    <p>Set tags: true to convert select 2 in Tag mode.</p>
                    <Select
                      placeholder="        "
                      options={optionsThree}
                      styles={customStyles}
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Tagging with multi-value */}
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Small Select2</h5>
              </div>
              <div className="card-body card-buttons">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Use data('select2') function to get container of select2.
                    </p>
                    <Select
                      placeholder="Orange"
                      options={options}
                      styles={customStyles}
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Disabling options</h5>
              </div>
              <div className="card-body card-buttons">
                <div className="row">
                  <div className="col-md-12">
                    <p>Disable Select using disabled attribute.</p>

                    <Select
                      placeholder="First"
                      options={optionsFive}
                      styles={customStyles}
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Limiting the number of Tagging</h5>
              </div>
              <div className="card-body card-buttons">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Set maximumSelectionLength: 2 with tags: true to limit
                      selectin in Tag mode.
                    </p>
                    <Select
                      placeholder="        "
                      options={options}
                      styles={customStyles}
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSelectTwo;
