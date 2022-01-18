import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'
import { TProduto } from 'services/api/produtos/types'
import { produtoUseCase } from 'services/use-cases'
import { actions } from './slice'

export const sagas = [
  takeLatest(actions.sync.type, syncSaga),
  takeLatest(actions.delete.type, deleteSaga),
  takeLatest(actions.update.type, updateSaga)
]

function* syncSaga() {
  try {
    const produtos: TProduto[] = yield call(() => produtoUseCase.sync())
    yield put(actions.syncSuccess(produtos))
  } catch (error) {
    console.warn(error)
    yield put(actions.syncFailure())
  }
}

function* deleteSaga(action: PayloadAction<string>) {
  try {
    yield call(() => produtoUseCase.delete(action.payload))
    yield put(actions.deleteSuccess(action.payload))
  } catch (error) {
    console.warn(error)
    yield put(actions.deleteFailure())
  }
}

function* updateSaga(action: PayloadAction<TProduto>) {
  try {
    yield call(() => produtoUseCase.update(action.payload))
    yield put(actions.updateSuccess(action.payload))
  } catch (error) {
    console.warn(error)
    yield put(actions.updateFailure())
  }
}
