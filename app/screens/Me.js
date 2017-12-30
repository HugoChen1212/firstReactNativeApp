import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Actions, Info } from '../components/UserDetails';
import { me } from '../config/data';
import colors from '../config/colors';

class Me extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.background}}>
      <Header {...me} />
      <Actions {...me} />
      <Info {...me} />
      </ScrollView>
      );
  }
}
export default Me;