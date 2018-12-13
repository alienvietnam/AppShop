/* eslint-disable quotes */
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import global from "../../../global";

import styles from "./ProductDetailStyle";
import back from "../../../../media/appIcon/back.png";
import cartFull from "../../../../media/appIcon/cartfull.png";

const URL_IMAGE_PRODUCT = "http://192.168.0.105/AppShop/images/product/";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addThisProductToCart() {
    global.addProductToCart(global.product);
  }
  render() {
    const {
      container,
      wrapper,
      toolBar,
      btnNavigator,
      body,
      lstImage,
      imageProduct,
      nameAndPrice,
      nameProduct,
      priceProduct,
      descriptions,
      footer,
      footerValue
    } = styles;
    const { images, name, price, color, description } = global.product;
    return (
      <ScrollView>
        <View style={container}>
          <View style={wrapper}>
            <View style={toolBar}>
              <TouchableOpacity
                onPress={() => {
                  this.props.backToHome();
                }}
              >
                <Image source={back} style={btnNavigator} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.addThisProductToCart.bind(this)}>
                <Image source={cartFull} style={btnNavigator} />
              </TouchableOpacity>
            </View>
            <View style={body}>
              <View style={lstImage}>
                <Image
                  source={{ uri: URL_IMAGE_PRODUCT + images[0] }}
                  style={imageProduct}
                />
                <View style={{ width: 8 }} />
                <Image
                  source={{ uri: URL_IMAGE_PRODUCT + images[1] }}
                  style={imageProduct}
                />
              </View>
              <View style={nameAndPrice}>
                <Text style={nameProduct}>{name.toUpperCase()}</Text>
                <Text style={priceProduct}> / </Text>
                <Text style={priceProduct}>{price}$</Text>
              </View>
              <Text style={descriptions}>{description}</Text>
              <View style={footer}>
                <TouchableOpacity>
                  <Text style={footerValue}>Material leather</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={footerValue}>Color Khaki</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#c53e85",
                    backgroundColor: color.toLowerCase()
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ProductDetail;
