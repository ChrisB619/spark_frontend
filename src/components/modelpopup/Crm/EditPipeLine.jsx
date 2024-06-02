import React from 'react'
import { Link } from 'react-router-dom'
import { avatar1, avatar21 } from '../../../Routes/ImagePath'

const EditPipeLine = () => {
    return (
        <div>
            {/* Add Pipeline */}
            <div
                className="modal custom-modal fade custom-modal-two modal-padding"
                id="edit_pipeline"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Edit New Pipeline</h5>
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
                            <form action="/pipeline">
                                <div className="contact-input-set">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-block mb-3">
                                                <label className="col-form-label">
                                                    Pipeline Name <span className="text-danger">*</span>
                                                </label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="pipeline-modal-head d-flex justify-content-between mb-3">
                                                <h4>Pipeline Stages</h4>
                                                <Link
                                                    to="#"
                                                    className="add-stage"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#add_stage"
                                                >
                                                    <i className="la la-plus-square me-2" />
                                                    Add New
                                                </Link>
                                            </div>
                                            <ul className="pipeline-stages">
                                                <li>
                                                    <p>
                                                        <i className="la la-grip-vertical" />
                                                        Inpipeline
                                                    </p>
                                                    <div className="edit-delete-stage">
                                                        <Link
                                                            to="#"
                                                            className="edit-stage"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#edit_stage"
                                                        >
                                                            <i className="la la-edit me-2" />
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="delete-stage"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#delete_stage"
                                                        >
                                                            <i className="la la-trash-alt me-2" />
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>
                                                        <i className="la la-grip-vertical" />
                                                        Follow Up
                                                    </p>
                                                    <div className="edit-delete-stage">
                                                        <Link
                                                            to="#"
                                                            className="edit-stage"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#edit_stage"
                                                        >
                                                            <i className="la la-edit me-2" />
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="delete-stage"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#delete_stage"
                                                        >
                                                            <i className="la la-trash-alt me-2" />
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>
                                                        <i className="la la-grip-vertical" />
                                                        Schedule service
                                                    </p>
                                                    <div className="edit-delete-stage">
                                                        <Link
                                                            to="#"
                                                            className="edit-stage"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#edit_stage"
                                                        >
                                                            <i className="la la-edit me-2" />
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="delete-stage"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#delete_stage"
                                                        >
                                                            <i className="la la-trash-alt me-2" />
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="pipeline-modal-head input-blocks add-products">
                                                <h4 className="mb-3">Access</h4>
                                                <div className="access-info-tab">
                                                    <ul
                                                        className="nav nav-pills"
                                                        id="pills-tab"
                                                        role="tablist"
                                                    >
                                                        <li className="nav-item" role="presentation">
                                                            <span
                                                                className="custom_radio mb-0"
                                                                id="pills-public-tab"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#pills-public"
                                                                role="tab"
                                                                aria-controls="pills-public"
                                                                aria-selected="true"
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    className="form-control"
                                                                    name="public"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="checkmark" /> All
                                                            </span>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <span
                                                                className="custom_radio mb-0 active"
                                                                id="pills-select-people-tab"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#pills-select-people"
                                                                role="tab"
                                                                aria-controls="pills-select-people"
                                                                aria-selected="false"
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    className="form-control"
                                                                    name="select-people"
                                                                />
                                                                <span className="checkmark" /> Select People
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-content" id="pills-tabContent2">
                                                <div
                                                    className="tab-pane fade"
                                                    id="pills-public"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-public-tab"
                                                ></div>
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="pills-select-people"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-select-people-tab"
                                                >
                                                    <ul className="person-selected">
                                                        <li>
                                                            <div className="person-profile">
                                                                <Link to="#" className="profile-pic">
                                                                    <img
                                                                        src={avatar21}
                                                                        alt="Img"
                                                                    />
                                                                    Vaughan
                                                                </Link>
                                                            </div>
                                                            <Link to="#" className="remove-person">
                                                                Remove
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <div className="person-profile">
                                                                <Link to="#" className="profile-pic">
                                                                    <img
                                                                        src={avatar1}
                                                                        alt="Img"
                                                                    />
                                                                    Jessica
                                                                </Link>
                                                            </div>
                                                            <Link to="#" className="remove-person">
                                                                Remove
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
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
                                            <Link className="btn btn-primary" to="/pipeline">
                                                Save Pipeline
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Pipeline */}
            {/* Add Stage */}
            <div
                className="modal custom-modal fade modal-padding"
                id="add_stage"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Add New Stage</h5>
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
                            <form action="/pipeline">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-block mb-3">
                                            <label className="col-form-label">
                                                Stage Name <span className="text-danger">*</span>
                                            </label>
                                            <input className="form-control" type="text" />
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
                                            Save Stage
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Stage */}
            {/* Edit Stage */}
            <div
                className="modal custom-modal fade modal-padding"
                id="edit_stage"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Edit Stage</h5>
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
                            <form action="/pipeline">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-block mb-3">
                                            <label className="col-form-label">
                                                Stage Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                defaultValue="Win"
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
                                        <button className="btn btn-primary" type="submit">
                                            Save Stage
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Edit Stage */}
            {/* Delete Pipeline */}
            <div className="modal custom-modal fade" id="delete_stage" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="success-message text-center">
                                <div className="success-popup-icon bg-danger">
                                    <i className="la la-trash-restore" />
                                </div>
                                <h3>Are you sure, You want to delete</h3>
                                <p>Stage ”Inpipeline” from your Account</p>
                                <div className="col-lg-12 text-center form-wizard-button">
                                    <Link to="#" className="button btn-lights" data-bs-dismiss="modal">
                                        Not Now
                                    </Link>
                                    <Link to="/pipeline" className="btn btn-primary" data-bs-dismiss="modal">
                                        Okay
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Delete Pipeline */}


        </div>

    )
}

export default EditPipeLine
