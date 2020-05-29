import * as React from 'react';
import useSystemBack from './useSystemBack';
import {Platform} from 'react-native';

const withSystemBackFix = Comp =>
  Platform.select({
    android: React.forwardRef((props, ref) => {
      useSystemBack();

      return <Comp ref={ref} {...props} />;
    }),
    default: Comp,
  });

export default withSystemBackFix;
