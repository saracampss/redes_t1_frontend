import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Send from "./pages/Send";
import Receive from "./pages/Receive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Login} path="/login" />
        <Route Component={Home} path="/" exact />
        <Route Component={Send} path="/send" />
        <Route Component={Receive} path="/receive" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
