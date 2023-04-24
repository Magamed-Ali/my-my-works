import React from "react";
import {useSelector} from "react-redux";
import img from "../img-0.png"


export const Projects = ()=> {

    const project = useSelector(state => state.project)

    return (
        <div id="projects" className="container">
            <div className="my-projects">
                <h1>My Projects</h1>
                <div className="d-flex flex-wrap justify-content-center row-cols-xxl-1 row-cols-1">
                    {
                        project.map(i => i.img.length ? <div className="col-12 p-5 my-projects__info">
                                <div className="img"><img src={i.img} alt=""/>
                                    <div className="title"><h2>{i.title}</h2><p>{i.description}</p></div>
                                </div>
                            <div className="git-link">
                                <button><a href={i.linkGit} target="_blank">GitHub</a></button>
                                <button><a href={i.linkDemo} target="_blank">Demo</a></button></div>
                        </div>
                            : null)
                    }
                </div>
            </div>


        </div>
    )
}