import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let totalShipping = 0;

  for (const item of cart) {
    total = total + item.price;
    totalShipping = totalShipping + item.shipping;
  }

  const tax = (total * 7) / 100;

  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h2>Order Summery</h2>
      <div className="cart-details">
        <p>Selected items: {cart.length}</p>
        <p>Total price: ${total}</p>
        <p>Total Shipping: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h4>Grand total: ${grandTotal.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Cart;
