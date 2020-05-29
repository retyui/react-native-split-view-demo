import * as React from 'react';
import {Text, Button} from 'react-native';
import AlignCenter from '../../components/AlignCenter';

const ChatSettings = () => (
  <AlignCenter>
    <Text
      style={{
        fontSize: 22,
        opacity: 0.6,
        padding: 10,
      }}>
      Chat settings
    </Text>
    <Button title="Disable notifications" />
    <Button title="Ban this user" />
  </AlignCenter>
);

export default ChatSettings;
