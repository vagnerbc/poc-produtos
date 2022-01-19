import { createSelector } from '@reduxjs/toolkit'
import { State } from '..'

const getRoot = (state: State) => {
  return state.produtos
}

export const getProdutos = createSelector([getRoot], (state) => {
  return state.produtos
})

export const getFilteredProdutos = createSelector(
  [getRoot, getProdutos],
  (state, produtos) => {
    return produtos.filter((produto) =>
      produto.name.toLowerCase().includes(state.term.toLowerCase())
    )
  }
)

export const getPaginatedProdutos = createSelector(
  [getRoot, getFilteredProdutos],
  (state, produtos) => {
    return produtos.slice(0, state.offset)
  }
)

export const getHasNextPage = createSelector(
  [getRoot, getFilteredProdutos],
  (state, produtos) => {
    return produtos.length > state.offset
  }
)
