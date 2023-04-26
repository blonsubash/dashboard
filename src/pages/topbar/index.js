import React from "react";
import { CalendarMonth, ArrowDropDown } from "@mui/icons-material";

import "./index.scss";
function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__heading">
        <h5>Insights</h5>
        <p>Review performance results and more.</p>
      </div>
      <div className="topbar__calender">
        <CalendarMonth className="topbar__calender-image" />
        <p>Last 28 days: Jan 11,2023-Feb 7, 2023</p>
        <ArrowDropDown />
      </div>
    </div>
  );
}

export default Topbar;
