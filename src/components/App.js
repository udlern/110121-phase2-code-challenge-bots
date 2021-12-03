import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";
import BotSpecs from "./BotSpecs";

const API = "http://localhost:8002/bots";

function App() {
  const [bots, setBots] = useState([]);
  const [clickedBot, setClickedBot] = useState({});

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

  function clickOnBot(bot) {
    setClickedBot(bot);
  }

  function clearBot() {
    setClickedBot({})
  }

  function enlistBot(bot) {
    clearBot()
    addBot(bot)
  }
  
  
  if (Object.keys(clickedBot).length) {
    return (
      <div className="App">
        <BotSpecs bot={clickedBot} clearBot={clearBot} enlistBot={enlistBot}/>
      </div>
    );
  }

  return (
    <div className="App">
      <BotsPage
        removeBotForever={removeBotForever}
        bots={bots}
        addBot={addBot}
        removeBot={removeBot}
        clickOnBot={clickOnBot}
      />
    </div>
  );
}

export default App;
