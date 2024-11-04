import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    filtersContactAction: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { filtersContactAction } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
