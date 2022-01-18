import { createSelector } from '@reduxjs/toolkit'
import { State } from '..'

const getRoot = (state: State) => {
  return state.produtos
}

export const getProdutos = createSelector([getRoot], (state) => {
  return state.produtos
    .filter((produto) =>
      produto.name.toLowerCase().includes(state.term.toLowerCase())
    )
    .slice(0, state.offset)
})
