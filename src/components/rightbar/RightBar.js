import React from "react";
import "./RightBar.scss";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const RightBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="rightbar">
      {/*  */}

      <div className="container">
        <span>Friend Requests</span>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <span>{currentUser.name}</span>
          </div>
          <div className="buttons">
            <button>Accept</button>
            <button>Reject</button>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <span>{currentUser.name}</span>
          </div>
          <div className="buttons">
            <button>Accept</button>
            <button>Reject</button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="container">
        <span>Recent Activities</span>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <p>
              <span>{currentUser.name}</span> Changed profile picture.
            </p>
          </div>
          <span>1 minute ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <p>
              <span>{currentUser.name}</span> Changed profile picture.
            </p>
          </div>
          <span>1 minute ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <p>
              <span>{currentUser.name}</span> Changed profile picture.
            </p>
          </div>
          <span>1 minute ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <p>
              <span>{currentUser.name}</span> Changed profile picture.
            </p>
          </div>
          <span>1 minute ago</span>
        </div>
      </div>

      {/*  */}

      <div className="container">
        <span>Online Friends</span>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <div className="online" />
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
