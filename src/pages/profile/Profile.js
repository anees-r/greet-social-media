import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.scss";
import Posts from "../../components/posts/Posts";

import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import PinDropRoundedIcon from "@mui/icons-material/PinDropRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [followed, setFollowed] = useState(false);

  return (
    <>
      <div className="profile">
        <div className="userInfo">
          <div className="images">
            <img
              src="https://img.pikbest.com/wp/202348/pleat-stunning-black-pleats-and-swirls-captured-in-3d-render_9778112.jpg!w700wp"
              alt=""
              className="cover"
            />
            <img src={currentUser.pfp} alt="" className="pfp" />
          </div>
          <div className="userDetails">
            <div className="left">
              <PublicRoundedIcon />
              <span>athens</span>
            </div>
            <div className="center">
              <span>{currentUser.name}</span>
              <div className="location">
                <PinDropRoundedIcon />
                <span>Greece</span>
              </div>
              <button
                onClick={() => {
                  setFollowed(!followed);
                }}
              >
                {followed ? "Unfollow" : "Follow"}
              </button>
            </div>
            <div className="right">
              <MailOutlineRoundedIcon style={{ cursor: "pointer" }} />
              <MoreVertRoundedIcon style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </>
  );
};

export default Profile;
