import React from "react";

const QueueDriverInfoCard = () => {
    return (
        <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-cart"></i>
          </div>
          <div className="ps-3">
            <div id="driver-info">
              <h3 className="card-title" id="driver-name">{driverName}</h3>
              <p><b>Position in queue: {positionInQueue}</b></p>
              <p id="driver-arrival">{driverArrival}</p>
              <p id="driver-phone">{driverPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default QueueDriverInfoCard;