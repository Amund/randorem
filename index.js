const defaultOptions = {
    minSentences: 8,
    maxSentences: 15,
    minWords: 2,
    maxWords: 10,
    minLetters: 2,
    maxLetters: 10,
}

// based on letters frequencies from
// https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres#Dans_d'autres_langues
// for english, french and spanish languages
const consonants = [
    'bbbbb',
    'cccccccccccccc',
    'dddddddddddddddddd',
    'fffff',
    'ggggg',
    'hhhhhhhhhh',
    'jj',
    'k',
    'lllllllllllllllllll',
    'mmmmmmmmmmm',
    'nnnnnnnnnnnnnnnnnnnnnnnnnnn',
    'ppppppppp',
    'qqq',
    'rrrrrrrrrrrrrrrrrrrrrrrrrr',
    'ssssssssssssssssssssssssssssss',
    'tttttttttttttttttttttttttttt',
    'vvvvv',
    'www',
    'x',
    'z',
].join('')
const vowels = [
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'ooooooooooooooooooooooooooooo',
    'uuuuuuuuuuuuuuuu',
    'yyyy',
].join('')

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function word(options) {
    const { minLetters, maxLetters } = Object.assign(
        {},
        defaultOptions,
        options || {}
    )
    let text = ''
    const length = random(minLetters, maxLetters)

    for (let i = 0; i < length; i = i + 2) {
        text += consonants[random(0, consonants.length - 1)]
        text += vowels[random(0, vowels.length - 1)]
    }
    return text.substring(0, length)
}

function sentence(options) {
    const { minWords, maxWords, minLetters, maxLetters } = Object.assign(
        {},
        defaultOptions,
        options || {}
    )
    const length = random(minWords, maxWords)
    const words = Array.from({ length }, () => word({ minLetters, maxLetters }))
    words[0] = words[0][0].toUpperCase() + words[0].slice(1)
    return words.join(' ')
}

function paragraph(options) {
    const {
        minSentences,
        maxSentences,
        minWords,
        maxWords,
        minLetters,
        maxLetters,
    } = Object.assign({}, defaultOptions, options)
    const length = random(minSentences, maxSentences)
    const sentences = Array.from({ length }, () =>
        sentence({ minWords, maxWords, minLetters, maxLetters })
    )
    return sentences.join('. ') + '.'
}

const Randorem = {
    defaultOptions,
    word,
    sentence,
    paragraph,
}

export default Randorem
