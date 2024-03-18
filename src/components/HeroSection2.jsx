import React from "react";
import { Link } from 'react-router-dom';

const HeroSection2 = () => {
  return (
    <div>
      <div className="item_flex1">
        <Link className="card">
          <img src="/Images/crash.png" alt="" />
          <h5 className="mt-2">CRASH</h5>
        </Link>
        <Link className="card">
          <img src="/Images/roulette (1).png" alt="" />
          <h5 className="mt-2">ROULETTE</h5>
        </Link>
        <Link className="card">
          <img src="/Images/blackjack.jpg" alt="" />
          <h5 className="mt-2">BLACKJACK</h5>
        </Link>
        <Link className="card">
          <img src="/Images/limbo.png" alt="" />
          <h5 className="mt-2">LIMBO</h5>
        </Link>
        <Link to="/coin-flip" className="card mr-0">
          <img src="/Images/coinflip.png" alt="" />
          <h5 className="mb-0 mt-2">COIN FLIP</h5> 
        </Link>
      </div>
      <div className="item_flex1">
        <Link className="card">
          <img src="/Images/towers.png" alt="" />
          <h5 className="mt-2">TOWERS</h5>
        </Link>
        <Link className="card">
          <img src="/Images/mines.png" alt="" />
          <h5 className="mt-2">MINES</h5>
        </Link>
        <Link className="card">
          <img src="/Images/unboxing.png" alt="" />
          <h5 className="mt-2">UNBOXING</h5>
        </Link>
        <Link className="card">
          <img src="/Images/dice.png" alt="" />
          <h5 className="mt-2">DICE</h5>
        </Link>
        <Link className="card mr-0">
          <img src="/Images/crystals.png" alt="" />
          <h5 className="mb-0 mt-2">CRYSTALS</h5>
        </Link>
      </div>
      <div className="item_flex1">
        <Link className="card">
          <img style={{ height: "128px" }} src="/Images/fishgame.png" alt="" />
          <h5 className="mt-2">FISH</h5>
        </Link>
        <Link className="card mr-0">
          <img src="/Images/sfgame.png" alt="" />
          <h5 className="mt-2">SF</h5>
        </Link>
        <Link className="card">
          <img src="/Images/minegame.png" alt="" />
          <h5 className="mt-2">MINE</h5>
        </Link>
        <Link className="card">
          <img src="/Images/gbcgame.png" alt="" />
          <h5 className="mt-2">GBC</h5>
        </Link>
        <Link className="card mr-0">
          <img src="/Images/offering.png" alt="" />
          <h5 className="mt-2">OFFERING</h5>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection2;
