/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TProduto } from 'services/api/produtos/types'

type TStatus = 'pristine' | 'loading' | 'success' | 'failure'

export type State = {
  produtos: TProduto[]
  syncStatus: TStatus
  deleteStatus: TStatus
  updateStatus: TStatus
  offsetCount: number
  loadingMap: string[]
  offset: number
  term: string
  countChanges: number
}

const initialState: State = {
  produtos: [],
  syncStatus: 'pristine',
  deleteStatus: 'pristine',
  updateStatus: 'pristine',
  loadingMap: [],
  offsetCount: 8,
  offset: 0,
  term: '',
  countChanges: 0
}

const reducers = {
  sync: (state: State) => {
    state.syncStatus = 'loading'
  },
  syncSuccess: (state: State, action: PayloadAction<TProduto[]>) => {
    state.produtos = action.payload
    state.syncStatus = 'success'
    state.countChanges = 0
  },
  syncFailure: (state: State) => {
    state.syncStatus = 'failure'
  },
  delete: (state: State, action: PayloadAction<string>) => {
    state.deleteStatus = 'loading'
    state.loadingMap.push(action.payload)
  },
  deleteSuccess: (state: State, action: PayloadAction<string>) => {
    state.produtos = state.produtos.filter(
      (produto) => produto.sku !== action.payload
    )
    state.deleteStatus = 'success'

    const newLoadingMap = [...state.loadingMap]
    newLoadingMap.splice(state.loadingMap.indexOf(action.payload), 1)
    state.loadingMap = newLoadingMap

    let countChanges = state.countChanges
    state.countChanges = ++countChanges
  },
  deleteFailure: (state: State) => {
    state.deleteStatus = 'failure'
  },
  update: (state: State, action: PayloadAction<TProduto>) => {
    state.updateStatus = 'loading'
    state.loadingMap.push(action.payload.sku)
  },
  updateSuccess: (state: State, action: PayloadAction<TProduto>) => {
    const produtos = [...state.produtos]
    const index = produtos.findIndex(
      (produto) => produto.sku === action.payload.sku
    )
    produtos.splice(index, 1, action.payload)
    state.produtos = produtos
    state.updateStatus = 'success'

    const newLoadingMap = [...state.loadingMap]
    newLoadingMap.splice(state.loadingMap.indexOf(action.payload.sku), 1)
    state.loadingMap = newLoadingMap

    let countChanges = state.countChanges
    state.countChanges = ++countChanges
  },
  updateFailure: (state: State) => {
    state.updateStatus = 'failure'
  },
  setOffsetCount: (state: State, action: PayloadAction<number>) => {
    state.offsetCount = action.payload
    state.offset = action.payload
  },
  setOffset: (state: State) => {
    state.offset += state.offsetCount
  },
  setTerm: (state: State, action: PayloadAction<string>) => {
    state.term = action.payload
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  countChanges: () => {},
  setCountChanges: (state: State, actions: PayloadAction<number>) => {
    state.countChanges = actions.payload
  }
}

const produtos = createSlice({
  name: 'produtos',
  initialState,
  reducers
})

export const actions = produtos.actions
export const reducer = produtos.reducer
