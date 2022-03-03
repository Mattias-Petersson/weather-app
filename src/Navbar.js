//import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="nav nav-pills bg-dark">
            <li className="nav-item px-5 ">
                <Link className="nav-link" to="/">
                    Weather
                </Link>
            </li>
            <li className="nav-item px-5">
                <Link className="nav-link" to="forecast">
                    Forecast
                </Link>
            </li>
        </ul>
    );
}