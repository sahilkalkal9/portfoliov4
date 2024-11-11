import { Link } from "react-router-dom"
import "../../App.scss"

function Nav() {
    return (
        <div className="nav">
            <div className="nav-box">
                <div className="logo-box">
                    <Link to="/">
                        <img src={require("./logo.png")} alt="Logo" className="logo" />
                    </Link>
                    <Link to="/">
                        <p className="logo-text">Sahil Kalkal</p>
                    </Link>

                </div>
                <div className="menu">
                    <Link to='/about-me'>
                        <p className="menu-item">
                            About Me
                        </p>
                    </Link>
                    <Link to='/projects'>
                        <p className="menu-item">
                            Projects
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav