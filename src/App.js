import React from 'react';
import {useSelector} from "react-redux";
import Home from "./Home/Home";
import Main from "./Main/Main";
import MySkills from "./MySkills/MySkills";
import ScrollToTop from "./scroll-top/ScrollToTop";

function App() {

    const project = useSelector(state => state.project)

    return (
        <div >
            <div>
                <Home/>
                <Main/>
                <MySkills/>

                <ScrollToTop/>
            </div>
            <div className="semicircle-top">
                <span className="one"></span>
                <span className="two"></span>
                <span className="three"></span>
            </div>
            <div className="semicircle-bottom">
                <span className="one"></span>
                <span className="two"></span>
                <span className="three"></span>
            </div>

        </div>
    );
}

export default App;