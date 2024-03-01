import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'src/store/index';
import { selectCarsItem } from 'src/store/Cars/carsSelectors';
import { toggleCars } from 'src/store/Cars/carsSlice';

type UseCarsHook = {
  openSpecs: number | null;
  handleClick: (id: number) => void;
};

export const useCarSpecs = (): UseCarsHook => {
  const openSpecs = useSelector((state: RootState) => selectCarsItem(state));
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (id: number) => {
    dispatch(toggleCars(id));
  };

  return { openSpecs, handleClick };
};
