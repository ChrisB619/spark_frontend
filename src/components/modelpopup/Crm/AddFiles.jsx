import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';

const AddFiles = () => {
    const [inputSets, setInputSets] = useState([
        {
          id: 1,
          namePlaceholder: 'Enter Name',
          emailPlaceholder: 'Email Address',
        },
      ]);
    
      const handleAddInputSet = () => {
        const newInputSet = {
          id: inputSets.length + 1,
          namePlaceholder: 'Enter Name',
          emailPlaceholder: 'Email Address',
        };
        setInputSets([...inputSets, newInputSet]);
      };
    
      const handleRemoveInputSet = (id) => {
        const updatedInputSets = inputSets.filter((inputSet) => inputSet.id !== id);
        setInputSets(updatedInputSets);
      };
      const [fieldOne, setFieldOne]=useState(true);
      const [fieldTwo, setFieldTwo]=useState();
      const FieldsetTwo=()=>{
        setFieldOne(false)
        setFieldTwo(true)
       
    }
    const deals = [
        { value: 'select', label: 'Select' },
        { value: 'Collins', label: 'Collins' },
        { value: 'Wisozk', label: 'Wisozk' },
        { value: 'Walter', label: 'Walter' },
    ];
    const documenttype = [
        { value: 'select', label: 'Select' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Proposal', label: 'Proposal' },
        { value: 'Quote', label: 'Quote' },
    ];
    const ownerlist = [
        { value: 'Select', label: 'Select' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Jackson Daniel', label: 'Jackson Daniel' },
    ];
    const rs = [
        { value: 'Select', label: 'Select' },
        { value: 'en', label: 'en' },
        { value: 'es', label: 'es' },
        { value: 'ru', label: 'ru' },
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
        <div>
            {/* Add File */}
            <div
                className="modal custom-modal fade custom-modal-two modal-padding"
                id="new_file"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Create New File</h5>
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
                            <div className="add-info-fieldset">
                                <div className="add-details-wizard">
                                    <ul className="progress-bar-wizard">
                                    <li  className={fieldOne ? "active" : ""}>
                                    <span>
                                                <i className="la la-file" />
                                            </span>
                                            <div className="multi-step-info">
                                                <h6>Basic Info</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="la la-plus-circle" />
                                            </span>
                                            <div className="multi-step-info">
                                                <h6>Add Recipient</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <fieldset id="first-field-file" style={{ display: fieldOne ? "block" : "none" }}>
                                    <form action="/contact-details">
                                        <div className="contact-input-set">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Choose Deal <span className="text-danger">*</span>
                                                        </label>
                                                        
                                                        <Select
                                                        className="select"
                                                        options={deals}
                                                        placeholder="Select"
                                                        styles={customStyles}
                                                    />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Document Type <span className="text-danger">*</span>
                                                        </label>
                                                        
                                                        <Select
                                                        className="select"
                                                        options={documenttype}
                                                        placeholder="Select"
                                                        styles={customStyles}
                                                    />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Owner <span className="text-danger">*</span>
                                                        </label>
                                                        
                                                        <Select
                                                        className="select"
                                                        options={ownerlist}
                                                        placeholder="Select"
                                                        styles={customStyles}
                                                    />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Title <span className="text-danger"> *</span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Locale <span className="text-danger">*</span>
                                                        </label>
                                                        
                                                        <Select
                                                        className="select"
                                                        options={rs}
                                                        placeholder="Select"
                                                        styles={customStyles}
                                                    />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="signature-wrap">
                                                        <h4>Signature</h4>
                                                        <ul className="nav sign-item">
                                                            <li className="nav-item">
                                                                <span
                                                                    className=" mb-0"
                                                                    data-bs-toggle="tab"
                                                                    data-bs-target="#nosign"
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="sign1"
                                                                        name="email"
                                                                    />
                                                                    <label htmlFor="sign1">
                                                                        <span className="sign-title">No Signature</span>
                                                                        This document does not require a signature
                                                                        before acceptance.
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="nav-item">
                                                                <span
                                                                    className="active mb-0"
                                                                    data-bs-toggle="tab"
                                                                    data-bs-target="#use-esign"
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="sign2"
                                                                        name="email"
                                                                        defaultChecked=""
                                                                    />
                                                                    <label htmlFor="sign2">
                                                                        <span className="sign-title">
                                                                            Use e-signature
                                                                        </span>
                                                                        This document require e-signature before
                                                                        acceptance.
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content">
                                                            <div className="tab-pane show active" id="use-esign">
                                                                <div className="input-block mb-0">
                                                                    <label className="col-form-label">
                                                                        Document Signers{" "}
                                                                        <span className="text-danger">*</span>
                                                                    </label>
                                                                </div>
                                                                <div className="sign-content">
                                                                {inputSets.map((inputSet, index) => (
                                                                    <div className="row" key={inputSet.id}>
                                                                      <div className="col-md-6">
                                                                        <div className="input-block mb-3">
                                                                          <input className="form-control" type="text" placeholder={inputSet.namePlaceholder} />
                                                                        </div>
                                                                      </div>
                                                                      <div className="col-md-6">
                                                                        <div className="d-flex align-items-center">
                                                                          <div className="input-block float-none mb-3 me-3">
                                                                            <input className="form-control" type="text" placeholder={inputSet.emailPlaceholder} />
                                                                          </div>
                                                                          <div className="input-btn mb-3">
                                                                            <Link
                                                                              to="#"
                                                                              className="add-sign"
                                                                              onClick={index === 0 ? handleAddInputSet : () => handleRemoveInputSet(inputSet.id)}
                                                                            >
                                                                              <i className={index === 0 ? 'las la-plus-circle' : 'las la-trash'} />
                                                                            </Link>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  ))}
                                                            
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Content <span className="text-danger"> *</span>
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            rows={3}
                                                            placeholder="Add Content"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 text-end form-wizard-button">
                                                    <button
                                                        className="button btn-lights reset-btn"
                                                        type="reset"
                                                    >
                                                        Reset
                                                    </button>
                                                    <button
                                                        className="btn btn-primary wizard-next-btn"
                                                        type="button"  onClick={FieldsetTwo}
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </fieldset>
                                <fieldset style={{ display: fieldTwo ? "block" : "none" }}>
                                    <form>
                                        <div className="contact-input-set">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="signature-wrap">
                                                        <h4 className="mb-2">
                                                            Send the document to following signers
                                                        </h4>
                                                        <p>In order to send the document to the signers</p>
                                                        <div className="input-block mb-0">
                                                            <label className="col-form-label">
                                                                Recipients (Additional recipients)
                                                            </label>
                                                        </div>
                                                        <div className="sign-content">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="input-block mb-3">
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            placeholder="Enter Name"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="input-block float-none mb-3 me-3">
                                                                            <input
                                                                                className="form-control"
                                                                                type="text"
                                                                                placeholder="Email Address"
                                                                            />
                                                                        </div>
                                                                        <div className="input-btn mb-3">
                                                                            <Link
                                                                                to="#"
                                                                                className="add-sign"
                                                                            >
                                                                                <i className="las la-plus-circle" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Message Subject{" "}
                                                            <span className="text-danger"> *</span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Subject"
                                                        />
                                                    </div>
                                                    <div className="input-block mb-3">
                                                        <label className="col-form-label">
                                                            Message Text <span className="text-danger"> *</span>
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            rows={3}
                                                            placeholder="Your document is ready"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <button className="btn btn-lighter mb-3">Send Now</button>
                                                    <div className="send-success">
                                                        <p>
                                                            <i className="las la-check-circle" /> Document Sent
                                                            successfully to the Selected Recipients
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 text-end form-wizard-button">
                                                    <button
                                                        className="button btn-lights reset-btn"
                                                        type="reset"
                                                    >
                                                        Reset
                                                    </button>
                                                    <button  
                                                        className="btn btn-primary"
                                                        type="button"
                                                        data-bs-dismiss="modal"
                                                       
                                                    >
                                                        Save &amp; Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add File */}
        </div>

    )
}

export default AddFiles
