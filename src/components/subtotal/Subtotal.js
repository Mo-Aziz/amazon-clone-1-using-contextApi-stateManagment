import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../state-provider/StateProvider";
import { getBasketTotal } from "../../state-provider/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  // getting the bowser history with use history
  const history= useHistory();
  const [{basket}, dispatch]= useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length}{" "}items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <span>
                <input type="checkbox" />
                {"   "}  this order contains a gift
              </span>
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e =>history.push('/payment')}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
