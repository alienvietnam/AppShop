/* eslint-disable quotes */
import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const imageWidth = width / 4.6;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  wrapper: {
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 2,
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
    height: height / 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  btnBack: {
    width: 30,
    height: 30,
    marginHorizontal: 12,
    paddingVertical: 0
  },
  titleStyle: {
    fontSize: 18,
    color: "#c53e85",
    fontWeight: "400",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-light"
      }
    }),
    paddingVertical: 0
  },
  product: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderBottomColor: "#00000000",
    borderRightColor: "#00000000",
    borderLeftColor: "#00000000",
    borderTopColor: "#CDCDCD"
  },
  imageProduct: {
    width: imageWidth,
    height: imageHeight
  },
  productInfo: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "space-between"
  },
  productProps: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingVertical: 5
  },
  productName: {
    fontSize: 18,
    color: "#A8A7A8",
    fontWeight: "400",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-light"
      }
    }),
    paddingVertical: 5
  },
  productPrice: {
    fontSize: 18,
    color: "#c53e85",
    fontWeight: "400",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-light"
      }
    }),
    paddingVertical: 5
  },
  productDescription: {
    paddingVertical: 5
  },

  btnDetail: {
    fontSize: 10,
    color: "#c53e85",
    fontWeight: "400",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "sans-serif-light"
      }
    }),
    paddingTop: 3,
    marginLeft: 8
  },
  flatList: {
    height: ((height * 22) / 35) - 5,
  }
});
export default styles;
