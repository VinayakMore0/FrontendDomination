import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";

function App() {
  return (
    <div className="w-screen h-screen">
      <nav className="py-5 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
