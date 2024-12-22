import React, { useState } from "react";
import Header from "../components/Header";
import UserTable from "../components/UserTable";

export default function Home() {
  const [users] = useState([
    { id: "#12548796", name: "Siham", email: "siham@gmail.com", date: "28 Jan, 12:30 AM" },
    { id: "#12548797", name: "Mreym", email: "mreym@gmail.com", date: "25 Jan, 10:40 PM" },
    { id: "#12548798", name: "Hajar", email: "hajar@gmail.com", date: "20 Jan, 10:40 PM" },
    { id: "#12548799", name: "Ali", email: "ali@gmail.com", date: "20 Jan, 10:40 PM" },
    { id: "#12548800", name: "Emily", email: "emily@gmail.com", date: "20 Jan, 10:40 PM" },
  ]);

  return (
    <div>
      <Header />
      <UserTable users={users} />
    </div>
  );
}
