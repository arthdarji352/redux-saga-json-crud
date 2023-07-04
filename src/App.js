import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import addEditUser from "./pages/AddEditUser";
import UserInfo from "./pages/UserInfo";
import About from "./pages/About";
import Header from "./component/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/addUser" Component={addEditUser} />
          <Route path="/editUser/:id" Component={addEditUser} />
          <Route path="/userInfo/:id" Component={UserInfo} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
