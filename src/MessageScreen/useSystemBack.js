import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {BackHandler} from 'react-native';
import {useIsTablet} from '../IsTabletContext';

const useSystemBack = () => {
  const [isTablet] = useIsTablet();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!isTablet) {
      return;
    }

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (navigation == null) {
          return false;
        }

        if (navigation.canGoBack() && navigation.isFocused()) {
          navigation.goBack();

          return true;
        }

        return false;
      },
    );

    return () => subscription.remove();
  }, [navigation, isTablet]);
};

export default useSystemBack;
