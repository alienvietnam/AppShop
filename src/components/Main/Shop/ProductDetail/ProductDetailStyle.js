/* eslint-disable quotes */
import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const imageWidth = width / 2.25;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCDCD"
  },
  wrapper: {
    backgroundColor: "#FFf",
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 4,
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
  toolBar: {
    height: height / 9,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  btnNavigator: {
    width: 25,
    height: 25,
    marginHorizontal: 12,
    paddingVertical: 0
  },
  body: {
    paddingHorizontal: 8,
    justifyContent: "center"
  },
  lstImage: {
    paddingTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  imageProduct: {
    width: imageWidth,
    height: imageHeight
  },
  nameAndPrice: {
    paddingTop: 15,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  nameProduct: {
    color: "#202020",
    fontSize: 20,
    fontWeight: "500",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-light"
      }
    })
  },
  priceProduct: {
    color: "#9A9A9A",
    fontSize: 20,
    fontWeight: "400",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-light"
      }
    })
  },
  descriptions: {
    paddingTop: 35,
    paddingHorizontal: 10,
    color: "#9A9A9A",
    fontSize: 14,
    fontWeight: "400",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-light"
      }
    })
  },
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  footerValue: {
    color: "#c53e85",
    fontSize: 14,
    fontWeight: "400",
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
