import React from "react";
import Card from "./Card";

function Cards({ users, removeCard }) {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {users.map((e, i) => {
        return <Card key={i} i={i} users={e} removeCard={removeCard} />;
      })}
    </div>
  );
}

export default Cards;
