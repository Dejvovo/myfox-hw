import React from "react";
import ReactDOM from "react-dom/client";
import { MyReservationPage } from "./Pages/MyReservationsPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MyReservationPage />
  </React.StrictMode>
);
