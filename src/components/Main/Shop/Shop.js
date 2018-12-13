/* eslint-disable camelcase */
/* eslint-disable quotes */
import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import TabNavigator from "react-native-tab-navigator";

import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import Header from "../Shop/header";
import Global from "../../global";
import saveCart from "../../../api/saveCart";
import getCart from "../../../api/getCart";
import initData from "../../../api/initData";

import HomeIconS from "../../../media/appIcon/home.png";
import HomeIcon from "../../../media/appIcon/home0.png";
import CartIconS from "../../../media/appIcon/cart.png";
import CartIcon from "../../../media/appIcon/cart0.png";
import SearchIconS from "../../../media/appIcon/search.png";
import SearchIcon from "../../../media/appIcon/search0.png";
import ContactIconS from "../../../media/appIcon/contact.png";
import ContactIcon from "../../../media/appIcon/contact0.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home",
      productType: [],
      productList: [],
      cartArray: []
    };
    Global.addProductToCart = this.addProductToCart.bind(this);
    Global.incrQuantity = this.incrQuantity.bind(this);
    Global.decrQuantity = this.decrQuantity.bind(this);
    Global.removeProduct = this.removeProduct.bind(this);
    Global.removeAllCart = this.removeAllCart.bind(this);
    Global.gotoSearch = this.gotoSearch.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    initData().then(resJSON => {
      const { type } = resJSON;
      const { product } = resJSON;
      this.setState({ productType: type, productList: product });
    });
    getCart().then(cartArray => this.setState({ cartArray }));
  }

  addProductToCart(product) {
    const isExist = this.state.cartArray.some(e => e.product.id === product.id);
    if (isExist) {
      return;
    }
    this.setState(
      {
        cartArray: this.state.cartArray.concat({ product, quantity: 1 })
      },
      () => saveCart(this.state.cartArray)
    );
  }

  incrQuantity(productId) {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== productId) {
        return e;
      }
      return { product: e.product, quantity: e.quantity + 1 };
    });
    this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
  }

  decrQuantity(productId) {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== productId) {
        return e;
      }
      return { product: e.product, quantity: e.quantity - 1 };
    });
    this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
  }

  removeProduct(productId) {
    const newCart = this.state.cartArray.filter(
      e => e.product.id !== productId
    );
    this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
  }

  removeAllCart() {
    this.setState({ cartArray: [] }, () => saveCart(this.state.cartArray));
  }

  gotoSearch() {
    this.setState({ selectedTab: "search" });
  }

  openMenu() {
    const { open } = this.props;
    open();
  }

  render() {
    const { productType, selectedTab, productList, cartArray } = this.state;
    const { image_icon } = styles;

    return (
      <View style={{ flex: 1 }}>
        <Header onOpen={this.openMenu.bind(this)} />
        <TabNavigator tabBarStyle={{ backgroundColor: "#e6e6e6" }}>
          <TabNavigator.Item
            selected={selectedTab === "home"}
            title="Home"
            renderIcon={() => <Image source={HomeIcon} style={image_icon} />}
            renderSelectedIcon={() => (
              <Image source={HomeIconS} style={image_icon} />
            )}
            onPress={() => this.setState({ selectedTab: "home" })}
            selectedTitleStyle={{ color: "#34B089", fontFamily: "Avenir" }}
          >
            <Home productType={productType} productList={productList} />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={selectedTab === "cart"}
            title="Cart"
            badgeText={cartArray.length}
            renderIcon={() => <Image source={CartIcon} style={image_icon} />}
            renderSelectedIcon={() => (
              <Image source={CartIconS} style={image_icon} />
            )}
            onPress={() => this.setState({ selectedTab: "cart" })}
            selectedTitleStyle={{ color: "#34B089", fontFamily: "Avenir" }}
          >
            <Cart cartArray={cartArray} />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={selectedTab === "search"}
            title="Search"
            renderIcon={() => <Image source={SearchIcon} style={image_icon} />}
            renderSelectedIcon={() => (
              <Image source={SearchIconS} style={image_icon} />
            )}
            onPress={() => this.setState({ selectedTab: "search" })}
            selectedTitleStyle={{ color: "#34B089", fontFamily: "Avenir" }}
          >
            <Search />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={selectedTab === "contact"}
            title="Contact"
            renderIcon={() => <Image source={ContactIcon} style={image_icon} />}
            renderSelectedIcon={() => (
              <Image source={ContactIconS} style={image_icon} />
            )}
            onPress={() => this.setState({ selectedTab: "contact" })}
            selectedTitleStyle={{ color: "#34B089", fontFamily: "Avenir" }}
          >
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image_icon: {
    width: 25,
    height: 25
  }
});

export default Menu;
