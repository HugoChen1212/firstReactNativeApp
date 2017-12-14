import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({ contact, onPress}) => {
  const firstName = capitalizeFirstLetter(contact.name.first)
  const lastName =  capitalizeFirstLetter(contact.name.last)
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
      <Text> {firstName} {lastName} </Text>
      <Text> {contact.email}</Text>
      </View>
    </View>


    </TouchableHighlight>
    )
};

export default ListItem;