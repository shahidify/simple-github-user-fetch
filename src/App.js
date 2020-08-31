import React, { useState } from "react";
import { CardList } from "./CardList";
import { Form } from "./Form";

export default App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = (cardInfo) => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <div className="App">
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};
