/* eslint-disable no-undef */
/* eslint-disable quotes */

const changeInfo = (token, mail, name, address, phone) =>
  fetch("http:/192.168.0.105/AppShop/change_info.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token, mail, name, address, phone })
  }).then(res => res.json());

export default changeInfo;
