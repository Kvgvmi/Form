import React, { useState } from "react";
import "./UserForm.css";

export default function UserForm({ initialData = {}, onSubmit }) {
  const [user, setUser] = useState({ 
    name: "", 
    email: "", 
    ...initialData 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

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
        <button type="submit" className="submit-btn">
          Save User
        </button>
      </form>
    </div>
  );
}