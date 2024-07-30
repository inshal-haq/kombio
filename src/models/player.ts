import { v4 as uuidv4 } from "uuid";

class Player {
  id: string;
  name: string;
  hand: (number | null)[];

  constructor(name: string, hand: (number | null)[]) {
    this.id = uuidv4();
    this.name = name;
    this.hand = hand;
  }
}

export default Player;
