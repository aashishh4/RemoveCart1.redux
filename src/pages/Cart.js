import { useDispatch, useSelector } from "react-redux";
import { remove, increaseQuantity, decreaseQuantity } from "../store/cartSlice";

function Cart() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
  
    function handleIncreaseQuantity(productId) {
      dispatch(increaseQuantity(productId));
    }
  
    function handleDecreaseQuantity(productId) {
      dispatch(decreaseQuantity(productId));
      // If quantity becomes 0, this action will remove the item from the cart
      if (cartItems.find((item) => item.id === productId).cartQuantity === 1) {
        dispatch(remove(productId));
      }
    }

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => (
            <tr key={product.id}>
              <td>{product.category}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td><img src={product.image} alt={product.title} /></td>
              <td>
                <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                {product.cartQuantity}
                <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
              </td>
              <td>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
