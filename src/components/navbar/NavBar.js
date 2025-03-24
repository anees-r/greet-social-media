import React from "react";
import "./NavBar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <span>Greet :)</span>
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
        <img
          src="https://preview.redd.it/i-genuinely-cannot-stand-dionysus-design-v0-wo5b66trxsqd1.jpg?width=677&format=pjpg&auto=webp&s=c8ad179a40e34d577e7d2153a28da6e3431a2304"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
