import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';

const CreateEmail = () => {
    const recentlyViewd = [
        { value: 'Gmail', label: 'Gmail' },
        { value: 'Outlook', label: 'Outlook' },
        { value: 'Imap', label: 'Imap' },
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
            {/* Connect Account */}
            <div
                className="modal custom-modal fade modal-padding"
                id="create_email"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border align-items-center justify-content-between p-0">
                            <h5 className="modal-title">Connect Account</h5>
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
                            <div className="input-block mb-3">
                                <label className="col-form-label">
                                    Account type <span className="text-danger"> *</span>
                                </label>

                                <Select
                                    className="select"
                                    options={recentlyViewd}
                                    placeholder="Select"
                                    styles={customStyles}
                                />
                            </div>
                            <div className="input-block mb-3">
                                <h5 className="mb-3">Sync emails from</h5>
                                <div className="sync-radio">
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            className="status-radio"
                                            id="test1"
                                            name="radio-group"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="test1">Now</label>
                                    </div>
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            className="status-radio"
                                            id="test2"
                                            name="radio-group"
                                        />
                                        <label htmlFor="test2">1 Month Ago</label>
                                    </div>
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            className="status-radio"
                                            id="test3"
                                            name="radio-group"
                                        />
                                        <label htmlFor="test3">3 Month Ago</label>
                                    </div>
                                    <div className="radio-item">
                                        <input
                                            type="radio"
                                            className="status-radio"
                                            id="test4"
                                            name="radio-group"
                                        />
                                        <label htmlFor="test4">6 Month Ago</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 text-end form-wizard-button">
                                <button
                                    className="button btn-lights reset-btn"
                                    data-bs-dismiss="modal"
                                    type="reset"
                                >
                                    Reset
                                </button>
                                <button
                                    className="btn btn-primary wizard-next-btn"
                                    data-bs-target="#success_mail"
                                    data-bs-toggle="modal"
                                    data-bs-dismiss="modal"
                                    type="button"
                                >
                                    Connect Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Create Call Log */}
            {/* Success Contact */}
            <div className="modal custom-modal fade" id="success_mail" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="success-message text-center">
                                <div className="success-popup-icon">
                                    <i className="la la-envelope-open" />
                                </div>
                                <h3>Email Connected Successfully!!!</h3>
                                <p>
                                    Email Account is configured with “example@example.com”. Now you
                                    can access email.
                                </p>
                                <div className="col-lg-12 text-center form-wizard-button">
                                    <Link to="/contact-details" className="btn btn-primary">
                                        Go to email
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Success Contact */}
        </div>

    )
}

export default CreateEmail
