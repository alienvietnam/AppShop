/* eslint-disable quotes */
import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

import Collection from "./Collection";
import ListCategory from "./ListCategory";
import TopProduct from "./TopProduct";

class HomeView extends Component {
  render() {
    const {
      productType,
      gotoListProduct,
      gotoProductDetail,
      productList
    } = this.props;
    const { container } = styles;
    return (
      <ScrollView style={container}>
        <Collection gotoListProduct={gotoListProduct} />
        <ListCategory
          gotoListProduct={gotoListProduct}
          productType={productType}
        />
        <TopProduct
          gotoProductDetail={gotoProductDetail}
          productList={productList}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9"
  }
});

export default HomeView;
