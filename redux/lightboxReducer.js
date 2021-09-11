import { createSlice } from "@reduxjs/toolkit";
const lightboxSlice = createSlice({
  name: "lightbox",
  initialState: { isOpen: false },
  reducers: {
    openLightBox: (state) => {
      state.isOpen = true;
    },
    closeLightBox: (state) => {
      state.isOpen = false;
    },
  },
});
export const isOpen = (state) => state.lightbox.isOpen;
export const { openLightBox, closeLightBox } = lightboxSlice.actions;
export default lightboxSlice.reducer;
