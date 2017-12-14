import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';

import colors from '../../config/colors';

const ListItem = ({ contact, onPress}) => {
  return (
    <TouchableHighlight
    onPress={onPress}
    >
    <View style={styles.row}>
      <Image
        source={ { uri: contact.picture.thumbnail }}
        style={ styles.avatar}
      />
      <View>
      <Text> {contact.name.first} {contact.name.last} </Text>
      <Text> {contact.email}</Text>
      </View>
    </View>


    </TouchableHighlight>
    )
};

export default ListItem;