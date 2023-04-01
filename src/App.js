import React from 'react';
import {useSelector} from "react-redux";
import './style.scss'

function App() {

    const project = useSelector(state => state.project)

    return (
        <div className="container">
            <div className="title"><p>Мои работы</p>
                <hr/>
            </div>
            <div className="row gy-4">
                {project.map(item => {
                    return (
                        <div className="col-sm-6 col-lg-4">
                            <div className="wrapper-card">
                                <h5>{item.title}</h5>
                                <div className="wrapper-card__img">
                                    <p>{item.description}</p>
                                    <img src={item.img} alt="img"/>
                                </div>

                                <div className="wrapper-card__boxlink">
                                    <span className="heroku"><a href={item.linkDemo}
                                                              target="_blank">Перейти</a></span>
                                    <span className="git"><a href={item.linkGit}
                                                          target="_blank">Посмотреть код</a></span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;