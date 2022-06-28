const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {

    let word;
    this.beforeEach(() => {
      word = new Word("whatever");
    })

    it('should have a "word" property', function () {
      expect(word).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("whatever");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {

      let word1 = new Word("aeiou");
      let word2 = new Word("zxcvb");
      let word3 = new Word("whatever");

      expect(word1.removeVowels()).to.equal("");
      expect(word2.removeVowels()).to.equal("zxcvb");
      expect(word3.removeVowels()).to.equal("whtvr");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      let word1 = new Word("aeiou");
      let word2 = new Word("zxcvb");
      let word3 = new Word("whatever");

      expect(word1.removeConsonants()).to.equal("aeiou");
      expect(word2.removeConsonants()).to.equal("");
      expect(word3.removeConsonants()).to.equal("aee");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {

      let word1 = new Word("bed");
      let word2 = new Word("end");

      expect(word1.pigLatin()).to.equal("edbay");
      expect(word2.pigLatin()).to.equal("endyay");

    });
  });
});
