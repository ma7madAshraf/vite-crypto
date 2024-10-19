import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, News, CryptoDetails, Cryptocurrencies } from "./pages";
import { loader as cryptoLoader } from "./pages/Cryptocurrencies.jsx";
import { loader as homeLoader } from "./pages/HomePage.jsx";
import { loader as newsLoader } from "./pages/News.jsx";
const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { element: <HomePage />, path: "/", loader: homeLoader(store) },
      { element: <News />, path: "/news", loader: newsLoader(store) },
      { element: <CryptoDetails />, path: "/crypto/:id" },
      {
        element: <Cryptocurrencies />,
        path: "/cryptocurrencies",
        loader: cryptoLoader(store),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
