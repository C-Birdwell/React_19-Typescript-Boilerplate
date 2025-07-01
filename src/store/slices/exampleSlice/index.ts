import { createSlice } from "@reduxjs/toolkit";

import { EXAMPLE } from "@/constants";

import type { InitialState } from "./index.types";

const initialState: InitialState = {
  firstWord: "Foo",
  secondWord: "Bar",
  firstNumber: 0,
  secondNumber: 0,
  phoneNumber: "",
  phoneValue: "",
};

const exampleSlice = createSlice({
  name: EXAMPLE,
  initialState,
  reducers: {
    _exampleSetFirstWord: (state, action) => {
      const { payload } = action;
      state.firstWord = payload;
    },
    _exampleSetSecondWord: (state, action) => {
      const { payload } = action;
      state.secondWord = payload;
    },
    _exampleSetFirstNumber: (state, action) => {
      const { payload } = action;
      state.firstNumber = parseInt(payload);
    },
    _exampleSetSecondNumber: (state, action) => {
      const { payload } = action;
      state.secondNumber = parseInt(payload);
    },
    _exampleSetPhoneNumber: (state, action) => {
      const { payload } = action;
      state.phoneNumber = payload;
      state.phoneValue = payload.replace(/\D/g, ""); // Clean non-digit characters
    },
  },
});

export const {
  _exampleSetFirstWord,
  _exampleSetSecondWord,
  _exampleSetFirstNumber,
  _exampleSetSecondNumber,
  _exampleSetPhoneNumber,
} = exampleSlice.actions;
export const exampleReducer = exampleSlice.reducer;
