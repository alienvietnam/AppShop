/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";

import nextIcon from "../../media/appIcon/backs.png";

import styles from "./ChangeInfoStyle";
import changeInfo from "../../api/changeInfo";
import global from "../global";
import getToken from "../../api/getToken";

export default class ChangeInfo extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: global.userInfo.name,
      address: global.userInfo.address,
      phone: global.userInfo.phone,
      mail: global.userInfo.mail
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

  checkChangeInfo() {
    const { mail, name, address, phone } = this.state;
    if (name !== "") {
      getToken().then(res => {
        changeInfo(res, mail, name, address, phone).then(result => {
          if (result === "KHONG_THANH_CONG") {
            this.onFail();
          } else {
            global.onSignIn(result);
            global.userInfo = result;
            this.props.navigation.goBack();
          }
        });
      });
    } else {
      Alert.alert("Confirm", "User Name can not be empty!", [{ text: "OK" }], {
        cancelable: false
      });
    }
  }

  render() {
    const { name, address, phone } = this.state;
    const {
      container,
      btnNext,
      toolbarStyle,
      txtInput,
      btnSuccess,
      txtTitle,
      txtButton,
      body
    } = styles;

    const { goBack } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={container} behavior="padding" enabled>
        <View style={toolbarStyle}>
          <View />
          <Text style={txtTitle}>User Information</Text>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <Image source={nextIcon} style={btnNext} />
          </TouchableOpacity>
        </View>
        <View style={body}>
          <View />
          <View>
            <TextInput
              style={txtInput}
              placeholder="User Name"
              onChangeText={text => this.setState({ name: text })}
              value={name}
            />
            <TextInput
              style={txtInput}
              placeholder="Address"
              onChangeText={text => this.setState({ address: text })}
              value={address}
            />
            <TextInput
              style={txtInput}
              placeholder="Phone"
              onChangeText={text => this.setState({ phone: text })}
              value={phone}
            />
            <TouchableOpacity
              style={btnSuccess}
              onPress={this.checkChangeInfo.bind(this)}
            >
              <Text style={txtButton}>CHANGE YOUR INFORMATION</Text>
            </TouchableOpacity>
          </View>

          <View />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
