const Bottle = ({ btl, addToCart }) => {
  console.log(btl);
  const { img, name, price } = btl;
  return (
    <main>
      <div className="flex flex-col border-2 border-gray-200 gap-2 rounded-lg">
        <img className="w-full" src={img} alt="" />
        <p className="text-center text-2xl">Name: {name}</p>
        <p className="text-center text-xl">Price: ${price}</p>
        <button className="btn w-1/4 mx-auto text-xl " onClick={addToCart}>
          Purchase
        </button>
      </div>
    </main>
  );
};

export default Bottle;
