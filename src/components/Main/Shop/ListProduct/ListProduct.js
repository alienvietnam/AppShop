/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";

import styles from "./ProductListStyle";
import getListProduct from "../../../../api/getListProduct";
import global from "../../../global";

import backList from "../../../../media/appIcon/backList.png";

const URL_IMAGE_PRODUCT = "http://192.168.16.104/AppShop/images/product/";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      productArr: [],
      page: 2
    };
    this.gotoDetail = this.gotoDetail.bind(this);
  }

  componentDidMount() {
    if (global.productType !== null) {
      this.setState({
        name: global.productType.name,
        id: global.productType.id
      });
      getListProduct(global.productType.id, 1).then(res =>
        this.setState({
          productArr: res
        })
      );
    } else {
      getListProduct("COLLECTION", 1).then(res =>
        this.setState({
          productArr: res,
          name: "COLLECTION",
          id: 1
        })
      );
    }
  }

  showAlert() {
    Alert.alert(
      "Alert",
      "Out of stock!",
      [
        {
          text: "OK"
        }
      ],
      { cancelable: false }
    );
  }

  gotoDetail(productInfo) {
    global.product = productInfo;
    this.props.gotoProductDetail();
  }

  loadMode() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    if (global.productType !== null) {
      getListProduct(this.state.id, this.state.page).then(res => {
        if (res != null) {
          this.arr = this.state.productArr.concat(res);
          this.setState({ productArr: this.arr });
        } else {
          //this.showAlert();
        }
      });
    } else {
      getListProduct("COLLECTION", this.state.page).then(res => {
        if (res != null) {
          this.arr = this.state.productArr.concat(res);
          this.setState({ productArr: this.arr });
        } else {
          //this.showAlert();
        }
      });
    }
  }

  render() {
    const {
      container,
      wrapper,
      toolBar,
      btnBack,
      titleStyle,
      product,
      imageProduct,
      productInfo,
      productName,
      productPrice,
      productDescription,
      productProps,
      btnDetail,
      flatList
    } = styles;

    const { name, productArr } = this.state;
    return (
      <View style={container}>
        <View style={wrapper}>
          <View style={toolBar}>
            <TouchableOpacity
              onPress={() => {
                this.props.backToHome();
              }}
            >
              <Image source={backList} style={btnBack} />
            </TouchableOpacity>

            <Text style={titleStyle}>{name}</Text>

            <View style={btnBack} />
          </View>
          <View style={flatList}>
            <FlatList
              onEndReached={this.loadMode.bind(this)}
              data={productArr}
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
                      <Text>Color {toTitleCase(item.color)}</Text>
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
        </View>
      </View>
    );
  }
}

export default ListProduct;
