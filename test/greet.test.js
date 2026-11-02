import { test } from 'node:test'
import assert from 'node:assert/strict'
import { farewell, greet } from '../src/greet.js'

test('greets by name', () => {
  assert.equal(greet('world'), 'Hello, world!')
})

test('says farewell by name', () => {
  assert.equal(farewell('world'), 'Goodbye, world!')
})
