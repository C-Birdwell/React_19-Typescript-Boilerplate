import { MODAL_DEF } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

import type { InitialState } from "./index.types";

const initialState: InitialState = {
  visible: false,
  backgroundTheme: "",
  modalRoute: "",
};

const modalSlice = createSlice({
  name: MODAL_DEF,
  initialState,
  reducers: {
    _modalSetVisible: (state, action) => {
      const { payload } = action;
      state.visible = payload;
    },
    _modalSetBackgroundColor: (state, action) => {
      const { payload } = action;
      state.backgroundTheme = payload;
    },
    _modalSetModalRoute: (state, action) => {
      const { payload } = action;
      state.modalRoute = payload;
    },

    _modalReset: () => initialState,
  },
});

export const {
  _modalSetVisible,
  _modalSetBackgroundColor,
  _modalSetModalRoute,
  _modalReset,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
