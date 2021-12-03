import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, removeBotForever }) {
  const displayBots = bots.map((bot) => {
    return (
      <BotCard
        handleClick={removeBot}
        handleClickRemove={removeBotForever}
        key={bot.id}
        bot={bot}
      />
    );
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {displayBots}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
