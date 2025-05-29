import { COLOR_DEF_DARK, MODAL_DEF } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

import type { InitialState } from "./index.types";

const initialState: InitialState = {
  visible: false,
  backgroundTheme: COLOR_DEF_DARK,
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
  },
});

export const { _modalSetVisible, _modalSetBackgroundColor } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
