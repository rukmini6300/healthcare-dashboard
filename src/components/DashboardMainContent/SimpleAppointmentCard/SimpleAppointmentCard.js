import React from 'react';
import './SimpleAppointmentCard.css';
import { CalendarCheck, Stethoscope, HeartPulse, Eye } from 'lucide-react';

function getIcon(type) {
  switch (type) {
    case 'Cardiologist': return <HeartPulse size={16} />;
    case 'Ophthalmologist': return <Eye size={16} />;
    case 'Health Checkup': return <Stethoscope size={16} />;
    default: return <CalendarCheck size={16} />;
  }
}

function SimpleAppointmentCard({ title, time, type }) {
  return (
    <div className="simple-card">
      <div className="icon">{getIcon(type)}</div>
      <div className="info">
        <h5>{title}</h5>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
