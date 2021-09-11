import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import portrait_data from "../public/portrait_data";

const initialSlidesState = {
  slides: portrait_data,
  direction: 0,
  currentSlideIndex: 0,
  isPlaying: false,
};

const slidesSlice = createSlice({
  name: "slideshow",
  initialState: initialSlidesState,
  reducers: {
    setCurrentSlide: (state, action) => {
      state.currentSlideIndex = action.payload;
    },

    paginate: (state, action) => {
      const direction = action.payload;

      if (direction > 0) {
        state.currentSlideIndex =
          (state.currentSlideIndex + 1) % state.slides.length;
      } else {
        state.currentSlideIndex =
          (state.currentSlideIndex - 1 + state.slides.length) %
          state.slides.length;
      }
      state.direction = direction;
    },

    toggleIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    resetSlider: (state) => {
      (state.currentSlideIndex = 0),
        (state.direction = 0),
        (state.isPlaying = false);
    },
  },
});

export const numberOfSlides = (state) => state.slideshow.slides.length;
export const currentSlideIndex = (state) => state.slideshow.currentSlideIndex;
export const currentSlide = (state) =>
  state.slideshow.slides[state.slideshow.currentSlideIndex];

export const slidesDirection = (state) => state.slideshow.direction;
export const isPlaying = (state) => state.slideshow.isPlaying;

export const { paginate, setCurrentSlide, toggleIsPlaying, resetSlider } =
  slidesSlice.actions;
export default slidesSlice.reducer;
