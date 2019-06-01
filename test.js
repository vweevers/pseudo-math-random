'use strict'

const test = require('tape')
const pmr = require('.')

test('basic without seed', function (t) {
  const random = pmr()

  t.is(typeof random(), 'number')
  t.end()
})

test('with string seed', function (t) {
  t.plan(10)

  const random1 = pmr('a seed')
  const random2 = pmr('a seed')

  for (let i = 0; i < 10; i++) {
    t.is(random1(), random2())
  }
})

test('with buffer seed', function (t) {
  t.plan(10)

  const random1 = pmr(Buffer.from('a seed'))
  const random2 = pmr(Buffer.from('a seed'))

  for (let i = 0; i < 10; i++) {
    t.is(random1(), random2())
  }
})

test('string seed is treated equally to buffer seed', function (t) {
  t.plan(10)

  const random1 = pmr('a seed')
  const random2 = pmr(Buffer.from('a seed'))

  for (let i = 0; i < 10; i++) {
    t.is(random1(), random2())
  }
})

test('with zero-filled seed', function (t) {
  const random = pmr(Buffer.alloc(1))
  const results = new Set()

  for (let i = 0; i < 100; i++) {
    results.add(random())
  }

  t.ok(results.size > 1, String(results.size))
  t.end()
})
