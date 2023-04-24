import React from 'react';

function MySkills() {
    return (
        <div className="my-skills">
            <div className="container">
                <h1>My Skills</h1>

                <div className="row
                row-cols-xxl-5
                row-cols-xl-4
                row-cols-lg-3
                row-cols-md-3
                row-cols-sm-2
                row-cols-1
                my-skills__block">
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/React.png'} alt="logo"/>
                        <h2>React</h2>
                        <p>React is a popular Javascript programming language library
                            that is used to create web user interfaces.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Redux.png'} alt="logo"/>
                        <h2>Redux</h2>
                        <p>Redux is an open-source JavaScript library for managing application state.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/HTML.png'} alt="logo"/>
                        <h2>HTML</h2>
                        <p>HTML (Hypertext Markup Language) is code used to structure and display a web page and its content.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/CSS.png'} alt="logo"/>
                        <h2>CSS</h2>
                        <p>CSS is a formal language for decorating and describing the appearance of a document (web page)
                            written using the markup language (most commonly HTML or XHTML).</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/SASS.png'} alt="logo"/>
                        <h2>SASS</h2>
                        <p>Sass - (a language for describing another language), which simplifies and speeds up the writing of CSS code.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/JavaScript.png'} alt="logo"/>
                        <h2>JavaScript</h2>
                        <p>JavaScript is a full-fledged dynamic programming language that applies to an HTML document and can provide dynamic interactivity on websites.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/TypeScript.png'} alt="logo"/>
                        <h2>TypeScript</h2>
                        <p>TypeScript is a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript.</p>
                    </span></div>

                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Bootstrap.png'} alt="logo"/>
                        <h2>Bootstrap</h2>
                        <p>Bootstrap is a free set of tools for building websites and web applications.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/MaterialUI.png'} alt="logo"/>
                        <h2>Material UI</h2>
                        <p>Material-ui is reactJS's Framework, providing google-ready solutions for fast and fairly simple web development.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/StyledComponents.png'} alt="logo"/>
                        <h2>Styled components</h2>
                        <p>Styled Components is one of the popular CSS in JS code writing solutions.</p>
                    </span></div>

                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/StoryBook.png'} alt="logo"/>
                        <h2>StoryBook</h2>
                        <p>Storybook allows you to browse the component library, see different component states, and interactively develop and test components.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/UnitTest.png'} alt="logo"/>
                        <h2>Unit test</h2>
                        <p>Unit testing is the process in programming to check the correctness of individual modules of the program source code.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/JestTest.png'} alt="logo"/>
                        <h2>Jest test</h2>
                        <p>Jest is a JavaScript testing framework designed to provide assurance that any JavaScript code works correctly.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Figma.png'} alt="logo"/>
                        <h2>Figma</h2>
                        <p>Figma is an online collaborative graphics editor.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/RestAPI.png'} alt="logo"/>
                        <h2>Rest API</h2>
                        <p>REST APIs are a way for sites and web applications to communicate with the server.</p>
                    </span></div>
                    <div className="col"><span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/ChatGPT.png'} alt="logo"/>
                        <h2>ChatGPT</h2>
                        <p>ChatGPT is an artificial intelligence chatbot developed by OpenAI and capable of working in conversational mode, supporting queries in natural languages.</p>
                    </span></div>

                </div>
            </div>

        </div>
    );
}

export default MySkills;