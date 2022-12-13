import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import DashBoard from './pages/DashBoard/DashBoard';
import PendingTask from './pages/PendingTask/PendingTask';
import Login from "./pages/Login/Login";
import Header from './components/Header/Header';
import NewTask from './pages/NewTask/NewTask';
import CreateTask from './pages/CreateTask/CreateTask';
import CompletedTask from './pages/CompletedTask/CompletedTask';
import CanceledTask from './pages/CanceledTask/CanceledTask';

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<DashBoard />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/new-task" element={<NewTask />} />
            <Route path="/pending-task" element={<PendingTask />} />
            <Route path="/completed-task" element={<CompletedTask />} />
            <Route path="/canceled-task" element={<CanceledTask />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Header>
    </>
  );
}

export default App;
