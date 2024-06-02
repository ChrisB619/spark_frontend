import React from 'react'
import DefaultEditor from 'react-simple-wysiwyg'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const SendMail = () => {
    return (
        <div>
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
                                <DefaultEditor />

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
        </div>

    )
}

export default SendMail
