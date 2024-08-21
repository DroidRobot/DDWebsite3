import './index.css'
import React from 'react';

const DashboardDriverInfoCard = () => {
    return (
    
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{/* Title here */}</h4>
                </div>
                <div className="card-body">
                <h2 className="card-title pricing-card-title">{/* Pricing title here */}</h2>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{/* List item 1 */}</li>
                    <li>{/* List item 2 */}</li>
                </ul>
                <button
                    className="btn btn-primary d-inline-flex align-items-center btn-join-queue"
                    type="button"
                >
                    Join Queue
                </button>
                </div>
            </div>
        </div>
        
  );
};

export default DashboardDriverInfoCard;