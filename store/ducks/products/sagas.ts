import { actions } from "./slice";
import { takeLatest, put, call } from "redux-saga/effects";
import { productUseCase } from "services/use-cases";
import { ProductCollection } from "services/repository/products/product-repository";

export const sagas = [takeLatest(actions.fetch.type, fetchSaga)];

function* fetchSaga() {
  try {
    const products: ProductCollection[] = yield call(() =>
      productUseCase.getAll()
    );
    yield put(actions.fetchSuccess(products));
  } catch (error) {
    console.warn(error);
    yield put(actions.fetchFailure());
  }
}
