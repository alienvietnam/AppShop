/* eslint-disable quotes */
const register = (email, name, password) =>
  // eslint-disable-next-line no-undef
  fetch("http:/192.168.16.104/AppShop//register.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ email, name, password })
  }).then(res => res.text());

export default register;
