import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const MainScreenOptions = {headerShown: false};

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={MainScreenOptions}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
