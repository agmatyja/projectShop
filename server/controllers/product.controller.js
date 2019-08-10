const Product = require('../models/product.model');

// get all products

exports.getProducts = async (req, res) => {

    try {
      res.status(200).json(await Product.find());
    } catch(err) {
      res.status(500).json(err);
    }

};

//get single product

exports.getProduct = async (req, res) => {

    try {
      const postArr = await Product.find({ id: { $eq: req.params.id} })
      if (productArr.length === 1) {
		res.status(200).json(productArr[0]);
	  } else {
		res.status(404).json({});
	  }
    } catch(err) {
      res.status(500).json(err);
    }

};

// add new product
exports.addProduct = async function (req, res) {

  try {
    const { title, author, content } = req.body;

    let newProduct = new Product(req.body);
	const uuid = require('uuid');
    newProduct.id = uuid();

    productSaved = await newProduct.save();
    res.status(200).json(postSaved);

  } catch(err) {
    res.status(500).json(err);
  }

}

// get products by range
exports.getProductsByRange = async function (req, res) {

  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);
   
    const posts = await Product.find().skip(startAt).limit(limit);
    const amount = await Product.countDocuments();

    res.status(200).json({
      products,
      amount,
    });   

  } catch(err) {
    res.status(500).json(err);
  }

};