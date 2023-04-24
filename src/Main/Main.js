import React, {useEffect} from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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
                        <p>And I'm a Frontend Developer</p>

                        <button><a target="_blank" href="https://disk.yandex.ru/i/RqQR6aanChWZPQ">Get Resume <SaveAltIcon/></a></button>

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
                        <img src={process.env.PUBLIC_URL + '/assets/images/Lovepik_com-401643778-programmer.png'} alt="logo"/>
                        <span className="center">
                            <div className="linked"><a target="_blank" href="https://linkedin.com/in/magomed-ali-gazmagamaev-614002263"><LinkedInIcon/></a></div>
                            <div className="telegram"><a target="_blank" href="https://t.me/amg095" ><TelegramIcon/></a></div>
                            <div className="instagram"><a target="_blank" href="https://www.instagram.com/gazmagamaev_magimed_ali/"><InstagramIcon/></a></div>
                            <div className="facebook"><a target="_blank" href="https://vk.com/id576420378"><FacebookIcon/></a></div>
                            </span>
                        <span className="right"></span>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Main;