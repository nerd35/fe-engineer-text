import React from 'react'
import './summarycard.css'
import InfoIcon from '../../../assets/images/info-icon.png';

export default function SummaryCards() {
    return (
        <div className="summary-card-container">
            <div>
                <div className="summary-card">
                    <div className="">
                        <div className="card-title">31454</div>
                        <div className="card-disable">Ongoing metric</div>
                    </div>
                    <div className=""><img src={InfoIcon} alt="info"/></div>
                </div>
            </div>
            <div>
                <div className="summary-card">
                    <div className="">
                        <div className="card-title">2344</div>
                        <div className="card-disable">Past metric</div>
                    </div>
                    <div className=""><img src={InfoIcon} alt="info"/></div>
                </div>
            </div>
            <div>
                <div className="summary-card">
                    <div className="">
                        <div className="card-title">14224</div>
                        <div className="card-disable">Missed metric</div>
                    </div>
                    <div className=""><img src={InfoIcon} alt="info"/></div>
                </div>
            </div>
            <div>
                <div className="summary-card">
                    <div className="">
                        <div className="card-title">635</div>
                        <div className="card-disable">Failed metric</div>
                    </div>
                    <div className=""><img src={InfoIcon} alt="info"/></div>
                </div>
            </div>
            <div>
                <div className="summary-card">
                    <div className="">
                        <div className="card-title">11334</div>
                        <div className="card-disable">Pending metric</div>
                    </div>
                    <div className=""><img src={InfoIcon} alt="info"/></div>
                </div>
            </div>
        </div>
    )
}
