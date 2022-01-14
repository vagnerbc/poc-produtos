import { call, put, takeLatest } from "redux-saga/effects";
import { TProduct } from 'services/api/products/types';
import { productUseCase } from "services/use-cases";
import { actions } from "./slice";

export const sagas = [
  takeLatest(actions.sync.type, syncSaga)
];

function* syncSaga(){
  try {
    const products:TProduct[] = yield call(() => productUseCase.sync());
    yield put(actions.syncSuccess(products));
  } catch (error) {
    console.warn(error);
    yield put(actions.syncFailure());
  }
}
