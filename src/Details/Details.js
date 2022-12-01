import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Details.css"
import {Button} from "../Components/Button/Button.js";
import { NavLink } from "react-router-dom";
import {Navbar} from "../Components/Navbar/Navbar.js";

export default function Details() {
  const [data, setData] = useState();

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axios(
                    "https://63669e6ff5f549f052c9e8a9.mockapi.io/api/v1/profile"
                );
                setData(results.data[id-1])
            } catch (err) {
            
            }  
        };

        fetchData();
    }, [id]);
    console.log(data);

  return (
    <div>
      <Navbar pages="DETAILS"/>
      <div className="distance">
        {data === undefined
          ? (<div className="loading-state">Loading...</div>)
          :
          <div className="detail">
            <img className="img" src={data.image} alt="detail-img"/>
            <div className="detail-item">
              <h3>{data.nama}</h3>
              <p>Architect : {data.maker}</p>
              <p>{data.desc}</p>
            </div>
          </div>
        }
        <div id="buttonComp">
          <NavLink to="/Main">
            <Button buttonText="Kembali"></Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
