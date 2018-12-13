/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform
} from "react-native";

import Profile from "../../media/temp/profile.png";
import saveToken from "../../api/SaveToken";
import global from '../global';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginIn: false,
      user: null
    };
    global.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(user) {
    this.setState({ user });
  }
  
  onSignOut() {
    saveToken("");
    this.setState({ user: null });
  }

  render() {
    const { gotoScreenOr, gotoScreenIf, gotoScreenAu } = this.props;
    const { user } = this.state;
    const {
      container,
      profile,
      btnStyle,
      btnText,
      btnSignInStyle,
      bntTextSignIn,
      loginContainer,
      userName
    } = styles;

    const logOutJSX = (
      <View>
        <TouchableOpacity
          style={btnSignInStyle}
          onPress={() => {
            gotoScreenAu();
          }}
        >
          <Text style={bntTextSignIn}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    );

    const loginJSX = (
      <View style={loginContainer}>
        <Text style={userName}>{user ? user.name : ""}</Text>
        <View />
        <View style={{ marginTop: 60 }}>
          <TouchableOpacity
            style={btnStyle}
            onPress={() => {
              gotoScreenOr();
            }}
          >
            <Text style={btnText}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={btnStyle}
            onPress={() => {
              gotoScreenIf();
            }}
          >
            <Text style={btnText}>Change Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={btnStyle}
            onPress={this.onSignOut.bind(this)}
          >
            <Text style={btnText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    const mainJSX = user ? loginJSX : logOutJSX;
    return (
      <View style={container}>
        <Image source={Profile} style={profile} />
        {mainJSX}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34B089",
    borderRightWidth: 3,
    borderColor: "#FFF",
    alignItems: "center"
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 30
  },
  btnSignInStyle: {
    backgroundColor: "#FFF",
    height: 45,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  bntTextSignIn: {
    fontWeight: "400",
    color: "#34B089",
    fontSize: 15,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-thin"
      }
    })
  },
  btnStyle: {
    backgroundColor: "#FFF",
    height: 45,
    width: 220,
    borderRadius: 10,
    paddingLeft: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    marginVertical: 5
  },
  btnText: {
    fontWeight: "400",
    color: "#34B089",
    fontSize: 13,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-thin"
      }
    })
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  userName: {
    color: "#FFF",
    fontSize: 14,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif"
      }
    })
  }
});

export default Menu;
