import { configureStore } from "@reduxjs/toolkit";

import { EXAMPLE } from "@/constants";
import { exampleReducer } from "./slices";

export const store = configureStore({
  reducer: {
    [EXAMPLE]: exampleReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer
  },
  devTools: true,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type RootState = ReturnType<typeof store.getState>;
