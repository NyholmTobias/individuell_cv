import React, {useEffect} from "react"
import Typed from "typed.js"



const AboutMe = () => {
    
    useEffect(() => {
        new Typed(".typed", {
            strings: ["Lord of the Rings", "Star Wars", "Peaky Blinders", "Vikings", "Finding Nemo", "The Office (America)", "Stranger Things", "Harry Potter"],
            typeSpeed: 50,
            backSpeed: 10,
            loop: true,
        })
    }, [])

    return (
        <div className="col-xl-7 col-l-7 col-md-8 col-sm-8 col-xs-8 float-right">
            <h2>About Me</h2>
            <p>In my life I've been working with everything from beeing a warehouse worker, tire fitter, sound technician, customer service employee and a grapichal purchaser. Through the years i have gathered a broad understanding of different businesses and found out what really makes me shine and keeps me motivated. I love to work with projects and to learn new skills while at the same time try to find ways to optimise what i do. With this knowlege i have now started to aim towards working with a longtime interest and hobby of mine. Software- and system development.</p>
            <ul className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12 float-left">
                <li><p><b>Born:</b> August 23 1993</p></li>
                <li><p><b>Lives:</b> Gothenburg, Sweden</p></li>
                <li><p><b>Full Time Occupation:</b><br/> Student - System development</p></li>
                <li><p><b>Favorite Movies and Series:</b><br/><span className="typed"></span></p></li>
            </ul>
            <ul className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12 float-left">
                <li><p><b>Interests:</b> Computers, games, music, cooking, training, diving.</p></li>
                <li><p><b>Life Goals:</b> House by the sea. Work abroad. Run my own company. Get a dog when i retire.</p></li>
                <li><p><b>Part Time Occupation:</b><br/> Junior developer at Centiro. Graphical purchaser at Tingstad.</p></li>
            </ul>
        </div>
    )
}

export default AboutMe