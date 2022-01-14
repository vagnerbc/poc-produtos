import {
  AnyAction,
  configureStore,
  Dispatch as DispatchType,
} from "@reduxjs/toolkit";
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

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useDispatch = (): DispatchType<AnyAction> =>
  reduxDispatch<Dispatch>();
export const useSelector = <R>(selector: (state: RootState) => R) =>
  reduxSelector<RootState, R>(selector);
