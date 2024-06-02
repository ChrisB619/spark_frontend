import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar_02, PlaceHolder } from '../../../../../Routes/ImagePath'

const EmailView = () => {
    return (
        <div>
        <div className="page-wrapper">

            {/* Page Content */}
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">View Message</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/admin-dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">View Message</li>
                            </ul>
                        </div>
                        <div className="col-auto float-end ms-auto">
                            <Link to="/compose" className="btn add-btn">
                                <i className="fa-solid fa-plus" /> Compose
                            </Link>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card mb-0">
                            <div className="card-body">
                                <div className="mailview-content">
                                    <div className="mailview-header">
                                        <div className="row">
                                            <div className="col-sm-9">
                                                <div className="text-ellipsis m-b-10">
                                                    <span className="mail-view-title">
                                                        HRMS Bootstrap Admin Template
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="mail-view-action">
                                                    <div className="btn-group">
                                                        <button
                                                            type="button"
                                                            className="btn btn-white btn-sm"
                                                            data-bs-toggle="tooltip"
                                                            title="Delete"
                                                        >
                                                            {" "}
                                                            <i className="fa-regular fa-trash-can" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-white btn-sm"
                                                            data-bs-toggle="tooltip"
                                                            title="Reply"
                                                        >
                                                            {" "}
                                                            <i className="fa-solid fa-reply" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-white btn-sm"
                                                            data-bs-toggle="tooltip"
                                                            title="Forward"
                                                        >
                                                            {" "}
                                                            <i className="fa fa-share" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-white btn-sm"
                                                        data-bs-toggle="tooltip"
                                                        title="Print"
                                                    >
                                                        {" "}
                                                        <i className="fa-solid fa-print" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sender-info">
                                            <div className="sender-img">
                                                <img
                                                    width={40}
                                                    src={Avatar_02}
                                                    alt="img"
                                                    className="rounded-circle"
                                                />
                                            </div>
                                            <div className="receiver-details float-start">
                                                <span className="sender-name">
                                                    John Doe (johnjoe@example.com)
                                                </span>
                                                <span className="receiver-name">
                                                    to
                                                    <span>me</span>, <span>Richard</span>, <span>Paul</span>
                                                </span>
                                            </div>
                                            <div className="mail-sent-time">
                                                <span className="mail-time">18 Feb 2019 9:42 AM</span>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                    </div>
                                    <div className="mailview-inner">
                                        <p>Hello Richard,</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                        <p>
                                            Thanks,
                                            <br />
                                            John Doe
                                        </p>
                                    </div>
                                </div>
                                <div className="mail-attachments">
                                    <p>
                                        <i className="fa-solid fa-paperclip" /> 2 Attachments -{" "}
                                        <Link to="#">View all</Link> | <Link to="#">Download all</Link>
                                    </p>
                                    <ul className="attachments clearfix">
                                        <li>
                                            <div className="attach-file">
                                                <i className="fa-regular fa-file-pdf" />
                                            </div>
                                            <div className="attach-info">
                                                {" "}
                                                <Link to="#" className="attach-filename">
                                                    daily_meeting.pdf
                                                </Link>{" "}
                                                <div className="attach-fileize"> 842 KB</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="attach-file">
                                                <i className="fa-regular fa-file-word" />
                                            </div>
                                            <div className="attach-info">
                                                {" "}
                                                <Link to="#" className="attach-filename">
                                                    documentation.docx
                                                </Link>{" "}
                                                <div className="attach-fileize"> 2,305 KB</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="attach-file">
                                                <img src={PlaceHolder} alt="Attachment" />
                                            </div>
                                            <div className="attach-info">
                                                {" "}
                                                <Link to="#" className="attach-filename">
                                                    webdesign.png
                                                </Link>{" "}
                                                <div className="attach-fileize"> 1.42 MB</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="attach-file">
                                                <img src={PlaceHolder} alt="Attachment" />
                                            </div>
                                            <div className="attach-info">
                                                {" "}
                                                <Link to="#" className="attach-filename">
                                                    webdevelopment.png
                                                </Link>{" "}
                                                <div className="attach-fileize"> 1.1 MB</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mailview-footer">
                                    <div className="row">
                                        <div className="col-sm-6 left-action">
                                            <button type="button" className="btn btn-white me-1">
                                                <i className="fa-solid fa-reply" /> Reply
                                            </button>
                                            <button type="button" className="btn btn-white">
                                                <i className="fa fa-share" /> Forward
                                            </button>
                                        </div>
                                        <div className="col-sm-6 right-action">
                                            <button type="button" className="btn btn-white me-1">
                                                <i className="fa-solid fa-print" /> Print
                                            </button>
                                            <button type="button" className="btn btn-white">
                                                <i className="fa-regular fa-trash-can" /> Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
        </div>
        </div>

    )
}

export default EmailView
