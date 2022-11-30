import "./Navbar.css";

export function Navbar({pages}){
    return(
        <header>
            <div class="nav">
                <img src="/inspira.png" alt="logo"/>
                <p id="titleGroup">INSPIRA</p>
            </div>
            <a>{pages}</a>
        </header>
    )
}