import { createSlice } from "@reduxjs/toolkit";

import { INTERFACE } from "@/constants";

import type { InitialState } from "./index.types";

const initialState: InitialState = {
  height: 0,
  width: 0,
};

const interfaceSlice = createSlice({
  name: INTERFACE,
  initialState,
  reducers: {
    _interfaceSetWindowDimensions: (state, action) => {
      const { payload } = action;
      state.height = payload.height;
      state.width = payload.width;
    },
  },
});

export const { _interfaceSetWindowDimensions } = interfaceSlice.actions;
export const interfaceReducer = interfaceSlice.reducer;
