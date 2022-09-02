import { useState } from "react";
import "./App.css";

function App() {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);

  return (
    <div className="App">
      <div className="playablearea">
        <div className="snake"></div>
      </div>
    </div>
  );
}

export default App;
