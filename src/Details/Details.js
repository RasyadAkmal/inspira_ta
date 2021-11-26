import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Details.css"

export default function Details() {
  const [data, setData] = useState();

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axios(
                    "https://my-json-server.typicode.com/rasyadakmal/InspiraApp/db"
                );
                setData(results.data.desain[id-1])
            } catch (err) {
            
            }  
        };

        fetchData();
    }, [id]);
    console.log(data);

  return (
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
    </div>
  );
}
