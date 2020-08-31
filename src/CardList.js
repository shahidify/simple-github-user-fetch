import React from "react";
import { Card } from "./Card";

export const CardList = (props) => (
  <div>
    {props.cards.map((card) => (
      <Card {...card} />
    ))}
  </div>
);
