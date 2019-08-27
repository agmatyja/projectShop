const Product = require('./models/product.model');
const fs = require('fs');

const loadTestData = async () => {

  const data = [
    {
      id: 'b1',
      extraInfo: 'NEW',
      title: 'An evil mind',
	    author: "Chris Carter",
      lastName: "Carter",
      imageFile: 'book1.jpg',
      description: 'FROM THE AUTHOR OF THE SUNDAY TIMES NUMBER ONE BESTSELLER THE CALLER.\n' +
        'A freak accident in rural Wyoming leads the Sheriff’s Department to arrest a man for a possible double homicide, but further investigations suggest a much more horrifying discovery – a serial killer who has been kidnapping, torturing and mutilating victims all over the United States for at least twenty-five years.\n'+
        'The suspect claims he is a pawn in a huge labyrinth of lies and deception – and he will now only speak to Detective Robert Hunter …\n'+
        'Praise for Chris Carter:\n' +
        '‚A touch of Patricia Cornwell about Chris Carter’s plotting’ Mail on Sunday\n'+
        '‚Gripping . . . not for the squeamish’ Heat\n'+
        '‚A page-turner’ Express',
      price: 10,
    },
    {
      id: 'b2',
      extraInfo: 'SALE',
      title: '17th suspect',
	    author: "James Patterson & Maxine Paetro",
      lastName: "Patterson",
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
    },
    {
      id: 'b3',
      extraInfo: 'BESTSELLER',
      title: 'The hitchhikers guide to the galaxy',
      author: "Douglas Adams",
      lastName: "Adams",
      imageFile: 'book3.jpg',
      description: 'A phenomenon across all formats, Douglas Adams’ The Hitchhiker’s Guide to the Galaxy has been a radio show, a television show, a move and a series of bestselling novels. The Hitchhiker’s Guide to the Galaxy: The Trilogy of Four contains the first four parts of the cult classic ‚trilogy’: The Hitchhiker’s Guide to the Galaxy, The Restaurant at the End of the Universe, Life, the Universe and Everything, and So Long, and Thanks for All the Fish.\n' +
        'The Hitchhiker’s Guide to the Galaxy: One Thursday lunchtime the Earth gets demolished to make way for a hyperspace bypass. For Arthur, who has just had his house demolished, this is too much. Sadly, the weekend’s just begun.\n'+
        'The Restaurant at the End of the Universe: When all issues of space, time, matter and the nature of being are resolved, only one question remains: Where shall we have dinner? The Restaurant at the End of the Universe provides the ultimate gastronomic experience and, for once, there is no morning after.\n'+
        'Life, the Universe and Everything: In consequence of a number of stunning catastrophes, Arthur Dent is surprised to find himself living in a hideously miserable cave on prehistoric Earth. And then, just as he thinks that things cannot possibly get any worse, they suddenly do.\n'+
        'So Long, and Thanks For All the Fish: Arthur Dent’s sense of reality is in its dickiest state when he suddenly finds the girl of his dreams. They go in search of God’s Final Message and, in a dramatic break with tradition, actually find it.lp you on the road.\n',
      price: 20,
    },
    {
      id: 'b4',
      extraInfo: '',
      title: 'The bad beginning',
      author: "Lemony Snicket",
      lastName: "Snicket",
      imageFile: 'book4.jpg',
      description: 'Dear reader,\n'+
        'There is nothing to be found in these special tie-in editions of Lemony Snicket’s A Series of Unfortunate Events but misery and despair. You still have time to pick another bestselling, Emmy-nominated, Netflix-adapted series to read. But if you cannot be dissuaded, read on . . .\n'+
        'Violet, Klaus, and Sunny Baudelaire are intelligent children. They are charming, and resourceful, and have pleasant facial features. Unfortunately, they are exceptionally unlucky.\n'+
        'In The Bad Beginning, the siblings encounter a greedy and repulsive villain, itchy clothing, a disastrous fire, a plot to steal their fortune and cold porridge for breakfast.\n'+
        'In the tradition of great storytellers, from Dickens to Dahl, comes an exquisitely dark comedy that is both literary and irreverent, hilarious and deftly crafted.hanting piece that features a huge ruby, and then promptly disappears with it. Poirot discovers a connection with a house party at the home of Colonel and Mrs Lacey and, in order to pursue his investigation, an invitation is procured for him to the Laceys’, ostensibly to enjoy an old-fashioned Christmas. With deft skill and the workings of his little grey cells, Poirot brings this case to a satisfying and festive conclusion. Starring John Moffat as Hercule Poirot, with Donald Sinden and Siân Phillips as Colonel and Mrs Lacey.',
      price: 20,
    },
    {
      
      id: 'b5',
      extraInfo: '',
      title: 'The affair',
      author: "Amanda Brooke",
      lastName: "Brooke",
      imageFile: 'book5.jpg',
      description: 'A shocking story about a fifteen-year-old girl and the man who took advantage of her\n'+
        '“You might as well know from the start, I’m not going to tell on him and I don’t care how much trouble I get in. It’s not like it could get any worse than it already is.\n'+
        'I can’t. Don’t ask me why, I just can’t.”\n'+
        'When Nina finds out that her fifteen-year-old daughter, Scarlett, is pregnant, her world falls apart.\n'+
        'Because Scarlet won’t tell anyone who the father is. And Nina is scared that the answer will destroy everything.\n'+
        'As the suspects mount – from Scarlett’s teacher to Nina’s new husband of less than a year – Nina searches for the truth: no matter what the cost.\n',
      price: 20,
    },
    {
      id: 'b6',
      extraInfo: '',
      title: 'Eldest',
      author: "Christopher Paolini",
      lastName: "Paolini",
      imageFile: 'book6.jpg',
      description: 'Darkness falls . . . Despair abounds . . . Evil reigns . . .'+
        'Fresh from their battle for the rebel state against King Galbatorix, Eragon has no time to rest.' +
        'He and his dragon, Saphira, must travel to Ellesméra, the land of the elves for more training in magic and swordsmanship, the vital skills of a Dragon Rider.' +
        'Even though he’s heading off on the journey of a lifetime, chaos and betrayal plague him at every turn, and Eragon doesn’t know who to trust.' +
        'And while he’s off on his own journey, his cousin Roran must fight a new battle back home in Carvahall – one that puts Eragon in even graver danger.' +
        'Will the king’s dark hand strangle all resistance? Eragon may not escape with even his life . . .',
      price: 20,
    },
    {
      id: 'b7',
      extraInfo: '',
      title: 'Agent in place',
      author: "Mark Greaney",
      lastName: "Greaney",
      imageFile: 'book7.jpg',
      description: 'The Gray Man is back in another nonstop international thriller from the #1 New York Times bestselling coauthor of Tom Clancy’s Jack Ryan novels.' +
        'Fresh off his first mission back with the CIA, Court Gentry secures what seems like a cut-and-dried contract job: A group of expats in Paris hires him to kidnap the mistress of Syrian dictator Ahmed Azzam to get intel that could destabilize Azzam’s regime.' +
        'Court delivers Bianca Medina to the rebels, but his job doesn’t end there. She soon reveals that she has given birth to a son, the only heir to Azzam’s rule–and a potent threat to the Syrian president’s powerful wife.' +
        'Now, to get Bianca’s cooperation, Court must bring her son out of Syria alive. With the clock ticking on Bianca’s life, he goes off the grid in a free-fire zone in the Middle East–and winds up in the right place at the right time to take a shot at bringing one of the most brutal dictatorships on earth to a close…',
      price: 20,
    },
    {
      id: 'b8',
      extraInfo: '',
      title: 'All by myself, alone',
      author: "Mary Higgins Clark",
      lastName: "Higgins Clark",
      imageFile: 'book8.jpg',
      description: 'The thrilling new novel from the multi-million copy global bestselling author, ‚Queen of Suspense’ Mary Higgins Clark.' +
        'A glamorous cruise on a luxurious ocean liner turns deadly…' +
        'Fleeing the humiliating arrest of her husband-to-be on the eve of their wedding, Celia Kilbride, a gems and jewellery expert, hopes to escape from public attention by lecturing on a brand-new cruise ship, the Queen Charlotte.' +
        'On board she meets eighty-six-year-old Lady Emily Haywood – the owner of a priceless emerald necklace that she intends to leave to a museum after the cruise.' +
        'But three days out to sea Lady Emily is found dead – with the necklace missing. And the list of suspects is large and growing.' +
        'Celia sets out to find the killer, not realizing that she has put herself in mortal danger before the ship reaches its final destination…',
      price: 20,
    },
    {
      id: 'b9',
      extraInfo: '',
      title: 'Angels and demons',
      author: "Dan Brown",
      lastName: "Brown",
      imageFile: 'book9.jpg',
      description: 'CERN Institute, Switzerland: a world-renowned scientist is found brutally murdered with a mysterious symbol seared onto his chest.' +
        'The Vatican, Rome: the College of Cardinals assembles to elect a new pope. Somewhere beneath them, an unstoppable bomb of terrifying power relentlessly counts down to oblivion.' +
        'In a breathtaking race against time, Harvard professor Robert Langdon must decipher a labyrinthine trail of ancient symbols if he is to defeat those responsible – the Illuminati, a secret brotherhood presumed extinct for nearly four hundred years, reborn to continue their deadly vendetta against their most hated enemy, the Catholic Church.',
      price: 20,
    },
    {
      id: 'b10',
      extraInfo: '',
      title: 'The appeal',
      author: "John Grisham",
      lastName: "Grisham",
      imageFile: 'book10.jpg',
      description: 'In a crowded courtroom in Mississippi, a jury returns a shocking verdict against a chemical company accused of dumping toxic waste into a small town’s water supply, causing the worst “cancer cluster” in history. The company appeals to the Mississippi Supreme Court, whose nine justices will one day either approve the verdict—or reverse it.' +
        'The chemical company is owned by a Wall Street predator named Carl Trudeau, and Mr. Trudeau is convinced the Court is not friendly enough to his interests. With judicial elections looming, he decides to try to purchase himself a seat on the Court. The cost is a few million dollars, a drop in the bucket for a billionaire like Mr. Trudeau. Through an intricate web of conspiracy and deceit, his political operatives recruit a young, unsuspecting candidate. They finance him, manipulate him, market him, and mold him into a potential Supreme Court justice. Their Supreme Court justice.',
      price: 20,
    },
    {
      id: 'b11',
      extraInfo: '',
      title: 'Appointment with death',
      author: "Agatha Christie",
      lastName: "Christie",
      imageFile: 'book11.jpg',
      description: '‚You do see, don’t you, that she’s got to be killed? It’s the only solution.’ Even when on holiday in Jerusalem – the so-called City of Peace – Hercule Poirot can’t seem to escape the strains of death and murder. His first evening at the King Solomon Hotel finds the above phrase floating into his room from outside. What does it mean? Who is the speaker, and just how seriously should it be considered? Whilst Poirot struggles to resist the lure of a fresh mystery, he cannot suppress the foreboding in his heart. Also in residence at the hotel are the Boyntons, a nervous American family held tightly in the grip of their matriarch. Then there is the young medic Sarah King, plus Dr Theodore Gerard, an expert in the subject of schizophrenia. These and other guests are thrown together on an organised trip to the ancient city of Petra. Whilst love apparently blossoms for Miss King, death visits another member of the party. It is clearly murder, and there are a number of likely suspects. Only one man has the skill to distinguish between them: Hercule Poirot.',
      price: 20, 
    },
    {
      id: 'b12',
      extraInfo: '',
      title: 'The beautiful dead',
      author: "Belinda Bauer",
      lastName: "Bauer",
      imageFile: 'book12.jpg',
      description: 'They wanted the same things. Death – and an audience.' +
        'Eve Singer makes her living from death. As a TV crime reporter, she’ll go to any length to get the latest scoop.' +
        'But when a twisted serial killer starts using her to gain the publicity he craves, Eve must decide how far she’s willing to go – and how close she’ll let him get . . .',
      price: 20, 
    },
    {
      id: 'b13',
      extraInfo: '',
      title: 'Black coffee',
      author: "Agatha Christie",
      lastName: "Christie",
      imageFile: 'book13.jpg',
      description: 'Sir Claud Amory’s revolutionary new formula for a powerful explosive is stolen. Locking his house-guests in the library, Sir Claud switches off the lights to allow the thief to replace the formula, no questions asked. When the lights come on, he is dead, and Hercule Poirot and Captain Hastings have to unravel a tangle of family feuds, old flames and suspicious foreigners to find the killer and prevent a global catastrophe.',
      price: 20,  
    },
    {
      id: 'b14',
      extraInfo: '',
      title: 'The beach',
      author: "Alex Garland",
      lastName: "Garland",
      imageFile: 'book14.jpg',
      description: 'A 20th anniversary edition of this million copy bestseller, with a new introduction by John Niven: a classic story of paradise found – and lost.' +
        'Richard lands in East Asia in search of an earthly utopia. In Thailand, he is given a map promising an unknown island, a secluded beach – and a new way of life. What Richard finds when he gets there is breathtaking: more extraordinary, more frightening than his wildest dreams.' +
        'But how long can paradise survive here on Earth? And what lengths will Richard go to in order to save it?',
      price: 20,  
    },
    {
      id: 'b15',
      extraInfo: '',
      title: 'Bad blood',
      author: "E.O. Chirovici",
      lastName: "Chirovici",
      imageFile: 'book15.jpg',
      description: 'You can’t trust your own memories.' +
        'You can’t trust other people’s.' +
        'So how do you know what really happened that night?' +
        'One rainy night in New York, psychologist James Cobb gives a talk on the art of recovering lost memories. Afterwards, he’s approached by a stranger: a dying man who, forty years ago, woke up in a hotel room with a murdered woman, and no memory at all of what happened. Now, he needs to know whether he was an innocent bystander – or a killer.' +
        'Intrigued, James begins to unpick the tangled threads of this decades-old mystery. But everyone involved has a different story to tell, and every fact he uncovers has another interpretation. As his interest becomes an obsession, and secrets from his own past start to surface, he begins to suspect that someone has buried the truth deep enough to hide it forever.',
      price: 20,  
    },
    {
      id: 'b16',
      extraInfo: '',
      title: 'The bad mother',
      author: "Amanda Brooke",
      lastName: "Brooke",
      imageFile: 'book16.jpg',
      description: 'That’s what he wants you to think…\n' +
        'A good mother doesn’t forget things.\n' +
        'A good mother isn’t a danger to herself.\n' +
        'A good mother isn’t a danger to her baby.\n'+
        'You want to be the good mother you dreamed you could be.\n'+
        'But you’re not. You’re the bad mother you were destined to become.\n' +
        'At least, that what he wants you to believe…',
      price: 30, 
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