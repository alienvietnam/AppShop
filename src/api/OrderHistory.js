/* eslint-disable no-undef */
/* eslint-disable quotes */
const orderHistory = token =>
  fetch("http:/192.168.0.105/AppShop/order_history.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token })
  }).then(res => res.json());

export default orderHistory;
