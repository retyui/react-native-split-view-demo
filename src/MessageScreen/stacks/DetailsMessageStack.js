import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {setDetailsNavigator} from '../../navigation/detailsNavigator';

import Chat from '../screens/Chat';
import ChatSettings from '../screens/ChatSettings';
import ChooseChat from '../screens/ChooseChat';
import {CHAT_SCREEN, CHAT_SETTINGS_SCREEN, CHOOSE_CHAT_SCREEN} from '../consts';
import {chatScreenOptions} from '../navigation';
import withSystemBackFix from '../withSystemBackFix';

const DetailsStack = createStackNavigator();

const screenProps = [
  {
    options: {title: ''},
    name: CHOOSE_CHAT_SCREEN,
    component: withSystemBackFix(ChooseChat),
  },
  {
    name: CHAT_SCREEN,
    component: withSystemBackFix(Chat),
    ...chatScreenOptions,
  },
  {
    name: CHAT_SETTINGS_SCREEN,
    component: withSystemBackFix(ChatSettings),
  },
];

const DetailsMessageStack = () => (
  <NavigationContainer
    /*
     * Ignore exception when containers are nested within another
     * See: https://github.com/react-navigation/react-navigation/commit/d4072e7d885222bc14f33734008f2bd10ff78bc4
     * */
    independent
    ref={setDetailsNavigator}>
    <DetailsStack.Navigator initialRouteName={CHOOSE_CHAT_SCREEN}>
      {screenProps.map(props => (
        <DetailsStack.Screen key={props.name} {...props} />
      ))}
    </DetailsStack.Navigator>
  </NavigationContainer>
);

export default DetailsMessageStack;
