import React from "react";
import DefaultEditor from "react-simple-wysiwyg";

const Texteditor = () => {
  const [values, setValue] = React.useState();

  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="content-page-header">
            <h3>Text Editor</h3>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Editor */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Editor</h5>
              </div>
              <div className="card-body">
                <div id="summernote">
                  <DefaultEditor value={values} onChange={onChange} />
                </div>
              </div>
            </div>
          </div>
          {/* /Editor */}
        </div>
      </div>
    </div>
  );
};

export default Texteditor;
