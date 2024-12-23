import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-routerdom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import UserDetail from "./pages/UserDetail";
import EditUser from "./pages/EditUser";

function App() {
 return (
 <Router>
 
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/add-user" element={<AddUser />} />
 <Route path="/user/:id" element={<UserDetail />} />
 <Route path="/user/:id/edit" element={<EditUser />} />
 </Routes>
 </Router>
 );
}
export default App;