import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from '../components/UserDetails';
import colors from '../config/colors';

class Details extends Component {
  render() {
    return (
      <View style={{ backgroundColor: colors.background }}>
      <Header />
      </View>
      );
  }
}
export default Details;