import React from 'react';
import './App.css';
import { gateway as MoltinGateway } from '@moltin/sdk';

import ProductOverview from './ProductOverview';
import AddressDetails from './AddressDetails';
import CardDetails from './CardDetails';
import Confirmation from './Confirmation';

const Moltin = MoltinGateway({
  client_id: 'PJjIXzZT6QEWF4KRpaowJGwgVXoYmQaSxf8cChjk'
});

export default class App extends React.Component {
  state = {
    loading: true,
    currentStep: 1,
    product: {},
    selectedColour: 'mint-green',
    selectedSize: 6
  };

  componentDidMount() {
    Moltin.Products.With('variations,files, main_images')
      .Get('a419abba-4a20-43ac-bfed-7ec69817b6e6')
      .then(product => {
        console.log(product);

        this.setState({
          product,
          loading: false
        });
      });
  }

  _goToPreviousStep = () =>
    this.setState(prevState => ({
      currentStep: prevState.currentStep - 1
    }));

  _goToNextStep = () =>
    this.setState(prevState => ({
      currentStep: prevState.currentStep + 1
    }));

  _handleCheckout = () => {
    // handle checkout

    // success =>

    this._goToNextStep();
  };

  _handleAddToCart = productId => {
    Moltin.Cart()
      .AddProduct(productId, 1)
      .then(item => {
        alert(`Added ${item.name} to your cart`);
      });
  };

  _renderCurrentStep = () => {
    switch (this.state.currentStep) {
      case 2:
        return (
          <AddressDetails
            goBack={this._goToPreviousStep}
            goForward={this._goToNextStep}
          />
        );

      case 3:
        return (
          <CardDetails
            goBack={this._goToPreviousStep}
            handleCheckout={this._handleCheckout}
          />
        );

      case 4:
        return <Confirmation />;

      default:
        return (
          <ProductOverview
            product={this.state.product}
            handlePurchase={this._handleAddToCart}
          />
        );
    }
  };

  render() {
    const { loading, currentStep, product } = this.state;

    if (loading) return <p>Loading</p>;

    return (
      <div>
        <div className="container">
          <div className="card">
            {this._renderCurrentStep(currentStep, product)}
          </div>
        </div>
      </div>
    );
  }
}
