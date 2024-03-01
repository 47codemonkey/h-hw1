import { RootState } from 'src/store/index';

export const selectCarsItem = (state: RootState) => state.cars.openSpecs;
