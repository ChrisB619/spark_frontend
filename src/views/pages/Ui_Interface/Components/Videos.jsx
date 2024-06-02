/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Header from '../../../layout/Header'
import Sidebar from '../../../layout/Sidebar'

const Videos = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="content-page-header">
                            <h5>Video</h5>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="header-title">Responsive embed video 21:9</h4>
                                    <p className="sub-header">
                                        Use class <code>.ratio-21x9</code>
                                    </p>
                                    {/* 21:9 aspect ratio */}
                                    <div className="ratio ratio-21x9">
                                        <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0" />
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="header-title">Responsive embed video 16:9</h4>
                                    <p className="sub-header">
                                        Use class <code>.ratio-16x9</code>
                                    </p>
                                    {/* 16:9 aspect ratio */}
                                    <div className="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?ecver=1" />
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="header-title">Responsive embed video 4:3</h4>
                                    <p className="sub-header">
                                        Use class <code>.ratio-4x3</code>
                                    </p>
                                    {/* 4:3 aspect ratio */}
                                    <div className="ratio ratio-4x3">
                                        <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?ecver=1" />
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="header-title">Responsive embed video 1:1</h4>
                                    <p className="sub-header">
                                        Use class <code>.ratio-1x1</code>
                                    </p>
                                    {/* 1:1 aspect ratio */}
                                    <div className="ratio ratio-1x1">
                                        <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?ecver=1" />
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* end col */}
                    </div>
                    {/* end row */}
                </div>
            </div>

        </div>
    )
}

export default Videos
