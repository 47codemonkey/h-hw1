import { CarSpecs } from 'src/components/CarSpecs/CarSpecs';

import cars from 'src/data/cars.json';

export const Cars = () => {
  return <CarSpecs specs={cars} />;
};
