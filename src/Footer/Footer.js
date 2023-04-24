import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div><p>© {new Date().getFullYear()} Made with <span><FavoriteIcon/></span>  by <span>React</span></p></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/images/LogoNav.png'}  alt="logo" style={{
                    filter: "invert(100%)",
                    color: "wheat"}}></img></div>
            </div>
        </div>
    );
}

export default Footer;