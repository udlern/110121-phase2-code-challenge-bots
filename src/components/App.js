import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";

const API = "http://localhost:8002/bots";

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setBots(data));
  }, []);

  function addBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, clicked: true } : b)));
  }

  function removeBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, clicked: false } : b)));
  }

  function removeBotForever(bot) {
    setBots(bots.filter((b) => b.id !== bot.id));
  }

  return (
    <div className="App">
      <BotsPage
        removeBotForever={removeBotForever}
        bots={bots}
        addBot={addBot}
        removeBot={removeBot}
      />
    </div>
  );
}

export default App;
