import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch(`bottles.json`)
      .then((resp) => resp.json())
      .then((data) => setBottles(data));
  }, []);
  return (
    <main className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">
        Bottles Available: {bottles.length}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} btl={bottle} />
        ))}
      </div>
    </main>
  );
};

export default Bottles;
