import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Overview</h1>
      <div className="header-icons">
        <input type="text" placeholder="Search for something" />
        <button className="settings-icon">⚙️</button>
        <button className="notifications-icon">🔔</button>
        <img src="https://via.placeholder.com/40" alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
}
