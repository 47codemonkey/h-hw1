import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from 'src/store/Cars/carsSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
