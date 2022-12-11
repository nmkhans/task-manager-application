import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AllTask from "./pages/AllTask/AllTask";
import DashBoard from './pages/DashBoard/DashBoard';
import PendingTask from './pages/PendingTask/PendingTask';
import Login from "./pages/Login/Login";
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<DashBoard />} />
            <Route path="all-task" element={<AllTask />} />
            <Route path="pending-task" element={<PendingTask />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Header>
    </>
  );
}

export default App;
