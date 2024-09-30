import NavBar from "./NavBar";
import { APP_LOGO } from "../constants";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img className="appLogo" src={APP_LOGO} alt="Food"/>
            </div>
            <NavBar />
        </div>
    )
}

export default Header;