import React from "react";
import Subtotal from "../../components/subtotal/Subtotal";
import CheckoutProduct from "../../components/checkout-product/CheckoutProduct";
import "./Checkout.css";
import { useStateValue } from "../../state-provider/StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1"
          alt="banner"
        />{" "}
        <div>
          <h2 className="checkout_title"> Your shopping cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
