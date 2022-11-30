import React from "react";
import "./About.css";
import {FiMail} from "react-icons/fi"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {AiOutlinePhone} from "react-icons/ai"
import {Navbar} from "../Components/Navbar/Navbar.js";
import {Hero} from "../Components/Hero/Hero.js";

class About extends React.Component{
    render(){
        return(
            <div>
                <Navbar pages="ABOUT"/>
                <Hero
                    title="About App"
                    caption="Aplikasi Inspira"
                />
                <div className="containerabout">
                    <div className="about">
                        <img src="/inspira.png" alt="logo"/>
                        <p>Aplikasi Inspirasi Desain Rumah</p>
                        <div className="student">Since 2022</div>
                        <div className="line"></div>
                        <div className="location">
                            <p className="info">
                                <HiOutlineLocationMarker className = "about-icon" size="18px" color="#484d49" />
                                Location
                            </p>
                            <p>Semarang</p>
                        </div>
                        <div className="location">
                            <p className="info">
                                <AiOutlinePhone className = "about-icon" size="18px" color="#484d49" />
                            Number 
                            </p>
                            <p>+6282299416186</p>
                        </div>
                        <div className="location">
                            <p className="info">
                                <FiMail className = "about-icon" size="18px" color="#484d49" />
                                Email
                            </p>
                            <p>kelompok17@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;