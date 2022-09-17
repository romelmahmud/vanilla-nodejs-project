const products = require("../data/products");

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

const findProductById = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
};

module.exports = {
  findAll,
  findProductById,
};
