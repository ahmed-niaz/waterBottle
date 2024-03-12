const Bottle = ({ btl }) => {
  console.log(btl);
  const { img, name, price } = btl;
  return (
    <main>
      <div className="flex flex-col border-2 border-gray-200 gap-2 rounded-lg">
        <img className="w-full" src={img} alt="" />
        <p className="text-center text-2xl">Name: {name}</p>
        <p className="text-center text-xl">Price: ${price}</p>
      </div>
    </main>
  );
};

export default Bottle;
