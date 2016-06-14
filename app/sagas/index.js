import { call, put, take, fork, cancel } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync() {
  yield call(delay, 2000)
  yield put({type: 'INCREMENT'})
}

function* increment() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* decrementAsync() {
  yield call(delay, 2000)
  yield put({type: 'DECREMENT'})
}

function* decrement() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export default function* root() {
  yield [
    increment(),
    decrement()
  ]
}