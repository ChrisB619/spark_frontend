import React from 'react'
import Header from '../../../layout/Header'
import Sidebar from '../../../layout/Sidebar'

const Spinners = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="content-page-header">
                            <h5>Spinner</h5>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="mt-0 header-title">Border spinner</h4>
                                    <p className="mb-4">
                                        Use the border spinners for a lightweight loading indicator.
                                    </p>
                                    <div className="spinner-border m-2" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>{" "}
                        {/* end col */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="mt-0 header-title">Growing spinner</h4>
                                    <p className="mb-4">
                                        If you don’t fancy a border spinner, switch to the grow spinner.
                                        While it doesn’t technically spin, it does repeatedly grow!
                                    </p>
                                    <div className="spinner-grow" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>{" "}
                        {/* end col */}
                    </div>{" "}
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="mt-0 header-title">Colors</h4>
                                    <p className="mb-4">
                                        {" "}
                                        You can use any of our text color utilities on the standard
                                        spinner.
                                    </p>
                                    <div className="spinner-border text-primary m-2" role="status" />
                                    <div className="spinner-border text-secondary m-2" role="status" />
                                    <div className="spinner-border text-success m-2" role="status" />
                                    <div className="spinner-border text-danger m-2" role="status" />
                                    <div className="spinner-border text-warning m-2" role="status" />
                                    <div className="spinner-border text-info m-2" role="status" />
                                    <div className="spinner-border text-light m-2" role="status" />
                                    <div className="spinner-border text-dark m-2" role="status" />
                                    <div className="spinner-border text-blue m-2" role="status" />
                                    <div className="spinner-border text-pink m-2" role="status" />
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>{" "}
                        {/* end col */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="mt-0 header-title">Color Growing spinner</h4>
                                    <p className="mb-4">
                                        {" "}
                                        Here it is in blue, along with the supported variants.
                                    </p>
                                    <div className="spinner-grow text-primary m-2" role="status" />
                                    <div className="spinner-grow text-secondary m-2" role="status" />
                                    <div className="spinner-grow text-success m-2" role="status" />
                                    <div className="spinner-grow text-danger m-2" role="status" />
                                    <div className="spinner-grow text-warning m-2" role="status" />
                                    <div className="spinner-grow text-info m-2" role="status" />
                                    <div className="spinner-grow text-light m-2" role="status" />
                                    <div className="spinner-grow text-dark m-2" role="status" />
                                    <div className="spinner-grow text-blue m-2" role="status" />
                                    <div className="spinner-grow text-pink m-2" role="status" />
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>{" "}
                        {/* end col */}
                    </div>{" "}
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="mt-0 header-title">Alignment</h4>
                                    <p className="mb-4">
                                        Use flexbox utilities, float utilities, or text alignment
                                        utilities to place spinners exactly where you need them in any
                                        situation.
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border" role="status" />
                                    </div>
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>{" "}
                        {/* end col */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="mt-0 header-title">Placement</h4>
                                    <p className="mb-4">
                                        Use <code>flexbox utilities</code>, <code>float utilities</code>,
                                        or <code>text alignment</code> utilities to place spinners exactly
                                        where you need them in any situation.
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <strong>Loading...</strong>
                                        <div
                                            className="spinner-border ms-auto"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>{" "}
                        {/* end col */}
                    </div>{" "}
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="mt-0 header-title">Size</h4>
                                    <p className="mb-4">
                                        Add <code>.spinner-border-sm</code> and
                                        <code>.spinner-border.avatar-**</code>
                                        to make a smaller spinner that can quickly be used within other
                                        components.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div
                                                className="spinner-border avatar-lg text-primary m-2"
                                                role="status"
                                            />
                                            <div
                                                className="spinner-grow avatar-lg text-secondary m-2"
                                                role="status"
                                            />
                                        </div>
                                        {/* end col */}
                                        <div className="col-lg-6">
                                            <div
                                                className="spinner-border avatar-md text-primary m-2"
                                                role="status"
                                            />
                                            <div
                                                className="spinner-grow avatar-md text-secondary m-2"
                                                role="status"
                                            />
                                        </div>
                                        {/* end col */}
                                        <div className="col-lg-6">
                                            <div
                                                className="spinner-border avatar-sm text-primary m-2"
                                                role="status"
                                            />
                                            <div
                                                className="spinner-grow avatar-sm text-secondary m-2"
                                                role="status"
                                            />
                                        </div>
                                        {/* end col */}
                                        <div className="col-lg-6">
                                            <div
                                                className="spinner-border spinner-border-sm m-2"
                                                role="status"
                                            />
                                            <div
                                                className="spinner-grow spinner-grow-sm m-2"
                                                role="status"
                                            />
                                        </div>
                                        {/* end col */}
                                    </div>
                                    {/*end row*/}
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>{" "}
                        {/* end col */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body card-buttons">
                                    <h4 className="mt-0 header-title">Buttons spinner</h4>
                                    <p className="mb-4">
                                        Use spinners within buttons to indicate an action is currently
                                        processing or taking place. You may also swap the text out of the
                                        spinner element and utilize button text as needed.
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="button-list mb-1 mb-sm-0">
                                                <button className="btn btn-primary" type="button" disabled="">
                                                    <span
                                                        className="spinner-border spinner-border-sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="visually-hidden">Loading...</span>
                                                </button>
                                                <button className="btn btn-primary" type="button" disabled="">
                                                    <span
                                                        className="spinner-border spinner-border-sm me-1"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                    Loading...
                                                </button>
                                            </div>
                                        </div>
                                        {/* end col */}
                                        <div className="col-md-6">
                                            <div className="button-list">
                                                <button
                                                    className="btn btn-primary mb-0"
                                                    type="button"
                                                    disabled=""
                                                >
                                                    <span
                                                        className="spinner-grow spinner-grow-sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />{" "}
                                                    <span className="visually-hidden">Loading...</span>
                                                </button>
                                                <button
                                                    className="btn btn-primary mb-0"
                                                    type="button"
                                                    disabled=""
                                                >
                                                    <span
                                                        className="spinner-grow spinner-grow-sm me-1"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                    Loading...
                                                </button>
                                            </div>
                                        </div>
                                        {/* end col */}
                                    </div>
                                    {/* end row */}
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                </div>
            </div>
        </div>
    )
}

export default Spinners
