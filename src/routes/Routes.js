import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Posts from '../components/Posts/Posts';

const RoutesComponent = () => (
    <Routes>
        <Route path="/" element={<h1>Welcome!</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
    </Routes>
)

export default RoutesComponent
