import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";

if (module.hot) {
  module.hot.accept();
}

const App = function () {
  return (
    <div className="card-container">
      <Card
        image={
          "https://picsum.photos/300/200?random=1"
        }
        title="Golan"
        description="share explore"
      />
      <Card
        image={
          "https://picsum.photos/300/200?random=2"
        }
        title="Galile"
        description="share explore"
      />
      <Card
        image={
          "https://picsum.photos/300/200?random=3"
        }
        title="Tel-Aviv"
        description="share explore"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));