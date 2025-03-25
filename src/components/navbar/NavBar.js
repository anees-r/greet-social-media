import React from "react";
import "./NavBar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Greet :)</span>
      </Link>
      <div className="middle">
        <input type="text" name="search" id="search" placeholder="search" />
        <button>
          <SearchRoundedIcon />
        </button>
      </div>
      <div className="right">
        <div onClick={props.toggleMode} style={{ cursor: "pointer" }}>
          {!props.isDarkMode ? (
            <DarkModeRoundedIcon />
          ) : (
            <LightModeRoundedIcon />
          )}
        </div>
        <NotificationsRoundedIcon />
        <MailRoundedIcon />
        <Link
          to={`/profile/${currentUser.id}`}
          style={{ textDecoration: "none" }}
        >
          <img src={currentUser.pfp} alt="user-profile-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
