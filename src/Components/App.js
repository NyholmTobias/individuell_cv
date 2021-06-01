import React from "react"
import ProfilePicture from "./ProfilePicture/ProfilePicture"
import Title from "./Title/Title"
import AboutMe from "./AboutMe/AboutMe"
import Header from "./Header/Header"
import Skills from "./Skills/Skills"
import Timeline from "./Timeline/Timeline"
import References from "./References/References"
import ContactMe from "./ContactMe/ContactMe"

const App = () => {

    return (
        <div>
            <section id="Home">
            <Header />
            <Title />
            </section>
            <div className="container">
                <div className="row">
                    <section id="AboutMe">
                        <ProfilePicture />
                        <AboutMe />
                    </section>
                    <section id="Skills">
                        <Skills />
                    </section>
                    <section id="Timeline">
                        <Timeline />
                    </section>
                    <section id="References">
                        <References />
                    </section>
                    <section id="ContactMe">
                        <ContactMe />
                    </section>
                </div>
            </div>
        </div>
    )
  }

  export default App