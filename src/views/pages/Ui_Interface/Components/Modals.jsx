import React from 'react'
import Header from '../../../layout/Header'
import Sidebar from '../../../layout/Sidebar'
import { Link } from 'react-router-dom'

const Modals = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="content-page-header">
              <h3 className="section-title">Modal</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body card-buttons">
                  <h4 className="header-title">Bootstrap Modals</h4>
                  <p>
                    A rendered modal with header, body, and set of actions in the
                    footer.
                  </p>
                  {/* Standard modal content */}
                  <div
                    id="standard-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="standard-modalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="standard-modalLabel">
                            Modal Heading
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <h6>Text in a modal</h6>
                          <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor
                            ligula.
                          </p>
                          <hr />
                          <h6>Overflowing text to show scroll behavior</h6>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non
                            metus auctor fringilla.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/*  Modal content for the Large example */}
                  <div
                    className="modal fade"
                    id="bs-example-modal-lg"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="myLargeModalLabel">
                            Large modal
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">...</div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <div
                    className="modal fade"
                    id="bs-example-modal-sm"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="mySmallModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="mySmallModalLabel">
                            Small modal
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">...</div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* Full width modal content */}
                  <div
                    id="full-width-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="fullWidthModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-full-width">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="fullWidthModalLabel">
                            Modal Heading
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <h6>Text in a modal</h6>
                          <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor
                            ligula.
                          </p>
                          <hr />
                          <h6>Overflowing text to show scroll behavior</h6>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non
                            metus auctor fringilla.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* Long Content Scroll Modal */}
                  <div
                    className="modal fade"
                    id="scrollable-modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="scrollableModalTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-scrollable"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="scrollableModalTitle">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non
                            metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non
                            metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non
                            metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non
                            metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non
                            metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur
                            et. Donec sed odio dui. Donec ullamcorper nulla non
                            metus auctor fringilla.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <div className="button-list">
                    {/* Standard  modal */}
                    <button
                      type="button"
                      className="btn btn-primary mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#standard-modal"
                    >
                      Standard Modal
                    </button>
                    {/* Large modal */}
                    <button
                      type="button"
                      className="btn btn-info mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#bs-example-modal-lg"
                    >
                      Large Modal
                    </button>
                    {/* Small modal */}
                    <button
                      type="button"
                      className="btn btn-success mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#bs-example-modal-sm"
                    >
                      Small Modal
                    </button>
                    {/* Full width modal */}
                    <button
                      type="button"
                      className="btn btn-primary mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#full-width-modal"
                    >
                      Full width Modal
                    </button>
                    {/* Scrollable modal */}
                    <button
                      type="button"
                      className="btn btn-secondary mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#scrollable-modal"
                    >
                      Scrollable Modal
                    </button>
                  </div>
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body card-buttons">
                  <h4 className="header-title">Modal with Pages</h4>
                  <p>Examples of custom modals.</p>
                  {/* Signup modal content */}
                  <div
                    id="signup-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="text-center mt-2 mb-4">
                            <div className="auth-logo">
                              <Link to="/index" className="logo logo-dark">
                                <span className="logo-lg">
                                  <img
                                    src="assets/img/logo2.png"
                                    alt="Logo"
                                    height={42}
                                  />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <form className="px-3" action="#">
                            <div className="mb-3">
                              <label htmlFor="username" className="form-label">
                                Name
                              </label>
                              <input
                                className="form-control"
                                type="email"
                                id="username"
                                required=""
                                placeholder="Michael Zenaty"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="emailaddress" className="form-label">
                                Email address
                              </label>
                              <input
                                className="form-control"
                                type="email"
                                id="emailaddress"
                                required=""
                                placeholder="john@deo.com"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="password" className="form-label">
                                Password
                              </label>
                              <input
                                className="form-control"
                                type="password"
                                required=""
                                id="password"
                                placeholder="Enter your password"
                              />
                            </div>
                            <div className="mb-3">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheck1"
                                >
                                  I accept <Link to="#">Terms and Conditions</Link>
                                </label>
                              </div>
                            </div>
                            <div className="mb-3 text-center">
                              <button className="btn btn-primary" type="submit">
                                Sign Up Free
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* SignIn modal content */}
                  <div
                    id="login-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="text-center mt-2 mb-4">
                            <div className="auth-logo">
                              <Link to="/admin-dashboard" className="logo logo-dark">
                                <span className="logo-lg">
                                  <img
                                    src="assets/img/logo2.png"
                                    alt="Logo"
                                    height={42}
                                  />
                                </span>
                              </Link>
                            </div>
                          </div>
                          <form action="#" className="px-3">
                            <div className="mb-3">
                              <label htmlFor="emailaddress1" className="form-label">
                                Email address
                              </label>
                              <input
                                className="form-control"
                                type="email"
                                id="emailaddress1"
                                required=""
                                placeholder="john@deo.com"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="password1" className="form-label">
                                Password
                              </label>
                              <input
                                className="form-control"
                                type="password"
                                required=""
                                id="password1"
                                placeholder="Enter your password"
                              />
                            </div>
                            <div className="mb-3">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customCheck2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheck2"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <div className="mb-2 text-center">
                              <button
                                className="btn rounded-pill btn-primary"
                                type="submit"
                              >
                                Sign In
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <div className="button-list">
                    {/* Sign Up modal */}
                    <button
                      type="button"
                      className="btn btn-primary mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#signup-modal"
                    >
                      Sign Up Modal
                    </button>
                    {/* Log In modal */}
                    <button
                      type="button"
                      className="btn btn-info mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#login-modal"
                    >
                      Log In Modal
                    </button>
                  </div>
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body card-buttons">
                  <h4 className="header-title">Modal Position</h4>
                  <p>
                    Specify the position for the modal. You can display modal at
                    top, bottom, center or right of page by specifying classes{" "}
                    <code>modal-top</code>, <code>modal-bottom</code>,{" "}
                    <code>modal-dialog-centered</code> and <code>modal-right</code>{" "}
                    respectively.
                  </p>
                  {/* Top modal content */}
                  <div
                    id="top-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-top">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="topModalLabel">
                            Modal Heading
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <h5>Text in a modal</h5>
                          <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor
                            ligula.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* Right modal content */}
                  <div
                    id="right-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm modal-right">
                      <div className="modal-content">
                        <div className="modal-header border-0">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <div className="text-center">
                            <h4 className="mt-0">Text in a modal</h4>
                            <p>
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </p>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* Bottom modal content */}
                  <div
                    id="bottom-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm modal-bottom">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="bottomModalLabel">
                            Modal Heading
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <h5>Text in a modal</h5>
                          <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor
                            ligula.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* Center modal content */}
                  <div
                    className="modal fade"
                    id="centermodal"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="myCenterModalLabel">
                            Center modal
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <h5>Overflowing text to show scroll behavior</h5>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at
                            eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor.
                          </p>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <div className="button-list">
                    {/* Top modal */}
                    <button
                      type="button"
                      className="btn btn-secondary mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#top-modal"
                    >
                      Top Modal
                    </button>
                    {/* Bottom modal */}
                    <button
                      type="button"
                      className="btn btn-secondary mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#bottom-modal"
                    >
                      Bottom Modal
                    </button>
                    {/* Center modal */}
                    <button
                      type="button"
                      className="btn btn-secondary mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#centermodal"
                    >
                      Center modal
                    </button>
                    {/* Right modal */}
                    <button
                      type="button"
                      className="btn btn-secondary mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#right-modal"
                    >
                      Rightbar Modal
                    </button>
                  </div>
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body card-buttons">
                  <h4 className="header-title">Modal based Alerts</h4>
                  <p>
                    Show different contexual alert messages using modal component
                  </p>
                  {/* Success Alert Modal */}
                  <div
                    id="success-alert-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-success">
                        <div className="modal-body p-4">
                          <div className="text-center">
                            <i className="dripicons-checkmark h1 text-white" />
                            <h4 className="mt-2 text-white">Well Done!</h4>
                            <p className="mt-3 text-white">
                              Cras mattis consectetur purus sit amet fermentum. Cras
                              justo odio, dapibus ac facilisis in, egestas eget
                              quam.
                            </p>
                            <button
                              type="button"
                              className="btn btn-light my-2"
                              data-bs-dismiss="modal"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* Info Alert Modal */}
                  <div
                    id="info-alert-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content">
                        <div className="modal-body p-4">
                          <div className="text-center">
                            <i className="dripicons-information h1 text-info" />
                            <h4 className="mt-2">Heads up!</h4>
                            <p className="mt-3">
                              Cras mattis consectetur purus sit amet fermentum. Cras
                              justo odio, dapibus ac facilisis in, egestas eget
                              quam.
                            </p>
                            <button
                              type="button"
                              className="btn btn-info my-2"
                              data-bs-dismiss="modal"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* Warning Alert Modal */}
                  <div
                    id="warning-alert-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content">
                        <div className="modal-body p-4">
                          <div className="text-center">
                            <i className="dripicons-warning h1 text-warning" />
                            <h4 className="mt-2">Incorrect Information</h4>
                            <p className="mt-3">
                              Cras mattis consectetur purus sit amet fermentum. Cras
                              justo odio, dapibus ac facilisis in, egestas eget
                              quam.
                            </p>
                            <button
                              type="button"
                              className="btn btn-warning my-2"
                              data-bs-dismiss="modal"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* Danger Alert Modal */}
                  <div
                    id="danger-alert-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-danger">
                        <div className="modal-body p-4">
                          <div className="text-center">
                            <i className="dripicons-wrong h1 text-white" />
                            <h4 className="mt-2 text-white">Oh snap!</h4>
                            <p className="mt-3 text-white">
                              Cras mattis consectetur purus sit amet fermentum. Cras
                              justo odio, dapibus ac facilisis in, egestas eget
                              quam.
                            </p>
                            <button
                              type="button"
                              className="btn btn-light my-2"
                              data-bs-dismiss="modal"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <div className="button-list">
                    {/* Success Alert modal */}
                    <button
                      type="button"
                      className="btn btn-success mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#success-alert-modal"
                    >
                      Success Alert
                    </button>
                    {/* Info Alert modal */}
                    <button
                      type="button"
                      className="btn btn-info mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#info-alert-modal"
                    >
                      Info Alert
                    </button>
                    {/* Warning Alert modal */}
                    <button
                      type="button"
                      className="btn btn-warning mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#warning-alert-modal"
                    >
                      Warning Alert
                    </button>
                    {/* Danger Alert modal */}
                    <button
                      type="button"
                      className="btn btn-danger mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#danger-alert-modal"
                    >
                      Danger Alert
                    </button>
                  </div>
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body card-buttons">
                  <h4 className="header-title">Multiple Modal</h4>
                  <p>
                    Display a series of modals one by one to guide your users on
                    multiple aspects or take step wise input.
                  </p>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModalToggle"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel"
                    tabIndex={-1}
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="exampleModalToggleLabel">
                            Modal 1
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          Show a second modal and hide this one with the button
                          below.
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-primary"
                            data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal"
                            data-bs-dismiss="modal"
                          >
                            Open second modal
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModalToggle2"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel2"
                    tabIndex={-1}
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="exampleModalToggleLabel2">
                            Modal 2
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          Hide this modal and show the first with the button below.
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-primary"
                            data-bs-target="#exampleModalToggle"
                            data-bs-toggle="modal"
                            data-bs-dismiss="modal"
                          >
                            Back to first
                          </button>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <Link
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    to="#exampleModalToggle"
                    role="button"
                  >
                    Open first modal
                  </Link>
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body card-buttons">
                  <h4 className="header-title">Custom Modals</h4>
                  <p>Examples of custom modals.</p>
                  {/* sample modal content */}
                  <div
                    id="con-close-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">
                            Modal Content is Responsive
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body p-4">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="field-1" className="form-label">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="field-1"
                                  placeholder="John"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="field-2" className="form-label">
                                  Surname
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="field-2"
                                  placeholder="Doe"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="mb-3">
                                <label htmlFor="field-3" className="form-label">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="field-3"
                                  placeholder="Address"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label htmlFor="field-4" className="form-label">
                                  City
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="field-4"
                                  placeholder="Boston"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label htmlFor="field-5" className="form-label">
                                  Country
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="field-5"
                                  placeholder="United States"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label htmlFor="field-6" className="form-label">
                                  Zip
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="field-6"
                                  placeholder={123456}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="">
                                <label htmlFor="field-7" className="form-label">
                                  Personal Info
                                </label>
                                <textarea
                                  className="form-control"
                                  id="field-7"
                                  placeholder="Write something about yourself"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary waves-effect"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-info waves-effect waves-light"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.modal */}
                  <div
                    id="accordion-modal"
                    className="modal fade"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content p-0">
                        <div id="accordion">
                          <div className="card mb-0">
                            <div className="card-header" id="headingOne">
                              <h5 className="m-0">
                                <Link
                                  to="#collapseOne"
                                  className="text-dark"
                                  data-bs-toggle="collapse"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  Collapsible Group Item #1
                                </Link>
                              </h5>
                            </div>
                            <div
                              id="collapseOne"
                              className="collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordion"
                            >
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur
                                butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt
                                you probably haven't heard of them accusamus labore
                                sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card mb-0">
                            <div className="card-header" id="headingTwo">
                              <h5 className="m-0">
                                <Link
                                  to="#collapseTwo"
                                  className="collapsed text-dark"
                                  data-bs-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  Collapsible Group Item #2
                                </Link>
                              </h5>
                            </div>
                            <div
                              id="collapseTwo"
                              className="collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordion"
                            >
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur
                                butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt
                                you probably haven't heard of them accusamus labore
                                sustainable VHS.
                              </div>
                            </div>
                          </div>
                          <div className="card mb-0">
                            <div className="card-header" id="headingThree">
                              <h5 className="m-0">
                                <Link
                                  to="#collapseThree"
                                  className="collapsed text-dark"
                                  data-bs-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  Collapsible Group Item #3
                                </Link>
                              </h5>
                            </div>
                            <div
                              id="collapseThree"
                              className="collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordion"
                            >
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Ad vegan excepteur
                                butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt
                                you probably haven't heard of them accusamus labore
                                sustainable VHS.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                  </div>
                  {/* /.modal */}
                  <div className="button-list">
                    {/* Responsive modal */}
                    <button
                      type="button"
                      className="btn btn-success waves-effect waves-light mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#con-close-modal"
                    >
                      Responsive Modal
                    </button>
                    {/* Accordion modal */}
                    <button
                      type="button"
                      className="btn btn-secondary waves-effect waves-light mt-1 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#accordion-modal"
                    >
                      Accordion in Modal
                    </button>
                  </div>
                </div>
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body card-buttons">
                  <h4 className="header-title">Static backdrop</h4>
                  <p>
                    When backdrop is set to static, the modal will not close when
                    clicking outside it. Click the button below to try it.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Launch static backdrop modal
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck
                          quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                          tempor, sunt aliqua put a bird on it squid single-origin
                          coffee nulla assumenda shoreditch et.
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Wrapper */}
        </div>
      </div>
    </div>
  )
}

export default Modals
