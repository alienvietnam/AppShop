/* eslint-disable quotes */
import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./ContactViewStyle";

import map from "../../../../../media/appIcon/map.png";
import location from "../../../../../media/appIcon/location.png";
import phone from "../../../../../media/appIcon/phone.png";
import mail from "../../../../../media/appIcon/mail.png";
import facebook from "../../../../../media/appIcon/message.png";

class Contact extends Component {
  render() {
    const { container, viewMap, mapStyle, content, info, logo, text } = styles;
    return (
      <View style={container}>
        <ScrollView>
          <View style={viewMap}>
            <Image source={map} style={mapStyle} />
          </View>

          <View style={content}>
            <View style={info}>
              <Image source={location} style={logo} />
              <Text style={text}>Du Le/Kien Thuy/Hai Phong</Text>
            </View>
            <View style={info}>
              <Image source={phone} style={logo} />
              <Text style={text}>01324542642</Text>
            </View>
            <View style={info}>
              <Image source={mail} style={logo} />
              <Text style={text}>whoiam@gmail.com</Text>
            </View>
            <View style={info}>
              <Image source={facebook} style={logo} />
              <Text style={text}>facebook/toilaai</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Contact;
