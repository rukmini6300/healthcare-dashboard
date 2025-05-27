import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const values = [1, 2, 0, 3, 1, 0, 2];

  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments this week</p>

      <div className="bar-chart">
        {values.map((val, index) => (
          <div className="bar-group" key={index}>
            <div className="bar" style={{ height: `${val * 20}px` }}></div>
            <span className="day">{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
