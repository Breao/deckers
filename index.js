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
}

module.exports = { Deck };
