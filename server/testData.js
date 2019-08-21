const Product = require('./models/product.model');
const fs = require('fs');

const loadTestData = async () => {

  const data = [
    {
      id: 'b1',
      extraInfo: '',
      title: 'An evil mind',
	    author: "Chris Carter",
      imageFile: 'book1.jpg',
      description: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
      price: 10,
      inStore: 20
    },
    {
      id: 'b2',
      extraInfo: '',
      title: '17th suspect',
	    author: "James Patterson & Maxine Paetro",
      imageFile: 'book2.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b3',
      extraInfo: '',
      title: 'The hichhikers guide to the galaxy',
      author: "Douglas Adams",
      imageFile: 'book3.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b4',
      extraInfo: '',
      title: 'The adventure of the christmas pudding',
      author: "Agatha Christie",
      imageFile: 'book4.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      
      id: 'b5',
      extraInfo: '',
      title: 'The affair',
      author: "Amanda Brooke",
      imageFile: 'book5.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b6',
      extraInfo: '',
      title: 'The lost plays',
      author: "Agatha Christie",
      imageFile: 'book6.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b7',
      extraInfo: '',
      title: 'Agent in place',
      author: "Mark Greaney",
      imageFile: 'book7.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b8',
      extraInfo: '',
      title: 'All by myself, alone',
      author: "Mary Higgins Clark",
      imageFile: 'book8.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b9',
      extraInfo: '',
      title: 'Angels and demons',
      author: "Dan Brown",
      imageFile: 'book9.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b10',
      extraInfo: '',
      title: 'The appeal',
      author: "John Grisham",
      imageFile: 'book10.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b11',
      extraInfo: '',
      title: 'Appointment with death',
      author: "Agatha Christie",
      imageFile: 'book11.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b12',
      extraInfo: '',
      title: 'The beautiful dead',
      author: "Belinda Bauer",
      imageFile: 'book12.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b13',
      extraInfo: '',
      title: 'Black coffee',
      author: "Agatha Christie",
      imageFile: 'book13.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b14',
      extraInfo: '',
      title: 'The beach',
      author: "Alex Garland",
      imageFile: 'book14.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b15',
      extraInfo: '',
      title: 'Bad blood',
      author: "E.O. Chirovici",
      imageFile: 'book15.jpg',
      description: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      price: 20,
      inStore: 30
    },
    {
      id: 'b16',
      extraInfo: '',
      title: 'The bad mother',
      author: "Amanda Brooke",
      imageFile: 'book16.jpg',
      description: 'That’s what he wants you to think…' +
        'A good mother doesn’t forget things.' +
        'A good mother isn’t a danger to herself.' +
        'A good mother isn’t a danger to her baby.'+
        'You want to be the good mother you dreamed you could be.'+
        'But you’re not. You’re the bad mother you were destined to become.' +
        'At least, that what he wants you to believe…',
      price: 20,
      inStore: 30
    }
  ];

  try {
    let counter = await Product.countDocuments();
    if (counter === 0) {
      console.log('No products. Loading data...');
      for (let book of data) {
        book.image = fs.readFileSync('resources/images/' + book.imageFile).toString('base64');
      }
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadTestData;