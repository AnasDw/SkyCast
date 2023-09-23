import "../css/HomePage.css";
import "../css/index.css";
import { Link, NavLink } from "react-router-dom";

function NavBarList() {
  return (
    <>
      <nav className="nav">
        <ul className="flex flex-row">
          <li>
            <Link to="/"> 𓉞 Home </Link>
          </li>
          <li>
            <Link to="/favorites"> ☆ Favorites </Link>
          </li>
          <li>
            <Link to="/forecast"> ☾ Forecast </Link>
          </li>
          <li>
            <Link to="/login"> ☁︎ Login </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBarList;
