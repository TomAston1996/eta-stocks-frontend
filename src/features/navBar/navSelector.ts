import { useAppSelector } from '../../app/hook';
import { RootState } from '../../app/store';

export const selectNav = (state: RootState) => state.nav;

export const useNavState = () => useAppSelector(selectNav);
