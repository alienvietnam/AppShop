/* eslint-disable no-undef */
/* eslint-disable quotes */
const checkLogin = token =>
  fetch("http:/192.168.16.104/AppShop/check_login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token })
  }).then(res => res.json());

export default checkLogin;
