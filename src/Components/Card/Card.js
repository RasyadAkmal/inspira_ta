import "./Card.css";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import axios from "axios";

export function Card({id,image,nama,fetchedData}) {
    return(
        <div class="box">
            <NavLink
            to={`/Cardsdetails/${id}`}
            >
            <img class="img-list" src={image} alt="" />
            </NavLink>
            <h2>{nama}</h2>
            <Button buttonText={"Delete"} onClick={(e) => {
                e.preventDefault();
                axios
                .delete(`https://63669e6ff5f549f052c9e8a9.mockapi.io/api/v1/profile/${id}`)
                .then((results) => {
                    fetchedData();
                });
            }}/>
        </div>
    )
}