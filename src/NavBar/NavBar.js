import  React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

function NavBar() {

    const [modal, setModal] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleClick(event, sectionId) {
        event.preventDefault();
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className={`nav-bar ${isScrolled ? 'element scrolled' : 'element'}`}>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" sx={{
                    backgroundColor: "rgba(42,44,57,0)",
                    boxShadow: "0 0 0 rgb(68, 68, 68)",
                    padding: "20px 0"
                }}>
                    <Toolbar className="container"
                             sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Typography variant="h6" component="div" sx={{fontFamily: "Helvetic", fontSize: 35}}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/logoNav.png'} alt="logo"
                                 style={{
                                     filter: "invert(100%)",
                                     color: "wheat",
                                     height: "90px",
                                     width: "130px"
                                 }}/>
                        </Typography>
                        <div className={`${modal ? "nav-modal" : "nav-modal close"}`}>
                            <div className="bg-modal">
                                <ul>

                                    {
                                        modal ? <CloseIcon onClick={() => setModal(false)}/> :
                                            <CloseIcon className={"close-icon"}/>
                                    }
                                    <li onClick={(event) => handleClick(event, "home")}>Home</li>
                                    <li onClick={(event) => handleClick(event, "skills")}>Skills</li>
                                    <li onClick={(event) => handleClick(event, "projects")}>Projects</li>
                                    <li>Contact</li>
                                </ul>
                            </div>

                        </div>

                        {1 !== 1 ?
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon/>
                            </IconButton>
                            :
                            null
                        }
                        <button>Hire Me </button>
                        <MenuIcon className="menu-icon" onClick={() => setModal(true)}/>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>

    );
}

export default NavBar;