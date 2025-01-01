// components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar({handleAddUser }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">🌐</h2>
      </div>
      <div>
      
         
        <button className="btn">
          <Link to="/">Accueil</Link>
        </button>
        <button className="btn" onClick={toggleFormVisibility}>
          <Link to="/add-user">Ajouter un utilisateur</Link>
        </button>
      

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
