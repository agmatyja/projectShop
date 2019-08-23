const Product = require('../models/product.model');

// get all products

exports.getProducts = async (req, res) => {

    try {
      res.status(200).json(await Product.find());
    } catch(err) {
      console.log(err);
      res.status(500).json(err);
    }

};

//get single product

exports.getProduct = async (req, res) => {

    try {
      const productArr = await Product.find({ id: { $eq: req.params.id} })
      if (productArr.length === 1) {
	      res.status(200).json(productArr[0]);
	    } else {
		    res.status(404).json({});
	    }
    } catch(err) {
      console.log(err);
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
    res.status(200).json(productSaved);

  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }

}

const sortParam = {
  'TITLE_ASC' : {'title': 1},
  'TITLE_DESC' : {'title': -1},
  'AUTHOR_ASC' : {'author': 1},
  'AUTHOR_DESC' : {'author': -1},
  'PRICE_ASC' : {'price': 1},
  'PRICE_DESC' : {'price': -1},
}

// get products by range
exports.getProductsByRange = async function (req, res) {

  try {
    let { startAt, limit, sort } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);

    const products = await Product.find({}, null, {sort: sortParam[sort]}).skip(startAt).limit(limit);
    const amount = await Product.countDocuments();

    res.status(200).json({
      products,
      amount,
    });   

  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }

};