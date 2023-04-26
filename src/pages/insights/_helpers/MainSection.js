import React from "react";
import "./index.scss";
import { EmojiEvents, Info, LibraryBooks } from "@mui/icons-material";
import cardImage from "../../../assets/icons/cardimage.svg";
import info from "../../../assets/icons/info.png";
import ResultsBarGraph from "./ResultsBarGraph";
import ContentGraph from "./ContentGraph";

function MainSection() {
  return (
    <div className="main-section">
      <div className="main-section__goals-card">
        <div className="goals-card__heading">
          <div>
            <EmojiEvents className="goals-card__trophy" />
          </div>
          <div>
            <h5>Goals</h5>
          </div>
          <div className="goals-card__button">
            <button>New goal</button>
          </div>
        </div>
        <div className="goals-card__body">
          <div>
            <img src={cardImage} className="goals-card__image" />
          </div>
          <div className="goals-card__body-right-section">
            <h5>Set goals</h5>
            <p>
              Set a goal, track progress and learn helpful tips for your
              professional success.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="main-section__goals-card">
        <div className="goals-card__heading">
          <div>
            <h5>Results</h5>
          </div>
        </div>
        <div className="goals-card__page-reach-info">
          <p>Facebook Page reach</p>
          <img src={info} />
        </div>
        <div className="goals-card__body-result">
          <ResultsBarGraph type="line" />

          <div className="more-info-button">
            <div>
              <LibraryBooks className="more-info-img" />
            </div>
            <p>See results report</p>
          </div>
        </div>
      </div>

      {/* <div className="main-section__goals-card">
        <div className="goals-card__heading">
          <div>
            <h5>Content</h5>
          </div>
        </div>
        <div className="goals-card__body-result">
          <ContentGraph type="donut" />

          <div className="more-info-button">
            <div>
              <LibraryBooks className="more-info-img" />
            </div>
            <p>See content report</p>
          </div>
        </div>
      </div>
      <div className="main-section__goals-card">
        <div className="goals-card__heading">
          <div>
            <h5>Audience</h5>
          </div>
        </div>
        <div className="goals-card__body-result">
          <ResultsBarGraph type="bar" />

          <div className="more-info-button">
            <div>
              <LibraryBooks className="more-info-img" />
            </div>
            <p>See audience report</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default MainSection;
