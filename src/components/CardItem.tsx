import negativeOnecard from "../assets/-1-card.svg";
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

import backOfCard from "../assets/back-card.svg";
// import { useState } from "react";

interface Props {
  card: number | null;
  isShowing: boolean;
}

const CardItem: React.FC<Props> = ({ card, isShowing }) => {
  // const [isShowing, setIsShowing] = useState(false);
  let frontOfCard: string | null;

  switch (card) {
    case -1:
      frontOfCard = negativeOnecard;
      break;
    case 0:
      frontOfCard = zeroCard;
      break;
    case 1:
      frontOfCard = oneCard;
      break;
    case 2:
      frontOfCard = twoCard;
      break;
    case 3:
      frontOfCard = threeCard;
      break;
    case 4:
      frontOfCard = fourCard;
      break;
    case 5:
      frontOfCard = fiveCard;
      break;
    case 6:
      frontOfCard = sixCard;
      break;

    case 7:
      frontOfCard = sevenCard;
      break;
    case 8:
      frontOfCard = eightCard;
      break;
    case 9:
      frontOfCard = nineCard;
      break;
    case 10:
      frontOfCard = tenCard;
      break;
    case 11:
      frontOfCard = elevenCard;
      break;
    case 12:
      frontOfCard = twelveCard;
      break;
    case 13:
      frontOfCard = thirteenCard;
      break;
    case 14:
      frontOfCard = fourteenCard;
      break;

    default:
      frontOfCard = null;
      break;
  }

  return (
    <li>
      {frontOfCard && <img src={isShowing ? frontOfCard : backOfCard} alt="" />}
    </li>
  );
};

export default CardItem;
