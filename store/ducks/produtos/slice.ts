import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduto } from "services/api/produtos/types";

type TStatus = "pristine" | "loading" | "success" | "failure";

const offset = 8;

export type State = {
  produtos: TProduto[];
  syncStatus: TStatus;
  offset: number;
  term: string;
};

const initialState: State = {
  produtos: [],
  syncStatus: "pristine",
  offset,
  term: '',
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
  setOffset: (state: State) => {
    state.offset += offset;
  },
  setTerm: (state: State, action: PayloadAction<string>) => {
    state.term = action.payload;
  }
};

const produtos = createSlice({
  name: "produtos",
  initialState,
  reducers,
});

export const actions = produtos.actions;
export const reducer = produtos.reducer;
