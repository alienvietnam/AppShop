/* eslint-disable no-undef */
/* eslint-disable quotes */
const getListProduct = (idType, page) => {
  let url;
  if (idType !== "COLLECTION") {
    url = `http://192.168.16.104/AppShop/product_by_type.php?id_type=${idType}&page=${page}`;
  } else {
    url = `http://192.168.16.104/AppShop/get_collection.php?page=${page}`;
  }
  return fetch(url).then(res => res.json(0));
};
export default getListProduct;
