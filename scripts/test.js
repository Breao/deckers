const { Deck } = require("../index");

const deck = new Deck();

const deckTest = {
  run: {
    shuffle: 1,
    draw: 1,
    return: 1,
  },
};

console.log("cards found", deck.cards.length);

console.log("===== deck =====");
console.log(deck.cards);

if (deckTest.run.shuffle) {
  try {
    deck.shuffle("test");
  } catch (e) {
    console.log("error caught"), console.log(e.message);
  }

  console.log("===== shuffle =====");
  deck.shuffle();
  deckTest["shuffle"] = { sum_total: 0 };
  console.log(deck.cards);
  for (let x = 0; x < deck.cards.length; x++) {
    if (deckTest.shuffle[deck.cards[x].suit] == undefined) {
      deckTest.shuffle[deck.cards[x].suit] = 0;
    }
    deckTest.shuffle[deck.cards[x].suit]++;
    deckTest.shuffle["sum_total"]++;
  }

  console.log("shuffle", deckTest.shuffle);

  console.log("===== shuffle hand =====");
  deckTest["shuffle_hand"] = [
    { card: 1 },
    { card: 2 },
    { card: 3 },
    { card: 4 },
    { card: 5 },
  ];
  deckTest.shuffle_hand = deck.shuffle("fy", deckTest.shuffle_hand);
  console.log(deckTest.shuffle_hand);
}

if (deckTest.run.draw) {
  console.log("===== draw =====");
  deckTest["draw"] = { amount: 5, overflow: 3 };
  for (let x = 0; x < (deckTest.draw.amount + deckTest.draw.overflow); x++) {
    console.log(deck.cards[x]);
  }
  const drawn_cards = deck.drawCards(5);
  console.log("drawn_cards", drawn_cards);

  for (let x = 0; x < deckTest.draw.overflow; x++) {
    console.log(deck.cards[x]);
  }

  console.log("===== random draw =====");
  deckTest["randDraw"] = { amount: 5, overflow: 3 };
  console.log("cards before draw:", deck.cards.length);

  const rand_drawn_cards = deck.drawRandCards(5);
  console.log("rand_drawn_cards", rand_drawn_cards);

  console.log("cards after draw:", deck.cards.length);
}

if (deckTest.run.return) {
  console.log("===== return to deck =====");
  deckTest["return"] = {
    top: [{ test: "topval" }], topCheck: 4,
    bot: [{ test: "botval" }], botCheck: 4,
    rand: [{ test: "rand" }],
  };
  deck.returnToDeck(deckTest.return.top, "onTop");
  for (let x = 0; x < deckTest.return.topCheck; x++) {
    console.log(deck.cards[x]);
  }

  deck.returnToDeck(deckTest.return.bot, "onBot");
  for (let x = (deck.cards.length - deckTest.return.botCheck);
    x < deck.cards.length; x++) {
    console.log(deck.cards[x]);
  }

  console.log("Count of cards", deck.cards.length);
  deck.returnToDeck(deckTest.return.rand, "shuffle");
  console.log(deck.cards);
  console.log("Count of cards after random", deck.cards.length);
}