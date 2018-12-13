/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  Alert
} from "react-native";

import signIn from "../../api/SignIn";
import global from "../global";
import saveToken from '../../api/SaveToken';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onFail() {
    Alert.alert(
      "Error",
      "Password or email the wrong information!",
      [{ text: "OK" }],
      { cancelable: false }
    );
  }
  signInNow() {
    const { email, password } = this.state;
    if (email === "" || password === "") {
      Alert.alert(
        "Confirm",
        "Password or email can not be empty!",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      signIn(email, password)
        .then(res => {
          if (res === "SAI_THONG_TIN_DANG_NHAP") {
            this.onFail();
          } else {
            global.onSignIn(res.user);
            global.userInfo = res.user;
            this.props.goBack();
            saveToken(res.token);
          }
        });
    }
  }
  render() {
    const { txtInputStyle, bigButton, buttonText } = styles;
    return (
      <View>
        <TextInput
          style={txtInputStyle}
          placeholder="Enter your email"
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={txtInputStyle}
          placeholder="Enter your Password"
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />
        <TouchableOpacity style={bigButton} onPress={this.signInNow.bind(this)}>
          <Text style={buttonText}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  txtInputStyle: {
    backgroundColor: "#FFF",
    height: 45,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: width - 80
  },
  bigButton: {
    backgroundColor: "#33bb79",
    height: 45,
    borderRadius: 20,
    marginVertical: 10,
    width: width - 80,
    borderColor: "#FFF",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "500",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-thin"
      }
    })
  }
});

export default SignIn;
