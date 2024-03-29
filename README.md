# randorem

Randomly generate _lorem ipsum_ like words, sentences or paragraphs.

[Check out the demo](https://amund.github.io/randorem/)

## Install

```
$ npm i --save @amundsan/randorem
```

## Import

```js
import Randorem from '@amundsan/randorem'

// ...or, without node_modules pollution
import 'https://cdn.jsdelivr.net/npm/@amundsan/randorem'
```

## Usage

```js
Randorem.word({ minLetters: 2, maxLetters: 4 })
// or
Randorem.word() // default between 2 and 10 letters
// => 'siny'
```

```js
Randorem.sentence({ minWords: 2, maxWords: 4 })
// or
Randorem.sentence() // default between 2 and 10 words
// => 'Siny myd kujacobede'
```

```js
Randorem.paragraph({ minSentences: 2, maxSentences: 3 })
// or
Randorem.paragraph() // default between 8 and 15 sentences
// => 'Siny myd kujacobede faco fimymup. [...] Vylevo pete sinihotypu lebid hicatecupylo qokalyjitadixy.'
```
