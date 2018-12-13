/* eslint-disable quotes */
import { StyleSheet, Platform, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const imageWidth = width / 4.6;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  product: {
    marginHorizontal: 12,
    marginVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 3,
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
    paddingVertical: 5,
    justifyContent: 'space-between'
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

});
export default styles;
