import React from "react";
import "./index.scss";

import overview from "../../../assets/icons/overview-white.png";
import results from "../../../assets/icons/results.png";
import feedback from "../../../assets/icons/feedback.png";
import audience from "../../../assets/icons/audience.png";
import benchmarking from "../../../assets/icons/benchmarking.png";
import contentOverview from "../../../assets/icons/content-overview.png";
import contentContent from "../../../assets/icons/content-content.png";
function LeftSection() {
  return (
    <div className="left-section">
      <div className="left-section__menu-items1">
        <div className="left-section__menu-items-icons">
          <img src={overview} />
        </div>
        <div className="left-section__menu-items-name">Overview</div>
      </div>
      <div className="left-section__menu-items">
        <div className="left-section__menu-items-icons">
          <img src={results} />
        </div>
        <div className="left-section__menu-items-name">Results</div>
      </div>
      <div className="left-section__menu-items">
        <div className="left-section__menu-items-icons">
          <img src={audience} />
        </div>
        <div className="left-section__menu-items-name">Audience</div>
      </div>
      <div className="left-section__menu-items">
        <div className="left-section__menu-items-icons">
          <img src={feedback} />
        </div>
        <div className="left-section__menu-items-name">Feedback</div>
      </div>
      <div className="left-section__menu-items">
        <div className="left-section__menu-items-icons">
          <img src={benchmarking} />
        </div>
        <div className="left-section__menu-items-name">Benchmarking</div>
      </div>
      <div className="left-section__sub-menu-items">Content</div>
      <div className="left-section__menu-items">
        <div className="left-section__menu-items-icons">
          <img src={contentOverview} />
        </div>
        <div className="left-section__menu-items-name">Overview</div>
      </div>
      <div className="left-section__menu-items">
        <div className="left-section__menu-items-icons">
          <img src={contentContent} />
        </div>
        <div className="left-section__menu-items-name">Content</div>
      </div>
      <div className="left-section__sub-menu-items">Messaging</div>
      <div className="left-section__menu-items">
        <div className="left-section__menu-items-icons">
          <img src={contentOverview} />
        </div>
        <div className="left-section__menu-items-name">Overview</div>
      </div>
    </div>
  );
}

export default LeftSection;
