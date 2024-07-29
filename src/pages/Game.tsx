import { Link } from "react-router-dom";

import negativeOneCard from "../assets/-1-card.svg";
import zeroCard from "../assets/0-card.svg";
import oneCard from "../assets/1-card.svg";
import twoCard from "../assets/2-card.svg";
import threeCard from "../assets/3-card.svg";
import fourCard from "../assets/4-card.svg";
import fiveCard from "../assets/5-card.svg";
import sixCard from "../assets/6-card.svg";
import sevenCard from "../assets/7-card.svg";
import eightCard from "../assets/8-card.svg";
import nineCard from "../assets/9-card.svg";
import tenCard from "../assets/10-card.svg";
import elevenCard from "../assets/11-card.svg";
import twelveCard from "../assets/12-card.svg";
import thirteenCard from "../assets/13-card.svg";
import fourteenCard from "../assets/14-card.svg";
import backCard from "../assets/back-card.svg";

const Game: React.FC = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-slate-500">
      <h1 className="px-4 py-2 text-2xl text-neutral-200">Game Page</h1>
      <Link
        to="/"
        className="cursor-pointer rounded-md bg-zinc-700 px-4 py-2 text-2xl text-neutral-200 hover:bg-zinc-200 hover:text-neutral-700"
      >
        Back Home
      </Link>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <img src={negativeOneCard} alt="Negative One Card" />
          <img src={zeroCard} alt="Zero Card" />
          <img src={oneCard} alt="One Card" />
          <img src={twoCard} alt="Two Card" />
          <img src={threeCard} alt="Three Card" />
          <img src={fourCard} alt="Four Card" />
          <img src={fiveCard} alt="Five Card" />
          <img src={sixCard} alt="Six Card" />
        </div>
        <div className="flex gap-4">
          <img src={sevenCard} alt="Seven Card" />
          <img src={eightCard} alt="Eight Card" />
          <img src={nineCard} alt="Nine Card" />
          <img src={tenCard} alt="Ten Card" />
          <img src={elevenCard} alt="Eleven Card" />
          <img src={twelveCard} alt="Twelve Card" />
          <img src={thirteenCard} alt="Thirteen Card" />
          <img src={fourteenCard} alt="Fourteen Card" />
          <img src={backCard} alt="Back of Card" />
        </div>
      </div>
    </main>
  );
};

export default Game;
