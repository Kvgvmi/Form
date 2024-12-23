import React, { useState } from "react";
import "./UserForm.css";
import { useNavigate } from "react-router-dom";


export default function UserForm({ initialData = {}, onSubmit }) {
  const [user, setUser] = useState({ 
    name: "", 
    email: "", 
    ...initialData 
  });

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  const cansel=()=>{
  navigate("/")}

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Enter user name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter email address"
            required
          />
        </div>
        <button type="submit" className="btn">
          Save User
        </button>
        <button type="button" className="btn" onClick={cansel} >
          Cancel
        </button>
      </form>
    </div>
  );
}