import React from 'react'
import './index.css';
import Path from '../../assets/images/Path1.jpg';
import ContentSection from './ContentSection/contentSection';

import SummaryCards from './SummaryCard/SummaryCards';
export default function HomeContent() {
    return (
        <div className="content-placeholder">
            <div className="path-section">
                <div className="path-text">
                    Divisions 
                </div>
                <div className="path-icon">
                    <img src={Path} alth="path"/>  
                </div>
                <div className="path-text">
                    Module 
                </div>
            </div>
            <SummaryCards/>
            <ContentSection/>
        </div>
    )
}
