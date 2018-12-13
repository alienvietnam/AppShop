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
  Platform,
  KeyboardAvoidingView
} from "react-native";
import ic_logo from "../../media/appIcon/ic_logo.png";
import ic_back from "../../media/appIcon/back_white.png";

import SignUp from "./signUp";
import SignIn from "./signIn";

const { height } = Dimensions.get("window");

class Header extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoginIn: true
    };
  }

  signIn() {
    this.setState({ isLoginIn: true });
  }

  signUp() {
    this.setState({ isLoginIn: false });
  }

  render() {
    const { goBack } = this.props.navigation;
    const {
      wrapper,
      icon_style_menu,
      row_top,
      txt_header,
      icon_style_logo,
      container,
      controlStyle,
      inActivityStyle,
      activityStyle,
      signInStyle,
      signUpStyle,
      body
    } = styles;

    const isLogin = this.state.isLoginIn;
    const mainJSX = isLogin ? (
      <SignIn
        goBack={() => {
          goBack();
        }}
      />
    ) : (
      <SignUp signIn={this.signIn.bind(this)} />
    );
    return (
      <KeyboardAvoidingView style={container} behavior="padding" enabled>
        <View style={wrapper}>
          <View style={row_top}>
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}
            >
              <Image source={ic_back} style={icon_style_menu} />
            </TouchableOpacity>
            <Text style={txt_header}>Wearing a Dress</Text>
            <Image source={ic_logo} style={icon_style_logo} />
          </View>
        </View>
        <View style={body}>{mainJSX}</View>
        <View />
        <View />
        <View style={controlStyle}>
          <TouchableOpacity
            style={signInStyle}
            onPress={this.signIn.bind(this)}
          >
            <Text style={isLogin ? activityStyle : inActivityStyle}>
              SIGN IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={signUpStyle}
            onPress={this.signUp.bind(this)}
          >
            <Text style={!isLogin ? activityStyle : inActivityStyle}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33bb79",
    justifyContent: "space-between"
  },
  wrapper: {
    height: height / 10,
    backgroundColor: "#33bb79",
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
    fontSize: 23,
    fontFamily: "Avenir"
  },

  controlStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 40
  },
  inActivityStyle: {
    color: "#afaeaf",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-thin"
      }
    })
  },
  activityStyle: {
    color: "#33bb79",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-thin"
      }
    })
  },
  signInStyle: {
    height: 40,
    backgroundColor: "#FFf",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1,
    paddingHorizontal: 45,
    fontWeight: "500"
  },
  signUpStyle: {
    height: 40,
    backgroundColor: "#FFf",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 1,
    paddingHorizontal: 45,
    fontWeight: "500"
  },
  body: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Header;
