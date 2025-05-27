import React from 'react';
import './CalendarView.css';
import { calendarAppointments } from '../../../data/appointments';

function CalendarView() {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
      </div>

      <div className="calendar-grid">
        {Array.from({ length: 31 }, (_, i) => {
          const day = i + 1;
          const slot = calendarAppointments.find(app => app.day === day);
          return (
            <div key={day} className={`calendar-cell ${slot ? 'has-appointment' : ''}`}>
              <span className="day">{day}</span>
              {slot && (
                <div className="times">
                  {slot.times.map((time, i) => (
                    <span key={i} className="time-badge">{time}</span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="calendar-appointments">
        <h4>Appointments</h4>
        {calendarAppointments.map((item, idx) => (
          <div key={idx} className="appointment-card">
            <strong>{item.title}</strong>
            <p>{item.day} October — {item.times.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
