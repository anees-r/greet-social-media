import React from "react";
import "./NavBar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

const Navbar = () => {
  const darkMode = false;
  document.body.style.backgroundColor = "rgb(239, 236, 242)";
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
        {!darkMode ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        <NotificationsRoundedIcon />
        <MailRoundedIcon />
        <PersonRoundedIcon />
      </div>
    </div>
  );
};

export default Navbar;
