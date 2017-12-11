import React from 'react';
import { View, Text } from 'react-native';

const ListItem = ({ contact, onPress}) => {
  return (
    <View>
      <Text> {contact.email} </Text>
      </View>
    )
};

export default ListItem;