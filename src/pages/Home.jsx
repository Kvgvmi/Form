import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";  // Import UserForm to add new users
import NavBar from "../components/NavBar";  // Import UserForm to add new users

export default function Home() {
  const [users, setUsers] = useState([]);  // Holds the list of users
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState("");  // Error state
  const [successMessage, setSuccessMessage] = useState("");  // Success message for feedback
  const [isFormVisible, setIsFormVisible] = useState(false);  // State to control form visibility

  // Fetch users from API on initial load
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Handle adding a new user (to the state)
  const handleAddUser  = (user) => {
    const newUser  = { id: users.length + 1, ...user }; 
    setUsers([...users, newUser ]);  
    setSuccessMessage("Utilisateur ajouté avec succès!");  
    setIsFormVisible(false);  // Hide the form after adding a user
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>

      <NavBar  />
      <UserTable users={users} />
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
}