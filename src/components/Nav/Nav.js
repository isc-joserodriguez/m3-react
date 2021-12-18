import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => (
    <nav>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/categories">Categories</Link></li>
        </ul>
    </nav>
)

export default Nav
