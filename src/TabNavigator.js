import * as React from 'react';
import {Text, Image, Switch} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AlignCenter from './components/AlignCenter';
import MessageScreen from './MessageScreen';
import {useIsTablet} from './IsTabletContext';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const [value, setValue] = useIsTablet();

  return (
    <AlignCenter>
      <Text>Home</Text>
      <Text>isTable: </Text>
      <Switch value={value} onValueChange={setValue} />
    </AlignCenter>
  );
};

const ProfileScreen = () => (
  <AlignCenter>
    <Text>Profile</Text>
  </AlignCenter>
);

const iconMap = {
  Home: require('./assets/home.png'),
  Messages: require('./assets/message.png'),
  Profile: require('./assets/user.png'),
};

const navigatorProps = {
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  },
  screenOptions: ({route}) => ({
    tabBarIcon: ({size, focused}) => (
      <Image
        source={iconMap[route.name]}
        style={{width: size, height: size, opacity: focused ? 1 : 0.5}}
      />
    ),
  }),
};

function TabNavigator() {
  return (
    <Tab.Navigator {...navigatorProps}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
