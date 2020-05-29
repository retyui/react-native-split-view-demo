import * as React from 'react';
import {View} from 'react-native';

const rootStyles = {flex: 1, justifyContent: 'center', alignItems: 'center'};

function AlignCenter({children}) {
  return <View style={rootStyles}>{children}</View>;
}

export default AlignCenter;
