import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StartRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <p> This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "Good", "Amazing"]}
    />
    <StarRating size={20} color="green" className="test" defaultRating={2} />

    <Test />
    {/* <App /> */}
  </React.StrictMode>
);
