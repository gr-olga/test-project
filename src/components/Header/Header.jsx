import logo from "../../images/logo.png"
import "./Header.css"

export default function Header() {
    return (
        <div className="header-main">
            <img className="header-logo" src={logo} alt="logo"/>
            <div className="header-menu-box">
                <h4 className="header-text">MENU</h4>
                <input type="checkbox" id="toggle"/>
                <label htmlFor="toggle">
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                        <circle r="45" cx="50" cy="50"></circle>
                    </svg>
                    <div className="header-hamburger">
                        <div className=" header-hamburger-center"></div>
                    </div>
                </label>
            </div>
        </div>
    )
}