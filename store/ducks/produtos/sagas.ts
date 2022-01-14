import { call, put, takeLatest } from "redux-saga/effects";
import { TProduto } from "services/api/produtos/types";
import { produtoUseCase } from "services/use-cases";
import { actions } from "./slice";

export const sagas = [takeLatest(actions.sync.type, syncSaga)];

function* syncSaga() {
  try {
    const produtos: TProduto[] = yield call(() => produtoUseCase.sync());
    yield put(actions.syncSuccess(produtos));
  } catch (error) {
    console.warn(error);
    yield put(actions.syncFailure());
  }
}
