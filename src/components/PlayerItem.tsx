import Player from "../models/player";

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
          <li key={`${id}-${index}`}>{card}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerItem;
