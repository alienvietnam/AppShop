/* eslint-disable no-undef */
const searchProduct = key => {
  const url = `http://192.168.16.104/AppShop/search.php?key=${key}`;
  return fetch(url).then(res => res.json());
};

export default searchProduct;
