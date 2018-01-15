import React from 'react';

const CardDetails = ({ goBack, handleCheckout, handleChange }) => (
  <div className="checkout">
    <div className="two-column">
      <h3>Payment</h3>

      <form>
        <label>Address Line 1</label>
        <input type="text" name="address_1" />
        <label>Address Line 2</label>
        <input type="text" name="address_2" />
        <label>City</label>
        <input type="text" name="city" />
        <label>Country</label>
        <input type="text" name="country" />
        <label>Zipcode</label>
        <input type="text" name="zipcode" />
      </form>
    </div>

    <div className="back inline-left">
      <div className="button" onClick={goBack}>
        <i className="fa fa-chevron-left" />
        <span>Back</span>
      </div>
    </div>

    <div className="payment inline-right">
      <div className="button" onClick={handleCheckout}>
        <i className="fa fa-chevron-right" />
        <span>Confirm &amp; Order</span>
      </div>
    </div>
  </div>
);

export default CardDetails;
