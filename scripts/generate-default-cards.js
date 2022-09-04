console.log("Running script", __dirname);

const fs = require("fs");

// fs.write;

const deck = [];
const suits = [{
  type: "heart",
}, {
  type: "spade",
}, {
  type: "club",
}, {
  type: "diamond",
},
];
const extraTypes = [{
  type: "ace",
  display: "A",
  icon: ""
}, {
  type: "king",
  display: "K",
  icon: ""
}, {
  type: "queen",
  display: "Q",
  icon: ""
}, {
  type: "jack",
  display: "J",
  icon: ""
}];
for (let x = 2; x <= 9; x++) {
  for (let y = 0; y < suits.length; y++) {
    deck.push({
      suit: suits[y].type,
      type: x.toString(),
      display: x.toString(),
      icon: "",
    });
  }
}

for (let x = 0; x < extraTypes.length; x++) {
  for (let y = 0; y < suits.length; y++) {
    deck.push({
      suit: suits[y].type,
      ...extraTypes[x]
    });
  }
}
console.log(deck);

fs.writeFile(
  "./assets/default_cards.txt",
  JSON.stringify(deck), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
