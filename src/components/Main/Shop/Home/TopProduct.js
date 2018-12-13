/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";

import global from "../../../global";

const URL_IMAGE_PRODUCT = "http://192.168.16.104/AppShop/images/product/";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

class TopProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.productDetail = this.productDetail.bind(this);
  }

  productDetail(productItem) {
    global.product = productItem;
    const { gotoProductDetail } = this.props;
    gotoProductDetail();
  }

  render() {
    const { productList } = this.props;
    const {
      container,
      titleContainer,
      title,
      body,
      productContainer,
      productImage,
      productName,
      productPrice
    } = styles;

    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>TOP PRODUCT</Text>
        </View>
        <View style={body}>
          {
            productList.map(item => (
              <TouchableOpacity
                style={productContainer}
                onPress={() => {
                  this.productDetail(item);
                }}
                key={item.id}
              >
                <Image
                  style={productImage}
                  source={{ uri: `${URL_IMAGE_PRODUCT}${item.images[0]}` }}
                />
                <Text style={productName}>{toTitleCase(item.name)}</Text>
                <Text style={productPrice}>{item.price}$</Text>
              </TouchableOpacity>
            ))
          }
        </View>

      </View>
    );
  }
}

const { width } = Dimensions.get("window");

const productWidth = (width - 70) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    margin: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#666666",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 2
      },
      android: {
        elevation: 5,
        position: "relative"
      }
    }),
    borderRadius: 3
  },
  titleContainer: {
    padding: 0,
    marginTop: 14
  },
  title: {
    fontSize: 20,
    color: "#5a585a",
    paddingLeft: 10,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-thin"
      }
    })
  },
  body: {
    margin: 0,
    padding: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  productContainer: {
    width: productWidth,
    ...Platform.select({
      ios: {
        shadowColor: "#666666",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 2
      },
      android: {
        elevation: 5,
        position: "relative"
      }
    }),
    marginBottom: 30
  },
  productImage: {
    height: productImageHeight,
    width: productWidth,
    borderRadius: 2
  },
  productName: {
    fontSize: 13,
    color: "#817e81",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif"
      }
    }),
    paddingLeft: 20,
    marginTop: 15
  },
  productPrice: {
    fontSize: 13,
    color: "#c0245d",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif"
      }
    }),
    paddingLeft: 20
  }
});

export default TopProduct;
