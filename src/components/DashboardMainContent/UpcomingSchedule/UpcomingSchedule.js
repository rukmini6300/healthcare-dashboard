import React from 'react';
import './UpcomingSchedule.css';
import { upcomingSchedule } from '../../../data/appointments';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingSchedule.map((group, index) => (
        <div key={index} className="day-group">
          <h4>{group.day}</h4>
          <div className="card-list">
            {group.appointments.map((appointment, i) => (
              <SimpleAppointmentCard key={i} {...appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
