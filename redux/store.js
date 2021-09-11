import { configureStore } from "@reduxjs/toolkit";
import slideshowReducer from "./slideshowReducer";
import lightboxReducer from "./lightboxReducer";

const store = configureStore({
  reducer: {
    slideshow: slideshowReducer,
    lightbox: lightboxReducer,
  },
});

export default store;
