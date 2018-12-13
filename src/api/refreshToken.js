/* eslint-disable prefer-template */
/* eslint-disable no-undef */
/* eslint-disable quotes */
import saveToken from "./SaveToken";
import getToken from "./getToken";

const getNewToken = token =>
  fetch("http:/192.168.0.105/AppShop/refresh_token.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token })
  }).then(res => res.text());

const refreshToken = async () => {
  try {
    const token = await getToken();
    if (token === "" || token === "TOKEN_KHONG_HOP_LE") {
      console.log("Chua co token");
    } else {
      const newToken = await getNewToken(token);
      await saveToken(newToken);
    }
  } catch (e) {
    console.log(e);
  }
};
export default refreshToken;
