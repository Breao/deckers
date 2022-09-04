/* eslint-disable indent */
/**
 * Class for creating a deck object
 */
class Deck {
  /**
   * Constructor for the deck
   * @param {*} params
   */
  constructor(params = {}) {
    if (params.cards) {
      this.cards = params.cards;
    } else {
      const fs = require("fs");
      const path = require("path");
      const defaultFile = path.join(__dirname, "assets", "default_cards.txt");
      this.cards = JSON.parse(fs.readFileSync(defaultFile));
    }
  }

  /**
   *
   * @param {*} method
   */
  shuffle(method = "fy") {
    const res = [];
    switch (method) {
      case "fy": // fisher-yates
        for (let len = this.cards.length; len > 0; len--) {
          const rand = Math.floor(Math.random() * (len - 1) + 1) - 1;
          res.push(this.cards[rand]);
          this.cards.splice((rand), 1);
        }
        this.cards = res;
        break;
      case "reverse":
        while (this.cards.length > 0) {
          const len = this.cards.length;
          res.push(this.cards[(len - 1)]);
          this.cards.splice((len - 1), 1);
        }
        this.cards = res;
        break;
      default:
        console.log("not a valid shuffle option");
    }
  }

  /**
   *
   * @param {*} amount
   */
  drawCards(amount = 1) {
    const res = [];
    for (let x = 0; x < amount; x++) {
      res.push(this.cards[0]);
      this.cards.splice(0, 1);
    }
    return res;
  }
}

module.exports = { Deck };
