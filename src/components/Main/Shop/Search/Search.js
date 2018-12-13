/* eslint-disable quotes */
import React, { Component } from "react";
import { View } from "react-native";

import SearchView from "./SearchView/SearchView";
import ProductDetail from "../ProductDetail/ProductDetail";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "SEARCH"
    };
    this.choiceScreen = this.choiceScreen.bind(this);
  }

  gotoProductDetail() {
    this.setState({ display: "PRODUCT" });
  }

  backToHome() {
    this.setState({ display: "SEARCH" });
  }

  choiceScreen() {
    switch (this.state.display) {
      case "PRODUCT":
        return <ProductDetail backToHome={this.backToHome.bind(this)} />;
      default:
        return (
          <SearchView
            gotoProductDetail={this.gotoProductDetail.bind(this)}
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
