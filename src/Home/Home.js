import React from 'react';
import NavBar from "../NavBar/NavBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Home() {
    return (
        <div className="container">
            <div className="home">
                <NavBar/>
            </div>
        </div>

);
}

export default Home;