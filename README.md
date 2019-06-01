# pseudo-math-random

> **Same [algorithm](https://v8.dev/blog/math-random) as [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) but with a custom seed.**  
> Useful for reproducible tests and benchmarks. Same API as [`math-random-seed`](https://github.com/mafintosh/math-random-seed) which uses [`crypto`](https://nodejs.org/api/crypto.html) (secure) while this uses [xorshift128+](https://github.com/AndreasMadsen/xorshift) (60x faster).

[![npm status](http://img.shields.io/npm/v/pseudo-math-random.svg)](https://www.npmjs.org/package/pseudo-math-random)
[![node](https://img.shields.io/node/v/pseudo-math-random.svg)](https://www.npmjs.org/package/pseudo-math-random)
[![Travis build status](https://img.shields.io/travis/vweevers/pseudo-math-random.svg?label=travis)](http://travis-ci.org/vweevers/pseudo-math-random)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```js
const pmr = require('pseudo-math-random')
const random = pmr('a seed')

console.log(random()) // Always 0.32911525012180043
console.log(random()) // Always 0.5563213847156248
```

## API

### `random = pmr([seed])`

Create a new random number generator. The `seed` argument must be a string or [Buffer](https://nodejs.org/api/buffer.html). It is hashed once to counter short or zero-filled seeds. If no seed is provided one will be generated.

### `num = random()`

Get a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive). Does _not_ provide cryptographically secure random numbers.

## Install

With [npm](https://npmjs.org) do:

```
npm install pseudo-math-random
```

## Benchmark

```
$ node benchmark.js
node v10.14.1
pseudo-math-random x 23,050,253 ops/sec ±0.24% (94 runs sampled)
math-random-seed x 377,674 ops/sec ±1.50% (86 runs sampled)
Fastest is pseudo-math-random
```

_NB. Speed isn't everything. Decide for yourself which properties you need._

## License

[MIT](LICENSE.md) © 2019-present Vincent Weevers
