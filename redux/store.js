import { configureStore } from "@reduxjs/toolkit";
import slideshowReducer from "./slideshowReducer";

const store = configureStore({
  reducer: {
    slideshow: slideshowReducer,
  },
});

export default store;
