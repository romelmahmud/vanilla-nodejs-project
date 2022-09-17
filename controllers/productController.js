const Product = require("../models/productModels");

// @desc Gets All Products
// @route GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

// @desc Gets single Product
// @route GET /api/products/:id
const getProduct = async (req, res, id) => {
  try {
    const product = await Product.findProductById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};
