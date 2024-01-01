import assert from 'node:assert/strict'
import Randorem from '../index.js'

describe('Randorem', () => {
    describe('word', () => {
        it('should return a string, between 2 and 10 letters', () => {
            const word = Randorem.word()
            assert.ok(typeof word === 'string')
            assert.ok(word.length >= 2)
            assert.ok(word.length <= 10)
        })

        it('should be parametized', () => {
            const word = Randorem.word({
                minLetters: 1,
                maxLetters: 1,
            })
            assert.ok(word.length === 1)
        })
        it('should be all lowercased', () => {
            const word = Randorem.word()
            assert.ok(word === word.toLowerCase())
        })
    })

    describe('sentence', () => {
        it('should return a string with 2 to 10 words, separated by spaces', () => {
            const sentence = Randorem.sentence()
            assert.ok(typeof sentence === 'string')
            assert.ok(sentence.split(' ').length >= 2)
            assert.ok(sentence.split(' ').length <= 10)
        })

        it('should be parametized', () => {
            const sentence = Randorem.sentence({
                minWords: 1,
                maxWords: 1,
            })
            assert.ok(sentence.split(' ').length === 1)
        })
        it('should be deeply parametized', () => {
            const sentence = Randorem.sentence({
                minWords: 1,
                maxWords: 1,
                minLetters: 1,
                maxLetters: 1,
            })
            const words = sentence.split(' ')
            assert.ok(words[0].length === 1)
        })
        it('should starts with an uppercased letter', () => {
            const sentence = Randorem.sentence()
            assert.ok(sentence[0] === sentence[0].toUpperCase())
        })
    })

    describe('paragraph', () => {
        it('should return a string with 8 to 15 sentences, separated by ". " string', () => {
            const paragraph = Randorem.paragraph()
            assert.ok(typeof paragraph === 'string')
            assert.ok(paragraph.split('. ').length >= 8)
            assert.ok(paragraph.split('. ').length <= 15)
        })
        it('should be parametized', () => {
            const paragraph = Randorem.paragraph({
                minSentences: 1,
                maxSentences: 1,
            })
            assert.ok(paragraph.split('. ').length === 1)
        })
        it('should be deeply parametized', () => {
            const paragraph = Randorem.paragraph({
                minSentences: 1,
                maxSentences: 1,
                minWords: 1,
                maxWords: 1,
                minLetters: 1,
                maxLetters: 1,
            })
            const sentences = paragraph.split('. ')
            assert.ok(sentences[0].length === 2) // final dot
        })
    })
})
