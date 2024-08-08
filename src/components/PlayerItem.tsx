import Player from "../models/player";
import CardItem from "./CardItem";

interface Props {
  player: Player;
}

const PlayerItem: React.FC<Props> = ({ player }) => {
  const { id, name, hand } = player;

  return (
    <div>
      <div>{name}</div>
      <ul>
        {hand.map((card, index) => (
          <CardItem key={`${id}-${index}`} card={card} isShowing />
        ))}
      </ul>
    </div>
  );
};

export default PlayerItem;
