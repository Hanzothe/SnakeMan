import { useState } from "react";
import Snake from "./Snake";
import "./App.css";

function App() {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);

  return (
    <div className="App">
      <div className="playablearea">
        <Snake snakeDots={snakeDots} />
      </div>
    </div>
  );
}

export default App;
