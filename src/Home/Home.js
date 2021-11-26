import './Home.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    handleClick = () =>{
      
    }
    render() {
        return (
            <div className="container">
                <div className="containerhome">
                    <h1>Inspirasi Desain</h1>
                    <h1>Rumah</h1>
                    <NavLink to="/Main"><button className="buttonhome">Cari</button></NavLink>
                </div>
            </div>
        );
    }
}

export default Home;