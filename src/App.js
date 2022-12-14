import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import PendingTask from './pages/PendingTask/PendingTask';
import DashBoard from './pages/DashBoard/DashBoard';
import Header from './components/Header/Header';
import NewTask from './pages/NewTask/NewTask';
import CreateTask from './pages/CreateTask/CreateTask';
import CompletedTask from './pages/CompletedTask/CompletedTask';
import CanceledTask from './pages/CanceledTask/CanceledTask';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import NoMatch from './pages/NoMatch/NoMatch';
import Admin from './pages/Admin/Admin';
import AdminBoard from './components/AdminBoard/AdminBoard';
import ResetEmail from './pages/ResetEmail/ResetEmail';
import VarifyCode from './pages/VerifyCode/VarifyCode';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import TaskList from './pages/TaskList/TaskList';
import UserList from './pages/UserList/UserList';

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }>
            <Route index element={<DashBoard />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/new-task" element={<NewTask />} />
            <Route path="/pending-task" element={<PendingTask />} />
            <Route path="/completed-task" element={<CompletedTask />} />
            <Route path="/canceled-task" element={<CanceledTask />} />
          </Route>
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }>
            <Route index element={<AdminBoard />} />
            <Route path="/admin/user-list" element={<UserList />} />
            <Route path="/admin/task-list" element={<TaskList />} />
          </Route>
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password/email" element={<ResetEmail />} />
          <Route path="/reset-password/verify" element={<VarifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Header>
    </>
  );
}

export default App;
