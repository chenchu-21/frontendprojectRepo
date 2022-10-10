import React, { useState, useEffect } from "react";
import list from "./data";
import Navbar from "./components/navbar";
import Cart from "./components/Cart";
import Productpg from "./Productpg";
import Base from "./Base";

const Main = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <Base>
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <productpg handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Productpg/>
    </React.Fragment>
    </Base>
  );
};

export default Main;