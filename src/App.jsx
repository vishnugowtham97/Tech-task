import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Task2 from "./Pages/Task2";
import Task3 from "./Pages/Task3";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
      </Routes>
    </div>
  );
}

export default App;
