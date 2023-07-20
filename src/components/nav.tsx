import "../styles/nav.scss";
import logo from '../assets/ofLogo.png'

function Navbar () {

    return(
        <nav className="navbar">
            <a className="logo-container" href="#Landing">
                <img className="App-logo" 
                     src={logo} 
                     alt="logo"/>
            </a>
            <ol>
                <a href="#Bio">Bio</a>
                <a href="#Music">Music</a>
                <a href="#Blog">Blog</a>
                <a href="#Contact">Contact</a>
            </ol>
        </nav>
    )
}

export default Navbar;