const URL = 'http://192.168.16.104/AppShop/';
const initData = () =>
  fetch(URL) // eslint-disable-line
    .then(res => res.json());
export default initData;
