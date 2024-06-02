import React from 'react'
import { comingsoon } from '../../../Routes/ImagePath'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
    return (
        <div className="main-wrapper">
            <div className="coming-soon text-center">
                <div className="container">
                    <div className="coming-soon-page">
                        <div className="coming-soon-img text-center">
                            <img
                                src={comingsoon}
                                className="img-fluid"
                                alt="Img"
                            />
                        </div>
                        <div className="coming-soon-countdown">
                            <p>
                                Please check back later, We are working hard to get everything just
                                right.
                            </p>
                            <ul>
                                <li className="counter-text">
                                    <span>05</span>
                                    Days
                                </li>
                                <li className="seperate-dot">:</li>
                                <li className="counter-text">
                                    <span>02</span>
                                    Hours
                                </li>
                                <li className="seperate-dot">:</li>
                                <li className="counter-text">
                                    <span>10</span>
                                    Minutes
                                </li>
                                <li className="seperate-dot">:</li>
                                <li className="counter-text">
                                    <span>40</span>
                                    Seconds
                                </li>
                            </ul>
                        </div>
                        <div className="subscribe-form">
                            <form>
                                <label className="form-label">Subscribe to get notified</label>
                                <div className="subscribe-box">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter you Email"
                                    />
                                    <Link className="btn btn-primary" to="/coming-soon">
                                        Subscribe
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <ul className="social-icons">
                            <li>
                                <Link to="#">
                                    <i className="la la-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="la la-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="la la-linkedin" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="la la-instagram" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ComingSoon
