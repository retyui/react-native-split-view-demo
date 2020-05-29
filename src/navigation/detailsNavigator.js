import Navigator from './Navigator';

export const {
  isMounted: isDetailsNavigatorMounted,
  push: detailsPush,
  navigate: detailsNavigate,
  setNavigator: setDetailsNavigator,
} = new Navigator();
