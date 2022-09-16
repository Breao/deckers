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
   * @param {String} method
   * @param {array} cards Optional: cards to shuffle. Shuffles deck if not used
   */
  shuffle(method = "fy", cards = []) {
    const res = [];
    let hasCards = true;
    if (cards.length == 0) {
      cards = this.cards;
      hasCards = false;
    }
    switch (method) {
      case "fy": // fisher-yates
        const min = 1;
        for (let len = cards.length; len > 0; len--) {
          // const rand = Math.floor(Math.random() * (len - min + 1));
          const rand = this.randomNumber(len, min);
          res.push(cards[rand]);
          cards.splice((rand), 1);
        }
        break;
      case "reverse":
        while (cards.length > 0) {
          const len = cards.length;
          res.push(cards[(len - 1)]);
          cards.splice((len - 1), 1);
        }
        break;
      case "cut":
        throw new Error("not implemented");
      default:
        throw new Error("Not a valid shuffle option: " + method);
    }
    if (hasCards) {
      return res;
    } else {
      this.cards = res;
    }
  }

  /**
   *
   * @param {number} amount
   * @return {array}
   */
  drawCards(amount = 1) {
    const res = [];
    for (let x = 0; x < amount; x++) {
      res.push(this.cards[0]);
      this.cards.splice(0, 1);
    }
    return res;
  }

  /**
   *
   * @param {number} amount
   * @return {array}
   */
  drawRandCards(amount = 1) {
    const res = [];
    for (let x = 0; x < amount; x++) {
      const rand = this.randomNumber(this.cards.length, 1);
      res.push(this.cards[rand]);
      this.cards.splice(rand, 1);
    }
    return res;
  }

  /**
   *
   * @param {array} cards Array of cards to put back in the deck
   * @param {string} type Method of putting the cards back
   * @param {string} shuffle If type is shuffle, what method of shuffle
   * @return {boolean}
   */
  returnToDeck(cards = [], type = "shuffle", shuffle = "fy") {
    console.log("call returnToDeck");
    switch (type) {
      case "shuffle":
        this.cards = cards.concat(this.cards);
        this.shuffle(shuffle);
        break;
      case "onTop":
        this.cards = cards.concat(this.cards);
        break;
      case "onBot":
        this.cards = this.cards.concat(cards);
        break;
      default:
        throw new Error("Not a valid option to return cards");
    }
    return true;
  }

  // utilities

  /**
   *
   * @param {number} max
   * @param {number} min
   * @return {number}
   */
  randomNumber(max, min = 1) {
    return Math.floor(Math.random() * (max - min + 1));
  }
}

module.exports = { Deck };
