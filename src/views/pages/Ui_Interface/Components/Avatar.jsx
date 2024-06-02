/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Avatar_02, Avatar_03, Avatar_04, Avatar_05 } from '../../../../Routes/ImagePath'
import Header from '../../../layout/Header'
import Sidebar from '../../../layout/Sidebar'
import { Link } from 'react-router-dom'

const Avatar = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <Header />
                    <Sidebar />
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="content-page-header">
                            <h5>Avatar</h5>
                        </div>
                    </div>
                    {/* /Page Header */}
                    {/* Avatar */}
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Avatars</h5>
                                </div>
                                <div className="card-body d-flex flex-wrap gap-2">
                                    <span className="avatar avatar-xl me-2 avatar-rounded">
                                        <img src={Avatar_02} alt="img" />
                                    </span>
                                    <span className="avatar avatar-xl me-2 avatar-radius-0">
                                        <img src={Avatar_02} alt="img" />
                                    </span>
                                    <span className="avatar avatar-xl me-2 border-thumb">
                                        <img src={Avatar_02} alt="img" />
                                    </span>
                                    <span className="avatar avatar-xl bg-primary avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar avatar-xl bg-success avatar-radius-0">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar avatar-xl bg-danger border-thumb">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card bg-white">
                                <div className="card-header">
                                    <h5 className="card-title">Avatar Sizes</h5>
                                </div>
                                <div className="card-body border-thumb">
                                    <div className="avatar avatar-xs">
                                        <img
                                            className="avatar-img rounded-circle"
                                            alt="User Image"
                                            src={Avatar_02}
                                        />
                                    </div>
                                    <div className="avatar avatar-sm">
                                        <img
                                            className="avatar-img rounded-circle"
                                            alt="User Image"
                                            src={Avatar_02}
                                        />
                                    </div>
                                    <div className="avatar">
                                        <img
                                            className="avatar-img rounded-circle"
                                            alt="User Image"
                                            src={Avatar_02}
                                        />
                                    </div>
                                    <div className="avatar avatar-lg">
                                        <img
                                            className="avatar-img rounded-circle"
                                            alt="User Image"
                                            src={Avatar_02}
                                        />
                                    </div>
                                    <div className="avatar avatar-xl">
                                        <img
                                            className="avatar-img rounded-circle"
                                            alt="User Image"
                                            src={Avatar_02}
                                        />
                                    </div>
                                    <div className="avatar avatar-xxl">
                                        <img
                                            className="avatar-img rounded-circle"
                                            alt="User Image"
                                            src={Avatar_02}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Avatar With Badge</h5>
                                </div>
                                <div className="card-body">
                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                        <img src={Avatar_03} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm online me-2 avatar-rounded">
                                        <img src={Avatar_03} alt="img" />
                                    </span>
                                    <span className="avatar avatar-md me-2 online avatar-rounded">
                                        <img src={Avatar_03} alt="img" />
                                    </span>
                                    <span className="avatar avatar-lg me-2 online avatar-rounded">
                                        <img src={Avatar_03} alt="img" />
                                    </span>
                                    <span className="avatar avatar-xl me-2 online avatar-rounded">
                                        <img src={Avatar_03} alt="img" />
                                    </span>
                                    <span className="avatar avatar-xxl me-2 online avatar-rounded">
                                        <img src={Avatar_03} alt="img" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Avatar With Badge</h5>
                                </div>
                                <div className="card-body">
                                    <span className="avatar avatar-xs me-2 avatar-rounded">
                                        <img src={Avatar_02} alt="img" />
                                        <span className="badge rounded-pill bg-primary avatar-badge">
                                            2
                                        </span>
                                    </span>
                                    <span className="avatar avatar-sm me-2 avatar-rounded">
                                        <img src={Avatar_02} alt="img" />
                                        <span className="badge rounded-pill bg-secondary avatar-badge">
                                            5
                                        </span>
                                    </span>
                                    <span className="avatar avatar-md me-2 avatar-rounded">
                                        <img src={Avatar_02} alt="img" />
                                        <span className="badge rounded-pill bg-warning avatar-badge">
                                            1
                                        </span>
                                    </span>
                                    <span className="avatar avatar-lg me-2 avatar-rounded">
                                        <img src={Avatar_02} alt="img" />
                                        <span className="badge rounded-pill bg-info avatar-badge">7</span>
                                    </span>
                                    <span className="avatar avatar-xl me-2 avatar-rounded">
                                        <img src={Avatar_02} alt="img" />
                                        <span className="badge rounded-pill bg-success avatar-badge">
                                            3
                                        </span>
                                    </span>
                                    <span className="avatar avatar-xxl me-2 avatar-rounded">
                                        <img src={Avatar_02} alt="img" />
                                        <span className="badge rounded-pill bg-danger avatar-badge">
                                            9
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Avatar With Badge</h5>
                                </div>
                                <div className="card-body">
                                    <span className="avatar bg-primary avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar bg-danger avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar bg-success avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar bg-warning avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar bg-info avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Avatar With Badge</h5>
                                </div>
                                <div className="card-body">
                                    <span className="avatar bg-soft-primary avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar bg-soft-secondary avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar bg-soft-success avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar bg-soft-danger avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                    <span className="avatar bg-soft-info avatar-rounded">
                                        <span className="avatar-title">SR</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Avatar With Badge</h5>
                                </div>
                                <div className="card-body border-thumb">
                                    <div className="avatar-list-stacked avatar-group-lg mb-4">
                                        <span className="avatar">
                                            <img src={Avatar_04} alt="img" />
                                        </span>
                                        <span className="avatar">
                                            <img src={Avatar_04} alt="img" />
                                        </span>
                                        <span className="avatar">
                                            <img src={Avatar_04} alt="img" />
                                        </span>
                                        <Link
                                            className="avatar bg-primary text-fixed-white"
                                            to="#"
                                        >
                                            +8
                                        </Link>
                                    </div>
                                    <div className="avatar-list-stacked mb-4">
                                        <span className="avatar">
                                            <img src={Avatar_04} alt="img" />
                                        </span>
                                        <span className="avatar">
                                            <img src={Avatar_04} alt="img" />
                                        </span>
                                        <span className="avatar">
                                            <img src={Avatar_04} alt="img" />
                                        </span>
                                        <Link
                                            className="avatar bg-primary text-fixed-white"
                                            to="#"
                                        >
                                            +8
                                        </Link>
                                    </div>
                                    <div className="avatar-list-stacked avatar-group-sm">
                                        <span className="avatar">
                                            <img src={Avatar_04} alt="img" />
                                        </span>
                                        <span className="avatar">
                                            <img src={Avatar_04} alt="img" />
                                        </span>
                                        <span className="avatar">
                                            <img src={Avatar_04} alt="img" />
                                        </span>
                                        <Link
                                            className="avatar bg-primary text-fixed-white"
                                            to="#"
                                        >
                                            +8
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Avatar With Badge</h5>
                                </div>
                                <div className="card-body">
                                    <div className="avatar-list-stacked avatar-group-lg mb-4">
                                        <span className="avatar avatar-rounded">
                                            <img
                                                className="border border-white"
                                                src={Avatar_05}
                                                alt="img"
                                            />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <img
                                                className="border border-white"
                                                src={Avatar_05}
                                                alt="img"
                                            />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <img src={Avatar_05} alt="img" />
                                        </span>
                                        <Link
                                            className="avatar bg-primary avatar-rounded text-fixed-white"
                                            to="#"
                                        >
                                            +8
                                        </Link>
                                    </div>
                                    <div className="avatar-list-stacked mb-4">
                                        <span className="avatar avatar-rounded">
                                            <img
                                                className="border border-white"
                                                src={Avatar_05}
                                                alt="img"
                                            />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <img
                                                className="border border-white"
                                                src={Avatar_05}
                                                alt="img"
                                            />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <img src={Avatar_05} alt="img" />
                                        </span>
                                        <Link
                                            className="avatar bg-primary avatar-rounded text-fixed-white"
                                            to="#"
                                        >
                                            +8
                                        </Link>
                                    </div>
                                    <div className="avatar-list-stacked avatar-group-sm">
                                        <span className="avatar avatar-rounded">
                                            <img
                                                className="border border-white"
                                                src={Avatar_05}
                                                alt="img"
                                            />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <img
                                                className="border border-white"
                                                src={Avatar_05}
                                                alt="img"
                                            />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <img src={Avatar_05} alt="img" />
                                        </span>
                                        <Link
                                            className="avatar bg-primary avatar-rounded text-fixed-white"
                                            to="#"
                                        >
                                            +8
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Avatar */}
                </div>
            </div>

        </div>
    )
}

export default Avatar
