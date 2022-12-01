import "./Button.css";

export function Button({buttonText, onClick}){
    return(
        <button onClick={onClick}>{buttonText}</button>
    )
}