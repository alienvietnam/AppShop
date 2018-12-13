/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  Alert
} from "react-native";

import Register from "../../api/Register";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      rePassword: ""
    };
  }
  onFail() {
    Alert.alert(
      "Notice",
      "Email has been used by other",
      [{ text: "OK", onPress: this.removeEmail.bind(this) }],
      { cancelable: false }
    );
  }

  onSuccess() {
    Alert.alert(
      "Notice",
      "Sign up successfully",
      [
        {
          text: "OK",
          onPress: () => {
            this.props.signIn();
          }
        }
      ],
      {
        cancelable: false
      }
    );
  }

  registerUser() {
    const { email, name, password, rePassword } = this.state;
    if (password !== rePassword) {
      Alert.alert(
        "Confirm",
        "Password and RePassword error",
        [{ text: "OK", onPress: () => this.setState({ rePassword: "" }) }],
        { cancelable: false }
      );
    } else {
      Register(email, name, password).then(res => {
        if (res === "THANH_CONG") return this.onSuccess();
        this.onFail();
      });
    }
  }

  removeEmail() {
    this.setState({ email: "" });
  }

  render() {
    const { txtInputStyle, bigButton, buttonText } = styles;
    return (
      <View>
        <TextInput
          style={txtInputStyle}
          placeholder="Enter your name"
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
        />
        <TextInput
          style={txtInputStyle}
          placeholder="Enter your email"
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={txtInputStyle}
          placeholder="Enter your password"
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          style={txtInputStyle}
          placeholder="Re_enter your Password"
          onChangeText={text => this.setState({ rePassword: text })}
          value={this.state.rePassword}
        />
        <TouchableOpacity
          style={bigButton}
          onPress={this.registerUser.bind(this)}
        >
          <Text style={buttonText}>SIGN UP NOW</Text>
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

export default SignUp;
