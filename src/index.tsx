import React from "react";
import ReactDOM from "react-dom/client";
import { MyReservationPage } from "./Pages/MyReservationsPage";
import { Header } from "./Pages/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header></Header>
    <MyReservationPage />
  </React.StrictMode>
);
