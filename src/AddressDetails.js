import React from 'react';

const AddressDetails = ({ goBack, goForward, handleChange }) => (
  <div className="checkout">
    <div className="two-column">
      <h3>Billing Address</h3>

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

    <div className="two-column">
      <h3>Shipping Address</h3>
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
      <div className="button" onClick={goForward}>
        <i className="fa fa-chevron-right" />
        <span>Next</span>
      </div>
    </div>
  </div>
);

export default AddressDetails;
