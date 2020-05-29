import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Chat from '../screens/Chat';
import ChatSettings from '../screens/ChatSettings';
import Chats from '../screens/Chats';
import ChatFilters from '../screens/ChatFilters';
import {
  CHAT_SETTINGS_SCREEN,
  CHATS_SCREEN,
  CHAT_SCREEN,
  CHAT_FILTER_SCREEN,
} from '../consts';
import {chatScreenOptions, pushChatsFilters} from '../navigation';
import {Button} from 'react-native';
import withSystemBackFix from '../withSystemBackFix';

const MasterStack = createStackNavigator();

const screens = [
  {
    name: CHATS_SCREEN,
    component: withSystemBackFix(Chats),
    options: {
      headerRight: () => <Button onPress={pushChatsFilters} title="Filters" />,
    },
  },
  {name: CHAT_SCREEN, component: withSystemBackFix(Chat), ...chatScreenOptions},
  {name: CHAT_SETTINGS_SCREEN, component: withSystemBackFix(ChatSettings)},
  {name: CHAT_FILTER_SCREEN, component: withSystemBackFix(ChatFilters)},
];

const MasterMessageStack = () => (
  <MasterStack.Navigator initialRouteName={CHATS_SCREEN}>
    {screens.map(props => (
      <MasterStack.Screen key={props.name} {...props} />
    ))}
  </MasterStack.Navigator>
);

export default MasterMessageStack;
