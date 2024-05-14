import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "Good", "Amazing"]}
    />

    <StarRating size={20} color="green" className="test" defaultRating={2} />

    <Test /> */}

    <App />
  </React.StrictMode>
);
