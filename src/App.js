import React from 'react';
import {useSelector} from "react-redux";

import Home from "./Home/Home";
import Projects from "./Projects/Projects";

function App() {

    const project = useSelector(state => state.project)

    return (
        <div className="container">
            <div className="row">
                <Home/>
                <Projects/>

            </div>
        </div>
    );
}

export default App;