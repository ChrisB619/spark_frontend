import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Calendar, Edit, Mail, MessageCircle, MoreVertical, Phone, PlusCircle, Star, Trash2 } from 'react-feather';
import CompaniesDetailModal from '../../../components/modelpopup/CompaniesDetailModal';
import CompanyEditModal from '../../../components/modelpopup/Crm/CompanyEditModal';
import ContactUser from './ContactUser';
import ContactSidebar from './ContactSidebar';
import ContactTabs from './ContactTabs';
import axios from 'axios';

const CompanyDetails = ({ company, onBack }) => {
    const optionsSortValue = [
        { value: 'sortDate', label: 'Sort By Date' },
        { value: 'ascending', label: 'Ascending' },
        { value: 'descending', label: 'Descending' }
    ];

    const [isFullScreen, setFullScreen] = useState(false);
    const [activities, setActivities] = useState([]);
    const maximizeBtnRef = useRef(null);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get(`https://wd79p.com/backend/public/api/companies/${company.id}/activities`);
                setActivities(response.data);
            } catch (error) {
                console.error('Error fetching activities:', error);
            }
        };

        fetchActivities();
    }, [company.id]);

    useEffect(() => {
        const handleClick = () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                setFullScreen(true);
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    setFullScreen(false);
                }
            }
        };

        const cleanup = () => {
            if (isFullScreen && document.exitFullscreen) {
                document.exitFullscreen();
                setFullScreen(false);
            }
        };

        const maximizeBtn = maximizeBtnRef.current;
        maximizeBtn.addEventListener('click', handleClick);

        return () => {
            maximizeBtn.removeEventListener('click', handleClick);
            cleanup();
        };
    }, [isFullScreen]);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
            color: state.isFocused ? "#fff" : "#000",
            "&:hover": {
                backgroundColor: "#ff9b44",
            },
        }),
    };

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h3 className="page-title">Companies</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin-dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Companies</li>
                            </ul>
                        </div>
                        <div className="col-md-8 float-end ms-auto">
                            <div className="d-flex title-head">
                                <div className="view-icons">
                                    <Link to="#" className="grid-view btn btn-link"><i className="las la-redo-alt" /></Link>
                                    <Link to="#" className="list-view btn btn-link" id="collapse-header" ref={maximizeBtnRef}><i className="las la-expand-arrows-alt" /></Link>
                                    <Link to="#" className="btn btn-link" onClick={onBack}><i className="las la-arrow-left" /> Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <ContactUser company={company} />
                    <ContactSidebar company={company} />
                    <ContactTabs optionsSortValue={optionsSortValue} customStyles={customStyles} company={company} activities={activities} />
                </div>
            </div>
            <CompaniesDetailModal />
            <CompanyEditModal />
        </div>
    );
}

export default CompanyDetails;
