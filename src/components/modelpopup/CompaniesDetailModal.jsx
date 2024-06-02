import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import { TagsInput } from 'react-tag-input-component';
import { tagUserIcon } from '../../Routes/ImagePath';
import TextEditor from '../../views/pages/Crm/TextEditor';


const CompanyDetailModal = () => {

    const [tags, setTags] = useState(['James']);
  
    const handleTagsChange = (newTags) => {
        setTags(newTags);
    };
    const renderTag = (tag, { key, disabled, onRemove, className }) => (
        <div>
            <img
                src={tagUserIcon}
                alt="Tag Icon"
                style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
            <span>{tag}</span>
            {!disabled && (
                <button type="button" className="close" onClick={() => onRemove(key)}>
                    &times;
                </button>
            )}
        </div>
    );
    const [tags2, setTags2] = useState(['James']);
    const handleTagsChange2 = (newTags) => {
        setTags2(newTags);
    };
    const renderTag2 = (tag, { key, disabled, onRemove, className }) => (
        <div>
            <img
                src={tagUserIcon}
                alt="Tag Icon"
                style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
            <span>{tag}</span>
            {!disabled && (
                <button type="button" className="close" onClick={() => onRemove(key)}>
                    &times;
                </button>
            )}
        </div>
    );

    const [tags1, setTags1] = useState(['Divine dran']);

    const handleChange1 = (tags) => {
        setTags1(tags1);
    };
    const [tags3, setTags3] = useState(['Promotion' ,'Rated']);

    const handleChange3 = (tags) => {
        setTags3(tags3);
    };



    const recentlyViewd = [
        { value: 'Select', label: 'Select' },
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Calls', label: 'Calls' },
    ];
    const status = [
        { value: 'Select', label: 'Select' },
        { value: 'Open', label: 'Open' },
        { value: 'Lost', label: 'Lost' },
        { value: 'Won', label: 'Won' },
    ];
    const currency = [
        { value: 'Select', label: 'Select' },
        { value: '$', label: '$' },
        { value: '€', label: '€' },
    ];
    const sourcelist = [
        { value: 'Select', label: 'Select' },
        { value: 'Barry Cuda', label: 'Barry Cuda' },
        { value: 'Tressa Wexler', label: 'Tressa Wexler' },
    ];
    const priority = [
        { value: 'Select', label: 'Select' },
        { value: 'Highy', label: 'Highy' },
        { value: 'Medium', label: 'Medium' },
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

    const [count, setCount] = useState(1);

  const addSelect = () => {
    setCount(count + 1);
  };
  
    return (
        <div>
            {/* Add Deals */}
            <div
                className="modal custom-modal fade custom-modal-two modal-padding"
                id="add_deals"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Add New Deals</h5>
                            <button
                                type="button"
                                className="btn-close position-static"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body p-0">
                            <form action="/contact-details">
                                <div className="contact-input-set">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Deal Name <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pipeline-add-col">
                                        {[...Array(count)].map((_, index) => (

                                            <div className="input-block mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label className="col-form-label">
                                                        Pipeline <span className="text-danger">*</span>
                                                    </label>
                                                    <Link to="#" className="add-new add-pipeline-btn" onClick={addSelect}>
                                                        <i className="la la-plus-circle me-2" />
                                                        Add New
                                                    </Link>
                                                </div>
                                              
                                                <Select
                                                    className="select"
                                                    options={recentlyViewd}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                          
                                            </div>
                                        ))}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Status <span className="text-danger">*</span>
                                                </label>

                                                <Select
                                                    className="select"
                                                    options={status}
                                                    placeholder="Status"
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Deal Value<span className="text-danger"> *</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Currency <span className="text-danger">*</span>
                                                </label>

                                                <Select
                                                    className="select"
                                                    options={currency}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Period <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Period Value <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-block tag-with-img mb-3">
                                                <label className="col-form-label">
                                                    Contact <span className="text-danger">*</span>
                                                </label>
                                                <TagsInput
                                                    value={tags}
                                                    onChange={handleTagsChange}
                                                    inputProps={{ id: 'inputBox5', type: 'text' }}
                                                    tagProps={{ className: 'tag label label-info' }}
                                                    renderTag={renderTag}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Project <span className="text-danger">*</span>
                                                </label>

                                                <TagsInput
                                                    value={tags1}
                                                    onChange={handleChange1}
                                                    inputProps={{
                                                        className: 'input-tags form-control',
                                                        id: 'inputBox6',
                                                        type: 'text',
                                                        name: 'Label',
                                                        defaultValue: 'Divine dran',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Due Date <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Expected Closing Date{" "}
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-block tag-with-img mb-3">
                                                <label className="col-form-label">
                                                    Assignee <span className="text-danger">*</span>
                                                </label>
                                                <TagsInput
                                                    value={tags2}
                                                    onChange={handleTagsChange2}
                                                    inputProps={{ id: 'inputBox5', type: 'text' }}
                                                    tagProps={{ className: 'tag label label-info' }}
                                                    renderTag={renderTag2}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Tags <span className="text-danger">*</span>
                                                </label>
                                                <TagsInput
                                                    value={tags3}
                                                    onChange={handleChange3}
                                                    inputProps={{
                                                        className: 'input-tags form-control',
                                                        id: 'inputBox6',
                                                        type: 'text',
                                                        name: 'Label',
                                                        defaultValue: 'Promotion' 
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Follow-up date <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Source <span className="text-danger">*</span>
                                                </label>

                                                <Select
                                                    className="select"
                                                    options={sourcelist}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Priority <span className="text-danger">*</span>
                                                </label>

                                                <Select
                                                    className="select"
                                                    options={priority}
                                                    placeholder="Select"
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Description <span className="text-danger">*</span>
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows={5}
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-end form-wizard-button">
                                            <button
                                                className="button btn-lights reset-btn"
                                                type="reset"
                                                data-bs-dismiss="modal"
                                            >
                                                Reset
                                            </button>
                                            <Link className="btn btn-primary" to="#">
                                                Save Deal
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Deals */}

               {/* Add Compose */}
               <div
                className="modal custom-modal fade custom-modal-two modal-padding"
                id="add_compose"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Add Compose</h5>
                            <button
                                type="button"
                                className="btn-close position-static"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body p-0">
                            <form action="#">
                                <div className="input-block mb-3">
                                    <input type="email" placeholder="To" className="form-control" />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-block mb-3">
                                            <input
                                                type="email"
                                                placeholder="Cc"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-block mb-3">
                                            <input
                                                type="email"
                                                placeholder="Bcc"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-block mb-3">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-block mb-3">
                                    <div id="summernote" />
                                    <TextEditor/>
                                </div>
                                <div className="input-block mb-3 mb-0">
                                    <div className="text-center">
                                        <button className="btn btn-primary me-1">
                                            <span>Send</span>{" "}
                                            <i className="fa-solid fa-paper-plane m-l-5" />
                                        </button>
                                        <button className="btn btn-success m-l-5 me-1" type="button">
                                            <span>Draft</span>{" "}
                                            <i className="fa-regular fa-floppy-disk m-l-5" />
                                        </button>
                                        <button className="btn btn-success m-l-5 me-1" type="button">
                                            <span>Delete</span>{" "}
                                            <i className="fa-regular fa-trash-can m-l-5" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Compose */}

             {/* Delete Activity */}
  <div className="modal custom-modal fade" id="delete_company" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="success-message text-center">
            <div className="success-popup-icon bg-danger">
              <i className="la la-trash-restore" />
            </div>
            <h3>Are you sure, You want to delete</h3>
            <p> Selected Activity from your Account</p>
            <div className="col-lg-12 text-center form-wizard-button">
              <Link to="#" className="button btn-lights" data-bs-dismiss="modal">Not Now</Link>
              <Link to="/pipeline" className="btn btn-primary" data-bs-dismiss="modal">Okay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Activity */}
        </div>

    )
}

export default CompanyDetailModal
