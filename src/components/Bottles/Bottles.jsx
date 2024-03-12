import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    fetch(`bottles.json`)
      .then((resp) => resp.json())
      .then((data) => setBottles(data));
  }, []);
  const addToCart = (bottle2) => {
    const newCart = [...cart,bottle2];
    setCart(newCart)
  };
  return (
    <main className="container mx-auto">
      <h1 className="text-4xl text-center font-extrabold mt-4">
        Memorable Water Bottle
      </h1>
      <h2 className="text-3xl font-bold text-center mt-2">
        Bottles Available: {bottles.length}
      </h2>
      <h2 className="text-3xl font-bold text-center mt-2">
       Cart: {cart.length}
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            btl={bottle}
            addToCart={() => addToCart(bottle)}
          />
        ))}
      </div>
    </main>
  );
};

export default Bottles;
