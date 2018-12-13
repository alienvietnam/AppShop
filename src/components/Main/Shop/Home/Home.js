/* eslint-disable quotes */
import React, { Component } from "react";
import { View } from "react-native";

import HomeView from "./HomeView";
import ListProduct from "../ListProduct/ListProduct";
import ProductDetail from "../ProductDetail/ProductDetail";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "HOME",
      product: null,
    };
    this.choiceScreen = this.choiceScreen.bind(this);
  }


  gotoListProduct() {
    this.setState({ display: "LIST" });
  }
  gotoProductDetail() {
    this.setState({ display: "PRODUCT" });
  }

  backToHome() {
    this.setState({ display: "HOME" });
  }

  choiceScreen() {
    switch (this.state.display) {
      case "LIST":
        return (
          <ListProduct
            backToHome={this.backToHome.bind(this)}
            gotoProductDetail={this.gotoProductDetail.bind(this)}
          />
        );
      case "PRODUCT":
        return <ProductDetail backToHome={this.backToHome.bind(this)} />;
      default:
        return (
          <HomeView
            gotoListProduct={this.gotoListProduct.bind(this)}
            gotoProductDetail={this.gotoProductDetail.bind(this)}
            productType={this.props.productType}
            productList={this.props.productList}
          />
        );
    }
  }
  render() {
    const a = this.choiceScreen();
    return <View style={{ flex: 1 }}>{a}</View>;
  }
}

export default Home;
