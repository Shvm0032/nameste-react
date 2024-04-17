import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/Redux/cardSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const Dispatch = useDispatch();
  const handleClearCart = () => {
    Dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl py-4">CART</h1>

      <div className="w-6/12  m-auto ">
        {cartItems.length === 0 && <EmptyCart />}
        <ItemList items={cartItems} />
      </div>
      <div className="py-2">
        <button
          className="border border-solid border-green-800 px-2 bg-green-400 rounded-lg text-white font-bold hover:bg-orange-500"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};
export default Cart;
