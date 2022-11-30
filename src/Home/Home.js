import './Home.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from "../Components/Button/Button.js";
import {Navbar} from "../Components/Navbar/Navbar.js";

class Home extends React.Component {
    handleClick = () =>{
      
    }
    render() {
        return (
            <div>
                <Navbar pages="HOME"></Navbar>
                <div className="container">
                    <div className="containerhome">
                        <h1>Inspirasi Desain</h1>
                        <h1>Rumah</h1>
                        <div class="buttonHome">
                            <NavLink to="/Main">
                                <Button buttonText="Cari"></Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;