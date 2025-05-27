import React from 'react';
import './HealthStatusCards.css';
import { healthStatusCards } from '../../../data/healthData';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthStatusCards.map((item, index) => (
        <div key={index} className="health-card">
          <div className="card-header">
            <span className={`status-dot ${item.status.toLowerCase()}`} />
            <h4>{item.title}</h4>
          </div>
          <div className="card-body">
            <p className="status-text">{item.description}</p>
            <p className="date">Last Checked: {item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
