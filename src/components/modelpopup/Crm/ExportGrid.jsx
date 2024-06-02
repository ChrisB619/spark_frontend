import React from 'react'

const ExportGrid = () => {
    return (
        <>
            {/* Export */}
            <div
                className="modal custom-modal fade modal-padding"
                id="export"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border justify-content-between p-0">
                            <h5 className="modal-title">Export</h5>
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
                            <form action="/contact-grid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-block mb-3">
                                            <h5 className="mb-3">Export</h5>
                                            <div className="status-radio-btns d-flex">
                                                <div className="people-status-radio">
                                                    <input
                                                        type="radio"
                                                        className="status-radio"
                                                        id="pdf"
                                                        name="export-type"
                                                        defaultChecked=""
                                                    />
                                                    <label htmlFor="pdf">Person</label>
                                                </div>
                                                <div className="people-status-radio">
                                                    <input
                                                        type="radio"
                                                        className="status-radio"
                                                        id="excel"
                                                        name="export-type"
                                                    />
                                                    <label htmlFor="excel">Organization</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <h4 className="mb-3">Filters</h4>
                                        <div className="input-block mb-3">
                                            <label className="col-form-label">
                                                Fields <span className="text-danger">*</span>
                                            </label>
                                            <select className="select">
                                                <option>All Fields</option>
                                                <option>contact</option>
                                                <option>Company</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-block mb-3">
                                            <label className="col-form-label">
                                                From Date <span className="text-danger">*</span>
                                            </label>
                                            <div className="cal-icon">
                                                <input
                                                    className="form-control floating datetimepicker"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-block mb-3">
                                            <label className="col-form-label">
                                                To Date <span className="text-danger">*</span>
                                            </label>
                                            <div className="cal-icon">
                                                <input
                                                    className="form-control floating datetimepicker"
                                                    type="text"
                                                />
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
                                        <button className="btn btn-primary" type="submit">
                                            Export Now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Export */}
        </>

    )
}

export default ExportGrid
