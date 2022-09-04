const { Deck } = require("../index");

const deck = new Deck();

const deck_test = {};

console.log("cards found", deck.cards.length);


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

deck_test["draw"] = { amount: 5, overflow: 3 };
for (let x = 0; x < (deck_test.draw.amount + deck_test.draw.overflow); x++) {
  console.log(deck.cards[x]);
}
const drawn_cards = deck.drawCards(5);
console.log("drawn_cards", drawn_cards);

for (let x = 0; x < deck_test.draw.overflow; x++) {
  console.log(deck.cards[x]);
}