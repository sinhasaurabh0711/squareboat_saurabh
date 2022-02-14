import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing.js";
import Login from "./Pages/Login.js";
import Dashboard from "./Pages/Dashboard.js";

export default function App() {
  return (
    <div styles={{ display: "flex", width: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/login "component={Login} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    // <Landing />
  );
}
