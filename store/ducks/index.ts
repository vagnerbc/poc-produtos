import { all } from 'redux-saga/effects'
import * as produtosDuck from './produtos'

export type State = {
  produtos: produtosDuck.State
}

export const reducer = { produtos: produtosDuck.reducer }
export const actions = Object.freeze({ produtos: produtosDuck.actions })
export const selectors = Object.freeze({ produtos: produtosDuck.selectors })

export const sagas = function* () {
  yield all([...produtosDuck.sagas])
}
