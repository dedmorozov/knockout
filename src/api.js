const API_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const products = fetch(API_URL).then((response) => response.json());

  return products;
};
