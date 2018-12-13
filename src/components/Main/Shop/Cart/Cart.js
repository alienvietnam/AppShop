/* eslint-disable quotes */
import React, { Component } from "react";
import { View } from "react-native";

import CartView from "./CartView/CartView";
import ProductDetail from "../ProductDetail/ProductDetail";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "CART"
    };
    this.choiceScreen = this.choiceScreen.bind(this);
  }

  gotoProductDetail() {
    this.setState({ display: "PRODUCT" });
  }

  backToHome() {
    this.setState({ display: "CART" });
  }

  choiceScreen() {
    switch (this.state.display) {
      case "PRODUCT":
        return <ProductDetail backToHome={this.backToHome.bind(this)} />;
      default:
        return (
          <CartView
            gotoProductDetail={this.gotoProductDetail.bind(this)}
            CartItem={this.props.cartArray}
          />
        );
    }
  }
  render() {
    const a = this.choiceScreen();
    return <View style={{ flex: 1 }}>{a}</View>;
  }
}

export default Search;
