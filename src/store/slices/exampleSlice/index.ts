import { createSlice } from "@reduxjs/toolkit";

import { EXAMPLE } from "@/constants";

import type { InitialState } from "./types";

const initialState: InitialState = {
  foo: "example",
  bar: "tecpatl",
};

const exampleSlice = createSlice({
  name: EXAMPLE,
  initialState,
  reducers: {
    _exampleSetFoo: (state, action) => {
      const { payload } = action;
      state.foo = payload;
    },
    _exampleSetBar: (state, action) => {
      const { payload } = action;
      state.bar = payload;
    },
  },
});

export const { _exampleSetFoo, _exampleSetBar } = exampleSlice.actions;
export const exampleReducer = exampleSlice.reducer;
