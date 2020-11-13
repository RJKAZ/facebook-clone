import React from 'react';
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text"></input>
        </div>

      </div>


      <div className="header__center">
        <div className="header__option
        header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>



      </div>


      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Sssssangha</h4>
        </div>
      </div>
      <IconButton>
        <AddIcon/>
      </IconButton>
      <IconButton>
        <ForumIcon/>
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon/>
      </IconButton>
      <IconButton>
        <ExpandMoreIcon/>
      </IconButton>


    </div>
  )
}

export default Header

// left off on the video at 1:02:53