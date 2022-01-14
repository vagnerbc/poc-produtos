import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "services/api/products/types";

type TStatus = "pristine" | "loading" | "success" | "failure"

export type State = {
  products: TProduct[];
  syncStatus: TStatus;
};

const initialState: State = {
  products: [],
  syncStatus: "pristine",
};

const reducers = {
  sync: (state:State) => {
    state.syncStatus = "loading";
  },
  syncSuccess: (state: State, action: PayloadAction<TProduct[]>) => {
    state.products = action.payload;
    state.syncStatus = "success";
  },
  syncFailure: (state: State) => {
    state.syncStatus = "failure";
  },
};

const products = createSlice({
  name: "products",
  initialState,
  reducers,
});

export const actions = products.actions;
export const reducer = products.reducer;
