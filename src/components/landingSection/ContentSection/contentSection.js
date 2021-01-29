import React from 'react'
import './contentSection.css';
import Division from '../../../assets/images/division.png';
import Phone from '../../../assets/images/phone.jpg';
import ShapeDown from '../../../assets/images/shape-down.png';
import LowRisk from '../../../assets/images/low-risk.png';
import MidRisk from '../../../assets/images/mid-risk.png';
import HighRisk from '../../../assets/images/high-risk.png';
import ModuleImg from '../../../assets/images/module.png';

export default function contentSection() {
    return (
        <div className="row">
            <div className="column left">
               <div className="left-top-card">
                <div className="left-card-div-summary">
                        <div class=""><img src={Division} alt="division"/></div>
                        <div class="division-sumary-title">Division Summary</div>
                    </div>
                    <div className="left-card-div-content">
                        <div className=""><img src={Phone} alt="division"/></div>
                        <div className="division-summary-text">0801 234 5678</div>
                    </div>
                    <div className="left-card-div-content">
                        <div className=" summary-icon"><i class="far fa-envelope"></i></div>
                        <div className="division-summary-text">asbfefr@gmail.com</div>
                    </div>
                    <div className="left-card-div-content">
                        <div className=" summary-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div className="division-summary-text">Mojidi, Lagos</div>
                    </div>
                    <div className="left-card-div-content">
                        <div className=" summary-icon"><i class="fas fa-journal-whills"></i></div>
                        <div className="division-summary-text-link">2 Journal entries</div>
                    </div>
                    <div className="left-card-div-content">
                        <div className=" summary-icon"><i className="fas fa-fingerprint"></i></div>
                        <div className="division-summary-text">24 fingerprints enrolled</div>
                    </div>
               </div>
                <div className="module-content">
                    <div className="Module-history">
                        <div class="module-history-image">
                            <img src={ModuleImg} alt="module"/>
                        </div>
                        <div className="module-history-title">
                        Module History
                        </div>
                    </div>
                <div class="container">
                        <div class="timeline-item" date-is='Searched “Journal Entries” on Division module'>
                            <span class="timeline-info">
                            22:10 15/09/2020 &nbsp;<i class="fas fa-circle "></i>&nbsp; Web
                            </span>
                        </div>
                        
                        <div class="timeline-item" date-is='Searched “Fingerprint record” on Division module'>
                            <span class="timeline-info">
                            22:10 15/09/2020 &nbsp;<i class="fas fa-circle "></i>&nbsp; Web
                            </span>
                        </div>
                        
                        <div class="timeline-item" date-is='Searched “Journal Entries” on Division module'>
                            <span class="timeline-info">
                            22:10 15/09/2020 &nbsp;<i class="fas fa-circle "></i>&nbsp; Web
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="column right">
                <div className="table-head-container">
                    <div className="table-container-column-1">
                    <input type="checkbox" id="male" name="gender" value="male"/>
                    </div>
                    
                    <div className="table-container-column-2">
                        Name
                    </div>
                    
                    <div className="table-container-column-3">
                       Location
                    </div>
                    
                    <div className="table-container-column-4">
                        STatus
                    </div>
                    
                    <div className="table-container-column-5">
                        Entries
                    </div>
                    
                    <div className="table-container-column-6">
                    Risk Portfolio
                    </div>
                    
                    <div className="table-container-column-7">
                        
                    </div>
                </div>
                <div className="table-body-container">
                    <div className="table-body-section">
                        <div className="table-container-body-column-1">
                            <div className="check-box">
                                <input type="checkbox" id="male" name="gender" value="male"/>
                            </div>
                            <div className="checked-box">
                                <img src={ShapeDown} alt="shape" class="shape-down"/>
                            </div>
                        </div>
                        <div className="table-container-body-column-2">
                            Courtney Henry
                        </div>
                        <div className="table-container-body-column-3">
                            <div class="state-title">
                                    Lagos State
                            </div>
                            <div class="street-title">
                            775 Rolling Green Rd.
                            </div>
                        </div>
                        <div className="table-container-body-column-4">
                            <span class="No-issue">
                                No Issue
                            </span>
                        </div>
                        <div className="table-container-body-column-5">
                            <div class="enties">&nbsp;&nbsp;<i class="fas fa-circle"></i>&nbsp;&nbsp; 19 Unique Entries </div>
                            <div class="enties-sub">Homogenous</div>
                        </div>
                        <div className="table-container-body-column-6">
                            <div><img src={LowRisk} alt="risk"/></div>
                            <div className="low-risk-text">Low Risk</div>
                        </div>
                        <div className="table-container-body-column-7">
                        <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                    
                    <div className="table-body-section">
                        <div className="table-container-body-column-1">
                            <div className="check-box">
                                <input type="checkbox" id="male" name="gender" value="male"/>
                            </div>
                            <div className="checked-box">
                                <img src={ShapeDown} alt="shape" class="shape-down"/>
                            </div>
                        </div>
                        <div className="table-container-body-column-2">
                        Darrell Steward
                        </div>
                        <div className="table-container-body-column-3">
                            <div class="state-title">
                                    Lagos State
                            </div>
                            <div class="street-title">
                            7529 E. Pecan St.
                            </div>
                        </div>
                        <div className="table-container-body-column-4">
                            <span class="has-issue">
                            2 Issues found
                            </span>
                        </div>
                        <div className="table-container-body-column-5">
                            <div class="enties">&nbsp;&nbsp;<i class="fas fa-circle"></i>&nbsp;&nbsp; 10 Unique Entries </div>
                            <div class="enties-sub">Heterogenous</div>
                        </div>
                        <div className="table-container-body-column-6">
                            <div><img src={MidRisk} alt="risk"/></div>
                            <div className="mid-risk-text">Mid Risk</div>
                        </div>
                        <div className="table-container-body-column-7">
                        <i class="fas fa-ellipsis-v"></i>
                        </div>

                </div>
                    <div className="table-body-section">
                        <div className="table-container-body-column-1">
                            <div className="check-box">
                                <input type="checkbox" id="male" name="gender" value="male"/>
                            </div>
                            <div className="checked-box">
                                <img src={ShapeDown} alt="shape" class="shape-down"/>
                            </div>
                        </div>
                        <div className="table-container-body-column-2">
                        Cody Fisher
                        </div>
                        <div className="table-container-body-column-3">
                            <div class="state-title">
                                    Lagos State
                            </div>
                            <div class="street-title">
                            3605 Parker Rd.
                            </div>
                        </div>
                        <div className="table-container-body-column-4">
                            <span class="No-issue">
                                No Issue
                            </span>
                        </div>
                        <div className="table-container-body-column-5">
                            <div class="enties">&nbsp;&nbsp;<i class="fas fa-circle"></i>&nbsp;&nbsp; 8 Unique Entries </div>
                            <div class="enties-sub">Homogenous</div>
                        </div>
                        <div className="table-container-body-column-6">
                            <div><img src={MidRisk} alt="risk"/></div>
                            <div className="mid-risk-text">Mid Risk</div>
                        </div>
                        <div className="table-container-body-column-7">
                        <i class="fas fa-ellipsis-v"></i>
                        </div>

                </div>
                
                <div className="table-body-section">
                        <div className="table-container-body-column-1">
                            <div className="check-box">
                                <input type="checkbox" id="male" name="gender" value="male"/>
                            </div>
                            <div className="checked-box">
                                <img src={ShapeDown} alt="shape" class="shape-down"/>
                            </div>
                        </div>
                        <div className="table-container-body-column-2">
                        Bessie Cooper
                        </div>
                        <div className="table-container-body-column-3">
                            <div class="state-title">
                                    Lagos State
                            </div>
                            <div class="street-title">
                            775 Rolling Green Rd.
                            </div>
                        </div>
                        <div className="table-container-body-column-4">
                            <span class="has-issue">
                                1 Issue Found
                            </span>
                        </div>
                        <div className="table-container-body-column-5">
                            <div class="enties">&nbsp;&nbsp;<i class="fas fa-circle"></i>&nbsp;&nbsp; 12 Unique Entries </div>
                            <div class="enties-sub">Heterogenous</div>
                        </div>
                        <div className="table-container-body-column-6">
                            <div><img src={HighRisk} alt="risk"/></div>
                            <div className="high-risk-text">High Risk</div>
                        </div>
                        <div className="table-container-body-column-7">
                        <i class="fas fa-ellipsis-v"></i>
                        </div>

                </div>
                <div className="table-body-section">
                        <div className="table-container-body-column-1">
                            <div className="check-box">
                                <input type="checkbox" id="male" name="gender" value="male"/>
                            </div>
                            <div className="checked-box">
                                <img src={ShapeDown} alt="shape" class="shape-down"/>
                            </div>
                        </div>
                        <div className="table-container-body-column-2">
                        Annette Black
                        </div>
                        <div className="table-container-body-column-3">
                            <div class="state-title">
                                    Lagos State
                            </div>
                            <div class="street-title">
                            8080 Railroad St.
                            </div>
                        </div>
                        <div className="table-container-body-column-4">
                            <span class="No-issue">
                                No Issue
                            </span>
                        </div>
                        <div className="table-container-body-column-5">
                            <div class="enties">&nbsp;&nbsp;<i class="fas fa-circle"></i>&nbsp;&nbsp; 13 Unique Entries </div>
                            <div class="enties-sub">Heterogenous</div>
                        </div>
                        <div className="table-container-body-column-6">
                            <div><img src={LowRisk} alt="risk"/></div>
                            <div className="low-risk-text">Low Risk</div>
                        </div>
                        <div className="table-container-body-column-7">
                        <i class="fas fa-ellipsis-v"></i>
                        </div>

                </div>
                <div className="table-body-section">
                        <div className="table-container-body-column-1">
                            <div className="check-box">
                                <input type="checkbox" id="male" name="gender" value="male"/>
                            </div>
                            <div className="checked-box">
                                <img src={ShapeDown} alt="shape" class="shape-down"/>
                            </div>
                        </div>
                        <div className="table-container-body-column-2">
                        Jenny Wilson
                        </div>
                        <div className="table-container-body-column-3">
                            <div class="state-title">
                                    Lagos State
                            </div>
                            <div class="street-title">
                            8080 Railroad St.
                            </div>
                        </div>
                        <div className="table-container-body-column-4">
                            <span class="has-issue">
                                5 Issues Found
                            </span>
                        </div>
                        <div className="table-container-body-column-5">
                            <div class="enties">&nbsp;&nbsp;<i class="fas fa-circle"></i>&nbsp;&nbsp; 18 Unique Entries </div>
                            <div class="enties-sub">Homogenous</div>
                        </div>
                        <div className="table-container-body-column-6">
                            <div><img src={HighRisk} alt="risk"/></div>
                            <div className="high-risk-text">High Risk</div>
                        </div>
                        <div className="table-container-body-column-7">
                        <i class="fas fa-ellipsis-v"></i>
                        </div>

                </div>
                <div className="table-body-section">
                        <div className="table-container-body-column-1">
                            <div className="check-box">
                                <input type="checkbox" id="male" name="gender" value="male"/>
                            </div>
                            <div className="checked-box">
                                <img src={ShapeDown} alt="shape" class="shape-down"/>
                            </div>
                        </div>
                        <div className="table-container-body-column-2">
                        Darlene Robertson
                        </div>
                        <div className="table-container-body-column-3">
                            <div class="state-title">
                                    Lagos State
                            </div>
                            <div class="street-title">
                            3890 Poplar Dr.
                            </div>
                        </div>
                        <div className="table-container-body-column-4">
                            <span class="has-issue">
                                2 Issues Found
                            </span>
                        </div>
                        <div className="table-container-body-column-5">
                            <div class="enties">&nbsp;&nbsp;<i class="fas fa-circle"></i>&nbsp;&nbsp; 6 Unique Entries </div>
                            <div class="enties-sub">Homogenous</div>
                        </div>
                        <div className="table-container-body-column-6">
                            <div><img src={MidRisk} alt="risk"/></div>
                            <div className="mid-risk-text">Mid Risk</div>
                        </div>
                        <div className="table-container-body-column-7">
                        <i class="fas fa-ellipsis-v"></i>
                        </div>

                </div>
                <div className="table-body-section">
                        <div className="table-container-body-column-1">
                            <div className="check-box">
                                <input type="checkbox" id="male" name="gender" value="male"/>
                            </div>
                            <div className="checked-box">
                                <img src={ShapeDown} alt="shape" class="shape-down"/>
                            </div>
                        </div>
                        <div className="table-container-body-column-2">
                        Ralph Edwards
                        </div>
                        <div className="table-container-body-column-3">
                            <div class="state-title">
                                    Lagos State
                            </div>
                            <div class="street-title">
                            8558 Green Rd.
                            </div>
                        </div>
                        <div className="table-container-body-column-4">
                            <span class="No-issue">
                                No Issue
                            </span>
                        </div>
                        <div className="table-container-body-column-5">
                            <div class="enties">&nbsp;&nbsp;<i class="fas fa-circle"></i>&nbsp;&nbsp; 14 Unique Entries </div>
                            <div class="enties-sub">Homogenous</div>
                        </div>
                        <div className="table-container-body-column-6">
                            <div><img src={LowRisk} alt="risk"/></div>
                            <div className="low-risk-text">Low Risk</div>
                        </div>
                        <div className="table-container-body-column-7">
                        <i class="fas fa-ellipsis-v"></i>
                        </div>

                </div>
            </div>
            </div>
        </div>
    )
}
