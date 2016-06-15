import test from 'tape';

import { put, call } from 'redux-saga/effects'
import { incrementAsync, decrementAsync, delay } from '../app/sagas'

test('incrementAsync Saga test', (t) => {
  const generator = incrementAsync()

  t.deepEqual(
    generator.next().value,
    call(delay, 2000),
    'incrementAsync Saga must call delay(2000)'
  )

  t.deepEqual(
    generator.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
  )

  t.deepEqual(
    generator.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )

  t.end()
});

test('decrementAsync Saga test', (t) => {
  const generator = decrementAsync()

  t.deepEqual(
    generator.next().value,
    call(delay, 2000),
    'decrementAsync Saga must call delay(2000)'
  )

  t.deepEqual(
    generator.next().value,
    put({type: 'DECREMENT'}),
    'decrementAsync Saga must dispatch an DECREMENT action'
  )

  t.deepEqual(
    generator.next(),
    { done: true, value: undefined },
    'decrementAsync Saga must be done'
  )

  t.end()
});
