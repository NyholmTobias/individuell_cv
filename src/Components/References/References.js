import React from "react"
import "./References.css"
import PontusKamarkRef from "./PontusKamarkRef.png"

const References = () => {
    return (
        <div className="text-center">
            <h2>References</h2>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner m-auto">
                    <div className="carousel-item active" id="pontusKamark">
                        <img className="d-block w-100" src={PontusKamarkRef} alt="Pontus Kåmark Reference" />
                    </div>
                </div>
        </div>
      </div>
    )
}

export default References

