import React from 'react';
import './Sidebar.css';
import { navLinks } from '../../data/navLinks';
import { Home, Calendar, ClipboardList, BarChart2, Activity, HelpCircle, Settings, MessageCircle } from 'lucide-react';

const icons = {
  Dashboard: <Home size={18} />,
  Calendar: <Calendar size={18} />,
  Appointments: <ClipboardList size={18} />,
  Statistics: <BarChart2 size={18} />,
  Tests: <Activity size={18} />,
  Chat: <MessageCircle size={18} />,
  Support: <HelpCircle size={18} />,
  Setting: <Settings size={18} />,
};

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">General</div>
      <nav className="sidebar-nav">
        {navLinks.map((link, index) => (
          <div className="nav-item" key={index}>
            {icons[link.name]}
            <span>{link.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
