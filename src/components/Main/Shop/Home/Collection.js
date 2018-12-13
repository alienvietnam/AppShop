/* eslint-disable quotes */
/* eslint-disable camelcase */
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity
} from "react-native";

import banner_image from "../../../../media/temp/banner.jpg";
import global from '../../../global';

const { height, width } = Dimensions.get("window");

class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  gotoProductByType() {
    global.productType = null;
    this.props.gotoListProduct();
  }

  render() {
    const { wrapper, textStyle, imageStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, padding: 0, marginTop: 14 }}>
          <Text style={textStyle}>SPRING COLLECTION</Text>
        </View>
        <View style={{ flex: 6, padding: 10, margin: 0 }}>
          <TouchableOpacity onPress={this.gotoProductByType.bind(this)}>
            <Image style={imageStyle} source={banner_image} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const imageWidth = width - 36;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.4,
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
  textStyle: {
    fontSize: 20,
    color: "#817e81",
    paddingLeft: 10,
    margin: 0,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-thin"
      }
    })
  },
  imageStyle: {
    padding: 0,
    margin: 0,
    height: imageHeight,
    width: imageWidth
  }
});
export default Collection;
