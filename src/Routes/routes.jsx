import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import { Routes, Route } from "react-router-dom";
import Chat from "@/pages/Chat";
import Login from "@/pages/Login";  
import Register from "@/pages/Register";
import Notices from "@/pages/Notice";


export default function AppRoutes() {
  return (
    <Routes>
         <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/profile/me" element={<Profile />} /> */}
    </Routes>
  );
}
