import React from "react"

const Header = () => {
    return (
        <header> 
            <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom box-shadow fixed-top">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse d-md-inline-flex justify-content-between" id="collapseNavbar">
                    <ul className="navbar-nav flex-grow-1">
                        <li>
                            <a href="#Home" data-cy="HomeButton" className="nav-link scrolloto text-dark">
                                <h6 className="tab">Home</h6></a>
                        </li>
                        <li>
                            <a href="#AboutMe" className="nav-link scrolloto text-dark">
                                <h6 className="tab">About me</h6></a>
                        </li>
                        <li>
                            <a href="#Skills" className="nav-link scrolloto text-dark">
                                <h6 className="tab">Skills</h6></a>
                        </li>
                        <li>
                            <a href="#Repos" className="nav-link scrolloto text-dark">
                                <h6 className="tab">GitHub</h6></a>
                        </li>
                        <li>
                            <a href="#Timeline" className="nav-link scrolloto text-dark">
                                <h6 className="tab">Timeline</h6></a>
                        </li>
                        <li>
                            <a href="#References" className="nav-link scrolloto text-dark">
                                <h6 className="tab">Reference</h6></a>
                        </li>
                        <li>
                            <a href="#ContactMe" className="nav-link scrolloto text-dark">
                                <h6 className="tab">Contact Me</h6></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header