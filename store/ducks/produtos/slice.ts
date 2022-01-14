import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduto } from "services/api/produtos/types";

type TStatus = "pristine" | "loading" | "success" | "failure";

export type State = {
  produtos: TProduto[];
  syncStatus: TStatus;
};

const initialState: State = {
  produtos: [],
  syncStatus: "pristine",
};

const reducers = {
  sync: (state: State) => {
    state.syncStatus = "loading";
  },
  syncSuccess: (state: State, action: PayloadAction<TProduto[]>) => {
    state.produtos = action.payload;
    state.syncStatus = "success";
  },
  syncFailure: (state: State) => {
    state.syncStatus = "failure";
  },
};

const produtos = createSlice({
  name: "produtos",
  initialState,
  reducers,
});

export const actions = produtos.actions;
export const reducer = produtos.reducer;
