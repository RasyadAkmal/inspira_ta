import React from "react";
import "./About.css";
import {FiMail} from "react-icons/fi"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {AiOutlinePhone} from "react-icons/ai"

class About extends React.Component{
    render(){
        return(
            <div className="containerabout">
                <div className="about">
                    <img src="/fotome.png" alt="profile"/>
                    <p>Rasyad Akmal Risqullah</p>
                    <div className="student">Premium</div>
                    <div className="line"></div>
                    <div className="location">
                        <p className="info">
                            <HiOutlineLocationMarker className = "icon" size="18px" color="#484d49" />
                            Location
                        </p>
                        <p>Jakarta Utara</p>
                    </div>
                    <div className="location">
                        <p className="info">
                            <AiOutlinePhone className = "icon" size="18px" color="#484d49" />
                           Number 
                        </p>
                        <p>+6282299416186</p>
                    </div>
                    <div className="location">
                        <p className="info">
                            <FiMail className = "icon" size="18px" color="#484d49" />
                            Email
                        </p>
                        <p>akmal@gmail.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;