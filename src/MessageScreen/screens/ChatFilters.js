import * as React from 'react';
import {Text} from 'react-native';
import AlignCenter from '../../components/AlignCenter';

const ChatFilters = () => (
  <AlignCenter>
    <Text
      style={{
        fontSize: 22,
        opacity: 0.6,
        padding: 10,
      }}>
      Some filters here
    </Text>
  </AlignCenter>
);

export default ChatFilters;
