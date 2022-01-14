import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCollection } from "services/repository/products/product-repository";

export type State = {
  products: ProductCollection[];
};

const initialState: State = {
  products: [],
};

type FetchProducts = ProductCollection[];
const reducers = {
  fetchProducts: (state: State, action: PayloadAction<FetchProducts>) => {
    state.products = action.payload;
  },
};

const products = createSlice({
  name: "products",
  initialState,
  reducers,
});

export const actions = products.actions;

export default products.reducer;
