import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Task2 from "./Pages/Task2";
import Task3 from "./Pages/Task3";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
      </Routes>
    </div>
  );
}

export default App;
