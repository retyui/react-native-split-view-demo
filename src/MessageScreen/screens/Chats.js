import * as React from 'react';
import {FlatList, Image, View, Text, TouchableOpacity} from 'react-native';
import {pushChatScreen} from '../navigation';
import {usersById, userIds} from './data';

const renderItem = ({item: userId}) => {
  const {avatar, name} = usersById[userId];
  const onPress = () => pushChatScreen({userId});

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderTopWidth: 1,
          marginBottom: 10,
          paddingTop: 10,
        }}>
        <Image
          source={{uri: avatar}}
          style={{width: 64, height: 64, borderRadius: 64}}
        />
        <Text style={{marginLeft: 10, fontSize: 20}}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const keyExtractor = id => id;
const Chats = () => (
  <FlatList
    data={userIds}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
  />
);

export default Chats;
