import React from "react";
import "./LeftBar.scss";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import AlarmRoundedIcon from "@mui/icons-material/AlarmRounded";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import VideoCameraBackRoundedIcon from "@mui/icons-material/VideoCameraBackRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img
              src="https://preview.redd.it/i-genuinely-cannot-stand-dionysus-design-v0-wo5b66trxsqd1.jpg?width=677&format=pjpg&auto=webp&s=c8ad179a40e34d577e7d2153a28da6e3431a2304"
              alt=""
            />
            <span>Deeonysos</span>
          </div>
          <div className="item">
            <PeopleAltRoundedIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupsRoundedIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <StoreRoundedIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <OndemandVideoRoundedIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <AlarmRoundedIcon />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <span>Your shortcuts</span>

        <div className="menu">
          <div className="item">
            <CalendarMonthRoundedIcon />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsRoundedIcon />
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsRoundedIcon />
            <span>Gallery</span>
          </div>
          <div className="item">
            <VideoCameraBackRoundedIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <EmailRoundedIcon />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <span>Others</span>

        <div className="menu">
          <div className="item">
            <SavingsRoundedIcon />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <LocalLibraryRoundedIcon />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <SchoolRoundedIcon />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
