import React from 'react'
import { Link } from 'react-router-dom'
import { maintenance, maintenancebg01, maintenancebg02, maintenancebg03, maintenancebg04, maintenancebg05 } from '../../../Routes/ImagePath'

const UnderManitenance = () => {
    return (
        <div>
            <div className="main-wrapper">
                <div className="under-maintenance text-center">
                    <div className="container">
                        <div className="maintenance-page">
                            <div className="maintenance-bg">
                                <img
                                    src={maintenancebg01}
                                    className="small-bg-one"
                                    alt="Img"
                                />
                                <img
                                    src={maintenancebg02}
                                    className="small-bg-two"
                                    alt="Img"
                                />
                                <img
                                    src={maintenancebg03}
                                    className="small-bg-three"
                                    alt="Img"
                                />
                                <img
                                    src={maintenancebg04}
                                    className="small-bg-four"
                                    alt="Img"
                                />
                                <img
                                    src={maintenancebg05}
                                    className="small-bg-five"
                                    alt="Img"
                                />
                            </div>
                            <div className="maintenance-img text-center">
                                <img
                                    src={maintenance}
                                    className="img-fluid"
                                    alt="Img"
                                />
                            </div>
                            <div className="maintenance-content">
                                <h3>Under Maintenance</h3>
                                <p>
                                    The server is in a maintenance mode, please come back later or
                                    <Link to="#">click here</Link> to create ticket if it’s urgent
                                </p>
                                <Link to="/admin-dashboard" className="btn btn-custom btn-primary">
                                    Back to Dashboard
                                    <i className="la la-arrow-alt-circle-right ms-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UnderManitenance
