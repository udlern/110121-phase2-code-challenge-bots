import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots, addBot, removeBot, removeBotForever, clickOnBot }) {
  return (
    <div>
      <YourBotArmy
        removeBotForever={removeBotForever}
        removeBot={removeBot}
        bots={bots.filter((b) => b.clicked === true)}
      />
      <BotCollection
        removeBotForever={removeBotForever}
        bots={bots}
        addBot={addBot}
        clickOnBot={clickOnBot}
      />
    </div>
  );
}

export default BotsPage;
