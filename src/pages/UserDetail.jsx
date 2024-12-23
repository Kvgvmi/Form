import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
export default function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }, [id]);
  
    if (!user) return <p className="loading">Chargement...</p>;
  
    return (
      <div className="user-detail-container">
        <NavBar />
        <div className="user-detail-content">
          <h1 className="user-detail-title">Détails de l'utilisateur</h1>
          <div className="user-detail-info">
            <p><strong>Nom :</strong> {user.name}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Téléphone :</strong> {user.phone}</p>
            <p>
              <strong>Site web :</strong> 
              <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
