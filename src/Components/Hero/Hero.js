import "./Hero.css";

export function Hero({title,caption}){
    return(
        <div class="hero">
            <h1>{title}</h1>
            <p>{caption}</p>
        </div>
    )
}