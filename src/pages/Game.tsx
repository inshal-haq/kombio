import { useState } from "react";
import Player from "../models/player";

import deckImage from "../assets/deck.svg";
import PlayerItem from "../components/PlayerItem";

const KOMBIO_CARDS: number[] = [
  -1, -1, -1, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4,
  4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9,
  10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 14, 14,
];
const PLAYERS: Player[] = [];
// const DISCARDED_CARDS: number[] = [];

const Game: React.FC = () => {
  const [deck, setDeck] = useState(KOMBIO_CARDS);
  const [players, setPlayers] = useState(PLAYERS);
  const numOfPlayers = 3;

  function getCard(localDeck: number[]) {
    const index = Math.floor(Math.random() * localDeck.length);
    const card = localDeck[index];
    const updatedDeck = [
      ...localDeck.slice(0, index),
      ...localDeck.slice(index + 1),
    ];
    return { card, updatedDeck };
  }

  function handOutCards() {
    let localDeck = deck;
    const updatedPlayers = [];

    for (let i = 1; i <= numOfPlayers; i++) {
      const newPlayer = new Player(`Player ${i}`, []);

      for (let j = 1; j <= 4; j++) {
        const result = getCard(localDeck);
        newPlayer.hand.push(result.card);
        localDeck = result.updatedDeck;
      }

      updatedPlayers.push(newPlayer);
    }

    setDeck(localDeck);
    setPlayers(updatedPlayers);
  }

  console.log("deck:", deck);

  return (
    <main className="flex w-full flex-col items-center justify-center gap-4 bg-slate-500">
      <button
        className="cursor-pointer rounded-md bg-zinc-700 px-4 py-2 text-2xl text-neutral-200 hover:bg-zinc-200 hover:text-neutral-700"
        onClick={handOutCards}
      >
        Hand Out Cards
      </button>
      <section className="flex items-start justify-center gap-8">
        <div className="flex flex-col gap-4">
          <div>Pile</div>
          <div className="h-[135px] w-[90px] rounded-lg border border-white"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Deck</div>
          <img
            src={deckImage}
            alt="deck"
            className="cursor-pointer transition-all hover:-translate-y-1 hover:translate-x-1"
          />
        </div>
      </section>
      <section>
        <ul>
          {players.map((player) => (
            <PlayerItem key={player.id} player={player} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Game;
