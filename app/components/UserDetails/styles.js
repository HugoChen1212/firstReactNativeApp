import { StyleSheet, Dimensions } from 'react-native';

const window =Dimensions.get('window');
export default StyleSheet.create({
  image: {
    width: window.width / 2,
    height: window.width / 2,
    borderRadius: window.width /4,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  }
});