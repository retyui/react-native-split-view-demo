import * as React from 'react';
import {Text} from 'react-native';
import AlignCenter from '../../components/AlignCenter';

const ChooseChat = () => (
  <AlignCenter>
    <Text
      style={{
        fontSize: 22,
        opacity: 0.6,
        padding: 10,
      }}>
      Please choose chat on the left panel!
    </Text>
  </AlignCenter>
);

export default ChooseChat;
