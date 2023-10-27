// ButtonAddItem.js
function ButtonAddItem({ price, name, onAddToCart, onQuantityChange }) {
  const handleAddToCart = () => {
    onAddToCart({ price, name });
    onQuantityChange();
  };

  return (
    <div
      onClick={handleAddToCart}
      className="button-add-item my-10 bg-white py-4 border-4 border-blue-800 rounded-3xl w-full hover:bg-red-200 hover:cursor-pointer active:bg-indigo-200"
    >
      <p title={`ADD TO CART - ${price}$`} className="text-black font-bold">
        ADD TO CART - {price}$
      </p>
    </div>
  );
}

export default ButtonAddItem;
