import React from "react";
import { Link } from "react-router-dom";

export default function UserTable({ users }) {
  return (
    
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Details</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>#{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                
                <button className="btn" onClick={() => console.log("Update", user.id)}>
                  <Link to={`/edit-user/${user.id}`} className="Update-link">Update</Link>
                </button>
              </td>
              <td>
                <button className="btn" onClick={() => console.log("Details", user.id)}>
                <Link to={`/user/${user.id}`} className="details-link">Details</Link>
                </button>
              </td>
              <td>{new Date().toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-user">
        <button className="btn">Add User</button>
      </Link>
    </div>
  );
}