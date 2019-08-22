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
      description: 'FROM THE AUTHOR OF THE SUNDAY TIMES NUMBER ONE BESTSELLER THE CALLER.\n' +
        'A freak accident in rural Wyoming leads the Sheriff’s Department to arrest a man for a possible double homicide, but further investigations suggest a much more horrifying discovery – a serial killer who has been kidnapping, torturing and mutilating victims all over the United States for at least twenty-five years.\n'+
        'The suspect claims he is a pawn in a huge labyrinth of lies and deception – and he will now only speak to Detective Robert Hunter …\n'+
        'Praise for Chris Carter:\n' +
        '‚A touch of Patricia Cornwell about Chris Carter’s plotting’ Mail on Sunday\n'+
        '‚Gripping . . . not for the squeamish’ Heat\n'+
        '‚A page-turner’ Express',
      price: 10,
      inStore: 20
    },
    {
      id: 'b2',
      extraInfo: '',
      title: '17th suspect',
	    author: "James Patterson & Maxine Paetro",
      imageFile: 'book2.jpg',
      description: 'The bestselling 17th novel in the Women’s Murder Club series\n' +
        'A KILLER WITH A PLAN\n' +
        'Detective Lindsay Boxer is on the case of a series of shootings of the homeless in San Francisco, where the killer is methodical yet unpredictable. An encounter with a confidential informer leads her to disturbing conclusions – something has gone very wrong inside the police department itself.\n' +
        'A DETECTIVE IN TOO DEEP\n' +
        'The hunt for the killer lures Lindsay out of her jurisdiction, and Lindsay’s friends in the Women’s Murder Club are concerned that she’s taking the crimes too much to heart.\n' +
        'A PATH TO DANGER\n' +
        'But with lives on the line, Lindsay can’t stop herself from following the case into ever more terrifying terrain – even though the killer could cost her everything…\n' +
        'HOW FAR IS TOO FAR?',
      price: 20,
      inStore: 30
    },
    {
      id: 'b3',
      extraInfo: '',
      title: 'The hitchhikers guide to the galaxy',
      author: "Douglas Adams",
      imageFile: 'book3.jpg',
      description: 'A phenomenon across all formats, Douglas Adams’ The Hitchhiker’s Guide to the Galaxy has been a radio show, a television show, a move and a series of bestselling novels. The Hitchhiker’s Guide to the Galaxy: The Trilogy of Four contains the first four parts of the cult classic ‚trilogy’: The Hitchhiker’s Guide to the Galaxy, The Restaurant at the End of the Universe, Life, the Universe and Everything, and So Long, and Thanks for All the Fish.\n' +
        'The Hitchhiker’s Guide to the Galaxy: One Thursday lunchtime the Earth gets demolished to make way for a hyperspace bypass. For Arthur, who has just had his house demolished, this is too much. Sadly, the weekend’s just begun.\n'+
        'The Restaurant at the End of the Universe: When all issues of space, time, matter and the nature of being are resolved, only one question remains: Where shall we have dinner? The Restaurant at the End of the Universe provides the ultimate gastronomic experience and, for once, there is no morning after.\n'+
        'Life, the Universe and Everything: In consequence of a number of stunning catastrophes, Arthur Dent is surprised to find himself living in a hideously miserable cave on prehistoric Earth. And then, just as he thinks that things cannot possibly get any worse, they suddenly do.\n'+
        'So Long, and Thanks For All the Fish: Arthur Dent’s sense of reality is in its dickiest state when he suddenly finds the girl of his dreams. They go in search of God’s Final Message and, in a dramatic break with tradition, actually find it.lp you on the road.\n',
      price: 20,
      inStore: 30
    },
    {
      id: 'b4',
      extraInfo: '',
      title: 'The adventure of the Christmas pudding',
      author: "Agatha Christie",
      imageFile: 'book4.jpg',
      description: 'In this delightful tale, an Eastern Prince arrives in England with some family jewels which he’s having reset as a gift for his fianceé. However, the Prince also has a mistress. She asks to wear one particularly enchanting piece that features a huge ruby, and then promptly disappears with it. Poirot discovers a connection with a house party at the home of Colonel and Mrs Lacey and, in order to pursue his investigation, an invitation is procured for him to the Laceys’, ostensibly to enjoy an old-fashioned Christmas. With deft skill and the workings of his little grey cells, Poirot brings this case to a satisfying and festive conclusion. Starring John Moffat as Hercule Poirot, with Donald Sinden and Siân Phillips as Colonel and Mrs Lacey.',
      price: 20,
      inStore: 30
    },
    {
      
      id: 'b5',
      extraInfo: '',
      title: 'The affair',
      author: "Amanda Brooke",
      imageFile: 'book5.jpg',
      description: 'A shocking story about a fifteen-year-old girl and the man who took advantage of her\n'+
        '“You might as well know from the start, I’m not going to tell on him and I don’t care how much trouble I get in. It’s not like it could get any worse than it already is.\n'+
        'I can’t. Don’t ask me why, I just can’t.”\n'+
        'When Nina finds out that her fifteen-year-old daughter, Scarlett, is pregnant, her world falls apart.\n'+
        'Because Scarlet won’t tell anyone who the father is. And Nina is scared that the answer will destroy everything.\n'+
        'As the suspects mount – from Scarlett’s teacher to Nina’s new husband of less than a year – Nina searches for the truth: no matter what the cost.\n',
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
      description: 'That’s what he wants you to think…\n' +
        'A good mother doesn’t forget things.\n' +
        'A good mother isn’t a danger to herself.\n' +
        'A good mother isn’t a danger to her baby.\n'+
        'You want to be the good mother you dreamed you could be.\n'+
        'But you’re not. You’re the bad mother you were destined to become.\n' +
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