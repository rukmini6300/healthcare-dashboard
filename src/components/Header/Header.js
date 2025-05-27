import React from 'react';
import './Header.css';
import { Bell, Plus } from 'lucide-react';
// import profileImage from '../../assets/user-avatar.png'; // Use a placeholder
import profileImage from '../../assets/man-profile.avif'
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." disabled />
        </div>

        <div className="header-icons">
          <Bell size={20} />
          <button className="add-button">
            <Plus size={18} />
          </button>
          <div className="user-profile">
            <img src={profileImage} alt="User Avatar" />
            <span className="user-name">Dr. Smith</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
