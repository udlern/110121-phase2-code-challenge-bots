import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot, removeBotForever }) {
  const displayBots = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        handleClick={addBot}
        handleClickRemove={removeBotForever}
      />
    );
  });
  return (
    <div className="ui four column grid">
      <div className="row">
        {displayBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
