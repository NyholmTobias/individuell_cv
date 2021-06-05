import React, {useState, useEffect} from "react"
import ProfilePicture from "./ProfilePicture/ProfilePicture"
import Title from "./Title/Title"
import AboutMe from "./AboutMe/AboutMe"
import Header from "./Header/Header"
import Skills from "./Skills/Skills"
import Timeline from "./Timeline/Timeline"
import References from "./References/References"
import ContactMe from "./ContactMe/ContactMe"
import Repos from "./Repos/Repos"

const App = () => {
    const [allMyRepos, setReposState] = useState([])
    const [allOrgsRepos, setOrgsRepos] = useState([])
    const [ECommerceRepo, setECommerceRepo] = useState({})
    
    const getMyGithubRepos = async () => {
        const response = await fetch("https://api.github.com/users/NyholmTobias/repos");
        const jsonData = await response.json();
        console.log(jsonData)
        setReposState(jsonData)
    }

    const getOrgsGithubRepos = async () => {
        const response = await fetch("https://api.github.com/orgs/Group4-CVHub/repos");
        const jsonData = await response.json();
        console.log(jsonData)
        setOrgsRepos(jsonData)
    }

    const getECommerceRepo = async () => {
        const response = await fetch("https://api.github.com/repos/DonOllario/Projektarbete-E-Commerce");
        const jsonData = await response.json();
        console.log(jsonData)
        setECommerceRepo(jsonData)
    }

    useEffect(() => {
        getMyGithubRepos();
        getOrgsGithubRepos();
        getECommerceRepo();
    }, [])

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
                    <section id="Repos">
                        <Repos myRepos={allMyRepos} orgsRepos={allOrgsRepos} eCommerceRepo={ECommerceRepo}/>
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