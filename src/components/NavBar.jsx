// components/NavBar.js
import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">Overview</h2>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for something"
        />
        <button className="emoji-button">
          ⚙️ 
        </button>
        <button className="emoji-button">
          🔔 
        </button>
        
        <div className="profile-picture">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c77083ab10f25ced2b5c538/1561611180351-FOIZPCWU3OMJW7K0VB0E/happy-woman.jpeg" // Replace with a real image URL
            alt="Profile"
          />
        </div>
      </div>
    </nav>
  );
}
