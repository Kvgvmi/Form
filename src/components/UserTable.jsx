import React from "react";
import UserRow from "./UserRow";
import "./UserTable.css";

export default function UserTable({ users }) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow key={index} user={user} />
        ))}
      </tbody>
    </table>
  );
}
