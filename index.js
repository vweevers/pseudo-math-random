'use strict'

const XorShift = require('xorshift').constructor
const crypto = require('crypto')

function pmr (seed) {
  const xorshift = new XorShift(from(seed))
  return xorshift.random.bind(xorshift)
}

// Make a seed for xorshift from a (short) string or buffer.
function from (seed) {
  let buf

  if (seed == null) {
    buf = crypto.randomBytes(16)
  } else if (!seed.length) {
    throw new RangeError('Seed length must be > 0')
  } else {
    buf = crypto.createHash('sha256').update(seed).digest()
  }

  return [
    buf.readUInt32BE(0),
    buf.readUInt32BE(4),
    buf.readUInt32BE(8),
    buf.readUInt32BE(12)
  ]
}

module.exports = pmr
