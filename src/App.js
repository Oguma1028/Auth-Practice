import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./register";
import Login from "./Login";
import Mypage from "./Mypage";

const App = () => {
  return (
    <>
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/`} element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App;