import "./App.scss";
import LeftSideBar from "./pages/leftSideBar";
import Insights from "./pages/insights";
import Topbar from "./pages/topbar";
import { useState } from "react";
import { Close } from "@mui/icons-material";

import facebookLogo from "./assets/icons/facebook.png";
import smallGrapgh from "./assets/icons/smallgraph.png";
import cardImage from "./assets/icons/cardimage.svg";
import classNames from "classnames";

function App() {
  const [openInsightsModal, setInsightsModal] = useState(true);
  return (
    <div>
      <div
        className={classNames("review-modal-overlay", {
          active: openInsightsModal,
        })}
      ></div>

      <div className="App">
        <div>
          <div>
            <LeftSideBar />
          </div>
          <div style={{ maxWidth: "100%", minWidth: "100%" }}>
            <Topbar />
            <Insights />
          </div>
        </div>
        {openInsightsModal && (
          <>
            <div className="review-modal">
              <div className="review-modal__heading">
                <div>
                  <h5>Your last week in review</h5>
                </div>
                <div
                  onClick={() => setInsightsModal(false)}
                  className="review-modal-close"
                >
                  <Close className="review-modal-close-btn" />
                </div>
              </div>
              <div className="review-modal__body">
                <div className="review-modal__body-heading">
                  <p>
                    Take a moment to review activity and insights for your page
                    from Jan28 - Feb 3.
                  </p>
                </div>
                <div className="review-modal__first-card">
                  <div className="review-modal__activity">
                    <h5>Your activity</h5>
                    <p>You published 0 pieces of content this past week.</p>
                  </div>
                  <div className="review-modal__fb">
                    <div className="review-modal__fb-activity">
                      <img src={facebookLogo} />
                      <p>
                        <strong>0</strong>
                      </p>
                      <p>Facebook posts</p>
                    </div>
                    <div className="review-modal__fb-activity">
                      <img src={facebookLogo} />
                      <p>
                        <strong>0</strong>
                      </p>
                      <p>Facebook stories</p>
                    </div>
                  </div>
                </div>
                <div className="review-modal__second-card">
                  <div className="review-modal__goals">
                    <h5>Your goals</h5>
                    <p>
                      Start your business goals, track progress and find tips on
                      how to acheive them. <a>Get Started.</a>
                    </p>
                  </div>
                  <div className="review-modal_goals-right">
                    <img src={cardImage} />
                  </div>
                </div>
                <div className="review-modal__third-card">
                  <div className="review-modal__results">
                    <h5>Your results</h5>
                    <p>See your Facebook Page reach from last week.</p>
                  </div>
                  <div className="review-modal__results-right">
                    <p>Total last week</p>

                    <div className="review-modal__results-week">
                      <p>
                        <strong>4</strong>
                      </p>
                      <img src={smallGrapgh} />
                    </div>
                    <div className="review-modal__fb-results">
                      <img src={facebookLogo} />

                      <p>Facebook per reach</p>
                    </div>
                  </div>
                </div>

                <div className="review-modal__view-all-insights">
                  <button onClick={() => setInsightsModal(false)}>
                    View all insights
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
