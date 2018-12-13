/* eslint-disable quotes */
import { StyleSheet, Dimensions, Platform } from 'react-native';

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
    txtInput: {
        backgroundColor: "#FFF",
        height: 45,
        width: width - 60,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#28b08a"
    },
    btnSuccess: {
        backgroundColor: "#28b08a",
        height: 45,
        borderRadius: 20,
        marginVertical: 10,
        width: width - 60,
        borderColor: "#FFF",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    txtButton: {
        fontSize: 14,
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
    }
});


export default styles;
