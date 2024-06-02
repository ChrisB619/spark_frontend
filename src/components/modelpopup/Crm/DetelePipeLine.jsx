import React from 'react'
import { Link } from 'react-router-dom'

const DetelePipeLine = () => {
    return (
        <div>
            {/* Delete Pipeline */}
            <div className="modal custom-modal fade" id="delete_pipeline" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="success-message text-center">
                                <div className="success-popup-icon bg-danger">
                                    <i className="la la-trash-restore" />
                                </div>
                                <h3>Are you sure, You want to delete</h3>
                                <p>Pipeline ”Sales” from your Account</p>
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

export default DetelePipeLine
