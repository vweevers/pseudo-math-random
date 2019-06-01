'use strict'

const Benchmark = require('benchmark')
const randomPmr = require('.')('a seed')
const randomMrs = require('math-random-seed')('a seed')
const suite = new Benchmark.Suite()

console.log('node', process.version)

suite
  .add('pseudo-math-random', randomPmr)
  .add('math-random-seed', randomMrs)
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
