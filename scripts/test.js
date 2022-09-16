const { Deck } = require("../index");

const deck = new Deck();

const deck_test = {};

console.log("cards found", deck.cards.length);

console.log("===== deck =====");
console.log(deck.cards);

try {
  deck.shuffle("test");
} catch (e) {
  console.log("error caught"), console.log(e.message);
}

console.log("===== shuffle =====");
deck.shuffle();
deck_test["shuffle"] = { sum_total: 0 };
console.log(deck.cards);
for (let x = 0; x < deck.cards.length; x++) {
  if (deck_test.shuffle[deck.cards[x].suit] == undefined) {
    deck_test.shuffle[deck.cards[x].suit] = 0;
  }
  deck_test.shuffle[deck.cards[x].suit]++;
  deck_test.shuffle["sum_total"]++;
}

console.log("shuffle", deck_test.shuffle);

console.log("===== shuffle hand =====");
deck_test["shuffle_hand"] = [
  { card: 1 },
  { card: 2 },
  { card: 3 },
  { card: 4 },
  { card: 5 },
];
deck_test.shuffle_hand = deck.shuffle("fy", deck_test.shuffle_hand);
console.log(deck_test.shuffle_hand);

console.log("===== draw =====");
deck_test["draw"] = { amount: 5, overflow: 3 };
for (let x = 0; x < (deck_test.draw.amount + deck_test.draw.overflow); x++) {
  console.log(deck.cards[x]);
}
const drawn_cards = deck.drawCards(5);
console.log("drawn_cards", drawn_cards);

for (let x = 0; x < deck_test.draw.overflow; x++) {
  console.log(deck.cards[x]);
}

console.log("===== random draw =====");
deck_test["randDraw"] = { amount: 5, overflow: 3 };
console.log("cards before draw:", deck.cards.length);

const rand_drawn_cards = deck.drawRandCards(5);
console.log("rand_drawn_cards", rand_drawn_cards);

console.log("cards after draw:", deck.cards.length);

console.log("===== return to deck =====");
deck_test["return"] = {
  top: [{ test: "topval" }], topCheck: 4,
  bot: [{ test: "botval" }], botCheck: 4,
  rand: [{ test: "rand" }]
};
deck.returnToDeck(deck_test.return.top, "onTop");
for (let x = 0; x < deck_test.return.topCheck; x++) {
  console.log(deck.cards[x]);
}

deck.returnToDeck(deck_test.return.bot, "onBot");
for (let x = (deck.cards.length - deck_test.return.botCheck);
  x < deck.cards.length; x++) {
  console.log(deck.cards[x]);
}

console.log("Count of cards", deck.cards.length);
deck.returnToDeck(deck_test.return.rand, "shuffle");
console.log("Count of cards after random", deck.cards.length);



// const max = 5;
// let result = 1;
// let counter = 0;
// while (result != max) {
//   // result = Math.floor(Math.random() * (max)) + 1;
//   result = Math.floor(Math.random() * (len - 1) + 1) - 1;
//   counter++;
//   console.log(counter, result);
//   if (counter == 10000) {
//     result = max;
//     console.log("failed");
//   }
// }
