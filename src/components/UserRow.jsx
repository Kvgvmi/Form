import React from "react";
import "./UserRow.css";

export default function UserRow({ user }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className="update-btn">Update</button>
        <button className="details-btn">Details</button>
      </td>
      <td>{user.date}</td>
    </tr>
  );
}
