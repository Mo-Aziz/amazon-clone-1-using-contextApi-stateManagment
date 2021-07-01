import React from "react";
import {Link} from "react-router-dom";
import "./Payment.css";
import { useStateValue } from "../../state-provider/StateProvider";
import CheckoutProduct from "../../components/checkout-product/CheckoutProduct";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
         <h1>
            Checkout (<Link to="/checkout">{basket.length} items</Link>)
         </h1>
        {/* payment section delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : "Guest checkout"}</p>
            <p>123 react street</p>
            <p>Austin, TX</p>
            <p></p>
          </div>
        </div>
        {/* payment section - review cart items */}
        <div className="payment__section">
        <div className="payment__title">
                  <h3>Review items and delivery</h3>
               </div>
               <div className="payment__items">
                  {basket.map(item => (<CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />))}
               </div>
        </div>
        {/* payment section-- payment method */}
        <div className="payment__section">
           <div className="payment__title">
              <h3>Payment Method</h3>
           </div>
           <div className="payment__details">
              {/* stripe method*/}
           </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
