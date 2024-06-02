import React from 'react'
import { Link } from 'react-router-dom'

const AddNotes = () => {
    return (
        <>
            {/* Add Note */}
            <div
                className="modal custom-modal fade modal-padding"
                id="add_notes"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border align-items-center justify-content-between p-0">
                            <h5 className="modal-title">Add Note</h5>
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
                            <form>
                                <div className="input-block mb-3">
                                    <label className="col-form-label">
                                        Title <span className="text-danger"> *</span>
                                    </label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="input-block mb-3">
                                    <label className="col-form-label">
                                        Note <span className="text-danger"> *</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows={4}
                                        placeholder="Add text"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="input-block mb-3">
                                    <label className="col-form-label">
                                        Attachment <span className="text-danger"> *</span>
                                    </label>
                                    <div className="drag-upload">
                                        <input type="file" />
                                        <div className="img-upload">
                                            <i className="las la-file-import" />
                                            <p>Drag &amp; Drop your files</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-block mb-3">
                                    <label className="col-form-label">Uploaded Files</label>
                                    <div className="upload-file">
                                        <h6>Projectneonals teyys.xls</h6>
                                        <p>4.25 MB</p>
                                        <div className="progress">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p>45%</p>
                                    </div>
                                    <div className="upload-file upload-list">
                                        <div>
                                            <h6>Projectneonals teyys.xls</h6>
                                            <p>4.25 MB</p>
                                        </div>
                                        <Link to="#" className="text-danger">
                                            <i className="las la-trash" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-end form-wizard-button">
                                    <button className="button btn-lights reset-btn" type="reset" data-bs-dismiss="modal">
                                        Reset
                                    </button>
                                    <Link className="btn btn-primary" to="#" data-bs-dismiss="modal">
                                        Save Notes
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Note */}
        </>

    )
}

export default AddNotes
