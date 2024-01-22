import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Link } from "react-router-dom";

const Header = ({ type }) => {
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Your Ultimate Destination for Hassle-Free Reservations and
              Memorable Stays
            </h1>

            <Link to={"/registrationform"}>
              <button className="headerBtn">Sign in / Register</button>
            </Link>
            <Link to={"/profile"}>
              <button className="headerBtn1">profile</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
