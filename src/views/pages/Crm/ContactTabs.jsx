import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const ContactTabs = ({ optionsSortValue, customStyles, company, activities }) => (
    <div className="col-xl-9">
        <div className="contact-tab-wrap">
            <ul className="contact-nav nav">
                <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#activities" className="active"><i className="las la-user-clock" />Activities</Link>
                </li>
                <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#notes"><i className="las la-file" />Notes</Link>
                </li>
                <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#calls"><i className="las la-phone-volume" />Calls</Link>
                </li>
                <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#files"><i className="las la-file" />Files</Link>
                </li>
                <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#email"><i className="las la-envelope" />Email</Link>
                </li>
            </ul>
        </div>
        <div className="contact-tab-view">
            <div className="tab-content pt-0">
                <ActivitiesTab optionsSortValue={optionsSortValue} customStyles={customStyles} activities={activities} />
                <NotesTab optionsSortValue={optionsSortValue} customStyles={customStyles} />
                <CallsTab />
                <FilesTab />
                <EmailTab />
            </div>
        </div>
    </div>
);

const ActivitiesTab = ({ optionsSortValue, customStyles, activities }) => (
    <div className="tab-pane active show" id="activities">
        <div className="view-header">
            <h4>Activities</h4>
            <ul>
                <li>
                    <div className="form-sort sort-date">
                        <i className="las la-sort-amount-up-alt" />
                        <Select
                            options={optionsSortValue}
                            placeholder="Sort By Date"
                            className="select w-100"
                            isSearchable={false}
                            styles={customStyles}
                        />
                    </div>
                </li>
            </ul>
        </div>
        <div className="contact-activity">
            {activities.map((activity) => (
                <div key={activity.id} className="activity-wrap">
                    <span className={`activity-icon bg-${activity.type}`}>
                        <i className={`las la-${activity.icon}`} />
                    </span>
                    <div className="activity-info">
                        <h6>{activity.title}</h6>
                        <p>{activity.description}</p>
                        <p>{new Date(activity.date).toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const NotesTab = ({ optionsSortValue, customStyles }) => (
    <div className="tab-pane fade" id="notes">
        <div className="view-header">
            <h4>Notes</h4>
            <ul>
                <li>
                    <div className="form-sort sort-date">
                        <i className="las la-sort-amount-up-alt" />
                        <Select
                            options={optionsSortValue}
                            placeholder="Sort By Date"
                            className="select w-100"
                            isSearchable={false}
                            styles={customStyles}
                        />
                    </div>
                </li>
                <li>
                    <Link to="#" data-bs-toggle="modal" data-bs-target="#add_notes" className="com-add"><i className="las la-plus-circle me-1" />Add New</Link>
                </li>
            </ul>
        </div>
        <div className="notes-activity">
            {/* Notes content here */}
        </div>
    </div>
);

const CallsTab = () => (
    <div className="tab-pane fade" id="calls">
        <div className="view-header">
            <h4>Calls</h4>
            <ul>
                <li>
                    <Link to="#" data-bs-toggle="modal" data-bs-target="#create_call" className="com-add"><i className="las la-plus-circle me-1" />Add New</Link>
                </li>
            </ul>
        </div>
        <div className="calls-activity">
            {/* Calls content here */}
        </div>
    </div>
);

const FilesTab = () => (
    <div className="tab-pane fade" id="files">
        <div className="view-header">
            <h4>Files</h4>
        </div>
        <div className="files-activity">
            {/* Files content here */}
        </div>
    </div>
);

const EmailTab = () => (
    <div className="tab-pane fade" id="email">
        <div className="view-header">
            <h4>Email</h4>
            <ul>
                <li>
                    <Link to="#" className="com-add create-mail" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-custom-class="tooltip-dark" data-bs-original-title="There are no email accounts configured, Please configured your email account in order to Send/ Create EMails"><i className="las la-plus-circle me-1" />Create Email</Link>
                </li>
            </ul>
        </div>
        <div className="files-activity">
            {/* Email content here */}
        </div>
    </div>
);

export default ContactTabs;
