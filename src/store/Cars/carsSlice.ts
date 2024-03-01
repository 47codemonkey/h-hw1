import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { CarsStateType } from 'src/types/cars';

const initialState: CarsStateType = {
  openSpecs: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    toggleCars(state, action: PayloadAction<number>) {
      state.openSpecs = state.openSpecs === action.payload ? null : action.payload;
    },
  },
});

export const { toggleCars } = carsSlice.actions;

export const carReducer = carsSlice.reducer;
