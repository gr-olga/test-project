import "./Footer.css"
import footerLogo from "../../images/logo.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={footerLogo} alt="logo"/>
            <ul>
                <li>WORK</li>
                <li>SERVICES</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CAREERS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}