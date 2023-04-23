import React, {useEffect} from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import img from "./Lovepik_com-401643778-programmer.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

function Main() {

    return (
        <div className="container">
            <div className="row ">
                <div className="main">
                    <div className="col-xl-5 main__name">
                        <h3>Hello! I`m</h3>
                        <h2>MagomedAli</h2>
                        <p>UI/UX Designer specializing in Shopify & Webflow.</p>

                        <button>Get Resume <SaveAltIcon/></button>

                        <div className="main__video-link">
                            <div className="container1">
                                <div className="hoop">
                                    <a href="#" className="hoop-circles">
                                        <div className="hoop-circle hoop-circle--1"></div>
                                        <div className="hoop-circle hoop-circle--2"></div>
                                        <div className="hoop-circle hoop-circle--3"></div>
                                    </a>

                                </div>
                                <PlayArrowIcon/>
                            </div>
                            <div>Watch Video</div>
                        </div>

                    </div>
                    <div className="col-xl-7 main__photo">
                        <img src={img} alt=""/>
                        <span className="left"></span>
                        <span className="center">
                            <div className="linked"><LinkedInIcon/></div>
                            <div className="telegram"><TelegramIcon/></div>
                            <div className="instagram"><InstagramIcon/></div>
                            <div className="facebook"><FacebookIcon/></div>
                            </span>
                        <span className="right"></span>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Main;