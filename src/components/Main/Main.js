/* eslint-disable quotes */
/* eslint-disable default-case */
import React, { Component } from "react";
import { StatusBar } from "react-native";
import Drawer from "react-native-drawer";
import Menu from "./Menu";
import Shop from "./Shop/Shop";
import getToken from "../../api/getToken";
import checkLogin from "../../api/checkLogin";
import global from "../global";
import refreshToken from "../../api/refreshToken";

StatusBar.setHidden(true);

export default class Main extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      screen: "Authentication"
    };
    this.gotoScreen = this.gotoScreen.bind(this);
  }
  componentDidMount() {
    setInterval(refreshToken, 60000);
    getToken()
      .then(token => checkLogin(token))
      .then(res => {
        global.onSignIn(res.user);
        global.userInfo = res.user;
      })
      .catch(err => console.log("LOI CHECK LOGIN", err));
  }

  gotoScreen(screen) {
    switch (screen) {
      case "Authentication":
        this.props.navigation.navigate("Authentication", {
          title: "Authentication"
        });
        break;
      case "ChangeInfo":
        this.props.navigation.navigate("ChangeInfo", {
          title: "ChangeInfo"
        });
        break;
      case "OrderHistory":
        this.props.navigation.navigate("OrderHistory", {
          title: "OrderHistory"
        });
        break;
    }
  }

  closeControlPanel = () => {
    this.drawer.close();
  };

  openControlPanel = () => {
    this.drawer.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <Menu
            gotoScreenAu={() => this.gotoScreen("Authentication")}
            gotoScreenOr={() => this.gotoScreen("OrderHistory")}
            gotoScreenIf={() => this.gotoScreen("ChangeInfo")}
          />
        }
        openDrawerOffset={0.4}
        tapToClose
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
