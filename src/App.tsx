import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import RoomPage from "./pages/Room";
import GamePage from "./pages/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/room",
    element: <RoomPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
