import "./index.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Landing, Root } from "./pages";
import { Providers } from "./store/provider";
import { games } from "./data/games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/games",
        element: (
          <>
            <h1 className="text-center text-5xl font-extrabold text-gray-400">
              Games List
            </h1>
            <Outlet />
          </>
        ),

        children: games.map((game) => ({
          path: game.title,
          element: (
            <h1 className="text-center text-5xl font-extrabold text-gray-400">
              Game: {game.title}
            </h1>
          ),
        })),
      },
      {
        path: "about",
        element: <div>About</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);
