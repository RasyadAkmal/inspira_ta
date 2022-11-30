import "./Card.css";
import { NavLink } from "react-router-dom";

export function Card({id,image,nama}){
    return(
        <div class="box">
            <NavLink
            to={`/Cardsdetails/${id}`}
            >
            <img class="img-list" src={image} alt="" />
            </NavLink>
            <h2>{nama}</h2>
        </div>
    )
}