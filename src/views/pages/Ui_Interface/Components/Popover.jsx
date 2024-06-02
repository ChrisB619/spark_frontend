/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../../../layout/Header'
import Sidebar from '../../../layout/Sidebar'

const Popover = () => {
  return (
    <div>
    <>
    <Header/>
    <Sidebar/>
    {/* Page Wrapper */}
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="content-page-header">
            <h5>Popover</h5>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Popover */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Basic Popover</h5>
              </div>
              <div className="card-body card-buttons">
                <div className="popover-list">
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="popover"
                    title="Popover title"
                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                  >
                    Click to toggle popover
                  </button>
                  <a 
                    className="example-popover btn btn-primary me-1"
                    tabIndex={0}
                    role="button"
                    data-bs-toggle="popover"
                    data-bs-trigger="focus"
                    title="Popover title"
                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                  >
                    Dismissible popover
                  </a>
                  <button
                    className="example-popover btn btn-primary me-1"
                    type="button"
                    data-bs-trigger="hover"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="bottom"
                    title="Popover title"
                    data-offset="-20px -20px"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  >
                    On Hover Tooltip
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Popover */}
          {/* Popover */}
          <div className="col-md-12">
            <div className="card mb-0">
              <div className="card-header">
                <h5 className="card-title">Direction Popover</h5>
              </div>
              <div className="card-body card-buttons">
                <div className="popover-list">
                  <button
                    className="example-popover btn btn-primary me-1"
                    type="button"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="top"
                    title="Popover title"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  >
                    Popover on top
                  </button>
                  <button
                    className="example-popover btn btn-primary me-1"
                    type="button"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="right"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  >
                    Popover on right
                  </button>
                  <button
                    className="example-popover btn btn-primary me-1"
                    type="button"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="bottom"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  >
                    Popover on bottom
                  </button>
                  <button
                    className="example-popover btn btn-primary me-1"
                    type="button"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  >
                    Popover on left
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Popover */}
        </div>
      </div>
    </div>
    {/* /Page Wrapper */}
  </>
  
    </div>
  )
}

export default Popover
