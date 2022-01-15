import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as reduxDispatch,
  useSelector as reduxSelector,
} from "react-redux";
import createSagaMiddleware from "redux-saga";
import { reducer, sagas } from "./ducks";
export { actions, selectors } from "./ducks";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
  devTools: true,
});

sagaMiddleware.run(sagas);

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export type TDucksNames = keyof TRootState

export const useDispatch = (): TDispatch =>
  reduxDispatch<TDispatch>();

export const useSelector = <R>(selector: (state: TRootState) => R) =>
  reduxSelector<TRootState, R>(selector);
