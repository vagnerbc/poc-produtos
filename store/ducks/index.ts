import { all } from "redux-saga/effects";
import * as productsDuck from "./products";

export type State = {
  products: productsDuck.State;
};

export const reducer = { products: productsDuck.reducer };
export const actions = Object.freeze({ products: productsDuck.actions });
export const selectors = Object.freeze({ products: productsDuck.actions });

export const sagas = function* () {
  yield all([...productsDuck.sagas]);
};
