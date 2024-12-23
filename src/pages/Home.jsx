import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import NavBar from "../components/NavBar";


export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch users");
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  

  return (
    
    <div className="home-container">
      <NavBar />
      <UserTable users={users} />
    </div>
  );
}