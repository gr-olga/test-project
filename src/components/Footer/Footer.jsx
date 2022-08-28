import "./Footer.css"
import footerLogo from "../../images/logo-white.png"
import facebook from "../../images/facebook.png"
import twitter from "../../images/twitter.png"
import insta from "../../images/insta.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-block">
                <img className="footer-logo" src={footerLogo} alt="logo"/>
                <ul className="footer-menu">
                    <li className="footer-menu-item">WORK</li>
                    <li className="footer-menu-item">SERVICES</li>
                    <li className="footer-menu-item">STORIES</li>
                    <li className="footer-menu-item">ABOUT</li>
                    <li className="footer-menu-item">CAREERS</li>
                    <li className="footer-menu-item">CONTACT</li>
                </ul>
                <div>
                    <img className="footer-social" width="8" src={facebook}/>
                    <img className="footer-social" src={twitter}/>
                    <img className="footer-social" src={insta}/>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-cop">
                <p className="footer-copyright_item">Chamber of Commerce: 63464101 </p>
                <p className="footer-copyright_item">VAT: NL 8552.47.502.B01</p>
                <p className="footer-copyright_item">Terms and conditions</p>
            </div>
            <div>
                <p className="footer-copyright_item">© 2018 Dept Agency</p>
            </div>
        </div>
    <div>

    </div>
</div>
)
}