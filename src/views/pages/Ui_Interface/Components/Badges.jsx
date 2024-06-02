import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../layout/Header'
import Sidebar from '../../../layout/Sidebar'
import { Avatar_01 } from '../../../../Routes/ImagePath'

const Badges = () => {
    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <Header />
                    <Sidebar />
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="content-page-header">
                            <h5>Badges</h5>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Badges</h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge bg-primary">Primary</span>
                                        <span className="badge bg-secondary">Secondary</span>
                                        <span className="badge bg-success">Success</span>
                                        <span className="badge bg-info">Info</span>
                                        <span className="badge bg-warning">Warning</span>
                                        <span className="badge bg-danger">Danger</span>
                                        <span className="badge bg-dark">Dark</span>
                                        <span className="badge bg-light text-dark">Light</span>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Rounded Badges </h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge rounded-pill bg-primary">Primary</span>
                                        <span className="badge rounded-pill bg-secondary">
                                            Secondary
                                        </span>
                                        <span className="badge rounded-pill bg-success">Success</span>
                                        <span className="badge rounded-pill bg-info">Info</span>
                                        <span className="badge rounded-pill bg-warning">Warning</span>
                                        <span className="badge rounded-pill bg-danger">Danger</span>
                                        <span className="badge rounded-pill bg-dark">Dark</span>
                                        <span className="badge rounded-pill bg-light text-dark">
                                            Light
                                        </span>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Outline Badges </h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <Link to="#" className="badge badge-outline-primary">
                                            Primary
                                        </Link>
                                        <span className="badge badge-outline-secondary">Secondary</span>
                                        <span className="badge badge-outline-success">Success</span>
                                        <span className="badge badge-outline-info">Info</span>
                                        <span className="badge badge-outline-warning">Warning</span>
                                        <span className="badge badge-outline-danger">Danger</span>
                                        <span className="badge badge-outline-dark">Dark</span>
                                        <span className="badge badge-outline-light text-dark">
                                            Light
                                        </span>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Outline Rounded Badges </h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge rounded-pill badge-outline-primary">
                                            Primary
                                        </span>
                                        <span className="badge rounded-pill badge-outline-secondary">
                                            Secondary
                                        </span>
                                        <span className="badge rounded-pill badge-outline-success">
                                            Success
                                        </span>
                                        <span className="badge rounded-pill badge-outline-info">
                                            Info
                                        </span>
                                        <span className="badge rounded-pill badge-outline-warning">
                                            Warning
                                        </span>
                                        <span className="badge rounded-pill badge-outline-danger">
                                            Danger
                                        </span>
                                        <span className="badge rounded-pill badge-outline-dark">
                                            Dark
                                        </span>
                                        <span className="badge rounded-pill badge-outline-light text-dark">
                                            Light
                                        </span>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Soft Badges </h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge badge-soft-primary">Primary</span>
                                        <span className="badge badge-soft-secondary">Secondary</span>
                                        <span className="badge badge-soft-success">Success</span>
                                        <span className="badge badge-soft-info">Info</span>
                                        <span className="badge badge-soft-warning">Warning</span>
                                        <span className="badge badge-soft-danger">Danger</span>
                                        <span className="badge badge-soft-dark">Dark</span>
                                        <span className="badge badge-soft-light text-dark">Light</span>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Soft Rounded Badges </h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge rounded-pill badge-soft-primary">
                                            Primary
                                        </span>
                                        <span className="badge rounded-pill badge-soft-secondary">
                                            Secondary
                                        </span>
                                        <span className="badge rounded-pill badge-soft-success">
                                            Success
                                        </span>
                                        <span className="badge rounded-pill badge-soft-info">Info</span>
                                        <span className="badge rounded-pill badge-soft-warning">
                                            Warning
                                        </span>
                                        <span className="badge rounded-pill badge-soft-danger">
                                            Danger
                                        </span>
                                        <span className="badge rounded-pill badge-soft-dark">Dark</span>
                                        <span className="badge rounded-pill badge-soft-light text-dark">
                                            Light
                                        </span>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        {/* Badge Sizes */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Badge Sizes</h5>
                                </div>
                                <div className="card-body">
                                    <span className="badge bg-primary">Default</span>
                                    <span className="badge badge-xs bg-primary">XS</span>
                                    <span className="badge badge-sm bg-secondary">SM</span>
                                    <span className="badge badge-md bg-success">MD</span>
                                    <span className="badge badge-lg bg-danger">LG</span>
                                    <span className="badge badge-xl bg-warning">XL</span>
                                </div>
                            </div>
                        </div>
                        {/* /Badge Sizes */}
                        {/* Badge Usage */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Badge Usage</h5>
                                </div>
                                <div className="card-body d-flex flex-wrap gap-4">
                                    <button
                                        type="button"
                                        className="btn btn-primary position-relative"
                                    >
                                        Inbox
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            99+
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary position-relative"
                                    >
                                        Profile
                                        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </button>
                                    <span className="avatar">
                                        <img src={Avatar_01} alt="img" />
                                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={Avatar_01} alt="img" />
                                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light              rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={Avatar_01} alt="img" />
                                        <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">
                                            1000+
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* /Badge Usage */}
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Buttons With Badges</h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-primary">
                                            Notifications <span className="badge bg-success ms-1">4</span>
                                        </button>
                                        <button type="button" className="btn btn-success">
                                            Messages <span className="badge bg-danger ms-1">2</span>
                                        </button>
                                        <button type="button" className="btn btn-danger">
                                            Draft <span className="badge bg-success ms-1">2</span>
                                        </button>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Outline Buttons With Badges</h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-outline-primary">
                                            Notifications <span className="badge bg-success ms-1">4</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-success">
                                            Messages <span className="badge bg-danger ms-1">2</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-danger">
                                            Draft <span className="badge bg-success ms-1">2</span>
                                        </button>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        <div className="col-xl-6">
                            <div className="card mb-0">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0">Headings</h4>
                                </div>
                                {/* end card header */}
                                <div className="card-body">
                                    <div>
                                        <h1>
                                            Example heading <span className="badge bg-primary">New</span>
                                        </h1>
                                        <h2>
                                            Example heading <span className="badge bg-primary">New</span>
                                        </h2>
                                        <h3>
                                            Example heading <span className="badge bg-primary">New</span>
                                        </h3>
                                        <h4>
                                            Example heading <span className="badge bg-primary">New</span>
                                        </h4>
                                        <h5>
                                            Example heading <span className="badge bg-primary">New</span>
                                        </h5>
                                        <h6 className="mb-0">
                                            Example heading <span className="badge bg-primary">New</span>
                                        </h6>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card */}
                        </div>
                        {/* Badge with icons */}
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">Badge with icons</h5>
                                        </div>
                                        <div className="card-body">
                                            <span className="badge bg-secondary me-1">
                                                <span className="badge-label">Secondary</span>
                                                <i className="fa-solid fa-plus" />
                                            </span>
                                            <span className="badge bg-success me-1">
                                                <span className="badge-label">Success</span>
                                                <i className="fa-solid fa-check" />
                                            </span>
                                            <span className="badge bg-info me-1">
                                                <span className="badge-label">Info</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </span>
                                            <span className="badge bg-warning me-1">
                                                <span className="badge-label">Warning</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </span>
                                            <span className="badge bg-danger me-1">
                                                <span className="badge-label">Danger</span>
                                                <i className="fa-solid fa-x" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title">Outline Badge with icons</h5>
                                        </div>
                                        <div className="card-body">
                                            <span className="badge bg-outline-secondary me-1">
                                                <span className="badge-label">Secondary</span>
                                                <i className="fa-solid fa-plus" />
                                            </span>
                                            <span className="badge bg-outline-success me-1">
                                                <span className="badge-label">Success</span>
                                                <i className="fa-solid fa-check" />
                                            </span>
                                            <span className="badge bg-outline-info me-1">
                                                <span className="badge-label">Info</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </span>
                                            <span className="badge bg-outline-warning me-1">
                                                <span className="badge-label">Warning</span>
                                                <i className="fa-solid fa-circle-info" />
                                            </span>
                                            <span className="badge bg-outline-danger me-1">
                                                <span className="badge-label">Danger</span>
                                                <i className="fa-solid fa-x" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Badge with icons */}
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
        </div>
    )
}

export default Badges
