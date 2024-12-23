import React from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

export default function AddUser() {
  const navigate = useNavigate();

  const handleAddUser = (userData) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">Add New User</h2>
      </div>
      <UserForm onSubmit={handleAddUser} />
    </div>
  );
}