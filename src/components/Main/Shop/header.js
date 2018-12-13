/* eslint-disable camelcase */
/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  Alert
} from "react-native";
import ic_logo from "../../../media/appIcon/ic_logo.png";
import ic_menu from "../../../media/appIcon/ic_menu.png";

import global from "../../global";
import searchProduct from "../../../api/searchProduct";

const { height } = Dimensions.get("window");

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  onSearch() {
    if (this.state.keyword !== "") {
      searchProduct(this.state.keyword).then(res => {
        if (res === "NHAP_TU_KHOA") {
          //this.showWanning();
        } else if (res === null) {
          this.showAlert();
        } else {
          global.listSearch = res;
          global.refreshSearchView();
          this.setState({ keyword: "" });
        }
      });
    } else {
     this.showWanning();
    }
  }

  showWanning() {
    Alert.alert("Wanning", "Input keyword!", [{ text: "OK" }], {
      cancelable: false
    });
  }
  showAlert() {
    Alert.alert(
      "Result",
      "No products matched ! Thank you for your interest", [{ text: "OK" }],
      {
        cancelable: false
      }
    );
  }

  render() {
    const {
      wrapper,
      icon_style_menu,
      row_top,
      text_input,
      txt_header,
      icon_style_logo
    } = styles;
    return (
      <View style={wrapper}>
        <View style={row_top}>
          <TouchableOpacity
            onPress={() => {
              this.props.onOpen();
            }}
          >
            <Image source={ic_menu} style={icon_style_menu} />
          </TouchableOpacity>

          <Text style={txt_header}>Wearing a Dress</Text>
          <Image source={ic_logo} style={icon_style_logo} />
        </View>

        <TextInput
          style={text_input}
          placeholder="What do you want to buy?"
          onChangeText={text => this.setState({ keyword: text })}
          value={this.state.keyword}
          onFocus={() => global.gotoSearch()}
          onSubmitEditing={this.onSearch.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 6,
    backgroundColor: "#34B089",
    padding: 10,
    justifyContent: "space-around"
  },
  row_top: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5
  },
  icon_style_menu: {
    height: 25,
    width: 25
  },
  icon_style_logo: {
    height: 30,
    width: 30
  },
  txt_header: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Avenir"
  },
  text_input: {
    height: height / 18,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    fontSize: 14,
    paddingBottom: 6,
    marginLeft: 6,
    marginRight: 6
  }
});

export default Header;
