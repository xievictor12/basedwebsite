import "../styles/nav.scss";
import logo from '../img/ofLogo.png'

function Navbar () {
    return(
        <nav className="navbar">
            <a className="logo-container" href="">
                <img className="App-logo" src={logo} alt="logo"/>
            </a>
            <ol>
                <a href="">Bio</a>
                <a href="">Music</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </ol>
        </nav>
    )
}

export default Navbar;