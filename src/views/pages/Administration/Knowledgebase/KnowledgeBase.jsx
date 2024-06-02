import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const KnowledgeBase = () => {

    const topicsData = [
        {
            id: 1,
            title: 'Installation & Activation',
            iconClass: 'fa-regular fa-folder',
            topics: [
                { id: 1, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 2, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 3, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 4, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 5, title: 'Sed ut perspiciatis unde omnis?' },
                // Add more topics as needed
            ],
        },
        {
            id: 2,
            title: 'Premium Members Features',
            iconClass: 'fa-regular fa-folder',
            topics: [
                { id: 1, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 2, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 3, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 4, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 5, title: 'Sed ut perspiciatis unde omnis?' },
                // Add more topics as needed
            ],
        },
        {
            id: 3,
            title: 'Premium Members Features',
            iconClass: 'fa-regular fa-folder',
            topics: [
                { id: 1, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 2, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 3, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 4, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 5, title: 'Sed ut perspiciatis unde omnis?' },
                // Add more topics as needed
            ],
        },
        {
            id: 4,
            title: 'Premium Members Features',
            iconClass: 'fa-regular fa-folder',
            topics: [
                { id: 1, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 2, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 3, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 4, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 5, title: 'Sed ut perspiciatis unde omnis?' },
                // Add more topics as needed
            ],
        },
        {
            id: 5,
            title: 'Premium Members Features',
            iconClass: 'fa-regular fa-folder',
            topics: [
                { id: 1, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 2, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 3, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 4, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 5, title: 'Sed ut perspiciatis unde omnis?' },
                // Add more topics as needed
            ],
        },
        {
            id: 6,
            title: 'Premium Members Features',
            iconClass: 'fa-regular fa-folder',
            topics: [
                { id: 1, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 2, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 3, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 4, title: 'Sed ut perspiciatis unde omnis?' },
                { id: 5, title: 'Sed ut perspiciatis unde omnis?' },
                // Add more topics as needed
            ],
        },
    ]

    return (

        <div>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <Breadcrumbs
                        maintitle="KnowledgeBase"
                        title="Dashboard"
                        subtitle="KnowledgeBase"
                        modal="#add_indicator"
                        name="Add New"
                    />
                    <div className="row">
                        {topicsData.map((topicSection, index) => (
                            <div key={index} className="col-xl-4 col-md-6 col-sm-6">
                                <div className="topics">
                                    <h3 className="topic-title">
                                        <Link to="#">
                                            <i className={topicSection.iconClass} /> {topicSection.title}{' '}
                                            <span>{topicSection.topics.length}</span>
                                        </Link>
                                    </h3>
                                    <ul className="topics-list">
                                        {topicSection.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex}>
                                                <Link to="/knowledgebase-view">{topic.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowledgeBase
