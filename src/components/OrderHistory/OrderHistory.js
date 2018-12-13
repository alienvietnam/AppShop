/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList
} from "react-native";

import nextIcon from "../../media/appIcon/backs.png";

import orderHistory from "../../api/OrderHistory";
import getToken from "../../api/getToken";

export default class OrderHistory extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      orderArray: []
    };
  }

  componentDidMount() {
    getToken()
      .then(token => orderHistory(token))
      .then(res => {
        this.setState(
          { orderArray: res },
          console.log("ORDER", this.state.orderArray)
        );
      })
      .catch(e => console.log("LOI", e));
  }
  render() {
    const { goBack } = this.props.navigation;
    const {
      container,
      btnNext,
      toolbarStyle,
      txtTitle,
      body,
      wrapper,
      infoRow,
      lable
    } = styles;

    return (
      <KeyboardAvoidingView style={container} behavior="padding" enabled>
        <View style={toolbarStyle}>
          <View />
          <Text style={txtTitle}>User Information</Text>
          <TouchableOpacity onPress={() => goBack()}>
            <Image source={nextIcon} style={btnNext} />
          </TouchableOpacity>
        </View>
        <View style={body}>
          <FlatList
            data={this.state.orderArray}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={wrapper}>
                <View style={infoRow}>
                  <Text style={lable}>Order Id:</Text>
                  <Text style={{ color: "#28b08a" }}> ORDER{item.id}</Text>
                </View>
                <View style={infoRow}>
                  <Text style={lable}>Order Time:</Text>
                  <Text style={{ color: "#b9186c" }}>{item.date_order}</Text>
                </View>
                <View style={infoRow}>
                  <Text style={lable}>Status: </Text>
                  <Text style={{ color: "#28b08a" }}>
                    {item.status ? "Completed" : "Pending"}
                  </Text>
                </View>
                <View style={infoRow}>
                  <Text style={lable}>Total:</Text>
                  <Text style={{ color: "#b9186c", fontWeight: "500" }}>
                    {item.total}$
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4"
  },
  toolbarStyle: {
    flexDirection: "row",
    height: width / 7,
    backgroundColor: "#28b08a",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txtTitle: {
    fontSize: 18,
    color: "#FfF",
    fontWeight: "500",
    marginLeft: 30,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-thin"
      }
    }),
    justifyContent: "center"
  },
  btnNext: {
    width: 30,
    height: 30,
    paddingHorizontal: 15,
    marginRight: 10,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  body: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  wrapper: {
    flex: 1,
    borderRadius: 2,
    width: width - 16,
    margin: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#666666",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 2
      },
      android: {
        elevation: 2,
        position: "relative"
      }
    })
  },
  infoRow: {
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row"
  },
  lable: {
    fontSize: 14,
    color: "#919191",
    fontWeight: "500",
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
