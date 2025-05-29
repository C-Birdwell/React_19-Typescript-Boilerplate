import { configureStore } from "@reduxjs/toolkit";

import { EXAMPLE_DEF, MODAL_DEF } from "@/constants";
import { exampleReducer, modalReducer } from "./slices";

export const store = configureStore({
  reducer: {
    [EXAMPLE_DEF]: exampleReducer,
    [MODAL_DEF]: modalReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer
  },
  devTools: true,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type RootState = ReturnType<typeof store.getState>;
