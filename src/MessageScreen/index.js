import * as React from 'react';

import SplitView from '../components/SplitView';
import DetailsMessageStack from './stacks/DetailsMessageStack';
import MasterMessageStack from './stacks/MasterMessageStack';
import useSystemBack from './useSystemBack';
import {useIsTablet} from '../IsTabletContext';

const MessageScreenSplit = () => {
  useSystemBack();

  return (
    <SplitView
      master={<MasterMessageStack />}
      detail={<DetailsMessageStack />}
    />
  );
};

const MessageScreen = () => {
  const [isTablet] = useIsTablet();

  if (isTablet) {
    return <MessageScreenSplit />;
  }

  return <MasterMessageStack />;
};

export default MessageScreen;
