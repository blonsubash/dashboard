import React, { useState } from "react";
import classNames from "classnames";

import "./index.scss";

import metaLogo from "../../assets/icons/meta.svg";
import logo from "../../assets/icons/logo.png";
import home from "../../assets/icons/home.png";
import notification from "../../assets/icons/notification.png";
import bubble from "../../assets/icons/speech-bubble.png";
import feed from "../../assets/icons/feed.png";
import calendar from "../../assets/icons/calendar.png";
import speaker from "../../assets/icons/loud-speaker.png";
import barChart from "../../assets/icons/bar-chart.svg";
import menu from "../../assets/icons/menu.png";

import { menuItem } from "./menuItems";

function LeftSideBar() {
  const [openLeftSideBar, setOpenLeftSideBar] = useState(false);
  console.log("ope", openLeftSideBar);
  return (
    <div
      className={classNames("leftsidebar", {
        active: openLeftSideBar,
      })}
      onMouseEnter={() => setOpenLeftSideBar(true)}
      onMouseLeave={() => setOpenLeftSideBar(false)}
    >
      <div className="leftsidebar__meta">
        <img src={metaLogo} />
        {/* <div
          className={classNames("leftsidebar__meta-name", {
            active: openLeftSideBar,
          })}
        >
          <h5>Meta</h5>
          <h5> Business Suite</h5>
        </div> */}
      </div>
      <div className="leftsidebar__business-logo">
        <div className="leftsidebar__business-logo-image">
          <img src={logo} />
        </div>
        <div
          className={classNames("leftsidebar__menu-item-name", {
            active: openLeftSideBar,
          })}
        >
          Facebook page
        </div>
      </div>
      <div className="leftsidebar__menu-items">
        <div className="leftsidebar__menu-item">
          <div style={{ paddingRight: "10px" }}>
            <img src={home} className="leftsidebar__menu-icon" />
          </div>
          <div
            className={classNames("leftsidebar__menu-item-name", {
              active: openLeftSideBar,
            })}
          >
            Home
          </div>
        </div>
        <div className="leftsidebar__menu-item">
          <div style={{ paddingRight: "10px" }}>
            <img src={notification} className="leftsidebar__menu-icon" />
          </div>
          <div
            className={classNames("leftsidebar__menu-item-name", {
              active: openLeftSideBar,
            })}
          >
            Notications
          </div>
        </div>
        <div className="leftsidebar__menu-item">
          <div style={{ paddingRight: "10px" }}>
            <img src={bubble} className="leftsidebar__menu-icon" />
          </div>
          <div
            className={classNames("leftsidebar__menu-item-name", {
              active: openLeftSideBar,
            })}
          >
            Inbox
          </div>
        </div>
        <div className="leftsidebar__menu-item">
          <div style={{ paddingRight: "10px" }}>
            <img src={feed} className="leftsidebar__menu-icon" />
          </div>
          <div
            className={classNames("leftsidebar__menu-item-name", {
              active: openLeftSideBar,
            })}
          >
            Post & stories
          </div>
        </div>
        <div className="leftsidebar__menu-item">
          <div style={{ paddingRight: "10px" }}>
            <img src={calendar} className="leftsidebar__menu-icon" />
          </div>
          <div
            className={classNames("leftsidebar__menu-item-name", {
              active: openLeftSideBar,
            })}
          >
            Planner
          </div>
        </div>
        <div className="leftsidebar__menu-item">
          <div style={{ paddingRight: "10px" }}>
            <img src={speaker} className="leftsidebar__menu-icon" />
          </div>
          <div
            className={classNames("leftsidebar__menu-item-name", {
              active: openLeftSideBar,
            })}
          >
            Ads
          </div>
        </div>
        <div className="leftsidebar__menu-item1">
          <div style={{ paddingRight: "10px" }}>
            <img src={barChart} className="leftsidebar__menu-icon1" />
          </div>
          <div
            className={classNames("leftsidebar__menu-item-name", {
              active: openLeftSideBar,
            })}
          >
            Insights
          </div>
        </div>
        <div className="leftsidebar__menu-item">
          <div style={{ paddingRight: "10px" }}>
            <img src={menu} className="leftsidebar__menu-icon" />
          </div>
          <div
            className={classNames("leftsidebar__menu-item-name", {
              active: openLeftSideBar,
            })}
          >
            All tools
          </div>
        </div>
        {/* <div className="leftsidebar__menu-item"> */}
        <div
          className={classNames("leftsidebar__menu-item-name", {
            active: openLeftSideBar,
          })}
        >
          <div className="horizontal-line"></div>
        </div>
        {/* </div> */}
        {/* <div className="leftsidebar__menu-item"> */}
        <div
          className={classNames("leftsidebar__menu-item-name", {
            active: openLeftSideBar,
          })}
        >
          <div className="edit-leftsidebar">Edit</div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default LeftSideBar;
