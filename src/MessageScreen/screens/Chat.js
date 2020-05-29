import * as React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {usersById} from './data';

const renderItem = ({item: {body}}) => (
  <Text
    style={{
      borderBottomWidth: 1,
      padding: 10,
    }}>
    {body}
  </Text>
);
const keyExtractor = ({id}) => id;

const Chat = ({route}) => {
  const userId = route?.params?.userId;
  const {messages = [], avatar, name, phone, email} = usersById[userId];

  const ListHeaderComponent = () => (
    <>
      <View
        style={{
          alignItems: 'center',
          borderBottomWidth: 1,
          marginBottom: 20,
          paddingTop: 20,
        }}>
        <Image
          source={{uri: avatar}}
          style={{width: 128, height: 128, borderRadius: 64}}
        />
        <Text style={{fontSize: 20, marginBottom: 10}}>{name}</Text>
        <Text style={{fontSize: 16}}>Phone: {phone}</Text>
        <Text style={{fontSize: 16}}>E-mail: {email}</Text>
      </View>
      <Text style={{fontSize: 20, paddingLeft: 10}}>Messages: </Text>
    </>
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={messages}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default Chat;
