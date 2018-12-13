/* eslint-disable no-undef */
/* eslint-disable quotes */
const sendOrder = (token, arrayDetail) => {
  const data = { token, arrayDetail };
  fetch("http:/192.168.16.104/AppShop/cart.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.text());
};
export default sendOrder;
