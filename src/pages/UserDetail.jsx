import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UserDetail.css";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("User not found");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched User Data:", data); // Debugging
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading user details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!user) return <div className="error">User not found</div>;

  return (
    <div className="detail-container">
      <div className="detail-header">
        <h2>User Details</h2>
        <button onClick={() => navigate(`/user/${id}/edit`)} className="edit-btn">
          Edit User
        </button>
      </div>
      <div className="detail-content">
        <div className="detail-group">
          <label>ID:</label>
          <p>#{user.id}</p>
        </div>
        <div className="detail-group">
          <label>Name:</label>
          <p>{user.name}</p>
        </div>
        <div className="detail-group">
          <label>Email:</label>
          <p>{user.email}</p>
        </div>
        <div className="detail-group">
          <label>Phone:</label>
          <p>{user.phone}</p>
        </div>
        <div className="detail-group">
          <label>Website:</label>
          <p>{user.website}</p>
        </div>
      </div>
    </div>
  );
}
