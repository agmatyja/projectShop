const Post = require('./models/product.model');

const loadTestData = async () => {

  const data = [
    {
      id: '21sd42sdsaaf',
      name: 'How do I get funding for my startup?',
	  description: "John Doe",
      price:  20,
	  in_stock: 4
    },
    {
      id: '543fg43gzsd4',
      title: 'Brilliant',
	  author: "Doris Tenebris",
      price:  30,
	  in_stock: 2
    }
  ];

  try {
    let counter = await Product.countDocuments();
    if(counter === 0) {
      console.log('No products. Loading data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadTestData;