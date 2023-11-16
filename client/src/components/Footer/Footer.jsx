import "./footer.scss";
import { BsApple } from "react-icons/bs";
import { navLinks } from "../../constants";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()

  return (
    <footer>
        <div className="footer">
            <div className="footer-in">
            <div className="logo" onClick={() => navigate("/")}>
                <BsApple />
            </div>

            <div className="links">
                {
                    navLinks.map((link) => (
                        <Link key={link.id} to={link.href}>{link.linkname}</Link>
                    ))
                }
            </div>

            <div className="copyright">
                Copyright © Elmir Sultan.
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer