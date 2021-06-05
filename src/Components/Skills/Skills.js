import React, {useState} from "react"
import "./Skills.css"

const Skills = () => {

    let [showHideElement, setShowHideElement] = useState(0)

    const shouldNotShowElement = showHideElement === 0

    const shouldShowBackend = showHideElement === 1

    const shouldShowdatabase = showHideElement === 2

    const shouldShowFramework = showHideElement === 3

    const shouldShowTheory = showHideElement === 4

    const shouldShowOther = showHideElement === 5

    const shouldShowFrontend = showHideElement === 6

    const hideElement = () => {
        setShowHideElement(0)
    }

    const showBackend = () => {
        setShowHideElement(1)
    }

    const showDatabase = () => {
        setShowHideElement(2)
    }

    const showFramework = () => {
        setShowHideElement(3)
    }

    const showTheory = () => {
        setShowHideElement(4)
    }

    const showOther = () => {
        setShowHideElement(5)
    }

    const showFrontend = () => {
        setShowHideElement(6)
    }

    return (
        <div className="row justify-content-start text-left">
            <h2 className="text-center col-12">Skills</h2>
            {shouldNotShowElement &&
            <div className="col-12 text-center button">
                <button onClick={showBackend} type="button" className="btn mb-2 btn-outline-primary">Backend (click to reveal)</button>
                <br />
                <button onClick={showFrontend} type="button" className="btn mb-2 btn-outline-primary">Frontend (click to reveal)</button>
                <br />
                <button onClick={showDatabase} type="button" className="btn mb-2 btn-outline-primary">Database (click to reveal)</button>
                <br />
                <button onClick={showFramework} type="button" className="btn mb-2 btn-outline-primary">Frameworks (click to reveal)</button>
                <br />
                <button onClick={showTheory} type="button" className="btn mb-2 btn-outline-primary">Theories (click to reveal)</button>
                <br />
                <button onClick={showOther} type="button" className="btn mb-2 btn-outline-primary">Other (click to reveal)</button>
            </div>
            }
            {shouldShowBackend &&
            <div className="col-12 text-center">
                <div id="backend" className="col-12">
                    <p><b>C#</b></p>
                    <div className="skillContainer">
                        <div className="skill C">95%</div>
                    </div>
                    <p><b>Java</b></p>
                    <div className="skillContainer">
                        <div className="skill Java">20%</div>
                    </div>
                    <p><b>JavaScript</b></p>
                    <div className="skillContainer">
                        <div className="skill JavaScript">40%</div>
                    </div>
                </div>
                <button onClick={hideElement} type="button" className="btn btn-info mt-2">Hide</button>
            </div>
            }
            {shouldShowFrontend &&
            <div className="col-12 text-center">
                <div id="frontend" className="col-12">
                    <p><b>HTML</b></p>
                    <div className="skillContainer">
                        <div className="skill HTML">85%</div>
                    </div>
                    <p><b>CSS</b></p>
                    <div className="skillContainer">
                        <div className="skill CSS">75%</div>
                    </div>
                    <p><b>Bootstrap</b></p>
                    <div className="skillContainer">
                        <div className="skill Bootstrap">90%</div>
                    </div>
                    <p><b>JavaScript</b></p>
                    <div className="skillContainer">
                        <div className="skill JavaScriptFront">55%</div>
                    </div>
                </div>
                <button onClick={hideElement} type="button" className="btn btn-info mt-2">Hide</button>
            </div>
            }
            {shouldShowdatabase &&
            <div className="col-12 text-center">
                <div id="database" className="col-12">
                    <p><b>SSMS</b></p>
                    <div className="skillContainer">
                        <div className="skill SSMS">80%</div>
                    </div>
                    <p><b>SQL</b></p>
                    <div className="skillContainer">
                        <div className="skill SQL">80%</div>
                    </div>
                    <p><b>Entity Framework Core</b></p>
                    <div className="skillContainer">
                        <div className="skill EF">75%</div>
                    </div>
                    <p><b>Dapper</b></p>
                    <div className="skillContainer">
                        <div className="skill Dapper">90%</div>
                    </div>
                </div>
                <button onClick={hideElement} type="button" className="btn btn-info mt-2">Hide</button>
            </div>
            }
            {shouldShowFramework &&
            <div className="col-12 text-center button">
                <div id="framework" className="col-12">
                    <p><b>.NET</b></p>
                    <div className="skillContainer">
                        <div className="skill NET">65%</div>
                    </div>
                    <p><b>ASP.NET MVC</b></p>
                    <div className="skillContainer">
                        <div className="skill MVC">70%</div>
                    </div>
                    <p><b>ReactJS</b></p>
                    <div className="skillContainer">
                        <div className="skill React">60%</div>
                    </div>
                </div>
                <button onClick={hideElement} type="button" className="btn btn-info mt-2">Hide</button>
            </div>
            }
            {shouldShowTheory &&
            <div className="col-12 text-center button">
                <div id="theory" className="col-12">
                    <p><b>UML</b></p>
                    <div className="skillContainer">
                        <div className="skill URL">100%</div>
                    </div>
                    <p><b>Scrum</b></p>
                    <div className="skillContainer">
                        <div className="skill URL">100%</div>
                    </div>
                </div>
                <button onClick={hideElement} type="button" className="btn btn-info mt-2">Hide</button>
            </div>
            }
            {shouldShowOther &&
            <div className="col-12 text-center button">
                <div id="other" className="col-12 text-center text-black">
                    <i>Drivers license<br/></i>
                    <i>Truck License<br/></i>
                    <i>Persistent<br/></i>
                    <i>Funny<br/></i>
                    <i>Team Player<br/></i>
                </div>
                <button onClick={hideElement} type="button" className="btn btn-info mt-2">Hide</button>
            </div>
            }
        </div>
    )
}

export default Skills