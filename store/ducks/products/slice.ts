import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCollection } from "services/repository/products/product-repository";

export type State = {
  products: ProductCollection[];
  status: "pristine" | "fetching" | "success" | "failure";
};

const initialState: State = {
  products: [],
  status: "pristine",
};

export type FetchProducts = ProductCollection[];
const reducers = {
  fetch: (state: State) => {
    state.status = "fetching";
  },
  fetchSuccess: (state: State, action: PayloadAction<FetchProducts>) => {
    state.products = action.payload;
    state.status = "success";
  },
  fetchFailure: (state: State) => {
    state.status = "failure";
  },
};

const products = createSlice({
  name: "products",
  initialState,
  reducers,
});

export const actions = products.actions;
export const reducer = products.reducer;
