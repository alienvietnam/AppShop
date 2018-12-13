/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";

import styles from "./SearchViewStyle";
import global from "../../../../global";

const URL_IMAGE_PRODUCT = "http://192.168.16.104/AppShop/images/product/";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrProduct: []
    };
    global.refreshSearchView = this.refreshSearchView.bind(this);
  }
  componentDidMount() {
    if (global.listSearch !== null) {
      this.setState({ arrProduct: global.listSearch });
    }
  }

  refreshSearchView() {
    this.setState({ arrProduct: global.listSearch });
  }

  gotoDetail(product) {
    global.product = product;
    this.props.gotoProductDetail();
  }

  render() {
    const {
      container,
      product,
      imageProduct,
      productInfo,
      productName,
      productPrice,
      productDescription,
      productProps,
      btnDetail
    } = styles;
    return (
      <View style={container}>
        <FlatList
          data={this.state.arrProduct}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={product}>
              <Image
                source={{ uri: URL_IMAGE_PRODUCT + item.images[0] }}
                style={imageProduct}
              />
              <View style={productInfo}>
                <Text style={productName}>{toTitleCase(item.name)}</Text>
                <Text style={productPrice}>{item.price}$</Text>
                <Text style={productDescription}>{item.material}</Text>
                <View style={productProps}>
                  <Text>Color {item.color}</Text>
                  <View
                    style={{
                      backgroundColor: item.color.toLowerCase(),
                      width: 16,
                      height: 16,
                      borderRadius: 8,
                      marginLeft: 8
                    }}
                  />

                  <TouchableOpacity onPress={() => this.gotoDetail(item)}>
                    <Text style={btnDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default SearchView;
