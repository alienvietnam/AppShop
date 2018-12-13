/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  FlatList
} from "react-native";

import styles from "./CartViewStyle";
import global from "../../../../global";
import sendOrder from "../../../../../api/sendOrder";
import getToken from "../../../../../api/getToken";

const URL_IMAGE_PRODUCT = "http://192.168.0.105/AppShop/images/product/";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

class CartView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.productDetail = this.productDetail.bind(this);
  }

  incrQuantity(id) {
    global.incrQuantity(id);
  }

  decrQuantity(id) {
    global.decrQuantity(id);
  }

  removeProduct(id) {
    global.removeProduct(id);
  }
  showConfirmPayment() {
    Alert.alert(
      "Confirm",
      "Do you want to send this order?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.sendOrderCart() }
      ],
      { cancelable: false }
    );
  }

  showInfoSuccess() {
    Alert.alert(
      "Alert",
      "Success full!",
      [{ text: "OK", onPress: () => this.deleteAllCart() }],
      { cancelable: false }
    );
  }

  deleteAllCart() {
    global.removeAllCart();
  }

  showError() {
    Alert.alert(
      "Alert",
      "The system is busy please come back later!",
      [{ text: "OK" }],
      { cancelable: false }
    );
  }

  async sendOrderCart() {
    try {
      const token = await getToken();
      const arrayDetail = this.props.CartItem.map(e => ({
        id: e.product.id,
        quantity: e.quantity
      }));
      await sendOrder(token, arrayDetail);
      this.showInfoSuccess();
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }
  productDetail(productItem) {
    global.product = productItem;
    const { gotoProductDetail } = this.props;
    gotoProductDetail();
  }

  render() {
    const { CartItem } = this.props;
    const arrTotal = CartItem.map(e => e.product.price * e.quantity);
    const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
    const {
      container,
      product,
      imageProduct,
      productInfo,
      productName,
      productPrice,
      productProps,
      btnDetail,
      deleteProduct,
      header,
      btnPayment,
      txtPayment
    } = styles;
    return (
      <View style={container}>
        <FlatList
          data={CartItem}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={product} key={item.product.id}>
              <Image
                source={{ uri: URL_IMAGE_PRODUCT + item.product.images[0] }}
                style={imageProduct}
              />
              <View style={productInfo}>
                <View style={header}>
                  <Text style={productName}>
                    {toTitleCase(item.product.name)}
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.removeProduct(item.product.id)}
                  >
                    <Text style={deleteProduct}>X</Text>
                  </TouchableOpacity>
                </View>

                <Text style={productPrice}>{item.product.price}$</Text>
                <View style={productProps}>
                  <TouchableOpacity
                    onPress={() => this.incrQuantity(item.product.id)}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                  <Text>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => this.decrQuantity(item.product.id)}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <View />
                  <TouchableOpacity
                    onPress={() => this.productDetail(item.product)}
                  >
                    <Text style={btnDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          style={btnPayment}
          onPress={this.showConfirmPayment.bind(this)}
        >
          <Text style={txtPayment}>TOTAL {total}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CartView;
