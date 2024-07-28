import { Link } from "react-router-dom";

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
    </main>
  );
};

export default Game;
