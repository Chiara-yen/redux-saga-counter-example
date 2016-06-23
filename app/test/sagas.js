import expect from 'expect';

import { put, call } from 'redux-saga/effects'
import { incrementAsync, decrementAsync, delay } from '../sagas'

const shouldEqual = (actual, expected, msg) => {
	return it(msg, () => expect(actual).toEqual(expected));
}

describe('incrementAsync Saga test', () => {
	const generator = incrementAsync()

	shouldEqual(
		generator.next().value,
		call(delay, 2000),
		'incrementAsync Saga must call delay(2000)'
	)

	shouldEqual(
		generator.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
	)

	shouldEqual(
    generator.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )
})

describe('decrementAsync Saga test', () => {
	const generator = decrementAsync()

	shouldEqual(
    generator.next().value,
    call(delay, 2000),
    'decrementAsync Saga must call delay(2000)'
  )

  shouldEqual(
    generator.next().value,
    put({type: 'DECREMENT'}),
    'decrementAsync Saga must dispatch an DECREMENT action'
  )

  shouldEqual(
    generator.next(),
    { done: true, value: undefined },
    'decrementAsync Saga must be done'
  )
})