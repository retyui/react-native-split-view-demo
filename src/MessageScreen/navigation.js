import {
  isDetailsNavigatorMounted,
  detailsPush,
  detailsNavigate,
} from '../navigation/detailsNavigator';
import {push} from '../navigation/masterNavigator';

import {CHAT_SCREEN, CHAT_SETTINGS_SCREEN, CHAT_FILTER_SCREEN} from './consts';
import {Button} from 'react-native';
import * as React from 'react';

const pushChatSettingsScreen = ({userId}) => {
  const args = [CHAT_SETTINGS_SCREEN, {userId}];

  if (isDetailsNavigatorMounted()) {
    return detailsPush(...args);
  }

  return push(...args);
};

export const pushChatsFilters = () => push(CHAT_FILTER_SCREEN);

export const pushChatScreen = ({userId}) => {
  const args = [CHAT_SCREEN, {userId}];

  if (isDetailsNavigatorMounted()) {
    return detailsNavigate(...args);
  }

  return push(...args);
};

export const chatScreenOptions = {
  options: ({route}) => ({
    headerRight: () => {
      const userId = route?.params?.userId;

      if (userId) {
        return (
          <Button
            onPress={() => pushChatSettingsScreen({userId})}
            title="Settings"
          />
        );
      }

      return null;
    },
  }),
};
