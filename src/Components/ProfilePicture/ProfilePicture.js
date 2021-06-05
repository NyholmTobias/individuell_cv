import React from "react"
import "./ProfilePicture.css"
import ProfilePic from "./ProfilePic.png"

const ProfilePicture = () => {
    return (
        <img className="fadeIn col-4 col-s-2 col-xs-2 p-0 rounded" src={ProfilePic} alt="ProfilePicture"/>
    )
}

export default ProfilePicture