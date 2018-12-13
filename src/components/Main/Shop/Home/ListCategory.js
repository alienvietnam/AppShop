/* eslint-disable quotes */
/* eslint-disable camelcase */
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Platform,
  TouchableOpacity
} from "react-native";

import Swiper from "react-native-swiper";

import global from "../../../global";

const { height, width } = Dimensions.get("window");
const URL_IMAGE = "http://192.168.16.104/AppShop/images/type/";

class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.gotoProductByType = this.gotoProductByType.bind(this);
  }
  gotoProductByType(productType) {
    global.productType = productType;
    this.props.gotoListProduct();
  }
  render() {
    const { productType } = this.props;
    const { wrapper, textStyle, imageStyle, txt_title } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, padding: 0, marginTop: 14 }}>
          <Text style={textStyle}>SPRING COLLECTION</Text>
        </View>
        <View style={{ flex: 6, padding: 10, margin: 0, width: imageWidth }}>
          <Swiper
            showsPagination
            width={imageWidth}
            height={imageHeight}
            autoplay
          >
            {productType.map(e => (
              <TouchableOpacity
                onPress={() => this.gotoProductByType(e)}
                key={e.id}
              >
                <ImageBackground
                  style={imageStyle}
                  source={{ uri: URL_IMAGE + e.image }}
                >
                  <Text style={txt_title}>{e.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </Swiper>
        </View>
      </View>
    );
  }
}

const imageWidth = width - 36;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.4,
    backgroundColor: "#FFF",
    margin: 8,
    marginTop: 0,
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
  textStyle: {
    fontSize: 20,
    color: "#5a585a",
    paddingLeft: 10,
    margin: 0,
    fontFamily: "sans-serif-thin"
  },
  imageStyle: {
    padding: 0,
    margin: 0,
    height: imageHeight,
    width: imageWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  txt_title: {
    fontSize: 20,
    color: "#817e81",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-light"
      }
    })
  }
});
export default Collection;
