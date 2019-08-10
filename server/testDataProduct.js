const Post = require('./models/product.model');

const loadTestData = async () => {

  const data = [
    {
      id: '21sd42sdsaaf',
      title: 'How do I get funding for my startup?',
	  author: "John Doe",
      price:  20
    },
    {
      id: '543fg43gzsd4',
      title: '10 Brilliant Small Bussiness Ideas',
	  author: "Doris Tenebris",
      price:  30
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