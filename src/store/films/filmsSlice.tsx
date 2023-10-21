// redux/films/filmsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filmsSlice = createSlice({
  name: "films",
  initialState: {
    selectedFilmId: null,
  },
  reducers: {
    selectFilm: (state, action) => {
      state.selectedFilmId = action.payload;
    },
  },
});

export const { selectFilm } = filmsSlice.actions;
export default filmsSlice.reducer;
