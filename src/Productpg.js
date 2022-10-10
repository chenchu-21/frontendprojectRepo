import React, { useState } from "react";
import list from "./data";
import Card from "./components/card";
import "./Productpg.css";

const Productpg = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Productpg;