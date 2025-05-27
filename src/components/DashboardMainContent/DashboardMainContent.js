import React from 'react';
import './DashboardMainContent.css';    
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import CalendarView from './CalendarView/CalendarView';
import ActivityFeed from './ActivityFeed/ActivityFeed';
function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        <section className="left-column">
            <AnatomySection />
            <HealthStatusCards />
        </section>

        <section className="right-column">
            <CalendarView />
            <UpcomingSchedule />
            <ActivityFeed />
        </section>
      </div>
    </main>
  );
}

export default DashboardMainContent;
