import React, { useState } from "react";
import UserForm from "../components/UserForm";
export default function AddUser() {
  const [users, setUsers] = useState([]);
  //const navigate = useNavigate();
  const navigate = useNavigate();
  const handleAddUser = (user) => {
    const newUser = { id: users.length + 1, ...user };
    setUsers([...users, newUser]);
    //navigate("/");
    navigate("/");
  };
  return (
    <div>
      <h1>Ajouter un utilisateur</h1>
      <UserForm onSubmit={handleAddUser} />
    </div>
  );
}
