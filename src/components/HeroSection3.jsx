import React, { useState } from "react";
// import What from "../FaQs pages/Whatscenlookortho";
import AllBets from "./AllBets";
import MyBits from "./MyBits";
import Race from "./Race";
import BigBets from "./BigBets";
function Faqs() {
  const [active, setactive] = useState(1);

  const renderComponents = () => {
    switch (active) {
      case 1:
        return <NewComponent />;

      case 2:
        return <BigBets />;
      case 3:
        return <AllBets />;
      case 4:
        return <MyBits />;
      case 5:
        return <Race />;
      default:
    }
  };

  const NewComponent = () => {
    return (
      <>
        <div className="item_heading_flex pb-4 pt-4">
          <div className="title">Game</div>
          <div className="title">Player</div>
          <div className="title">Bit</div>
          <div className="title">Profilt</div>
          <div className="title">Multiplier</div>
          <div className="title">Time</div>
        </div>
        <div className="item_heading_flex pb-4">
          <div className="title">Reme</div>
          <div className="title">James</div>
          <div className="title d-flex">
            <div className="mr-2 green bg2">-3.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.53</div>
          </div>
          <div className="title">01:42:27</div>
        </div>
        <div className="item_heading_flex pb-4">
          <div className="title">Unboxing</div>
          <div className="title">Zia</div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.53</div>
          </div>
          <div className="title">04:42:27</div>
        </div>
        <div className="item_heading_flex pb-4">
          <div className="title">Unboxing</div>
          <div className="title">Zia</div>
          <div className="title d-flex">
            <div className="mr-2 green bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.53</div>
          </div>
          <div className="title">09:42:27</div>
        </div>
        <div className="item_heading_flex pb-4">
          <div className="title">Unboxing</div>
          <div className="title">waris</div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 green bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.53</div>
          </div>
          <div className="title">04:02:27</div>
        </div>
        <div className="item_heading_flex pb-4">
          <div className="title">Unboxing</div>
          <div className="title">lukam</div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.53</div>
          </div>
          <div className="title">07:02:27</div>
        </div>
        <div className="item_heading_flex pb-4">
          <div className="title">Unboxing</div>
          <div className="title">roman</div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2 ">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.53</div>
          </div>
          <div className="title">07:42:27</div>
        </div>
        <div className="item_heading_flex pb-4">
          <div className="title">Unboxing</div>
          <div className="title">dawood</div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.53</div>
          </div>
          <div className="title">04:42:27</div>
        </div>
        <div className="item_heading_flex pb-4">
          <div className="title">Unboxing</div>
          <div className="title">rehman</div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.23</div>
            <img
              style={{ height: "20px" }}
              src="/Images/currency_dl.webp"
              alt=""
            />
          </div>
          <div className="title d-flex">
            <div className="mr-2 bg2">-1.53</div>
          </div>
          <div className="title">04:42:27</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="faqs">
        <div className="list_items">
          <button
            onClick={() => setactive(1)}
            className={active === 1 ? "itemButtonActive" : "itemButton"}
          >
            All Bets
          </button>
          <button
            onClick={() => setactive(2)}
            className={active === 2 ? "itemButtonActive" : "itemButton"}
          >
            Big Bets
          </button>
          <button
            on
            onClick={() => setactive(3)}
            className={active === 3 ? "itemButtonActive" : "itemButton"}
          >
            My Bets
          </button>
          <button
            onClick={() => setactive(4)}
            className={active === 4 ? "itemButtonActive" : "itemButton"}
          >
            Race Leaderboard
          </button>
        </div>
        <div className="scendlookortho_data">{renderComponents()}</div>
        <div className="absolute_team_tag"></div>
      </div>
    </>
  );
}

export default Faqs;
