/* eslint-disable quotes */
import { StyleSheet, Dimensions, Platform } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8
  },
  viewMap: {
    borderRadius: 2,
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#666666",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 2
      },
      android: {
        elevation: 4,
        position: "relative"
      }
    })
  },
  mapStyle: {
    height: height / 2.5
  },
  content: {
    borderRadius: 2,
    ...Platform.select({
      ios: {
        shadowColor: "#666666",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 2
      },
      android: {
        elevation: 4,
        position: "relative"
      }
    }), 
    marginBottom: 15,
  },
  info: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    borderWidth: 1,
    borderTopColor: "#FFF",
    borderRightColor: "#FFF",
    borderLeftColor: "#FFF",
    borderBottomColor: "#A8A7A8"
  },
  logo: {
    width: 25,
    height: 25
  },
  text: {
    fontSize: 14,
    color: "#c53e85",
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

export default styles;
