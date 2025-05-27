import React from 'react';
import './AnatomySection.css';
import anatomyImg from '../../../assets/human-body.avif';
import { healthIndicators } from '../../../data/healthData';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <h2 className="section-title">Body Overview</h2>
      <div className="anatomy-container">
        <img src={anatomyImg} alt="Anatomy" className="anatomy-image" />
        {healthIndicators.map((item, index) => (
          <div
            key={index}
            className={`status-tag ${item.status.toLowerCase()}`}
            style={{ top: item.top, left: item.left }}
          >
            {item.icon} {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;
