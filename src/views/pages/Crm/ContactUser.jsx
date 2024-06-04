import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Mail, MessageCircle, Edit, MoreVertical } from 'react-feather';

const ContactUser = ({ company }) => (
    <div className="col-md-12">
        <div className="contact-head">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <ul className="contact-breadcrumb">
                        <li><Link to="/companies"><i className="las la-arrow-left" /> Companies</Link></li>
                        <li>{company.name}</li>
                    </ul>
                </div>
                <div className="col-sm-6 text-sm-end">
                    <div className="contact-pagination">
                        <p>1 of 40</p>
                        <ul>
                            <li>
                                <Link to="#"><i className="las la-arrow-left" /></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="las la-arrow-right" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-wrap">
            <div className="contact-profile">
                <div className="avatar company-avatar">
                    <img src={company.profile_image || 'default-image-path'} alt="companyicon" />
                </div>
                <div className="name-user">
                    <h4>{company.name}</h4>
                    <p><i className="las la-map-marker" /> {company.street_address}, {company.city}, {company.state_province}, {company.zipcode}, {company.country}</p>
                    <div className="badge-rate">
                        <p><i className="fa-solid fa-star" /> 5.0</p>
                    </div>
                </div>
            </div>
            <div className="contacts-action">
                <Link to="#" className="btn-icon text-warning"><i className="fa-solid fa-star" /></Link>
                <Link to="#" data-bs-toggle="modal" data-bs-target="#add_deals" className="btn btn-pink"><PlusCircle className='me-1' size={15} />Add Deal</Link>
                <Link to="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_compose"><Mail className='me-1' size={15} />Send Email</Link>
                <Link to="/chat" className="btn-icon"><MessageCircle size={15} /></Link>
                <Link to="#" className="btn-icon" data-bs-toggle="modal" data-bs-target="#edit_company"><Edit size={15} /></Link>
                <div className="dropdown">
                    <Link to="#" className="dropdown-toggle marg-tp" data-bs-toggle="dropdown" aria-expanded="false"><MoreVertical size={15} /></Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_company">Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ContactUser;
